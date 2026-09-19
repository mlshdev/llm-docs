> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/subscribers/assign/receive(_:)

# receive(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the subscriber that the publisher has produced an element.

## Declaration

```swift
final func receive(_ value: Input) -> Subscribers.Demand
```

<a id="discussion"></a>

## Discussion

A [Subscribers.Demand](../demand.md) instance indicating how many more elements the subscriber expects to receive.
