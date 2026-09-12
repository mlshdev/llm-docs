> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/projection-swift.struct)

# LowLevelRenderer.Camera.Projection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A projection transform that maps from view space to clip space.

## Declaration

```swift
struct Projection
```

## Topics

### Creating perspective projections

- [perspective(fovYRadians:aspectRatio:nearZ:farZ:reverseZ:)](projection-swift.struct/perspective%28fovyradians_aspectratio_nearz_farz_reversez_%29.md): Creates a symmetric perspective projection from a vertical field-of-view angle.
- [perspective(leftTangent:rightTangent:topTangent:bottomTangent:nearZ:farZ:reverseZ:)](projection-swift.struct/perspective%28lefttangent_righttangent_toptangent_bottomtangent_nearz_farz_reversez_%29.md): Creates an off-axis perspective projection from explicit frustum tangents.

### Creating orthographic projections

- [orthographic(height:aspectRatio:nearZ:farZ:reverseZ:)](projection-swift.struct/orthographic%28height_aspectratio_nearz_farz_reversez_%29.md): Creates a symmetric orthographic projection.
- [orthographic(left:right:bottom:top:nearZ:farZ:reverseZ:)](projection-swift.struct/orthographic%28left_right_bottom_top_nearz_farz_reversez_%29.md): Creates an off-axis orthographic projection from explicit frustum planes.

### Creating custom projections

- [custom(matrix:)](projection-swift.struct/custom%28matrix_%29.md): Creates a projection using a caller-supplied matrix.

### Instance Properties

- [matrix](projection-swift.struct/matrix.md): The column-major 4×4 matrix that transforms from view space to clip space.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the projection

- [projection](projection-swift.property.md): The projection transform for this camera.
