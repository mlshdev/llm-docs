> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/collisioncasthit/trianglehit-swift.struct

# CollisionCastHit.TriangleHit

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Information returned when ray intersects a triangle mesh.

## Declaration

```swift
struct TriangleHit
```

## Topics

### Instance Properties

- [faceIndex](trianglehit-swift.struct/faceindex.md): The face index for the mesh face that that the ray hit.
- [uv](trianglehit-swift.struct/uv.md): The barycentric uv coordinate for where in the triangle the ray hit.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Ray casting

- [CollisionCastHit](../collisioncasthit.md): A hit result of a collision cast.
- [CollisionCastQueryType](../collisioncastquerytype.md): The kinds of ray and convex shape cast queries that you can make.
- [PixelCastHit](../pixelcasthit.md)
