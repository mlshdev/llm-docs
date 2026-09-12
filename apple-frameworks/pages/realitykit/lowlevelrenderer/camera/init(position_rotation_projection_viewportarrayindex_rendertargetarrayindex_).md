> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/init(position:rotation:projection:viewportarrayindex:rendertargetarrayindex:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/init(position:rotation:projection:viewportarrayindex:rendertargetarrayindex:))

# init(position:rotation:projection:viewportArrayIndex:renderTargetArrayIndex:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a camera with the given position, rotation, projection, and viewport/render-target indices.

## Declaration

```swift
init(position: SIMD3<Float>, rotation: simd_quatf, projection: LowLevelRenderer.Camera.Projection = .custom(matrix: .init(diagonal: .one)), viewportArrayIndex: Int = 0, renderTargetArrayIndex: Int = 0)
```

## Parameters

- `position`: The position of the camera in world space. Defaults to the origin.
- `rotation`: The orientation of the camera. Defaults to identity.
- `projection`: The projection transform for this camera. Defaults to a custom identity matrix.
- `viewportArrayIndex`: The index into the `Output.viewports` and `Output.scissorRects` arrays for this camera. Defaults to `0`.
- `renderTargetArrayIndex`: The index into the render target texture array slice for this camera. Defaults to `0`.
