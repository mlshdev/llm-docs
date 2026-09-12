> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/socketisconnected](https://developer.apple.com/documentation/system/errno/socketisconnected)

# socketIsConnected

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Socket is already connected.

## Declaration

```swift
static var socketIsConnected: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A `connect(2)` or `connectx(2)` request was made on an already connected socket, or a `sendto(2)` or `sendmsg(2)` request was made on a connected socket specified a destination when already connected.

The corresponding C error is `EISCONN`.

## See Also

### Network Socket Errors

- [notSocket](notsocket.md): A socket operation was performed on something that isn’t a socket.
- [notSupportedOnSocket](notsupportedonsocket.md): Operation not supported on socket.
- [socketNotConnected](socketnotconnected.md): Socket is not connected.
- [socketShutdown](socketshutdown.md): Can’t send after socket shutdown.
- [socketTypeNotSupported](sockettypenotsupported.md): Socket type not supported.
