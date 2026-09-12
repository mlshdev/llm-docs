> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/init(truncating:)-40nzj](https://developer.apple.com/documentation/spatial/affinetransform3d/init(truncating:)-40nzj)

# init(truncating:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new affine transform structure from the specified projective transform.

## Declaration

```swift
init(truncating transform: ProjectiveTransform3D)
```

## See Also

### Creating a 3D affine transform structure

- [init()](init%28%29-2uqjl.md): Creates an affine transform.
- [init()](init%28%29-6ntm3.md): Returns a new identity affine transform.
- [init(\_:)](init%28__%29-52vpb.md): Creates an affine transform from the specified single-precision matrix.
- [init(\_:)](init%28__%29-722a2.md): Creates an affine transform from the specified 4 x 3 double-precision matrix.
- [init(\_:)](init%28__%29-e2xx.md): Creates an affine transform from the specified transform.
- [init(matrix:)](init%28matrix_%29-2inci.md): Creates an affine transform from the specified double-precision matrix.
- [init(pose:)](init%28pose_%29.md): Creates an affine transform from the specified pose structure.
- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29-3somu.md): Creates an affine transform from the specified scale, rotate, and translate transforms.
- [init(scaledPose:)](init%28scaledpose_%29.md): Creates an affine transform from the specified scale pose structure.
- [init(shear:)](init%28shear_%29.md): Creates an affine transform from the specified shear transform.
- [init(truncating:)](init%28truncating_%29-5wjxy.md): Returns a new affine transform structure from the specified single-precision 4 x 4 matrix truncated to a 4 x 3 matrix.
- [init(truncating:)](init%28truncating_%29-9fd9g.md): Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a 4 x 3 matrix.

# SPAffineTransform3DMakeWithTruncatedProjective (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new affine transform structure from the specified projective transform.

## Declaration

```objectivec
static SPAffineTransform3D SPAffineTransform3DMakeWithTruncatedProjective(SPProjectiveTransform3D transform);
```

## See Also

### Creating a 3D affine transform structure

- [SPAffineTransform3DMakeWith4x3Matrix](init%28__%29-722a2.md): Creates an affine transform from the specified 4 x 3 double-precision matrix.
- [SPAffineTransform3DMakeWithTruncated4x4Matrix](init%28truncating_%29-9fd9g.md): Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a 4 x 3 matrix.
- [SPAffineTransform3DMake](../spaffinetransform3dmake-3a37f.md)
- [SPAffineTransform3DMake](../spaffinetransform3dmake-94le1.md): Deprecated. Creates an affine transform from the specified scale, rotate, and translate transforms.
- [SPAffineTransform3DMakeShear](../spaffinetransform3dmakeshear.md): Creates an affine transform from the specified shear transform.
- [SPAffineTransform3DMakeWith4x4Matrix](../spaffinetransform3dmakewith4x4matrix.md): Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [SPAffineTransform3DMakeWithPose](../spaffinetransform3dmakewithpose.md): Creates an affine transform from the specified pose structure.
- [SPAffineTransform3DMakeWithProjective](../spaffinetransform3dmakewithprojective.md): Deprecated. Creates an affine transform from the specified projective transform.
- [SPAffineTransform3DMakeWithScaledPose](../spaffinetransform3dmakewithscaledpose.md): Returns a new affine transform structure from the specified scaled pose structure.
