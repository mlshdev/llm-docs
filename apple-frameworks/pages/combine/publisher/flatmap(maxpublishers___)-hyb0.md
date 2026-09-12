> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/flatmap(maxpublishers:_:)-hyb0](https://developer.apple.com/documentation/combine/publisher/flatmap(maxpublishers:_:)-hyb0)

# flatMap(maxPublishers:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.

## Declaration

```swift
func flatMap<P>(maxPublishers: Subscribers.Demand = .unlimited, _ transform: @escaping (Self.Output) -> P) -> Publishers.FlatMap<P, Self> where P : Publisher, P.Failure == Never
```

## Parameters

- `maxPublishers`: Specifies the maximum number of concurrent publisher subscriptions, or [unlimited](../subscribers/demand/unlimited.md) if unspecified.
- `transform`: A closure that takes an element as a parameter and returns a publisher that produces elements of that type.

<a id="return-value"></a>

## Return Value

A publisher that transforms elements from an upstream  publisher into a publisher of that element’s type.

## See Also

### Republishing elements by subscribing to new publishers

- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-3k7z5.md): Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-qxf.md): Conforms when `Failure` is `Never`. Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-4of8w.md): Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [switchToLatest()](switchtolatest%28%29-453ht.md): Conforms when `Failure` is `Self.Output.Failure` and `Output` conforms to `Publisher`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](switchtolatest%28%29-1c51y.md): Conforms when `Failure` is `Never` and `Output` conforms to `Publisher`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](switchtolatest%28%29-20v3t.md): Conforms when `Output` conforms to `Publisher` and `Output.Failure` is `Never`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](switchtolatest%28%29-9eb3r.md): Conforms when `Failure` is `Never`, `Output` conforms to `Publisher`, and `Output.Failure` is `Never`. Republishes elements sent by the most recently received publisher.
