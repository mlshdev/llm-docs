> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/project(_:)](https://developer.apple.com/documentation/realitykit/arview/project(_:))

# project(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the view.

## Declaration

```swift
@MainActor @preconcurrency func project(_ point: SIMD3<Float>) -> CGPoint?
```

## Parameters

- `point`: The point in 3D world coordinates.

<a id="return-value"></a>

## Return Value

A point in the view’s coordinate space.

## See Also

### Mapping between coordinate spaces

- [unproject(\_:ontoPlane:relativeToCamera:)](unproject%28__ontoplane_relativetocamera_%29.md): Unproject a 2D point from the view onto a plane in 3D world coordinates.
- [unproject(\_:ontoPlane:)](unproject%28__ontoplane_%29.md): Maps a 2D point from the view’s coordinate system onto the given plane in 3D space.
- [unproject(\_:viewport:)](unproject%28__viewport_%29.md): Maps a 2D point from the pixel coordinate system of a viewport into a 3D coordinate space. The point lies on this view’s near clipping plane.
- [ray(through:)](ray%28through_%29.md): Determines the position and direction of a ray through the given point in the 2D space of the view.
