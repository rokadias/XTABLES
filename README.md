# XTablesClient Documentation

`XTablesClient` is part of the `org.kobe.xbot.Client` package, providing an interface to interact with a server for storing, retrieving, and managing data updates in various formats. This document details the methods available in the `XTablesClient` class, including their synchronous and asynchronous usage.

## Constructor

- **XTablesClient(String SERVER_ADDRESS, int SERVER_PORT, int MAX_THREADS)**
  - Initializes a connection to the specified server address and port with support for multithreading.
  - **Parameters**:
    - `SERVER_ADDRESS`: The IP address or hostname of the server.
    - `SERVER_PORT`: The port number on which the server is listening.
    - `MAX_THREADS`: The maximum number of threads to handle concurrent operations.

## Methods

### Put Methods
Store data on the server under a specified key.

- **putRaw(String key, String value)**
  - Stores a raw string under the given key.
  - **Synchronous**: `complete()` returns the operation result.
  - **Asynchronous**: `queue()` initiates the operation without blocking.

- **putString(String key, String value)**
  - Stores a string value after converting it to JSON format.
  - **Synchronous/Asynchronous**: Same as above.

- **putArray(String key, List<T> value)**
  - Stores an array under the given key, serialized to JSON format.
  - **Synchronous/Asynchronous**: Same as above.

- **putInteger(String key, Integer value)**
  - Stores an integer value under the specified key.
  - **Synchronous/Asynchronous**: Same as above.

- **putObject(String key, Object value)**
  - Stores any serializable object under the given key by converting it to JSON.
  - **Synchronous/Asynchronous**: Same as above.

### Get Methods
Retrieve data from the server using the specified key.

- **getRaw(String key)**
  - Retrieves a raw string value.
  - **Synchronous/Asynchronous**: Same as above.

- **getString(String key)**
  - Retrieves a string value.
  - **Synchronous/Asynchronous**: Same as above.

- **getInteger(String key)**
  - Retrieves an integer value.
  - **Synchronous/Asynchronous**: Same as above.

- **getObject(String key, Class<T> type)**
  - Retrieves an object of type T.
  - **Synchronous/Asynchronous**: Same as above.

- **getArray(String key, Class<T> type)**
  - Retrieves an array of type T.
  - **Synchronous/Asynchronous**: Same as above.

### Delete Method
- **delete(String key)**
  - Deletes the value associated with the specified key.
  - **Synchronous/Asynchronous**: Same as above.

### Subscription Methods
Manage update subscriptions for specific keys.

- **subscribeUpdateEvent(String key, Class<T> type, Consumer<SocketClient.KeyValuePair<T>> consumer)**
  - Subscribes to updates for a specific key, invoking the provided consumer when updates are received. Utilizes a hashmap to manage multiple consumers per key.
  - **Synchronous/Asynchronous**: Same as above.

- **unsubscribeUpdateEvent(String key, Class<T> type, Consumer<SocketClient.KeyValuePair<T>> consumer)**
  - Unsubscribes from updates for a specific key by removing the consumer from the list.
  - **Synchronous/Asynchronous**: Same as above.

### Latency Measurement
- **ping_latency()**
  - Measures the network and round-trip latency in milliseconds.
  - **Synchronous**: Returns latency information.

### Miscellaneous
- **getTables(String key)**
  - Retrieves a list of table names or similar structures using the specified key.
  - **Synchronous/Asynchronous**: Same as above.

- **sendCustomMessage(MethodType method, String message, Class<T> type)**
  - Sends a custom request to the server using the specified method and message, expecting a return type as specified by `Class<T>`.
  - **Synchronous/Asynchronous**: Same as above.

- **rebootServer()**
  - Sends a command to reboot the server, effective after 3 seconds of the request.
  - **Synchronous/Asynchronous**: Same as above.

## Usage Examples

```java
XTablesClient client = new XTablesClient("localhost", 1735, 10);
// Synchronous use
client.putInteger("session_id", 1001).complete();
// Asynchronous use
client.getInteger("session_id").queue(
    result -> System.out.println("Session ID: " + result),
    error -> System.err.println("Error retrieving session ID")
);

// Subscribe to

 updates
client.subscribeUpdateEvent("key", String.class, kv -> System.out.println("Update received: " + kv.getValue()))
        .complete();

// Define a consumer for update events
Consumer<SocketClient.KeyValuePair<String>> updateConsumer = kv -> {
    // Handle update
    System.out.println("Update received: " + kv.getValue());
};

// Subscribe to updates for a specific key
RequestAction<ResponseStatus> subscription = client.subscribeUpdateEvent("key", String.class, updateConsumer)
        .complete();
```
