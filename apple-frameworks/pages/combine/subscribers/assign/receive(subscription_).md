> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/assign/receive(subscription:)](https://developer.apple.com/documentation/combine/subscribers/assign/receive(subscription:))

# receive(subscription:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the subscriber that it has successfully subscribed to the publisher and may request items.

## Declaration

```swift
final func receive(subscription: any Subscription)
```

## Parameters

- `subscription`: A subscription that represents the connection between publisher and subscriber.

<a id="discussion"></a>

## Discussion

Use the received [Subscription](../../subscription.md) to request items from the publisher.

## See Also

### Receiving life cycle events

- [receive(completion:)](receive%28completion_%29.md): Tells the subscriber that the publisher has completed publishing, either normally or with an error.
