> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/custom(matrix:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct/custom(matrix:))

# custom(matrix:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a projection using a caller-supplied matrix.

## Declaration

```swift
static func custom(matrix: simd_float4x4) -> LowLevelRenderer.Camera.Projection
```

## Parameters

- `matrix`: The column-major 4×4 matrix that transforms from view space to clip space.

<a id="return-value"></a>

## Return Value

A custom [LowLevelRenderer.Camera.Projection](../projection-swift.struct.md).
