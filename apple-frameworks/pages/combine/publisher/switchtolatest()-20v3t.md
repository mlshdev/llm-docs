> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/switchtolatest()-20v3t](https://developer.apple.com/documentation/combine/publisher/switchtolatest()-20v3t)

# switchToLatest()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Republishes elements sent by the most recently received publisher.

## Declaration

```swift
func switchToLatest() -> Publishers.SwitchToLatest<Publishers.SetFailureType<Self.Output, Self.Failure>, Publishers.Map<Self, Publishers.SetFailureType<Self.Output, Self.Failure>>>
```

<a id="discussion"></a>

## Discussion

This operator works with an upstream publisher of publishers, flattening the stream of elements to appear as if they were coming from a single stream of elements. It switches the inner publisher as new ones arrive but keeps the outer publisher constant for downstream subscribers.

When this operator receives a new publisher from the upstream publisher, it cancels its previous subscription. Use this feature to prevent earlier publishers from performing unnecessary work, such as creating network request publishers from frequently updating user interface publishers.

## See Also

### Republishing elements by subscribing to new publishers

- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-3k7z5.md): Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-qxf.md): Conforms when `Failure` is `Never`. Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-hyb0.md): Conforms when `Failure` is `Never`. Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-4of8w.md): Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [switchToLatest()](switchtolatest%28%29-453ht.md): Conforms when `Failure` is `Self.Output.Failure` and `Output` conforms to `Publisher`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](switchtolatest%28%29-1c51y.md): Conforms when `Failure` is `Never` and `Output` conforms to `Publisher`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](switchtolatest%28%29-9eb3r.md): Conforms when `Failure` is `Never`, `Output` conforms to `Publisher`, and `Output.Failure` is `Never`. Republishes elements sent by the most recently received publisher.
