> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/pixelcast(origin:direction:length:)](https://developer.apple.com/documentation/realitykit/scene/pixelcast(origin:direction:length:))

# pixelCast(origin:direction:length:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Performs a ray cast against all the geometry in the scene for a ray of a given origin, direction, and length.

## Declaration

```swift
@MainActor @preconcurrency func pixelCast(origin: SIMD3<Float>, direction: SIMD3<Float>, length: Float = 100) async throws -> PixelCastHit?
```

## Parameters

- `origin`: The origin of the ray relative to the scene.
- `direction`: The direction of the ray relative to the scene.
- `length`: The length of the ray relative to the scene.

<a id="return-value"></a>

## Return Value

A `PixelCastHit`. The hit indicates where the ray, starting at a given point and traveling in a given direction, hit a particular entity in the scene.

<a id="discussion"></a>

## Discussion

The method ignores entities that lack a [ModelComponent](../modelcomponent.md) with a valid mesh.

## See Also

### Detecting intersections

- [raycast(origin:direction:length:query:mask:relativeTo:)](raycast%28origin_direction_length_query_mask_relativeto_%29.md): Performs a ray cast against all the geometry in the scene for a ray of a given origin, direction, and length.
- [raycast(from:to:query:mask:relativeTo:)](raycast%28from_to_query_mask_relativeto_%29.md): Performs a ray cast against all the geometry in the scene for a ray between two end points.
- [convexCast(convexShape:fromPosition:fromOrientation:toPosition:toOrientation:query:mask:relativeTo:)](convexcast%28convexshape_fromposition_fromorientation_toposition_toorientation_query_mask_relativeto_%29.md): Performs a convex shape cast against all the geometry in the scene.
- [pixelCast(from:to:)](pixelcast%28from_to_%29.md): Performs a ray cast against all the geometry in the scene for a ray between two end points.
