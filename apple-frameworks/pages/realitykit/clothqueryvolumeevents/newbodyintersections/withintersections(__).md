> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothqueryvolumeevents/newbodyintersections/withintersections(_:)](https://developer.apple.com/documentation/realitykit/clothqueryvolumeevents/newbodyintersections/withintersections(_:))

# withIntersections(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Provides access to the intersections with cloth bodies that took place.

## Declaration

```swift
func withIntersections<Result>(_ callback: (Span<ClothQueryVolumeEvents.NewBodyIntersections.Intersection>) -> Result) -> Result
```

## Parameters

- `callback`: A closure that receives a span over the intersections.

<a id="return-value"></a>

## Return Value

The value returned by `callback`.

<a id="discussion"></a>

## Discussion

This span is only available during the subscription callback of this event. The provided span is only valid for the lifetime of the callback.

## See Also

### Accessing the intersections

- [ClothQueryVolumeEvents.NewBodyIntersections.Intersection](intersection.md): An intersection with a cloth body.
