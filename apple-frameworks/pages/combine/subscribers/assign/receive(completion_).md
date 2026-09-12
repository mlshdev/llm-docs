> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/assign/receive(completion:)](https://developer.apple.com/documentation/combine/subscribers/assign/receive(completion:))

# receive(completion:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the subscriber that the publisher has completed publishing, either normally or with an error.

## Declaration

```swift
final func receive(completion: Subscribers.Completion<Never>)
```

## Parameters

- `completion`: A [Subscribers.Completion](../completion.md) case indicating whether publishing completed normally or with an error.

## See Also

### Receiving life cycle events

- [receive(subscription:)](receive%28subscription_%29.md): Tells the subscriber that it has successfully subscribed to the publisher and may request items.
