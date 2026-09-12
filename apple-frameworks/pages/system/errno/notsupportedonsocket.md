> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/notsupportedonsocket](https://developer.apple.com/documentation/system/errno/notsupportedonsocket)

# notSupportedOnSocket

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Operation not supported on socket.

## Declaration

```swift
static var notSupportedOnSocket: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The attempted operation isn’t supported for the type of socket referenced; for example, trying to accept a connection on a datagram socket.

The corresponding C error is `EOPNOTSUPP`.

## See Also

### Network Socket Errors

- [notSocket](notsocket.md): A socket operation was performed on something that isn’t a socket.
- [socketIsConnected](socketisconnected.md): Socket is already connected.
- [socketNotConnected](socketnotconnected.md): Socket is not connected.
- [socketShutdown](socketshutdown.md): Can’t send after socket shutdown.
- [socketTypeNotSupported](sockettypenotsupported.md): Socket type not supported.
