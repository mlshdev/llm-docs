> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dmakewithscaledpose](https://developer.apple.com/documentation/spatial/spprojectivetransform3dmakewithscaledpose)

# SPProjectiveTransform3DMakeWithScaledPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new projective transform structure from the specified scaled pose structure.

## Declaration

```objectivec
static SPProjectiveTransform3D SPProjectiveTransform3DMakeWithScaledPose(SPScaledPose3D pose);
```

## See Also

### Creating a 3D projective transform structure

- [SPProjectiveTransform3DMakeWith4x4Matrix](projectivetransform3d/init%28__%29-6g88l.md): Creates a projective transform from the specified double-precision matrix.
- [SPProjectiveTransform3DMakeWithAffine](projectivetransform3d/init%28__%29-9t2jh.md): Creates a projective transform from the specified affine transform.
- [SPProjectiveTransform3DMakeFromTangents](projectivetransform3d/init%28lefttangent_righttangent_toptangent_bottomtangent_nearz_farz_reversez_%29.md): Returns a projective transform from tangents for each side of its frustum.
- [SPProjectiveTransform3DMakeWithRightHandPerspective](projectivetransform3d/init%28fovy_aspectratio_nearz_farz_%29.md): Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DMakeWithRightHandPerspective](projectivetransform3d/init%28fovy_aspectratio_nearz_farz_reversez_%29.md)
- [SPProjectiveTransform3DMake](spprojectivetransform3dmake-6aldt.md): Deprecated. Creates a projective transform from the specified scale, rotate, and translate transforms.
- [SPProjectiveTransform3DMake](spprojectivetransform3dmake-83q47.md)
- [SPProjectiveTransform3DMakeShear](spprojectivetransform3dmakeshear.md): Creates an affine transform from the specified shear transform.
- [SPProjectiveTransform3DMakeWithPose](spprojectivetransform3dmakewithpose.md): Creates a projective transform from the specified pose structure.
- [SPProjectiveTransform3DMakeWithRHPerspective](spprojectivetransform3dmakewithrhperspective-97qwp.md): Deprecated. Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DMakeWithRHPerspective](spprojectivetransform3dmakewithrhperspective-9gl97.md): Deprecated.
