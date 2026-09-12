> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/perspective(lefttangent:righttangent:toptangent:bottomtangent:nearz:farz:reversez:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/perspective(lefttangent:righttangent:toptangent:bottomtangent:nearz:farz:reversez:))

# perspective(leftTangent:rightTangent:topTangent:bottomTangent:nearZ:farZ:reverseZ:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an off-axis perspective projection from explicit frustum tangents.

## Declaration

```swift
static func perspective(leftTangent: Float, rightTangent: Float, topTangent: Float, bottomTangent: Float, nearZ: Float, farZ: Float, reverseZ: Bool = true) -> LowLevelRenderer.Camera.Projection
```

## Parameters

- `leftTangent`: The tangent of the left frustum half-angle.
- `rightTangent`: The tangent of the right frustum half-angle.
- `topTangent`: The tangent of the top frustum half-angle.
- `bottomTangent`: The tangent of the bottom frustum half-angle.
- `nearZ`: The distance to the near clipping plane.
- `farZ`: The distance to the far clipping plane.
- `reverseZ`: If `true`, the depth range is reversed (1 at near, 0 at far). Defaults to `true`.

<a id="return-value"></a>

## Return Value

An off-axis perspective [LowLevelRenderer.Camera.Projection](../projection-swift.struct.md).

## See Also

### Creating perspective projections

- [perspective(fovYRadians:aspectRatio:nearZ:farZ:reverseZ:)](perspective%28fovyradians_aspectratio_nearz_farz_reversez_%29.md): Creates a symmetric perspective projection from a vertical field-of-view angle.
