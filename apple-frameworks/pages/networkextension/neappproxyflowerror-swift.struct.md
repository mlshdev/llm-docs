> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflowerror-swift.struct](https://developer.apple.com/documentation/networkextension/neappproxyflowerror-swift.struct)

# NEAppProxyFlowError

**Framework:** Network Extension  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error that the app proxy flow encounters.

## Declaration

```swift
struct NEAppProxyFlowError
```

## Topics

### Accessing error properties

- [NEAppProxyFlowError.Code](neappproxyflowerror-swift.struct/code.md): Error codes that the app proxy flow API declares.

### Error codes

- [notConnected](neappproxyflowerror-swift.struct/notconnected.md): The flow is not fully opened.
- [peerReset](neappproxyflowerror-swift.struct/peerreset.md): The remote peer closed the flow.
- [hostUnreachable](neappproxyflowerror-swift.struct/hostunreachable.md): An attempt to reach the remote endpoint of the flow failed.
- [invalidArgument](neappproxyflowerror-swift.struct/invalidargument.md): A proxy flow method received an invalid argument.
- [aborted](neappproxyflowerror-swift.struct/aborted.md): The flow was aborted.
- [refused](neappproxyflowerror-swift.struct/refused.md): Connecting the flow to its remote endpoint failed.
- [timedOut](neappproxyflowerror-swift.struct/timedout.md): The flow timed out.
- [internal](neappproxyflowerror-swift.struct/internal.md): An internal error occurred while handling the flow.
- [datagramTooLarge](neappproxyflowerror-swift.struct/datagramtoolarge.md): A caller attempted to write a datagram that was larger than the socket’s receive window.
- [readAlreadyPending](neappproxyflowerror-swift.struct/readalreadypending.md): A read operation on the flow is already pending.

### Type Properties

- [errorDomain](neappproxyflowerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NEAppProxyErrorDomain](neappproxyerrordomain.md): The domain used for app proxy errors.
- [NEAppProxyFlowError.Code](neappproxyflowerror-swift.struct/code.md): Error codes that the app proxy flow API declares.
