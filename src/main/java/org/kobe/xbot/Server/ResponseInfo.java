package org.kobe.xbot.Server;

import java.util.Arrays;
import java.util.UUID;

public class ResponseInfo {
    private final String ID;
    private final MethodType method;
    private final String response;

    public ResponseInfo(String ID, MethodType method, String response) {
        this.response = response;
        this.ID = ID == null ? UUID.randomUUID().toString() : ID;
        this.method = method;
    }

    public ResponseInfo(String ID, MethodType method) {
        this.response = "";
        this.ID = ID == null ? UUID.randomUUID().toString() : ID;
        this.method = method;
    }

    public String getID() {
        return ID;
    }

    public MethodType getMethod() {
        return method;
    }

    public String getResponse() {
        return response;
    }

    public String parsed() {
        return String.format("%1$s:%2$s %3$s", this.ID, this.method.toString(), this.response);
    }

    public static ResponseInfo from(String raw) {
        String[] tokens = raw.split(" ");
        String[] requestTokens = tokens[0].split(":");
        String ID = requestTokens[0];
        String stringMethod = requestTokens[1];
        MethodType method = MethodType.valueOf(stringMethod);
        return new ResponseInfo(ID, method, String.join(" ", Arrays.copyOfRange(tokens, 1, tokens.length)));
    }
}
