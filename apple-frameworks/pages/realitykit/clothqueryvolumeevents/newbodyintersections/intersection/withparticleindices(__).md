> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothqueryvolumeevents/newbodyintersections/intersection/withparticleindices(_:)](https://developer.apple.com/documentation/realitykit/clothqueryvolumeevents/newbodyintersections/intersection/withparticleindices(_:))

# withParticleIndices(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Provides access to the indices of particles that intersected the volume.

## Declaration

```swift
func withParticleIndices<Result>(_ callback: (Span<UInt32>) -> Result) -> Result
```

## Parameters

- `callback`: A closure that receives a span over the intersecting particle indices.

<a id="return-value"></a>

## Return Value

The value returned by `callback`.

<a id="discussion"></a>

## Discussion

This span is only available during the subscription callback of this event. The provided span is only valid for the lifetime of the callback.

## See Also

### Inspecting the intersection

- [bodyEntity](bodyentity.md): The entity of the body that intersected the volume.
- [bodyComponent](bodycomponent.md): The [ClothBodyComponent](../../../clothbodycomponent.md) of the intersecting body, if still present on the entity.
