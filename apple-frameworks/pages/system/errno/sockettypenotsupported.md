> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/sockettypenotsupported](https://developer.apple.com/documentation/system/errno/sockettypenotsupported)

# socketTypeNotSupported

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Socket type not supported.

## Declaration

```swift
static var socketTypeNotSupported: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

Support for the socket type hasn’t been configured into the system or no implementation for it exists.

The corresponding C error is `ESOCKTNOSUPPORT`.

## See Also

### Network Socket Errors

- [notSocket](notsocket.md): A socket operation was performed on something that isn’t a socket.
- [notSupportedOnSocket](notsupportedonsocket.md): Operation not supported on socket.
- [socketIsConnected](socketisconnected.md): Socket is already connected.
- [socketNotConnected](socketnotconnected.md): Socket is not connected.
- [socketShutdown](socketshutdown.md): Can’t send after socket shutdown.
