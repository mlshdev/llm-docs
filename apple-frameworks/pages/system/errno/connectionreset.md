> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/connectionreset](https://developer.apple.com/documentation/system/errno/connectionreset)

# connectionReset

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Connection reset by peer.

## Declaration

```swift
static var connectionReset: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A connection was forcibly closed by a peer. This normally results from a loss of the connection on the remote socket due to a timeout or a reboot.

The corresponding C error is `ECONNRESET`.

## See Also

### Network Errors

- [connectionAbort](connectionabort.md): Software caused a connection abort.
- [connectionRefused](connectionrefused.md): Connection refused.
- [hostIsDown](hostisdown.md): The host is down.
- [messageTooLong](messagetoolong.md): Message too long.
- [networkDown](networkdown.md): Network is down.
- [networkReset](networkreset.md): Network dropped connection on reset.
- [networkUnreachable](networkunreachable.md): Network is unreachable.
- [noBufferSpace](nobufferspace.md): No buffer space available.
- [noRouteToHost](noroutetohost.md): No route to host.
- [notSupported](notsupported.md): Not supported.
- [timedOut](timedout.md): Operation timed out.
