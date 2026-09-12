> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/orthographic(height:aspectratio:nearz:farz:reversez:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/orthographic(height:aspectratio:nearz:farz:reversez:))

# orthographic(height:aspectRatio:nearZ:farZ:reverseZ:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a symmetric orthographic projection.

## Declaration

```swift
static func orthographic(height: Float, aspectRatio: Float, nearZ: Float, farZ: Float, reverseZ: Bool = true) -> LowLevelRenderer.Camera.Projection
```

## Parameters

- `height`: The height of the orthographic view volume.
- `aspectRatio`: The ratio of the viewport width to its height.
- `nearZ`: The distance to the near clipping plane.
- `farZ`: The distance to the far clipping plane.
- `reverseZ`: If `true`, the depth range is reversed (1 at near, 0 at far). Defaults to `true`.

<a id="return-value"></a>

## Return Value

A symmetric orthographic [LowLevelRenderer.Camera.Projection](../projection-swift.struct.md).

## See Also

### Creating orthographic projections

- [orthographic(left:right:bottom:top:nearZ:farZ:reverseZ:)](orthographic%28left_right_bottom_top_nearz_farz_reversez_%29.md): Creates an off-axis orthographic projection from explicit frustum planes.
