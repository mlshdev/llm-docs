> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/socketshutdown](https://developer.apple.com/documentation/system/errno/socketshutdown)

# socketShutdown

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Can’t send after socket shutdown.

## Declaration

```swift
static var socketShutdown: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A request to send data wasn’t permitted because the socket had already been shut down with a previous `shutdown(2)` call.

The corresponding C error is `ESHUTDOWN`.

## See Also

### Network Socket Errors

- [notSocket](notsocket.md): A socket operation was performed on something that isn’t a socket.
- [notSupportedOnSocket](notsupportedonsocket.md): Operation not supported on socket.
- [socketIsConnected](socketisconnected.md): Socket is already connected.
- [socketNotConnected](socketnotconnected.md): Socket is not connected.
- [socketTypeNotSupported](sockettypenotsupported.md): Socket type not supported.
