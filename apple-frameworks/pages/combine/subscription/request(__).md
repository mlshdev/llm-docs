> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscription/request(_:)](https://developer.apple.com/documentation/combine/subscription/request(_:))

# request(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells a publisher that it may send more values to the subscriber.

## Declaration

```swift
func request(_ demand: Subscribers.Demand)
```

## Mentioned In

- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)

## See Also

### Requesting elements

- [Subscribers.Demand](../subscribers/demand.md): A requested number of items, sent to a publisher from a subscriber through the subscription.
