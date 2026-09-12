> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d](https://developer.apple.com/documentation/spatial/projectivetransform3d)

# ProjectiveTransform3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A 3D projective transformation matrix.

## Declaration

```swift
struct ProjectiveTransform3D
```

## Topics

### Creating a 3D projective transform structure

- [init()](projectivetransform3d/init%28%29-1clia.md): Creates a projective transform.
- [init()](projectivetransform3d/init%28%29-6c4f4.md): Returns a new identity projective transform.
- [init(\_:)](projectivetransform3d/init%28__%29-7b2bq.md): Creates a projective transform from the specified 4 x 4 single-precision matrix.
- [init(\_:)](projectivetransform3d/init%28__%29-6g88l.md): Creates a projective transform from the specified double-precision matrix.
- [init(matrix:)](projectivetransform3d/init%28matrix_%29-8eg5x.md): Creates a projective transform from the specified 4 x 4 double-precision matrix.
- [init(\_:)](projectivetransform3d/init%28__%29-9t2jh.md): Creates a projective transform from the specified affine transform.
- [init(pose:)](projectivetransform3d/init%28pose_%29.md): Creates a projective transform from the specified pose structure.
- [init(scale:rotation:translation:)](projectivetransform3d/init%28scale_rotation_translation_%29-4h5wm.md): Creates a projective transform from the specified scale, rotate, and translate transforms.
- [init(shear:)](projectivetransform3d/init%28shear_%29.md): Creates a projective transform from the specified shear transform.
- [init(leftTangent:rightTangent:topTangent:bottomTangent:nearZ:farZ:reverseZ:)](projectivetransform3d/init%28lefttangent_righttangent_toptangent_bottomtangent_nearz_farz_reversez_%29.md): Returns a projective transform from tangents for each side of its frustum.
- [init(fovY:aspectRatio:nearZ:farZ:)](projectivetransform3d/init%28fovy_aspectratio_nearz_farz_%29.md): Returns a projective transform with right-hand side perspective.
- [init(fovY:aspectRatio:nearZ:farZ:reverseZ:)](projectivetransform3d/init%28fovy_aspectratio_nearz_farz_reversez_%29.md)
- [init(scaledPose:)](projectivetransform3d/init%28scaledpose_%29.md)

### Inspecting a 3D projective transform’s properties

- [inverse](projectivetransform3d/inverse.md): The projective transform’s inverse.
- [scaleComponent](projectivetransform3d/scalecomponent.md): The scale component of the projective transform.
- [translation](projectivetransform3d/translation.md): The translation component of the projective transform.
- [matrix](projectivetransform3d/matrix.md): The projective transform’s underlying matrix.

### Transforming a 3D projective transform structure

- [sheared(\_:)](projectivetransform3d/sheared%28__%29.md): Returns a projective transform that results from shearing over an axis by shear factors for the other two axes.
- [AxisWithFactors](axiswithfactors.md): Constants that describe the axis of a shear transform.
- [Axis3D](axis3d.md): Constants that describe an axis.
- [flip(along:)](projectivetransform3d/flip%28along_%29.md): Flips a projective transform along the specified axis.
- [flipped(along:)](projectivetransform3d/flipped%28along_%29.md): Returns a projective transform that results from flipping it along the specified axis.

### Decomposing a 3D projective transform

- [rotation](projectivetransform3d/rotation.md): The projective transform’s rotation.

### Checking characteristics

- [is3DProjection()](projectivetransform3d/is3dprojection%28%29.md): Returns a Boolean value that indicates whether the transform is a 3D projection.
- [isUniform(overDimensions:)](projectivetransform3d/isuniform%28overdimensions_%29.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [isAffine](projectivetransform3d/isaffine.md): A Boolean value that indicates whether the transform is affine.
- [isInvertible](projectivetransform3d/isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.

### Comparing values

- [isApproximatelyEqual(to:tolerance:)](projectivetransform3d/isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two transforms are equal within a specified tolerance.

### Applying arithmetic operations

- [\*(\_:\_:)](projectivetransform3d/_%28____%29.md): Returns the concatenation of two projective transforms.
- [\*=(\_:\_:)](projectivetransform3d/_=%28____%29.md): Concatenates two projective transforms and stores the result in the left-hand-side variable.

### Deprecated symbols

- [offset](projectivetransform3d/offset.md): Deprecated. The projective transform’s translation.
- [scale](projectivetransform3d/scale.md): Deprecated. The projective transform’s scale.
- [inverted()](projectivetransform3d/inverted%28%29.md): Deprecated. Returns a new transform that results from inverting an existing projective transform.
- [init(matrix:)](projectivetransform3d/init%28matrix_%29-zfb.md): Deprecated. Creates a projective transform from the specified 4 x 4 single-precision matrix.
- [init(scale:rotation:translation:)](projectivetransform3d/init%28scale_rotation_translation_%29-8qxxq.md): Deprecated. Creates a projective transform from the specified scale, rotate, and translate transforms.
- [init(fovyRadians:aspectRatio:nearZ:farZ:reverseZ:)](projectivetransform3d/init%28fovyradians_aspectratio_nearz_farz_reversez_%29.md): Deprecated. Returns a projective transform with right-hand-side perspective and optional reverse-z.
- [init(translation:)](projectivetransform3d/init%28translation_%29.md): Deprecated.
- [init(fovyRadians:aspectRatio:nearZ:farZ:)](projectivetransform3d/init%28fovyradians_aspectratio_nearz_farz_%29.md): Deprecated.

### Initializers

- [init(\_:)](projectivetransform3d/init%28__%29-7nv9f.md): Returns a double-precision projective transformation from a single-precision projective transformation.

### Default Implementations

- [CustomReflectable Implementations](projectivetransform3d/customreflectable-implementations.md)
- [Scalable3DProtocol Implementations](projectivetransform3d/scalable3dprotocol-implementations.md)
- [Shearable3DProtocol Implementations](projectivetransform3d/shearable3dprotocol-implementations.md)
- [Transform3DProtocol Implementations](projectivetransform3d/transform3dprotocol-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Rotatable3D](rotatable3d.md)
- [Rotatable3DProtocol](rotatable3dprotocol.md)
- [Scalable3D](scalable3d.md)
- [Scalable3DProtocol](scalable3dprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shearable3D](shearable3d.md)
- [Shearable3DProtocol](shearable3dprotocol.md)
- [SpatialTypeProtocol](spatialtypeprotocol.md)
- [Transform3DProtocol](transform3dprotocol.md)
- [Translatable3D](translatable3d.md)
- [Translatable3DProtocol](translatable3dprotocol.md)

## See Also

### Affine and projective transforms

- [AffineTransform3D](affinetransform3d.md): A 3D affine transformation matrix.
- [AffineTransform3DFloat](affinetransform3dfloat.md)
- [ProjectiveTransform3DFloat](projectivetransform3dfloat.md): A single-precision 3D projective transformation matrix.

# SPProjectiveTransform3D (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 3D projective transformation matrix.

## Declaration

```objectivec
typedef struct { ... } SPProjectiveTransform3D;
```

## Topics

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
- [SPProjectiveTransform3DMakeWithScaledPose](spprojectivetransform3dmakewithscaledpose.md): Returns a new projective transform structure from the specified scaled pose structure.
- [SPProjectiveTransform3DMakeWithRHPerspective](spprojectivetransform3dmakewithrhperspective-97qwp.md): Deprecated. Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DMakeWithRHPerspective](spprojectivetransform3dmakewithrhperspective-9gl97.md): Deprecated.

### Inspecting a 3D projective transform’s properties

- [matrix](projectivetransform3d/matrix.md): The projective transform’s underlying matrix.

### Transforming a 3D projective transform structure

- [SPProjectiveTransform3DScaleBy](spprojectivetransform3dscaleby.md): Returns a transform that results from scaling with the specified double-precision values.
- [SPProjectiveTransform3DShear](spprojectivetransform3dshear.md): Returns a projective transform that results from shearing over an axis by shear factors for the other two axes.
- [SPAxis](axis3d.md): Constants that describe an axis.
- [SPProjectiveTransform3DFlip](spprojectivetransform3dflip.md): Returns a projective transform that results from flipping it along the specified axis.
- [SPProjectiveTransform3DInverted](spprojectivetransform3dinverted.md): Returns a new transform that results from inverting an existing projective transform.
- [SPProjectiveTransform3DSetTranslation](spprojectivetransform3dsettranslation.md): Sets the translation of a projective transform.
- [SPProjectiveTransform3DRotate](spprojectivetransform3drotate.md): Returns a transform that results from applying the specified rotation.
- [SPProjectiveTransform3DRotateByQuaternion](spprojectivetransform3drotatebyquaternion.md): Returns a transform that results from rotating with the specified quaternion.
- [SPProjectiveTransform3DScaleBySize](spprojectivetransform3dscalebysize.md): Returns a transform that results from scaling with the specified size structure.
- [SPProjectiveTransform3DScaleUniform](spprojectivetransform3dscaleuniform.md): Returns a transform that results from uniformly scaling with the specified double-precision value.
- [SPProjectiveTransform3DTranslate](spprojectivetransform3dtranslate-4tynj.md): Deprecated. Returns a transform with an origin that’s offset by the specified size.
- [SPProjectiveTransform3DTranslate](spprojectivetransform3dtranslate-7ecid.md): Returns a transform with an origin that’s offset by the specified vector.

### Decomposing a 3D projective transform

- [SPProjectiveTransform3DGetRotation](spprojectivetransform3dgetrotation.md): The projective transform’s rotation.
- [SPProjectiveTransform3DGetScale](spprojectivetransform3dgetscale.md): The projective transform’s scale.
- [SPProjectiveTransform3DGetOffset](spprojectivetransform3dgetoffset.md): Deprecated. The projective transform’s translation.

### Checking characteristics

- [SPProjectiveTransform3DIs3DProjection](projectivetransform3d/is3dprojection%28%29.md): Returns a Boolean value that indicates whether the transform is a 3D projection.
- [SPProjectiveTransform3DIsAffine](projectivetransform3d/isaffine.md): A Boolean value that indicates whether the transform is affine.
- [SPProjectiveTransform3DIsInvertible](projectivetransform3d/isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
- [SPProjectiveTransform3DIsUniformOverDimensions](spprojectivetransform3disuniformoverdimensions.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [SPProjectiveTransform3DIsValid](spprojectivetransform3disvalid.md): A Boolean value that indicates whether the transform is a valid transform.
- [SPProjectiveTransform3DInvalid](spprojectivetransform3dinvalid.md): The null transform that represents an invalid value.

### Comparing values

- [SPProjectiveTransform3DAlmostEqualToTransform](spprojectivetransform3dalmostequaltotransform-5qqyc.md): Returns a Boolean value that indicates whether two transforms are equal within a default tolerance.
- [SPProjectiveTransform3DAlmostEqualToTransform](spprojectivetransform3dalmostequaltotransform-33crc.md): Returns a Boolean value that indicates whether two transforms are equal within a specified tolerance.

### Deprecated symbols

- [SPProjectiveTransform3DMakeWithRightHandPerspective](projectivetransform3d/init%28fovyradians_aspectratio_nearz_farz_reversez_%29.md): Deprecated. Returns a projective transform with right-hand-side perspective and optional reverse-z.
- [SPProjectiveTransform3DMakeWithRightHandPerspective](projectivetransform3d/init%28fovyradians_aspectratio_nearz_farz_%29.md): Deprecated.
- [SPProjectiveTransform3DSetOffset](spprojectivetransform3dsetoffset.md): Deprecated. Sets the translation of a projective transform.
- [SPProjectiveTransform3DMakeTranslation](spprojectivetransform3dmaketranslation-5hc37.md): Deprecated. Creates a projective transform from the specified translate transform.
- [SPProjectiveTransform3DMakeWithRHPerspective](spprojectivetransform3dmakewithrhperspective-97qwp.md): Deprecated. Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DTranslate](spprojectivetransform3dtranslate-4tynj.md): Deprecated. Returns a transform with an origin that’s offset by the specified size.
- [SPProjectiveTransform3DGetTranslation](spprojectivetransform3dgettranslation.md): The projective transform’s translation.

## See Also

### Affine and projective transforms

- [SPAffineTransform3D](affinetransform3d.md): A 3D affine transformation matrix.
- [SPAffineTransform3DFloat](affinetransform3dfloat.md)
- [SPProjectiveTransform3DFloat](projectivetransform3dfloat.md): A single-precision 3D projective transformation matrix.
