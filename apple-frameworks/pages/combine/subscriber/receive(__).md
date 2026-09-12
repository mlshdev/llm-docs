> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscriber/receive(_:)](https://developer.apple.com/documentation/combine/subscriber/receive(_:))

# receive(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the subscriber that the publisher has produced an element.

## Declaration

```swift
func receive(_ input: Self.Input) -> Subscribers.Demand
```

## Parameters

- `input`: The published element.

<a id="return-value"></a>

## Return Value

A `Subscribers.Demand` instance indicating how many more elements the subscriber expects to receive.

## Mentioned In

- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)

## See Also

### Receiving elements

- [receive()](receive%28%29.md): Conforms when `Input` is `()`. Tells the subscriber that a publisher of void elements is ready to receive further requests.
