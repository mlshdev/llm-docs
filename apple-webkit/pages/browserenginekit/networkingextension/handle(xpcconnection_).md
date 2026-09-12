> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/networkingextension/handle(xpcconnection:)](https://developer.apple.com/documentation/browserenginekit/networkingextension/handle(xpcconnection:))

# handle(xpcConnection:)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Accepts or rejects an incoming XPC connection.

## Declaration

```swift
func handle(xpcConnection: xpc_connection_t)
```

## Parameters

- `xpcConnection`: The inbound connection.

<a id="discussion"></a>

## Discussion

When your browser app calls [makeLibXPCConnection()](../networkingprocess/makelibxpcconnection%28%29.md), the framework calls this method on your extension, passing the newly created connection as the parameter. To accept the connection, call [xpc_connection_set_event_handler(\_:\_:)](https://developer.apple.com/documentation/xpc/xpc_connection_set_event_handler%28_:_:%29) to install an event handler and listen for incoming messages.

Otherwise, call [xpc_connection_cancel(\_:)](https://developer.apple.com/documentation/xpc/xpc_connection_cancel%28_:%29) to reject the connection.
