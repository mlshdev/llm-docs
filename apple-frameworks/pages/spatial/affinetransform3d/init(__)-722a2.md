> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/init(_:)-722a2](https://developer.apple.com/documentation/spatial/affinetransform3d/init(_:)-722a2)

# init(\_:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an affine transform from the specified 4 x 3 double-precision matrix.

## Declaration

```swift
init(_ matrix: simd_double4x3)
```

## Parameters

- `matrix`: The source single-precision matrix.

## See Also

### Creating a 3D affine transform structure

- [init()](init%28%29-2uqjl.md): Creates an affine transform.
- [init()](init%28%29-6ntm3.md): Returns a new identity affine transform.
- [init(\_:)](init%28__%29-52vpb.md): Creates an affine transform from the specified single-precision matrix.
- [init(\_:)](init%28__%29-e2xx.md): Creates an affine transform from the specified transform.
- [init(matrix:)](init%28matrix_%29-2inci.md): Creates an affine transform from the specified double-precision matrix.
- [init(pose:)](init%28pose_%29.md): Creates an affine transform from the specified pose structure.
- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29-3somu.md): Creates an affine transform from the specified scale, rotate, and translate transforms.
- [init(scaledPose:)](init%28scaledpose_%29.md): Creates an affine transform from the specified scale pose structure.
- [init(shear:)](init%28shear_%29.md): Creates an affine transform from the specified shear transform.
- [init(truncating:)](init%28truncating_%29-40nzj.md): Returns a new affine transform structure from the specified projective transform.
- [init(truncating:)](init%28truncating_%29-5wjxy.md): Returns a new affine transform structure from the specified single-precision 4 x 4 matrix truncated to a 4 x 3 matrix.
- [init(truncating:)](init%28truncating_%29-9fd9g.md): Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a 4 x 3 matrix.

# SPAffineTransform3DMakeWith4x3Matrix (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an affine transform from the specified 4 x 3 double-precision matrix.

## Declaration

```objectivec
static SPAffineTransform3D SPAffineTransform3DMakeWith4x3Matrix(simd_double4x3 matrix);
```

## Parameters

- `matrix`: The source single-precision matrix.

## See Also

### Creating a 3D affine transform structure

- [SPAffineTransform3DMakeWithTruncatedProjective](init%28truncating_%29-40nzj.md): Returns a new affine transform structure from the specified projective transform.
- [SPAffineTransform3DMakeWithTruncated4x4Matrix](init%28truncating_%29-9fd9g.md): Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a 4 x 3 matrix.
- [SPAffineTransform3DMake](../spaffinetransform3dmake-3a37f.md)
- [SPAffineTransform3DMake](../spaffinetransform3dmake-94le1.md): Deprecated. Creates an affine transform from the specified scale, rotate, and translate transforms.
- [SPAffineTransform3DMakeShear](../spaffinetransform3dmakeshear.md): Creates an affine transform from the specified shear transform.
- [SPAffineTransform3DMakeWith4x4Matrix](../spaffinetransform3dmakewith4x4matrix.md): Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [SPAffineTransform3DMakeWithPose](../spaffinetransform3dmakewithpose.md): Creates an affine transform from the specified pose structure.
- [SPAffineTransform3DMakeWithProjective](../spaffinetransform3dmakewithprojective.md): Deprecated. Creates an affine transform from the specified projective transform.
- [SPAffineTransform3DMakeWithScaledPose](../spaffinetransform3dmakewithscaledpose.md): Returns a new affine transform structure from the specified scaled pose structure.
