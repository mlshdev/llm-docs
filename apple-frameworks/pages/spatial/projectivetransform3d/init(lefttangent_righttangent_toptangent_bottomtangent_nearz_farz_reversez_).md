> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/init(lefttangent:righttangent:toptangent:bottomtangent:nearz:farz:reversez:)](https://developer.apple.com/documentation/spatial/projectivetransform3d/init(lefttangent:righttangent:toptangent:bottomtangent:nearz:farz:reversez:))

# init(leftTangent:rightTangent:topTangent:bottomTangent:nearZ:farZ:reverseZ:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a projective transform from tangents for each side of its frustum.

## Declaration

```swift
init(leftTangent: Double, rightTangent: Double, topTangent: Double, bottomTangent: Double, nearZ: Double, farZ: Double, reverseZ: Bool)
```

## Parameters

- `leftTangent`: The positive left tangent.
- `rightTangent`: The positive right tangent.
- `topTangent`: The positive top tangent.
- `bottomTangent`: The positive bottom tangent.
- `nearZ`: The distance to the near clipping plane.
- `farZ`: The distance to the far clipping plane.
- `reverseZ`: A Boolean value that specifies whether the matrix uses reverse z.

## See Also

### Creating a 3D projective transform structure

- [init()](init%28%29-1clia.md): Creates a projective transform.
- [init()](init%28%29-6c4f4.md): Returns a new identity projective transform.
- [init(\_:)](init%28__%29-7b2bq.md): Creates a projective transform from the specified 4 x 4 single-precision matrix.
- [init(\_:)](init%28__%29-6g88l.md): Creates a projective transform from the specified double-precision matrix.
- [init(matrix:)](init%28matrix_%29-8eg5x.md): Creates a projective transform from the specified 4 x 4 double-precision matrix.
- [init(\_:)](init%28__%29-9t2jh.md): Creates a projective transform from the specified affine transform.
- [init(pose:)](init%28pose_%29.md): Creates a projective transform from the specified pose structure.
- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29-4h5wm.md): Creates a projective transform from the specified scale, rotate, and translate transforms.
- [init(shear:)](init%28shear_%29.md): Creates a projective transform from the specified shear transform.
- [init(fovY:aspectRatio:nearZ:farZ:)](init%28fovy_aspectratio_nearz_farz_%29.md): Returns a projective transform with right-hand side perspective.
- [init(fovY:aspectRatio:nearZ:farZ:reverseZ:)](init%28fovy_aspectratio_nearz_farz_reversez_%29.md)
- [init(scaledPose:)](init%28scaledpose_%29.md)

# SPProjectiveTransform3DMakeFromTangents (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a projective transform from tangents for each side of its frustum.

## Declaration

```objectivec
static SPProjectiveTransform3D SPProjectiveTransform3DMakeFromTangents(double leftTangent, double rightTangent, double topTangent, double bottomTangent, double nearZ, double farZ, bool reverseZ);
```

## Parameters

- `leftTangent`: The positive left tangent.
- `rightTangent`: The positive right tangent.
- `topTangent`: The positive top tangent.
- `bottomTangent`: The positive bottom tangent.
- `nearZ`: The distance to the near clipping plane.
- `farZ`: The distance to the far clipping plane.
- `reverseZ`: A Boolean value that specifies whether the matrix uses reverse z.

## See Also

### Creating a 3D projective transform structure

- [SPProjectiveTransform3DMakeWith4x4Matrix](init%28__%29-6g88l.md): Creates a projective transform from the specified double-precision matrix.
- [SPProjectiveTransform3DMakeWithAffine](init%28__%29-9t2jh.md): Creates a projective transform from the specified affine transform.
- [SPProjectiveTransform3DMakeWithRightHandPerspective](init%28fovy_aspectratio_nearz_farz_%29.md): Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DMakeWithRightHandPerspective](init%28fovy_aspectratio_nearz_farz_reversez_%29.md)
- [SPProjectiveTransform3DMake](../spprojectivetransform3dmake-6aldt.md): Deprecated. Creates a projective transform from the specified scale, rotate, and translate transforms.
- [SPProjectiveTransform3DMake](../spprojectivetransform3dmake-83q47.md)
- [SPProjectiveTransform3DMakeShear](../spprojectivetransform3dmakeshear.md): Creates an affine transform from the specified shear transform.
- [SPProjectiveTransform3DMakeWithPose](../spprojectivetransform3dmakewithpose.md): Creates a projective transform from the specified pose structure.
- [SPProjectiveTransform3DMakeWithScaledPose](../spprojectivetransform3dmakewithscaledpose.md): Returns a new projective transform structure from the specified scaled pose structure.
- [SPProjectiveTransform3DMakeWithRHPerspective](../spprojectivetransform3dmakewithrhperspective-97qwp.md): Deprecated. Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DMakeWithRHPerspective](../spprojectivetransform3dmakewithrhperspective-9gl97.md): Deprecated.
