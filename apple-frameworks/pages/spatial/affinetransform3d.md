> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d](https://developer.apple.com/documentation/spatial/affinetransform3d)

# AffineTransform3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A 3D affine transformation matrix.

## Declaration

```swift
struct AffineTransform3D
```

## Topics

### Creating a 3D affine transform structure

- [init()](affinetransform3d/init%28%29-2uqjl.md): Creates an affine transform.
- [init()](affinetransform3d/init%28%29-6ntm3.md): Returns a new identity affine transform.
- [init(\_:)](affinetransform3d/init%28__%29-52vpb.md): Creates an affine transform from the specified single-precision matrix.
- [init(\_:)](affinetransform3d/init%28__%29-722a2.md): Creates an affine transform from the specified 4 x 3 double-precision matrix.
- [init(\_:)](affinetransform3d/init%28__%29-e2xx.md): Creates an affine transform from the specified transform.
- [init(matrix:)](affinetransform3d/init%28matrix_%29-2inci.md): Creates an affine transform from the specified double-precision matrix.
- [init(pose:)](affinetransform3d/init%28pose_%29.md): Creates an affine transform from the specified pose structure.
- [init(scale:rotation:translation:)](affinetransform3d/init%28scale_rotation_translation_%29-3somu.md): Creates an affine transform from the specified scale, rotate, and translate transforms.
- [init(scaledPose:)](affinetransform3d/init%28scaledpose_%29.md): Creates an affine transform from the specified scale pose structure.
- [init(shear:)](affinetransform3d/init%28shear_%29.md): Creates an affine transform from the specified shear transform.
- [init(truncating:)](affinetransform3d/init%28truncating_%29-40nzj.md): Returns a new affine transform structure from the specified projective transform.
- [init(truncating:)](affinetransform3d/init%28truncating_%29-5wjxy.md): Returns a new affine transform structure from the specified single-precision 4 x 4 matrix truncated to a 4 x 3 matrix.
- [init(truncating:)](affinetransform3d/init%28truncating_%29-9fd9g.md): Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a 4 x 3 matrix.

### Transforming a 3D affine transform structure

- [Axis3D](axis3d.md): Constants that describe an axis.
- [AxisWithFactors](axiswithfactors.md): Constants that describe the axis of a shear transform.
- [changeBasis(from:to:)](affinetransform3d/changebasis%28from_to_%29.md): Returns a new affine transform structure by applying a change-of-basis.
- [flip(along:)](affinetransform3d/flip%28along_%29.md): Flips an affine transform along the specified axis.
- [flipped(along:)](affinetransform3d/flipped%28along_%29.md): Returns an affine transform that results from flipping it along the specified axis.
- [inverse](affinetransform3d/inverse.md): The affine transform’s inverse.
- [scaledBy(x:y:z:)](affinetransform3d/scaledby%28x_y_z_%29.md): Returns a transform that results from scaling with specified double-precision values.
- [sheared(\_:)](affinetransform3d/sheared%28__%29.md): Returns an affine transform that results from shearing over an axis by shear factors for the other two axes.

### Decomposing a 3D affine transform

- [rotation](affinetransform3d/rotation.md): The affine transform’s rotation.
- [scale](affinetransform3d/scale.md): The affine transform’s scale.
- [translation](affinetransform3d/translation.md): The translation component of the affine transform.

### Checking characteristics

- [Dimension3DSet](dimension3dset.md): A set of dimensions.
- [isInvertible](affinetransform3d/isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
- [isUniform(overDimensions:)](affinetransform3d/isuniform%28overdimensions_%29.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [matrix](affinetransform3d/matrix.md): The affine transform’s underlying matrix.
- [matrix3x3](affinetransform3d/matrix3x3.md): The first three columns of an affine transform’s underlying matrix.
- [matrix4x4](affinetransform3d/matrix4x4.md): A 4 x 4 matrix that results from constructing the affine transform’s underlying matrix.

### Comparing values

- [==(\_:\_:)](affinetransform3d/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.
- [isApproximatelyEqual(to:tolerance:)](affinetransform3d/isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two transforms are equal within a specified tolerance.

### Applying arithmetic operations

- [\*(\_:\_:)](affinetransform3d/_%28____%29.md): Returns the concatenation of two affine transforms.
- [\*=(\_:\_:)](affinetransform3d/_=%28____%29.md): Concatenates two affine transforms and stores the result in the left-hand-side variable.

### Deprecated symbols

- [init(\_:)](affinetransform3d/init%28__%29-41dx7.md): Deprecated. Creates an affine transform from the specified 4 x 4 single-precision matrix.
- [init(\_:)](affinetransform3d/init%28__%29-6bm4k.md): Deprecated. Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [init(matrix:)](affinetransform3d/init%28matrix_%29-2tgp8.md): Deprecated. Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [init(matrix:)](affinetransform3d/init%28matrix_%29-6icxq.md): Deprecated. Creates an affine transform from the specified single-precision matrix.
- [init(matrix:)](affinetransform3d/init%28matrix_%29-82rxz.md): Deprecated. Creates an affine transform from the specified 4 x 4 single-precision matrix.
- [init(projectiveTransform:)](affinetransform3d/init%28projectivetransform_%29.md): Deprecated. Creates an affine transform from the specified projective transform.
- [init(scale:rotation:translation:)](affinetransform3d/init%28scale_rotation_translation_%29-40dow.md): Deprecated. Creates an affine transform from the specified scale, rotate, and translate transforms.
- [init(translation:)](affinetransform3d/init%28translation_%29.md): Deprecated.
- [inverted()](affinetransform3d/inverted%28%29.md): Deprecated. Returns a new transform that results from inverting an existing affine transform.
- [offset](affinetransform3d/offset.md): Deprecated. The affine transform’s translation.

### Initializers

- [init(\_:)](affinetransform3d/init%28__%29-7eksa.md): Returns a double-precision affine transformation from a single-precision affine transformation.

### Instance Properties

- [columns](affinetransform3d/columns.md): The columns of the underlying matrix.

### Default Implementations

- [CustomReflectable Implementations](affinetransform3d/customreflectable-implementations.md)
- [Decodable Implementations](affinetransform3d/decodable-implementations.md)
- [Encodable Implementations](affinetransform3d/encodable-implementations.md)
- [Equatable Implementations](affinetransform3d/equatable-implementations.md)
- [Hashable Implementations](affinetransform3d/hashable-implementations.md)
- [Scalable3DProtocol Implementations](affinetransform3d/scalable3dprotocol-implementations.md)
- [Shearable3DProtocol Implementations](affinetransform3d/shearable3dprotocol-implementations.md)
- [Transform3DProtocol Implementations](affinetransform3d/transform3dprotocol-implementations.md)

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

- [AffineTransform3DFloat](affinetransform3dfloat.md)
- [ProjectiveTransform3D](projectivetransform3d.md): A 3D projective transformation matrix.
- [ProjectiveTransform3DFloat](projectivetransform3dfloat.md): A single-precision 3D projective transformation matrix.

# SPAffineTransform3D (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 3D affine transformation matrix.

## Declaration

```objectivec
typedef struct { ... } SPAffineTransform3D;
```

## Topics

### Creating a 3D affine transform structure

- [SPAffineTransform3DMakeWith4x3Matrix](affinetransform3d/init%28__%29-722a2.md): Creates an affine transform from the specified 4 x 3 double-precision matrix.
- [SPAffineTransform3DMakeWithTruncatedProjective](affinetransform3d/init%28truncating_%29-40nzj.md): Returns a new affine transform structure from the specified projective transform.
- [SPAffineTransform3DMakeWithTruncated4x4Matrix](affinetransform3d/init%28truncating_%29-9fd9g.md): Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a 4 x 3 matrix.
- [SPAffineTransform3DMake](spaffinetransform3dmake-3a37f.md)
- [SPAffineTransform3DMake](spaffinetransform3dmake-94le1.md): Deprecated. Creates an affine transform from the specified scale, rotate, and translate transforms.
- [SPAffineTransform3DMakeShear](spaffinetransform3dmakeshear.md): Creates an affine transform from the specified shear transform.
- [SPAffineTransform3DMakeWith4x4Matrix](spaffinetransform3dmakewith4x4matrix.md): Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [SPAffineTransform3DMakeWithPose](spaffinetransform3dmakewithpose.md): Creates an affine transform from the specified pose structure.
- [SPAffineTransform3DMakeWithProjective](spaffinetransform3dmakewithprojective.md): Deprecated. Creates an affine transform from the specified projective transform.
- [SPAffineTransform3DMakeWithScaledPose](spaffinetransform3dmakewithscaledpose.md): Returns a new affine transform structure from the specified scaled pose structure.

### Transforming a 3D affine transform structure

- [SPAxis](axis3d.md): Constants that describe an axis.
- [SPAffineTransform3DChangeBasis](spaffinetransform3dchangebasis.md): Returns a new affine transform structure by applying a change-of-basis.
- [SPAffineTransform3DFlip](spaffinetransform3dflip.md): Returns an affine transform that results from flipping it along the specified axis.
- [SPAffineTransform3DInvalid](spaffinetransform3dinvalid.md): An affine transform that represents an invalid transform.
- [SPAffineTransform3DInverted](spaffinetransform3dinverted.md): Returns a new transform that results from inverting an existing affine transform.
- [SPAffineTransform3DRotate](spaffinetransform3drotate.md): Returns a transform that results from applying the specified rotation.
- [SPAffineTransform3DRotateByQuaternion](spaffinetransform3drotatebyquaternion.md): Returns a transform that results from rotating with the specified quaternion.
- [SPAffineTransform3DScaleBy](spaffinetransform3dscaleby.md): Returns a transform that results from scaling with the specified double-precision values.
- [SPAffineTransform3DScaleBySize](spaffinetransform3dscalebysize.md): Returns a transform that results from scaling with the specified size structure.
- [SPAffineTransform3DScaleUniform](spaffinetransform3dscaleuniform.md): Returns a transform that results from uniformly scaling with the specified double-precision value.
- [SPAffineTransform3DSetTranslation](spaffinetransform3dsettranslation.md): Sets the translation of an affine transform.
- [SPAffineTransform3DShear](spaffinetransform3dshear.md): Returns an affine transform that results from shearing over an axis by shear factors for the other two axes.
- [SPAffineTransform3DTranslate](spaffinetransform3dtranslate-5pm5m.md): Deprecated. Returns a transform with an origin that’s offset by the specified size.
- [SPAffineTransform3DTranslate](spaffinetransform3dtranslate-yb5g.md): Returns a transform with an origin that’s offset by the specified vector.

### Decomposing a 3D affine transform

- [SPAffineTransform3DGetScale](affinetransform3d/scale.md): The affine transform’s scale.
- [SPAffineTransform3DGetOffset](spaffinetransform3dgetoffset.md): Deprecated. The affine transform’s translation.
- [SPAffineTransform3DGetRotation](spaffinetransform3dgetrotation.md): The affine transform’s rotation.

### Checking characteristics

- [SPAffineTransform3DIsInvertible](affinetransform3d/isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
- [matrix](affinetransform3d/matrix.md): The affine transform’s underlying matrix.
- [SPAffineTransform3DGet3x3Matrix](affinetransform3d/matrix3x3.md): The first three columns of an affine transform’s underlying matrix.
- [SPAffineTransform3DGet4x4Matrix](affinetransform3d/matrix4x4.md): A 4 x 4 matrix that results from constructing the affine transform’s underlying matrix.
- [SPAffineTransform3DIsUniformOverDimensions](spaffinetransform3disuniformoverdimensions.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [SPAffineTransform3DIsValid](spaffinetransform3disvalid.md): A Boolean value that indicates whether the transform is a valid transform.

### Comparing values

- [SPAffineTransform3DAlmostEqualToTransform](spaffinetransform3dalmostequaltotransform-16ryg.md)
- [SPAffineTransform3DAlmostEqualToTransform](spaffinetransform3dalmostequaltotransform-9ma98.md)

### Deprecated symbols

- [SPAffineTransform3DGetTranslation](spaffinetransform3dgettranslation.md): The affine transform’s translation.
- [SPAffineTransform3DMakeTranslation](spaffinetransform3dmaketranslation-2y1t6.md): Deprecated. Creates an affine transform from the specified translate transform.
- [SPAffineTransform3DSetOffset](spaffinetransform3dsetoffset.md): Deprecated. Sets the translation of an affine transform.
- [SPAffineTransform3DTranslate](spaffinetransform3dtranslate-5pm5m.md): Deprecated. Returns a transform with an origin that’s offset by the specified size.

## See Also

### Affine and projective transforms

- [SPAffineTransform3DFloat](affinetransform3dfloat.md)
- [SPProjectiveTransform3D](projectivetransform3d.md): A 3D projective transformation matrix.
- [SPProjectiveTransform3DFloat](projectivetransform3dfloat.md): A single-precision 3D projective transformation matrix.
