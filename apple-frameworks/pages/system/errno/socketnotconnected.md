> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/socketnotconnected](https://developer.apple.com/documentation/system/errno/socketnotconnected)

# socketNotConnected

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Socket is not connected.

## Declaration

```swift
static var socketNotConnected: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A request to send or receive data wasn’t permitted because the socket wasn’t connected and, when sending on a datagram socket, no address was supplied.

The corresponding C error is `ENOTCONN`.

## See Also

### Network Socket Errors

- [notSocket](notsocket.md): A socket operation was performed on something that isn’t a socket.
- [notSupportedOnSocket](notsupportedonsocket.md): Operation not supported on socket.
- [socketIsConnected](socketisconnected.md): Socket is already connected.
- [socketShutdown](socketshutdown.md): Can’t send after socket shutdown.
- [socketTypeNotSupported](sockettypenotsupported.md): Socket type not supported.
