> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflowerror-swift.struct/code/datagramtoolarge](https://developer.apple.com/documentation/networkextension/neappproxyflowerror-swift.struct/code/datagramtoolarge)

# NEAppProxyFlowError.Code.datagramTooLarge (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A caller attempted to write a datagram that was larger than the socket’s receive window.

## Declaration

```swift
case datagramTooLarge
```

## See Also

### Error Codes

- [NEAppProxyFlowError.Code.notConnected](notconnected.md): The flow is not fully opened.
- [NEAppProxyFlowError.Code.peerReset](peerreset.md): The remote peer closed the flow.
- [NEAppProxyFlowError.Code.hostUnreachable](hostunreachable.md): An attempt to reach the remote endpoint of the flow failed.
- [NEAppProxyFlowError.Code.invalidArgument](invalidargument.md): A proxy flow method received an invalid argument.
- [NEAppProxyFlowError.Code.aborted](aborted.md): The flow was aborted.
- [NEAppProxyFlowError.Code.refused](refused.md): Connecting the flow to its remote endpoint failed.
- [NEAppProxyFlowError.Code.timedOut](timedout.md): The flow timed out.
- [NEAppProxyFlowError.Code.internal](internal.md): An internal error occurred while handling the flow.
- [NEAppProxyFlowError.Code.readAlreadyPending](readalreadypending.md): A read operation on the flow is already pending.

# NEAppProxyFlowErrorDatagramTooLarge (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A caller attempted to write a datagram that was larger than the socket’s receive window.

## Declaration

```objectivec
NEAppProxyFlowErrorDatagramTooLarge
```

## See Also

### Error Codes

- [NEAppProxyFlowErrorNotConnected](notconnected.md): The flow is not fully opened.
- [NEAppProxyFlowErrorPeerReset](peerreset.md): The remote peer closed the flow.
- [NEAppProxyFlowErrorHostUnreachable](hostunreachable.md): An attempt to reach the remote endpoint of the flow failed.
- [NEAppProxyFlowErrorInvalidArgument](invalidargument.md): A proxy flow method received an invalid argument.
- [NEAppProxyFlowErrorAborted](aborted.md): The flow was aborted.
- [NEAppProxyFlowErrorRefused](refused.md): Connecting the flow to its remote endpoint failed.
- [NEAppProxyFlowErrorTimedOut](timedout.md): The flow timed out.
- [NEAppProxyFlowErrorInternal](internal.md): An internal error occurred while handling the flow.
- [NEAppProxyFlowErrorReadAlreadyPending](readalreadypending.md): A read operation on the flow is already pending.
