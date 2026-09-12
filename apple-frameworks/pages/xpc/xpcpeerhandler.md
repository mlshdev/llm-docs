> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcpeerhandler](https://developer.apple.com/documentation/xpc/xpcpeerhandler)

# XPCPeerHandler

**Framework:** XPC  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that handles incoming messages from a client and session cancellation.

## Declaration

```swift
@preconcurrency protocol XPCPeerHandler : Sendable
```

## Topics

### Receiving client messages

- [handleIncomingRequest(\_:)](xpcpeerhandler/handleincomingrequest%28__%29.md): A closure that receives a message from a client and optionally provides a reply.
- [Input](xpcpeerhandler/input.md): A type that represents a message from a client.
- [Output](xpcpeerhandler/output.md): A type that represents a response to an incoming request.

### Responding to session cancellation

- [handleCancellation(error:)](xpcpeerhandler/handlecancellation%28error_%29.md): A closure the system invokes when it cancels a session with a client.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
