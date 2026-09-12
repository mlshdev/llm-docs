> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflowerror-swift.struct/readalreadypending](https://developer.apple.com/documentation/networkextension/neappproxyflowerror-swift.struct/readalreadypending)

# readAlreadyPending

**Framework:** Network Extension  
**Kind:** Type Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A read operation on the flow is already pending.

## Declaration

```swift
static var readAlreadyPending: NEAppProxyFlowError.Code { get }
```

## See Also

### Error codes

- [notConnected](notconnected.md): The flow is not fully opened.
- [peerReset](peerreset.md): The remote peer closed the flow.
- [hostUnreachable](hostunreachable.md): An attempt to reach the remote endpoint of the flow failed.
- [invalidArgument](invalidargument.md): A proxy flow method received an invalid argument.
- [aborted](aborted.md): The flow was aborted.
- [refused](refused.md): Connecting the flow to its remote endpoint failed.
- [timedOut](timedout.md): The flow timed out.
- [internal](internal.md): An internal error occurred while handling the flow.
- [datagramTooLarge](datagramtoolarge.md): A caller attempted to write a datagram that was larger than the socket’s receive window.
