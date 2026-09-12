> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/completion](https://developer.apple.com/documentation/combine/subscribers/completion)

# Subscribers.Completion

**Framework:** Combine  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A signal that a publisher doesn’t produce additional elements, either due to normal completion or an error.

## Declaration

```swift
@frozen enum Completion<Failure> where Failure : Error
```

## Mentioned In

- [Receiving and Handling Events with Combine](../receiving-and-handling-events-with-combine.md)

## Topics

### Completion states

- [Subscribers.Completion.finished](completion/finished.md): The publisher finished normally.
- [Subscribers.Completion.failure(\_:)](completion/failure%28__%29.md): The publisher stopped publishing due to the indicated error.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving life cycle events

- [receive(subscription:)](../subscriber/receive%28subscription_%29.md): Tells the subscriber that it has successfully subscribed to the publisher and may request items.
- [receive(completion:)](../subscriber/receive%28completion_%29.md): Tells the subscriber that the publisher has completed publishing, either normally or with an error.
