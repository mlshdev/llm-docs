> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisioncastquerytype](https://developer.apple.com/documentation/realitykit/collisioncastquerytype)

# CollisionCastQueryType

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The kinds of ray and convex shape cast queries that you can make.

## Declaration

```swift
enum CollisionCastQueryType
```

## Topics

### Collision cast queries

- [CollisionCastQueryType.nearest](collisioncastquerytype/nearest.md): Report the closest hit.
- [CollisionCastQueryType.all](collisioncastquerytype/all.md): Report all hits sorted in ascending order by distance from the cast origin.
- [CollisionCastQueryType.any](collisioncastquerytype/any.md): Report one hit.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Ray casting

- [CollisionCastHit](collisioncasthit.md): A hit result of a collision cast.
- [CollisionCastHit.TriangleHit](collisioncasthit/trianglehit-swift.struct.md): Information returned when ray intersects a triangle mesh.
- [PixelCastHit](pixelcasthit.md)
