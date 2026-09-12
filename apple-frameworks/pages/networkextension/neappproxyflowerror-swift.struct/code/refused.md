> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflowerror-swift.struct/code/refused](https://developer.apple.com/documentation/networkextension/neappproxyflowerror-swift.struct/code/refused)

# NEAppProxyFlowError.Code.refused (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Connecting the flow to its remote endpoint failed.

## Declaration

```swift
case refused
```

## See Also

### Error Codes

- [NEAppProxyFlowError.Code.notConnected](notconnected.md): The flow is not fully opened.
- [NEAppProxyFlowError.Code.peerReset](peerreset.md): The remote peer closed the flow.
- [NEAppProxyFlowError.Code.hostUnreachable](hostunreachable.md): An attempt to reach the remote endpoint of the flow failed.
- [NEAppProxyFlowError.Code.invalidArgument](invalidargument.md): A proxy flow method received an invalid argument.
- [NEAppProxyFlowError.Code.aborted](aborted.md): The flow was aborted.
- [NEAppProxyFlowError.Code.timedOut](timedout.md): The flow timed out.
- [NEAppProxyFlowError.Code.internal](internal.md): An internal error occurred while handling the flow.
- [NEAppProxyFlowError.Code.datagramTooLarge](datagramtoolarge.md): A caller attempted to write a datagram that was larger than the socket’s receive window.
- [NEAppProxyFlowError.Code.readAlreadyPending](readalreadypending.md): A read operation on the flow is already pending.

# NEAppProxyFlowErrorRefused (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Connecting the flow to its remote endpoint failed.

## Declaration

```objectivec
NEAppProxyFlowErrorRefused
```

## See Also

### Error Codes

- [NEAppProxyFlowErrorNotConnected](notconnected.md): The flow is not fully opened.
- [NEAppProxyFlowErrorPeerReset](peerreset.md): The remote peer closed the flow.
- [NEAppProxyFlowErrorHostUnreachable](hostunreachable.md): An attempt to reach the remote endpoint of the flow failed.
- [NEAppProxyFlowErrorInvalidArgument](invalidargument.md): A proxy flow method received an invalid argument.
- [NEAppProxyFlowErrorAborted](aborted.md): The flow was aborted.
- [NEAppProxyFlowErrorTimedOut](timedout.md): The flow timed out.
- [NEAppProxyFlowErrorInternal](internal.md): An internal error occurred while handling the flow.
- [NEAppProxyFlowErrorDatagramTooLarge](datagramtoolarge.md): A caller attempted to write a datagram that was larger than the socket’s receive window.
- [NEAppProxyFlowErrorReadAlreadyPending](readalreadypending.md): A read operation on the flow is already pending.
