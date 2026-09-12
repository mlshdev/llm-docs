> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflowerror-swift.struct/peerreset](https://developer.apple.com/documentation/networkextension/neappproxyflowerror-swift.struct/peerreset)

# peerReset

**Framework:** Network Extension  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The remote peer closed the flow.

## Declaration

```swift
static var peerReset: NEAppProxyFlowError.Code { get }
```

## See Also

### Error codes

- [notConnected](notconnected.md): The flow is not fully opened.
- [hostUnreachable](hostunreachable.md): An attempt to reach the remote endpoint of the flow failed.
- [invalidArgument](invalidargument.md): A proxy flow method received an invalid argument.
- [aborted](aborted.md): The flow was aborted.
- [refused](refused.md): Connecting the flow to its remote endpoint failed.
- [timedOut](timedout.md): The flow timed out.
- [internal](internal.md): An internal error occurred while handling the flow.
- [datagramTooLarge](datagramtoolarge.md): A caller attempted to write a datagram that was larger than the socket’s receive window.
- [readAlreadyPending](readalreadypending.md): A read operation on the flow is already pending.
