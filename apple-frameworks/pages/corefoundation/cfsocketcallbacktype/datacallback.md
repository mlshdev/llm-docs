> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcallbacktype/datacallback](https://developer.apple.com/documentation/corefoundation/cfsocketcallbacktype/datacallback)

# dataCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Incoming data will be read in chunks in the background and the callback is called with the data argument being a CFData object containing the read data.

## Declaration

```swift
static var dataCallBack: CFSocketCallBackType { get }
```

## See Also

### Constants

- [readCallBack](readcallback.md): The callback is called when data is available to be read or a new connection is waiting to be accepted. The data is not automatically read; the callback must read the data itself.
- [acceptCallBack](acceptcallback.md): New connections will be automatically accepted and the callback is called with the data argument being a pointer to a [CFSocketNativeHandle](../cfsocketnativehandle.md) of the child socket. This callback is usable only with listening sockets.
- [connectCallBack](connectcallback.md)
- [writeCallBack](writecallback.md): The callback is called when the socket is writable. This callback type may be useful when large amounts of data are being sent rapidly over the socket and you want a notification when there is space in the kernel buffers for more data.

# kCFSocketDataCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Incoming data will be read in chunks in the background and the callback is called with the data argument being a CFData object containing the read data.

## Declaration

```objectivec
kCFSocketDataCallBack
```

## See Also

### Constants

- [kCFSocketNoCallBack](kcfsocketnocallback.md): No callback should be made for any activity.
- [kCFSocketReadCallBack](readcallback.md): The callback is called when data is available to be read or a new connection is waiting to be accepted. The data is not automatically read; the callback must read the data itself.
- [kCFSocketAcceptCallBack](acceptcallback.md): New connections will be automatically accepted and the callback is called with the data argument being a pointer to a [CFSocketNativeHandle](../cfsocketnativehandle.md) of the child socket. This callback is usable only with listening sockets.
- [kCFSocketConnectCallBack](connectcallback.md)
- [kCFSocketWriteCallBack](writecallback.md): The callback is called when the socket is writable. This callback type may be useful when large amounts of data are being sent rapidly over the socket and you want a notification when there is space in the kernel buffers for more data.
