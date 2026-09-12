> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/unproject(_:viewport:)](https://developer.apple.com/documentation/realitykit/arview/unproject(_:viewport:))

# unproject(\_:viewport:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

Maps a 2D point from the pixel coordinate system of a viewport into a 3D coordinate space. The point lies on this view’s near clipping plane.

## Declaration

```swift
@MainActor @preconcurrency func unproject(_ point: CGPoint, viewport: CGRect) -> SIMD3<Float>?
```

## Parameters

- `point`: A point in `viewport`.
- `viewport`: A viewport.

<a id="return-value"></a>

## Return Value

A view-space 3D coordinate.

## See Also

### Mapping between coordinate spaces

- [project(\_:)](project%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the view.
- [unproject(\_:ontoPlane:relativeToCamera:)](unproject%28__ontoplane_relativetocamera_%29.md): Unproject a 2D point from the view onto a plane in 3D world coordinates.
- [unproject(\_:ontoPlane:)](unproject%28__ontoplane_%29.md): Maps a 2D point from the view’s coordinate system onto the given plane in 3D space.
- [ray(through:)](ray%28through_%29.md): Determines the position and direction of a ray through the given point in the 2D space of the view.
