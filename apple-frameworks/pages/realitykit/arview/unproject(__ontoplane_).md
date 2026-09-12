> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/unproject(_:ontoplane:)](https://developer.apple.com/documentation/realitykit/arview/unproject(_:ontoplane:))

# unproject(\_:ontoPlane:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

Maps a 2D point from the view’s coordinate system onto the given plane in 3D space.

## Declaration

```swift
@MainActor @preconcurrency func unproject(_ point: CGPoint, ontoPlane planeTransform: float4x4) -> SIMD3<Float>?
```

## Parameters

- `point`: The point in the view’s coordinate system.
- `planeTransform`: A transform used to define the coordinate system of the plane. The positive y-axis is taken as the normal of the plane.

<a id="return-value"></a>

## Return Value

The 3D position in world coordinates, or `nil` if the mapping isn’t possible.

## See Also

### Mapping between coordinate spaces

- [project(\_:)](project%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the view.
- [unproject(\_:ontoPlane:relativeToCamera:)](unproject%28__ontoplane_relativetocamera_%29.md): Unproject a 2D point from the view onto a plane in 3D world coordinates.
- [unproject(\_:viewport:)](unproject%28__viewport_%29.md): Maps a 2D point from the pixel coordinate system of a viewport into a 3D coordinate space. The point lies on this view’s near clipping plane.
- [ray(through:)](ray%28through_%29.md): Determines the position and direction of a ray through the given point in the 2D space of the view.
