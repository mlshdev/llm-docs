> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcallbacktype/connectcallback](https://developer.apple.com/documentation/corefoundation/cfsocketcallbacktype/connectcallback)

# connectCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
static var connectCallBack: CFSocketCallBackType { get }
```

<a id="Discussion"></a>

## Discussion

If a connection attempt is made in the background by calling [CFSocketConnectToAddress(\_:\_:\_:)](../cfsocketconnecttoaddress%28______%29.md) or [CFSocketCreateConnectedToSocketSignature(\_:\_:\_:\_:\_:\_:)](../cfsocketcreateconnectedtosocketsignature%28____________%29.md) with a negative timeout value, this callback type is made when the connect finishes. In this case the data argument is either `NULL` or a pointer to an `SInt32` error code, if the connect failed. This callback will never be sent more than once for a given socket.

## See Also

### Constants

- [readCallBack](readcallback.md): The callback is called when data is available to be read or a new connection is waiting to be accepted. The data is not automatically read; the callback must read the data itself.
- [acceptCallBack](acceptcallback.md): New connections will be automatically accepted and the callback is called with the data argument being a pointer to a [CFSocketNativeHandle](../cfsocketnativehandle.md) of the child socket. This callback is usable only with listening sockets.
- [dataCallBack](datacallback.md): Incoming data will be read in chunks in the background and the callback is called with the data argument being a CFData object containing the read data.
- [writeCallBack](writecallback.md): The callback is called when the socket is writable. This callback type may be useful when large amounts of data are being sent rapidly over the socket and you want a notification when there is space in the kernel buffers for more data.

# kCFSocketConnectCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
kCFSocketConnectCallBack
```

<a id="Discussion"></a>

## Discussion

If a connection attempt is made in the background by calling [CFSocketConnectToAddress](../cfsocketconnecttoaddress%28______%29.md) or [CFSocketCreateConnectedToSocketSignature](../cfsocketcreateconnectedtosocketsignature%28____________%29.md) with a negative timeout value, this callback type is made when the connect finishes. In this case the data argument is either `NULL` or a pointer to an `SInt32` error code, if the connect failed. This callback will never be sent more than once for a given socket.

## See Also

### Constants

- [kCFSocketNoCallBack](kcfsocketnocallback.md): No callback should be made for any activity.
- [kCFSocketReadCallBack](readcallback.md): The callback is called when data is available to be read or a new connection is waiting to be accepted. The data is not automatically read; the callback must read the data itself.
- [kCFSocketAcceptCallBack](acceptcallback.md): New connections will be automatically accepted and the callback is called with the data argument being a pointer to a [CFSocketNativeHandle](../cfsocketnativehandle.md) of the child socket. This callback is usable only with listening sockets.
- [kCFSocketDataCallBack](datacallback.md): Incoming data will be read in chunks in the background and the callback is called with the data argument being a CFData object containing the read data.
- [kCFSocketWriteCallBack](writecallback.md): The callback is called when the socket is writable. This callback type may be useful when large amounts of data are being sent rapidly over the socket and you want a notification when there is space in the kernel buffers for more data.
