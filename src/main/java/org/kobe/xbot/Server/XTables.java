package org.kobe.xbot.Server;

import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

public class XTables {
    private static XTables instance = null;
    private final Gson gson = new Gson();
    private final Logger logger = Logger.getLogger(XTables.class.getName());
    private final Set<ClientHandler> clients = new HashSet<>();
    private final XTablesData<String> table = new XTablesData<>();
    private ServerSocket serverSocket;
    private final int port;

    public static XTables startInstance(int PORT) {
        if (instance == null) {
            instance = new XTables(PORT);
        }
        return instance;
    }

    private XTables(int PORT) {
        this.port = PORT;
        startServer();
    }

    private void startServer() {
        try {
            serverSocket = new ServerSocket(port);
            logger.info("Server started. Listening on port " + port + "...");

            while (!serverSocket.isClosed()) {
                Socket clientSocket = serverSocket.accept();
                logger.info(String.format("Client connected: %1$s:%2$s", clientSocket.getInetAddress(), clientSocket.getPort()));
                ClientHandler clientHandler = new ClientHandler(clientSocket);
                clients.add(clientHandler);
                clientHandler.start();
            }
        } catch (IOException e) {
            logger.severe("Error occurred: " + e.getMessage());
            if (!serverSocket.isClosed()) {
                try {
                    serverSocket.close();
                } catch (IOException ex) {
                    logger.severe("Error closing server socket: " + ex.getMessage());
                }
            }
        }
    }

    public void rebootServer() {
        try {
            logger.info("Closing connections to all clients...");
            for (ClientHandler client : clients) {
                client.clientSocket.close();
            }
            clients.clear();
            logger.info("Closing socket server...");
            if (serverSocket != null && !serverSocket.isClosed()) {
                serverSocket.close();
            }
            table.delete("");
            logger.info("Starting socket server in 3 seconds...");
            Executors.newSingleThreadScheduledExecutor().schedule(() -> {
                logger.info("Starting server...");
                startServer();
            }, 3, TimeUnit.SECONDS);
        } catch (IOException e) {
            logger.severe("Error occurred during server reboot: " + e.getMessage());
        }
    }

    private void notifyClients(String key, String value) {
        for (ClientHandler client : clients.stream().filter(clientHandler -> clientHandler.getUpdateEvents().contains(key)).toList()) {
            client.sendUpdate(key, value);
        }
    }

    // Thread to handle each client connection
    private class ClientHandler extends Thread {
        private final Socket clientSocket;
        private final PrintWriter out;
        private final Set<String> updateEvents = new HashSet<>();
        private int totalMessages = 0;

        public ClientHandler(Socket socket) throws IOException {
            this.clientSocket = socket;
            this.out = new PrintWriter(clientSocket.getOutputStream(), true);
        }

        public Set<String> getUpdateEvents() {
            return updateEvents;
        }

