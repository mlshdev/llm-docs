> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/connectionabort](https://developer.apple.com/documentation/system/errno/connectionabort)

# connectionAbort

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Software caused a connection abort.

## Declaration

```swift
static var connectionAbort: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A connection abort was caused internal to your host machine.

The corresponding C error is `ECONNABORTED`.

## See Also

### Network Errors

- [connectionRefused](connectionrefused.md): Connection refused.
- [connectionReset](connectionreset.md): Connection reset by peer.
- [hostIsDown](hostisdown.md): The host is down.
- [messageTooLong](messagetoolong.md): Message too long.
- [networkDown](networkdown.md): Network is down.
- [networkReset](networkreset.md): Network dropped connection on reset.
- [networkUnreachable](networkunreachable.md): Network is unreachable.
- [noBufferSpace](nobufferspace.md): No buffer space available.
- [noRouteToHost](noroutetohost.md): No route to host.
- [notSupported](notsupported.md): Not supported.
- [timedOut](timedout.md): Operation timed out.
