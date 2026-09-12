> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview/unprojectpoint(_:ontoplane:)](https://developer.apple.com/documentation/arkit/arscnview/unprojectpoint(_:ontoplane:))

# unprojectPoint(\_:ontoPlane:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Returns the projection of a point from 2D view onto a plane in the 3D world space detected by ARKit.

## Declaration

```swift
@MainActor @nonobjc @preconcurrency func unprojectPoint(_ point: CGPoint, ontoPlane planeTransform: simd_float4x4) -> simd_float3?
```

## Parameters

- `point`: A point in the 2D coordinate system of the view to project onto a plane.
- `planeTransform`: A transform matrix specifying the position and orientation of a plane (with infinite extent) in 3D world space. The plane is the xz-plane of the local coordinate space this transform defines.

<a id="return-value"></a>

## Return Value

The 3D point in world space where a ray projected from the specified 2D point intersects the specified plane. If the ray does not intersect the plane, this method returns `nil`.

## See Also

### Mapping Content to Real-World Positions

- [anchor(for:)](anchor%28for_%29.md): Returns the AR anchor associated with the specified SceneKit node, if any.
- [node(for:)](node%28for_%29.md): Returns the SceneKit node associated with the specified AR anchor, if any.
