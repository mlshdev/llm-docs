> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcallbacktype](https://developer.apple.com/documentation/corefoundation/cfsocketcallbacktype)

# CFSocketCallBackType (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Types of socket activity that can cause the callback function of a CFSocket object to be called.

## Declaration

```swift
struct CFSocketCallBackType
```

<a id="overview"></a>

## Overview

The callback types for which a callback is made is determined when the CFSocket object is created, such as with [CFSocketCreate(\_:\_:\_:\_:\_:\_:\_:)](cfsocketcreate%28______________%29.md), or later with [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md) and [CFSocketDisableCallBacks(\_:\_:)](cfsocketdisablecallbacks%28____%29.md).

The `kCFSocketReadCallBack`, `kCFSocketAcceptCallBack`, and `kCFSocketDataCallBack` callbacks are mutually exclusive.

<a id="Version-Notes"></a>

### Version-Notes

`kCFSocketWriteCallBack` is available in macOS 10.2 and later.

## Topics

### Constants

- [readCallBack](cfsocketcallbacktype/readcallback.md): The callback is called when data is available to be read or a new connection is waiting to be accepted. The data is not automatically read; the callback must read the data itself.
- [acceptCallBack](cfsocketcallbacktype/acceptcallback.md): New connections will be automatically accepted and the callback is called with the data argument being a pointer to a [CFSocketNativeHandle](cfsocketnativehandle.md) of the child socket. This callback is usable only with listening sockets.
- [dataCallBack](cfsocketcallbacktype/datacallback.md): Incoming data will be read in chunks in the background and the callback is called with the data argument being a CFData object containing the read data.
- [connectCallBack](cfsocketcallbacktype/connectcallback.md)
- [writeCallBack](cfsocketcallbacktype/writecallback.md): The callback is called when the socket is writable. This callback type may be useful when large amounts of data are being sent rapidly over the socket and you want a notification when there is space in the kernel buffers for more data.

### Initializers

- [init(rawValue:)](cfsocketcallbacktype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [CFSocket Flags](1560944-cfsocket-flags.md): Flags that can be set on a CFSocket object to control its behavior.
- [CFSocketError](cfsocketerror.md): Error codes for many CFSocket functions.

# CFSocketCallBackType (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Types of socket activity that can cause the callback function of a CFSocket object to be called.

## Declaration

```objectivec
enum CFSocketCallBackType : CFOptionFlags;
```

<a id="overview"></a>

## Overview

The callback types for which a callback is made is determined when the CFSocket object is created, such as with [CFSocketCreate](cfsocketcreate%28______________%29.md), or later with [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md) and [CFSocketDisableCallBacks](cfsocketdisablecallbacks%28____%29.md).

The `kCFSocketReadCallBack`, `kCFSocketAcceptCallBack`, and `kCFSocketDataCallBack` callbacks are mutually exclusive.

<a id="Version-Notes"></a>

### Version-Notes

`kCFSocketWriteCallBack` is available in macOS 10.2 and later.

## Topics

### Constants

- [kCFSocketNoCallBack](cfsocketcallbacktype/kcfsocketnocallback.md): No callback should be made for any activity.
- [kCFSocketReadCallBack](cfsocketcallbacktype/readcallback.md): The callback is called when data is available to be read or a new connection is waiting to be accepted. The data is not automatically read; the callback must read the data itself.
- [kCFSocketAcceptCallBack](cfsocketcallbacktype/acceptcallback.md): New connections will be automatically accepted and the callback is called with the data argument being a pointer to a [CFSocketNativeHandle](cfsocketnativehandle.md) of the child socket. This callback is usable only with listening sockets.
- [kCFSocketDataCallBack](cfsocketcallbacktype/datacallback.md): Incoming data will be read in chunks in the background and the callback is called with the data argument being a CFData object containing the read data.
- [kCFSocketConnectCallBack](cfsocketcallbacktype/connectcallback.md)
- [kCFSocketWriteCallBack](cfsocketcallbacktype/writecallback.md): The callback is called when the socket is writable. This callback type may be useful when large amounts of data are being sent rapidly over the socket and you want a notification when there is space in the kernel buffers for more data.

## See Also

### Constants

- [CFSocket Flags](1560944-cfsocket-flags.md): Flags that can be set on a CFSocket object to control its behavior.
- [CFSocketError](cfsocketerror.md): Error codes for many CFSocket functions.
