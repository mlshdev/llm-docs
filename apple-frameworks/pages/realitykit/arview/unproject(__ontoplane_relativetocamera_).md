> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/unproject(_:ontoplane:relativetocamera:)](https://developer.apple.com/documentation/realitykit/arview/unproject(_:ontoplane:relativetocamera:))

# unproject(\_:ontoPlane:relativeToCamera:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 26.0+

Unproject a 2D point from the view onto a plane in 3D world coordinates.

## Declaration

```swift
@MainActor @preconcurrency func unproject(_ point: CGPoint, ontoPlane planeTransform: float4x4, relativeToCamera: Bool) -> SIMD3<Float>?
```

## Parameters

- `point`: A point in the view’s coordinate system.
- `planeTransform`: The transform used to define the coordinate system of the plane. The coordinate system’s positive y-axis is assumed to be the normal of the plane.
- `relativeToCamera`: If the plane transform is relative to camera space or world space.

<a id="return-value"></a>

## Return Value

3D position in world coordinates or nil if unprojection is not possible.

<a id="discussion"></a>

## Discussion

A 2D point in the view’s coordinate space can refer to any point along a line segment in the 3D coordinate space. Unprojecting gets the 3D position of the point along this line segment that intersects the provided plane.

## See Also

### Mapping between coordinate spaces

- [project(\_:)](project%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the view.
- [unproject(\_:ontoPlane:)](unproject%28__ontoplane_%29.md): Maps a 2D point from the view’s coordinate system onto the given plane in 3D space.
- [unproject(\_:viewport:)](unproject%28__viewport_%29.md): Maps a 2D point from the pixel coordinate system of a viewport into a 3D coordinate space. The point lies on this view’s near clipping plane.
- [ray(through:)](ray%28through_%29.md): Determines the position and direction of a ray through the given point in the 2D space of the view.
