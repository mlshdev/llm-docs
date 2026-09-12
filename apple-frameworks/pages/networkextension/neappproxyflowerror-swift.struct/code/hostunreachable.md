> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflowerror-swift.struct/code/hostunreachable](https://developer.apple.com/documentation/networkextension/neappproxyflowerror-swift.struct/code/hostunreachable)

# NEAppProxyFlowError.Code.hostUnreachable (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to reach the remote endpoint of the flow failed.

## Declaration

```swift
case hostUnreachable
```

## See Also

### Error Codes

- [NEAppProxyFlowError.Code.notConnected](notconnected.md): The flow is not fully opened.
- [NEAppProxyFlowError.Code.peerReset](peerreset.md): The remote peer closed the flow.
- [NEAppProxyFlowError.Code.invalidArgument](invalidargument.md): A proxy flow method received an invalid argument.
- [NEAppProxyFlowError.Code.aborted](aborted.md): The flow was aborted.
- [NEAppProxyFlowError.Code.refused](refused.md): Connecting the flow to its remote endpoint failed.
- [NEAppProxyFlowError.Code.timedOut](timedout.md): The flow timed out.
- [NEAppProxyFlowError.Code.internal](internal.md): An internal error occurred while handling the flow.
- [NEAppProxyFlowError.Code.datagramTooLarge](datagramtoolarge.md): A caller attempted to write a datagram that was larger than the socket’s receive window.
- [NEAppProxyFlowError.Code.readAlreadyPending](readalreadypending.md): A read operation on the flow is already pending.

# NEAppProxyFlowErrorHostUnreachable (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to reach the remote endpoint of the flow failed.

## Declaration

```objectivec
NEAppProxyFlowErrorHostUnreachable
```

## See Also

### Error Codes

- [NEAppProxyFlowErrorNotConnected](notconnected.md): The flow is not fully opened.
- [NEAppProxyFlowErrorPeerReset](peerreset.md): The remote peer closed the flow.
- [NEAppProxyFlowErrorInvalidArgument](invalidargument.md): A proxy flow method received an invalid argument.
- [NEAppProxyFlowErrorAborted](aborted.md): The flow was aborted.
- [NEAppProxyFlowErrorRefused](refused.md): Connecting the flow to its remote endpoint failed.
- [NEAppProxyFlowErrorTimedOut](timedout.md): The flow timed out.
- [NEAppProxyFlowErrorInternal](internal.md): An internal error occurred while handling the flow.
- [NEAppProxyFlowErrorDatagramTooLarge](datagramtoolarge.md): A caller attempted to write a datagram that was larger than the socket’s receive window.
- [NEAppProxyFlowErrorReadAlreadyPending](readalreadypending.md): A read operation on the flow is already pending.
