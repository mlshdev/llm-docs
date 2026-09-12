> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/orthographic(left:right:bottom:top:nearz:farz:reversez:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/orthographic(left:right:bottom:top:nearz:farz:reversez:))

# orthographic(left:right:bottom:top:nearZ:farZ:reverseZ:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an off-axis orthographic projection from explicit frustum planes.

## Declaration

```swift
static func orthographic(left: Float, right: Float, bottom: Float, top: Float, nearZ: Float, farZ: Float, reverseZ: Bool = true) -> LowLevelRenderer.Camera.Projection
```

## Parameters

- `left`: The left plane of the orthographic view volume.
- `right`: The right plane of the orthographic view volume.
- `bottom`: The bottom plane of the orthographic view volume.
- `top`: The top plane of the orthographic view volume.
- `nearZ`: The distance to the near clipping plane.
- `farZ`: The distance to the far clipping plane.
- `reverseZ`: If `true`, the depth range is reversed (1 at near, 0 at far). Defaults to `true`.

<a id="return-value"></a>

## Return Value

An off-axis orthographic [LowLevelRenderer.Camera.Projection](../projection-swift.struct.md).

## See Also

### Creating orthographic projections

- [orthographic(height:aspectRatio:nearZ:farZ:reverseZ:)](orthographic%28height_aspectratio_nearz_farz_reversez_%29.md): Creates a symmetric orthographic projection.
