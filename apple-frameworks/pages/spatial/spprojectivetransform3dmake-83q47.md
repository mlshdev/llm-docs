> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dmake-83q47](https://developer.apple.com/documentation/spatial/spprojectivetransform3dmake-83q47)

# SPProjectiveTransform3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPProjectiveTransform3D SPProjectiveTransform3DMake(SPSize3D scale, SPRotation3D rotation, SPVector3D translation);
```

## Parameters

- `scale`: The scale.
- `rotation`: The rotation.
- `translation`: The translation.

<a id="return-value"></a>

## Return Value

A new affine transform structure.

<a id="discussion"></a>

## Discussion

Returns a new scale, rotate, translate affine transform.

## See Also

### Creating a 3D projective transform structure

- [SPProjectiveTransform3DMakeWith4x4Matrix](projectivetransform3d/init%28__%29-6g88l.md): Creates a projective transform from the specified double-precision matrix.
- [SPProjectiveTransform3DMakeWithAffine](projectivetransform3d/init%28__%29-9t2jh.md): Creates a projective transform from the specified affine transform.
- [SPProjectiveTransform3DMakeFromTangents](projectivetransform3d/init%28lefttangent_righttangent_toptangent_bottomtangent_nearz_farz_reversez_%29.md): Returns a projective transform from tangents for each side of its frustum.
- [SPProjectiveTransform3DMakeWithRightHandPerspective](projectivetransform3d/init%28fovy_aspectratio_nearz_farz_%29.md): Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DMakeWithRightHandPerspective](projectivetransform3d/init%28fovy_aspectratio_nearz_farz_reversez_%29.md)
- [SPProjectiveTransform3DMake](spprojectivetransform3dmake-6aldt.md): Deprecated. Creates a projective transform from the specified scale, rotate, and translate transforms.
- [SPProjectiveTransform3DMakeShear](spprojectivetransform3dmakeshear.md): Creates an affine transform from the specified shear transform.
- [SPProjectiveTransform3DMakeWithPose](spprojectivetransform3dmakewithpose.md): Creates a projective transform from the specified pose structure.
- [SPProjectiveTransform3DMakeWithScaledPose](spprojectivetransform3dmakewithscaledpose.md): Returns a new projective transform structure from the specified scaled pose structure.
- [SPProjectiveTransform3DMakeWithRHPerspective](spprojectivetransform3dmakewithrhperspective-97qwp.md): Deprecated. Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DMakeWithRHPerspective](spprojectivetransform3dmakewithrhperspective-9gl97.md): Deprecated.
