> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/nobufferspace](https://developer.apple.com/documentation/system/errno/nobufferspace)

# noBufferSpace

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

No buffer space available.

## Declaration

```swift
static var noBufferSpace: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

An operation on a socket or pipe wasn’t performed because the system lacked sufficient buffer space or because a queue was full.

The corresponding C error is `ENOBUFS`.

## See Also

### Network Errors

- [connectionAbort](connectionabort.md): Software caused a connection abort.
- [connectionRefused](connectionrefused.md): Connection refused.
- [connectionReset](connectionreset.md): Connection reset by peer.
- [hostIsDown](hostisdown.md): The host is down.
- [messageTooLong](messagetoolong.md): Message too long.
- [networkDown](networkdown.md): Network is down.
- [networkReset](networkreset.md): Network dropped connection on reset.
- [networkUnreachable](networkunreachable.md): Network is unreachable.
- [noRouteToHost](noroutetohost.md): No route to host.
- [notSupported](notsupported.md): Not supported.
- [timedOut](timedout.md): Operation timed out.