        @Override
        public void run() {
            ScheduledFuture<?> messages_log = Executors.newSingleThreadScheduledExecutor(r -> {
                Thread thread = new Thread(r);
                thread.setDaemon(true);
                return thread;
            }).scheduleAtFixedRate(() -> {
                if (totalMessages != 0) {
                    logger.info("Received " + totalMessages + " messages from IP " + clientSocket.getInetAddress() + ":" + clientSocket.getPort() + " in the last minute.");
                    totalMessages = 0;
                }
            }, 1, 60, TimeUnit.SECONDS);

            try {
                PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                String inputLine;
                while ((inputLine = in.readLine()) != null) {
                    RequestInfo requestInfo = new RequestInfo(inputLine);
                    totalMessages++;
                    if (requestInfo.getTokens().length == 2 && requestInfo.getMethod().equals(MethodType.GET)) {
                        String key = requestInfo.getTokens()[1];
                        String result = gson.toJson(table.get(key));
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.GET, result);
                        out.println(responseInfo.parsed());
                        out.flush();
                    } else if (requestInfo.getTokens().length == 2 && requestInfo.getMethod().equals(MethodType.GET_TABLES)) {
                        String key = requestInfo.getTokens()[1];
                        String result = gson.toJson(table.getTables(key));
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.GET_TABLES, result);
                        out.println(responseInfo.parsed());
                        out.flush();
                    } else if (requestInfo.getTokens().length >= 3 && requestInfo.getMethod().equals(MethodType.PUT)) {
                        String key = requestInfo.getTokens()[1];
                        String value = String.join(" ", Arrays.copyOfRange(requestInfo.getTokens(), 2, requestInfo.getTokens().length));
                        if (value.equals(table.get(key))) {
                            ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.PUT, "OK");
                            out.println(responseInfo.parsed());
                            out.flush();
                        } else {
                            boolean response = table.put(key, value);
                            ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.PUT, response ? "OK" : "FAIL");
                            out.println(responseInfo.parsed());
                            out.flush();
                            if (response) {
                                notifyClients(key, value);
                            }
                        }
                    } else if (requestInfo.getTokens().length == 2 && requestInfo.getMethod().equals(MethodType.DELETE)) {
                        String key = requestInfo.getTokens()[1];
                        boolean response = table.delete(key);
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.DELETE, response ? "OK" : "FAIL");
                        out.println(responseInfo.parsed());
                        out.flush();
                    } else if (requestInfo.getTokens().length == 2 && requestInfo.getMethod().equals(MethodType.SUBSCRIBE_UPDATE)) {
                        String key = requestInfo.getTokens()[1];
                        boolean success = updateEvents.add(key);
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.SUBSCRIBE_UPDATE, success ? "OK" : "FAIL");
                        out.println(responseInfo.parsed());
                        out.flush();
                    } else if (requestInfo.getTokens().length == 2 && requestInfo.getMethod().equals(MethodType.UNSUBSCRIBE_UPDATE)) {
                        String key = requestInfo.getTokens()[1];
                        boolean success = updateEvents.remove(key);
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.UNSUBSCRIBE_UPDATE, success ? "OK" : "FAIL");
                        out.println(responseInfo.parsed());
                        out.flush();
                    } else if (requestInfo.getTokens().length == 1 && requestInfo.getMethod().equals(MethodType.PING)) {
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.PING, ResponseStatus.OK.name() + " " + System.nanoTime());
                        out.println(responseInfo.parsed());
                        out.flush();
                    } else if (requestInfo.getTokens().length == 1 && requestInfo.getMethod().equals(MethodType.GET_TABLES)) {
                        String result = gson.toJson(table.getTables(""));
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.GET_TABLES, result);
                        out.println(responseInfo.parsed());
                        out.flush();
                    } else if (requestInfo.getTokens().length == 1 && requestInfo.getMethod().equals(MethodType.GET_RAW_JSON)) {
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.GET_RAW_JSON, table.toJSON());
                        out.println(responseInfo.parsed());
                        out.flush();
                    } else if (requestInfo.getTokens().length == 1 && requestInfo.getMethod().equals(MethodType.REBOOT_SERVER)) {
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.REBOOT_SERVER, ResponseStatus.OK.name());
                        out.println(responseInfo.parsed());
                        out.flush();
                        rebootServer();
                    } else {
                        // Invalid command
                        ResponseInfo responseInfo = new ResponseInfo(requestInfo.getID(), MethodType.UNKNOWN);
                        out.println(responseInfo.parsed());
                        out.flush();
                    }
                }
                // Close the streams and socket when done
                out.close();
                in.close();
                clientSocket.close();
                messages_log.cancel(true);
            } catch (IOException e) {
                String message = e.getMessage();
                if (message.contains("Connection reset")) {
                    logger.info(String.format("Client disconnected: %1$s:%2$s", clientSocket.getInetAddress(), clientSocket.getPort()));
                    messages_log.cancel(true);
                } else {
                    logger.severe("Error occurred: " + e.getMessage());
                    messages_log.cancel(true);
                }
            }
        }

        public void sendUpdate(String key, String value) {
            out.println(new ResponseInfo(null, MethodType.UPDATE, key + " " + value).parsed());
        }
    }
}
