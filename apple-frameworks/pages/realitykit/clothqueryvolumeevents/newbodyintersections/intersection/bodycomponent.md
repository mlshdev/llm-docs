> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothqueryvolumeevents/newbodyintersections/intersection/bodycomponent](https://developer.apple.com/documentation/realitykit/clothqueryvolumeevents/newbodyintersections/intersection/bodycomponent)

# bodyComponent

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The [ClothBodyComponent](../../../clothbodycomponent.md) of the intersecting body, if still present on the entity.

## Declaration

```swift
var bodyComponent: ClothBodyComponent? { get }
```

## See Also

### Inspecting the intersection

- [bodyEntity](bodyentity.md): The entity of the body that intersected the volume.
- [withParticleIndices(\_:)](withparticleindices%28__%29.md): Provides access to the indices of particles that intersected the volume.
