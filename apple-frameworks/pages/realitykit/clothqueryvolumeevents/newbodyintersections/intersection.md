> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothqueryvolumeevents/newbodyintersections/intersection](https://developer.apple.com/documentation/realitykit/clothqueryvolumeevents/newbodyintersections/intersection)

# ClothQueryVolumeEvents.NewBodyIntersections.Intersection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

An intersection with a cloth body.

## Declaration

```swift
struct Intersection
```

## Topics

### Inspecting the intersection

- [bodyEntity](intersection/bodyentity.md): The entity of the body that intersected the volume.
- [bodyComponent](intersection/bodycomponent.md): The [ClothBodyComponent](../../clothbodycomponent.md) of the intersecting body, if still present on the entity.
- [withParticleIndices(\_:)](intersection/withparticleindices%28__%29.md): Provides access to the indices of particles that intersected the volume.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the intersections

- [withIntersections(\_:)](withintersections%28__%29.md): Provides access to the intersections with cloth bodies that took place.
