> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscriber/receive(completion:)](https://developer.apple.com/documentation/combine/subscriber/receive(completion:))

# receive(completion:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the subscriber that the publisher has completed publishing, either normally or with an error.

## Declaration

```swift
func receive(completion: Subscribers.Completion<Self.Failure>)
```

## Parameters

- `completion`: A [Subscribers.Completion](../subscribers/completion.md) case indicating whether publishing completed normally or with an error.

## See Also

### Receiving life cycle events

- [receive(subscription:)](receive%28subscription_%29.md): Tells the subscriber that it has successfully subscribed to the publisher and may request items.
- [Subscribers.Completion](../subscribers/completion.md): A signal that a publisher doesn’t produce additional elements, either due to normal completion or an error.
