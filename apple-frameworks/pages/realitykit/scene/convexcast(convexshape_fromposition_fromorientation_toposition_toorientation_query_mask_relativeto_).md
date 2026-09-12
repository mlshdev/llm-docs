> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/convexcast(convexshape:fromposition:fromorientation:toposition:toorientation:query:mask:relativeto:)](https://developer.apple.com/documentation/realitykit/scene/convexcast(convexshape:fromposition:fromorientation:toposition:toorientation:query:mask:relativeto:))

# convexCast(convexShape:fromPosition:fromOrientation:toPosition:toOrientation:query:mask:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Performs a convex shape cast against all the geometry in the scene.

## Declaration

```swift
@MainActor @preconcurrency func convexCast(convexShape: ShapeResource, fromPosition: SIMD3<Float>, fromOrientation: simd_quatf, toPosition: SIMD3<Float>, toOrientation: simd_quatf, query: CollisionCastQueryType = .all, mask: CollisionGroup = .all, relativeTo referenceEntity: Entity? = nil) -> [CollisionCastHit]
```

## Parameters

- `convexShape`: The convex shape to cast.
- `fromPosition`: The starting position of `convexShape` relative to `referenceEntity`.
- `fromOrientation`: The starting orientation of `convexShape` relative to `referenceEntity`.
- `toPosition`: The ending position of `convexShape` relative to `referenceEntity`.
- `toOrientation`: The ending orientation of `convexShape` relative to `referenceEntity`.
- `query`: The query type.
- `mask`: A collision mask that you can use to prevent collisions with certain objects.
- `referenceEntity`: An entity that defines the frame of reference. The method returns results relative to this entity. Set to `nil` to use the world space origin `(0, 0, 0)`.

<a id="return-value"></a>

## Return Value

An array of collision cast hit results. Each hit indicates where the convex shape, starting at a given point and traveling in a given direction, collides with entities in the scene. To retrieve the hit entity from a returned [CollisionCastHit](../collisioncasthit.md), use the [entity](../collisioncasthit/entity.md) property.

<a id="discussion"></a>

## Discussion

For objects that intersect the convex shape at its starting position and orientation, the returned collision cast hit result’s [position](../collisioncasthit/position.md) is `(0, 0, 0)` and the [normal](../collisioncasthit/normal.md) points in the opposite direction of the sweep.

## See Also

### Detecting intersections

- [raycast(origin:direction:length:query:mask:relativeTo:)](raycast%28origin_direction_length_query_mask_relativeto_%29.md): Performs a ray cast against all the geometry in the scene for a ray of a given origin, direction, and length.
- [raycast(from:to:query:mask:relativeTo:)](raycast%28from_to_query_mask_relativeto_%29.md): Performs a ray cast against all the geometry in the scene for a ray between two end points.
- [pixelCast(from:to:)](pixelcast%28from_to_%29.md): Performs a ray cast against all the geometry in the scene for a ray between two end points.
- [pixelCast(origin:direction:length:)](pixelcast%28origin_direction_length_%29.md): Performs a ray cast against all the geometry in the scene for a ray of a given origin, direction, and length.
