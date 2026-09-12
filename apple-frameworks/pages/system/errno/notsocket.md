> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/notsocket](https://developer.apple.com/documentation/system/errno/notsocket)

# notSocket

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A socket operation was performed on something that isn’t a socket.

## Declaration

```swift
static var notSocket: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The corresponding C error is `ENOTSOCK`.

## See Also

### Network Socket Errors

- [notSupportedOnSocket](notsupportedonsocket.md): Operation not supported on socket.
- [socketIsConnected](socketisconnected.md): Socket is already connected.
- [socketNotConnected](socketnotconnected.md): Socket is not connected.
- [socketShutdown](socketshutdown.md): Can’t send after socket shutdown.
- [socketTypeNotSupported](sockettypenotsupported.md): Socket type not supported.
