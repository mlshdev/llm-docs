> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflowerror-swift.struct/code](https://developer.apple.com/documentation/networkextension/neappproxyflowerror-swift.struct/code)

# NEAppProxyFlowError.Code (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Error codes that the app proxy flow API declares.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [NEAppProxyFlowError.Code.notConnected](code/notconnected.md): The flow is not fully opened.
- [NEAppProxyFlowError.Code.peerReset](code/peerreset.md): The remote peer closed the flow.
- [NEAppProxyFlowError.Code.hostUnreachable](code/hostunreachable.md): An attempt to reach the remote endpoint of the flow failed.
- [NEAppProxyFlowError.Code.invalidArgument](code/invalidargument.md): A proxy flow method received an invalid argument.
- [NEAppProxyFlowError.Code.aborted](code/aborted.md): The flow was aborted.
- [NEAppProxyFlowError.Code.refused](code/refused.md): Connecting the flow to its remote endpoint failed.
- [NEAppProxyFlowError.Code.timedOut](code/timedout.md): The flow timed out.
- [NEAppProxyFlowError.Code.internal](code/internal.md): An internal error occurred while handling the flow.
- [NEAppProxyFlowError.Code.datagramTooLarge](code/datagramtoolarge.md): A caller attempted to write a datagram that was larger than the socket’s receive window.
- [NEAppProxyFlowError.Code.readAlreadyPending](code/readalreadypending.md): A read operation on the flow is already pending.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NEAppProxyFlowError](../neappproxyflowerror-swift.struct.md): An error that the app proxy flow encounters.
- [NEAppProxyErrorDomain](../neappproxyerrordomain.md): The domain used for app proxy errors.
- [NEAppProxyFlowError](../neappproxyflowerror-swift.struct.md): An error that the app proxy flow encounters.

# NEAppProxyFlowError (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Error codes that the app proxy flow API declares.

## Declaration

```objectivec
enum NEAppProxyFlowError : NSInteger;
```

## Topics

### Error Codes

- [NEAppProxyFlowErrorNotConnected](code/notconnected.md): The flow is not fully opened.
- [NEAppProxyFlowErrorPeerReset](code/peerreset.md): The remote peer closed the flow.
- [NEAppProxyFlowErrorHostUnreachable](code/hostunreachable.md): An attempt to reach the remote endpoint of the flow failed.
- [NEAppProxyFlowErrorInvalidArgument](code/invalidargument.md): A proxy flow method received an invalid argument.
- [NEAppProxyFlowErrorAborted](code/aborted.md): The flow was aborted.
- [NEAppProxyFlowErrorRefused](code/refused.md): Connecting the flow to its remote endpoint failed.
- [NEAppProxyFlowErrorTimedOut](code/timedout.md): The flow timed out.
- [NEAppProxyFlowErrorInternal](code/internal.md): An internal error occurred while handling the flow.
- [NEAppProxyFlowErrorDatagramTooLarge](code/datagramtoolarge.md): A caller attempted to write a datagram that was larger than the socket’s receive window.
- [NEAppProxyFlowErrorReadAlreadyPending](code/readalreadypending.md): A read operation on the flow is already pending.

## See Also

### Errors

- [NEAppProxyErrorDomain](../neappproxyerrordomain.md): The domain used for app proxy errors.
