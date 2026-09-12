> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dmake-94le1](https://developer.apple.com/documentation/spatial/spaffinetransform3dmake-94le1)

# SPAffineTransform3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 16.0) · iPadOS 16.0+ (deprecated in 16.0) · Mac Catalyst 16.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 13.0) · tvOS 16.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 9.0)

Creates an affine transform from the specified scale, rotate, and translate transforms.

## Declaration

```objectivec
static SPAffineTransform3D SPAffineTransform3DMake(SPSize3D scale, SPRotation3D rotation, SPSize3D translation);
```

## See Also

### Creating a 3D affine transform structure

- [SPAffineTransform3DMakeWith4x3Matrix](affinetransform3d/init%28__%29-722a2.md): Creates an affine transform from the specified 4 x 3 double-precision matrix.
- [SPAffineTransform3DMakeWithTruncatedProjective](affinetransform3d/init%28truncating_%29-40nzj.md): Returns a new affine transform structure from the specified projective transform.
- [SPAffineTransform3DMakeWithTruncated4x4Matrix](affinetransform3d/init%28truncating_%29-9fd9g.md): Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a 4 x 3 matrix.
- [SPAffineTransform3DMake](spaffinetransform3dmake-3a37f.md)
- [SPAffineTransform3DMakeShear](spaffinetransform3dmakeshear.md): Creates an affine transform from the specified shear transform.
- [SPAffineTransform3DMakeWith4x4Matrix](spaffinetransform3dmakewith4x4matrix.md): Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [SPAffineTransform3DMakeWithPose](spaffinetransform3dmakewithpose.md): Creates an affine transform from the specified pose structure.
- [SPAffineTransform3DMakeWithProjective](spaffinetransform3dmakewithprojective.md): Deprecated. Creates an affine transform from the specified projective transform.
- [SPAffineTransform3DMakeWithScaledPose](spaffinetransform3dmakewithscaledpose.md): Returns a new affine transform structure from the specified scaled pose structure.
