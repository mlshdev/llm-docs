> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/pixelcasthit](https://developer.apple.com/documentation/realitykit/pixelcasthit)

# PixelCastHit

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

## Declaration

```swift
struct PixelCastHit
```

## Topics

### Instance Properties

- [barycentric](pixelcasthit/barycentric.md): The barycentric coordinate of the primitive. See the discussion of \[\[barycentric_coord\]\] in Section “5.2.3.4 Fragment Function Input Attributes” of Metal Shading Language Specification
- [entity](pixelcasthit/entity.md): The entity that was hit.
- [instance](pixelcasthit/instance.md): The instance within the MeshResource of the intersection. This can be used to index into MeshResource.contents.instances
- [meshPart](pixelcasthit/meshpart.md): The mesh part id of the entity that was selected by the hit.
- [normal](pixelcasthit/normal.md): The surface normal at the point of intersection, in scene space.
- [position](pixelcasthit/position.md): The surface position at the point of intersection, in scene space.
- [primitive](pixelcasthit/primitive.md): The per-primitive identifier used with barycentric coordinates.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity searches

- [QueryPredicate](querypredicate.md): An object that defines the criteria for an entity query.
