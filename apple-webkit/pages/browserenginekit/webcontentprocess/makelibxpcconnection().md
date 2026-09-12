> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/webcontentprocess/makelibxpcconnection()](https://developer.apple.com/documentation/browserenginekit/webcontentprocess/makelibxpcconnection())

# makeLibXPCConnection()

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Creates a new XPC connection to the extension process.

## Declaration

```swift
func makeLibXPCConnection() throws -> xpc_connection_t
```

<a id="return-value"></a>

## Return Value

An object that represents the new XPC connection.

<a id="discussion"></a>

## Discussion

When you create an [xpc_connection_t](https://developer.apple.com/documentation/xpc/xpc_connection_t) in your browser app using this method, the system calls your extension’s [handle(xpcConnection:)](../webcontentextension/handle%28xpcconnection_%29.md) method to supply the remote end of the connection to your extension process.
