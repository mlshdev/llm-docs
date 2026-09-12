> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcallbacktype/readcallback](https://developer.apple.com/documentation/corefoundation/cfsocketcallbacktype/readcallback)

# readCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback is called when data is available to be read or a new connection is waiting to be accepted. The data is not automatically read; the callback must read the data itself.

## Declaration

```swift
static var readCallBack: CFSocketCallBackType { get }
```

## See Also

### Constants

- [acceptCallBack](acceptcallback.md): New connections will be automatically accepted and the callback is called with the data argument being a pointer to a [CFSocketNativeHandle](../cfsocketnativehandle.md) of the child socket. This callback is usable only with listening sockets.
- [dataCallBack](datacallback.md): Incoming data will be read in chunks in the background and the callback is called with the data argument being a CFData object containing the read data.
- [connectCallBack](connectcallback.md)
- [writeCallBack](writecallback.md): The callback is called when the socket is writable. This callback type may be useful when large amounts of data are being sent rapidly over the socket and you want a notification when there is space in the kernel buffers for more data.

# kCFSocketReadCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback is called when data is available to be read or a new connection is waiting to be accepted. The data is not automatically read; the callback must read the data itself.

## Declaration

```objectivec
kCFSocketReadCallBack
```

## See Also

### Constants

- [kCFSocketNoCallBack](kcfsocketnocallback.md): No callback should be made for any activity.
- [kCFSocketAcceptCallBack](acceptcallback.md): New connections will be automatically accepted and the callback is called with the data argument being a pointer to a [CFSocketNativeHandle](../cfsocketnativehandle.md) of the child socket. This callback is usable only with listening sockets.
- [kCFSocketDataCallBack](datacallback.md): Incoming data will be read in chunks in the background and the callback is called with the data argument being a CFData object containing the read data.
- [kCFSocketConnectCallBack](connectcallback.md)
- [kCFSocketWriteCallBack](writecallback.md): The callback is called when the socket is writable. This callback type may be useful when large amounts of data are being sent rapidly over the socket and you want a notification when there is space in the kernel buffers for more data.
