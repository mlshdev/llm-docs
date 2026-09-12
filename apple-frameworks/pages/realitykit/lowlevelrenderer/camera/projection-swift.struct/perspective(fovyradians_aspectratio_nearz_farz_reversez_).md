> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/perspective(fovyradians:aspectratio:nearz:farz:reversez:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/perspective(fovyradians:aspectratio:nearz:farz:reversez:))

# perspective(fovYRadians:aspectRatio:nearZ:farZ:reverseZ:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a symmetric perspective projection from a vertical field-of-view angle.

## Declaration

```swift
static func perspective(fovYRadians: Float, aspectRatio: Float, nearZ: Float, farZ: Float, reverseZ: Bool = true) -> LowLevelRenderer.Camera.Projection
```

## Parameters

- `fovYRadians`: The vertical field-of-view angle, in radians.
- `aspectRatio`: The ratio of the viewport width to its height.
- `nearZ`: The distance to the near clipping plane.
- `farZ`: The distance to the far clipping plane.
- `reverseZ`: If `true`, the depth range is reversed (1 at near, 0 at far). Defaults to `true`.

<a id="return-value"></a>

## Return Value

A symmetric perspective [LowLevelRenderer.Camera.Projection](../projection-swift.struct.md).

## See Also

### Creating perspective projections

- [perspective(leftTangent:rightTangent:topTangent:bottomTangent:nearZ:farZ:reverseZ:)](perspective%28lefttangent_righttangent_toptangent_bottomtangent_nearz_farz_reversez_%29.md): Creates an off-axis perspective projection from explicit frustum tangents.
