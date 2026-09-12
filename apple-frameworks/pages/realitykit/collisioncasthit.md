> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisioncasthit](https://developer.apple.com/documentation/realitykit/collisioncasthit)

# CollisionCastHit

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A hit result of a collision cast.

## Declaration

```swift
struct CollisionCastHit
```

<a id="overview"></a>

## Overview

You get a collection of collision cast hits from either the [raycast(origin:direction:length:query:mask:relativeTo:)](scene/raycast%28origin_direction_length_query_mask_relativeto_%29.md) method, or the [convexCast(convexShape:fromPosition:fromOrientation:toPosition:toOrientation:query:mask:relativeTo:)](scene/convexcast%28convexshape_fromposition_fromorientation_toposition_toorientation_query_mask_relativeto_%29.md) method. Each hit indicates where the ray or the convex shape, starting at a given point and traveling in a given direction, hit a particular entity in the scene.

The frame of reference for the position and normal of the hit depends on the reference entity parameter passed to the method that generated the hit. Pass `nil` as the reference to use world space.

## Topics

### Getting the entity

- [entity](collisioncasthit/entity.md): The entity that was hit.

### Characterizing the collision cast hit

- [position](collisioncasthit/position.md): The position of the hit.
- [normal](collisioncasthit/normal.md): The normal of the hit.
- [distance](collisioncasthit/distance.md): The distance from the ray origin to the hit, or the convex shape travel distance.

### Structures

- [CollisionCastHit.TriangleHit](collisioncasthit/trianglehit-swift.struct.md): Information returned when ray intersects a triangle mesh.

### Instance Properties

- [shapeIndex](collisioncasthit/shapeindex.md): The index of the shape that was hit.
- [triangleHit](collisioncasthit/trianglehit-swift.property.md): Information the system provides when a ray touches or intersects a triangle mesh.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Ray casting

- [CollisionCastHit.TriangleHit](collisioncasthit/trianglehit-swift.struct.md): Information returned when ray intersects a triangle mesh.
- [CollisionCastQueryType](collisioncastquerytype.md): The kinds of ray and convex shape cast queries that you can make.
- [PixelCastHit](pixelcasthit.md)
