> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berenderingprocess/makelibxpcconnectionerror:](https://developer.apple.com/documentation/browserenginekit/berenderingprocess/makelibxpcconnectionerror:)

# makeLibXPCConnectionError:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Creates a new XPC connection to the extension process.

## Declaration

```objectivec
- (xpc_connection_t) makeLibXPCConnectionError:(NSError **) error;
```

## Parameters

- `error`: If an error occurs, upon return contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the problem. If you don’t want information about errors that happen, pass in `NULL`.

<a id="return-value"></a>

## Return Value

An object that represents the new XPC connection, or `nil` if an error occurs.

<a id="discussion"></a>

## Discussion

When you create an [xpc_connection_t](https://developer.apple.com/documentation/xpc/xpc_connection_t) in your browser app using this method, the system calls your extension’s [handle(xpcConnection:)](../renderingextension/handle%28xpcconnection_%29.md) method to supply the remote end of the connection to your extension process.
