> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/raycast(origin:direction:length:query:mask:relativeto:)](https://developer.apple.com/documentation/realitykit/scene/raycast(origin:direction:length:query:mask:relativeto:))

# raycast(origin:direction:length:query:mask:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Performs a ray cast against all the geometry in the scene for a ray of a given origin, direction, and length.

## Declaration

```swift
@MainActor @preconcurrency func raycast(origin: SIMD3<Float>, direction: SIMD3<Float>, length: Float = 100, query: CollisionCastQueryType = .all, mask: CollisionGroup = .all, relativeTo referenceEntity: Entity? = nil) -> [CollisionCastHit]
```

## Parameters

- `origin`: The origin of the ray relative to `referenceEntity`.
- `direction`: The direction of the ray relative to `referenceEntity`.
- `length`: The length of the ray relative to `referenceEntity`.
- `query`: A query type.
- `mask`: A collision mask that you can use to prevent collisions with certain objects.
- `referenceEntity`: An entity that defines the frame of reference. The method returns results relative to this entity. Set to `nil` to use the world space origin `(0, 0, 0)`.

<a id="return-value"></a>

## Return Value

An array of collision cast hit results. Each hit indicates where the ray, starting at a given point and traveling in a given direction, hit a particular entity in the scene.

<a id="discussion"></a>

## Discussion

The method ignores entities that lack a [CollisionComponent](../collisioncomponent.md).

The [normal](../collisioncasthit/normal.md) property on returned result objects contains the surface normal at the point of intersection with the entity’s collision shape.

The following are some details to keep in mind.

- The ray needs to fully intersect a primitive for a hit to be detected. In particular, it is not enough for the ray to precisely tangent or end at the primitive’s surface. This becomes especially important when ray casting against primitives that are far away from the ray origin.
- Due to numerical imprecision, it may be necessary to use a slightly longer ray length than your desired maximum distance in order to ensure that a full intersection occurs with your target primitive. Moreover, the length of the ray needs to be a positive finite number that is smaller than `greatestFiniteMagnitude`.

## See Also

### Detecting intersections

- [raycast(from:to:query:mask:relativeTo:)](raycast%28from_to_query_mask_relativeto_%29.md): Performs a ray cast against all the geometry in the scene for a ray between two end points.
- [convexCast(convexShape:fromPosition:fromOrientation:toPosition:toOrientation:query:mask:relativeTo:)](convexcast%28convexshape_fromposition_fromorientation_toposition_toorientation_query_mask_relativeto_%29.md): Performs a convex shape cast against all the geometry in the scene.
- [pixelCast(from:to:)](pixelcast%28from_to_%29.md): Performs a ray cast against all the geometry in the scene for a ray between two end points.
- [pixelCast(origin:direction:length:)](pixelcast%28origin_direction_length_%29.md): Performs a ray cast against all the geometry in the scene for a ray of a given origin, direction, and length.
