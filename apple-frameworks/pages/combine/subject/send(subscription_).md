> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subject/send(subscription:)](https://developer.apple.com/documentation/combine/subject/send(subscription:))

# send(subscription:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a subscription to the subscriber.

## Declaration

```swift
func send(subscription: any Subscription)
```

## Parameters

- `subscription`: The subscription instance through which the subscriber can request elements.

<a id="discussion"></a>

## Discussion

This call provides the [Subject](../subject.md) an opportunity to establish demand for any new upstream subscriptions.

## See Also

### Delivering life cycle events to subscribers

- [send(completion:)](send%28completion_%29.md): Sends a completion signal to the subscriber.
