> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcpeerhandler/input](https://developer.apple.com/documentation/xpc/xpcpeerhandler/input)

# Input

**Framework:** XPC  
**Kind:** Associated Type  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that represents a message from a client.

## Declaration

```swift
associatedtype Input
```

## See Also

### Receiving client messages

- [handleIncomingRequest(\_:)](handleincomingrequest%28__%29.md): A closure that receives a message from a client and optionally provides a reply.
- [Output](output.md): A type that represents a response to an incoming request.
