> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscriber/receive()](https://developer.apple.com/documentation/combine/subscriber/receive())

# receive()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the subscriber that a publisher of void elements is ready to receive further requests.

## Declaration

```swift
func receive() -> Subscribers.Demand
```

<a id="return-value"></a>

## Return Value

A [Subscribers.Demand](../subscribers/demand.md) instance indicating how many more elements the subscriber expects to receive.

<a id="discussion"></a>

## Discussion

Use `Void` inputs and outputs when you want to signal that an event has occurred, but don’t need to send the event itself.

## See Also

### Receiving elements

- [receive(\_:)](receive%28__%29.md): Tells the subscriber that the publisher has produced an element.
