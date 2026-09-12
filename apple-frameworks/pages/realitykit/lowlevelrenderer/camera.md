> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera)

# LowLevelRenderer.Camera

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The view and projection parameters for a single camera.

## Declaration

```swift
struct Camera
```

## Topics

### Creating a camera

- [init(position:rotation:projection:viewportArrayIndex:renderTargetArrayIndex:)](camera/init%28position_rotation_projection_viewportarrayindex_rendertargetarrayindex_%29.md): Creates a camera with the given position, rotation, projection, and viewport/render-target indices.

### Configuring the projection

- [projection](camera/projection-swift.property.md): The projection transform for this camera.
- [LowLevelRenderer.Camera.Projection](camera/projection-swift.struct.md): A projection transform that maps from view space to clip space.

### Specifying render targets

- [renderTargetArrayIndex](camera/rendertargetarrayindex.md): The index into the render target texture array slice for this camera.
- [viewportArrayIndex](camera/viewportarrayindex.md): The index into the output viewports and scissor rects arrays for this camera.

### Computing culling planes

- [computeCullingPlanes()](camera/computecullingplanes%28%29.md): Computes and returns the culling planes for this camera’s view volume.
- [computeCullingPlanes(\_:)](camera/computecullingplanes%28__%29.md): Computes the culling planes for this camera’s view volume, writing them to an output span.

### Instance Properties

- [position](camera/position.md): The position of the camera in world space.
- [rotation](camera/rotation.md): The orientation of the camera, expressed as a unit quaternion.

## See Also

### Configuring cameras

- [cameras](cameras.md): The array of active cameras.
- [LowLevelRenderer.CameraArray](cameraarray.md): A mutable, fixed-capacity array of camera values.
