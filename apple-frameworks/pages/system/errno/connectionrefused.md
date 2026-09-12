> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/connectionrefused](https://developer.apple.com/documentation/system/errno/connectionrefused)

# connectionRefused

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Connection refused.

## Declaration

```swift
static var connectionRefused: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

No connection could be made because the target machine actively refused it. This usually results from trying to connect to a service that’s inactive on the foreign host.

The corresponding C error is `ECONNREFUSED`.

## See Also

### Network Errors

- [connectionAbort](connectionabort.md): Software caused a connection abort.
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
