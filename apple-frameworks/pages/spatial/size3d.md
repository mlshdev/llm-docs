> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/size3d](https://developer.apple.com/documentation/spatial/size3d)

# Size3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A size that describes width, height, and depth in a 3D coordinate system.

## Declaration

```swift
struct Size3D
```

## Topics

### Creating a 3D size structure

- [init()](size3d/init%28%29.md): Creates a size structure.
- [init(width:height:depth:)](size3d/init%28width_height_depth_%29-4j9bk.md): Creates a size structure from the specified double-precision values.
- [init(width:height:depth:)](size3d/init%28width_height_depth_%29-4kscw.md): Creates a size structure from the specified floating-point values.
- [init(\_:)](size3d/init%28__%29-2ibhr.md): Creates a size structure from the specified single-precision vector.
- [init(\_:)](size3d/init%28__%29-3y7nr.md): Creates a size structure from the specified double-precision vector.
- [init(vector:)](size3d/init%28vector_%29.md): Creates a size structure from the specified double-precision vector.
- [init(\_:)](size3d/init%28__%29-7kyp0.md): Creates a size structure from the specified Spatial point.
- [init(\_:)](size3d/init%28__%29-6nss1.md): Creates a size structure from the specified Spatial vector.

### Inspecting a 3D size’s properties

- [width](size3d/width.md): The width value.
- [height](size3d/height.md): The height value.
- [depth](size3d/depth.md): The depth value.
- [size](size3d/size.md): The size value.
- [vector](size3d/vector.md)

### Transforming a 3D size structure

- [applying(\_:)](size3d/applying%28__%29-85mlm.md): Returns a size that results from applying the specified pose.
- [applying(\_:)](size3d/applying%28__%29-7e2pf.md): Returns a size that’s transformed by the specified scaled pose.
- [applying(\_:)](size3d/applying%28__%29-85mlm.md): Returns a size that results from applying the specified pose.
- [unapplying(\_:)](size3d/unapplying%28__%29-7qam3.md): Returns a size that results from unapplying the specified affine transform.
- [unapplying(\_:)](size3d/unapplying%28__%29-yock.md): Returns a size that results from unapplying the specified projective transform.
- [unapplying(\_:)](size3d/unapplying%28__%29-3ip2e.md): Returns a size that results from unapplying the specified pose.
- [sheared(\_:)](size3d/sheared%28__%29.md): Returns a size that results from shearing over an axis by shear factors for the other two axes.
- [applying(\_:)](size3d/applying%28__%29-7e2pf.md): Returns a size that’s transformed by the specified scaled pose.
- [unapplying(\_:)](size3d/unapplying%28__%29-42rsa.md): Returns a size that’s transformed by the inverse of the specified scaled pose.

### Checking characteristics

- [contains(anyOf:)](size3d/contains%28anyof_%29.md): Returns a Boolean value that indicates whether the size contains the specified point.

### Creating derived 3D sizes

- [intersection(\_:)](size3d/intersection%28__%29.md): Returns the intersection of two sizes.

### Comparing values

- [==(\_:\_:)](size3d/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

### 3D size constants

- [one](size3d/one.md): The size structure with width, height, and depth values of one.

### Applying arithmetic operations

- [\*(\_:\_:)](size3d/_%28____%29-751dt.md): Returns a size that’s the product of a size and a scalar value.
- [\*(\_:\_:)](size3d/_%28____%29-8zb5j.md): Returns a size that’s the product of a scalar value and a size.
- [\*(\_:\_:)](size3d/_%28____%29-4qpgt.md): Returns the size that results from applying the affine transform to the size.
- [\*(\_:\_:)](size3d/_%28____%29-52miz.md): Returns the size that results from applying the projective transform to the size.
- [\*(\_:\_:)](size3d/_%28____%29-5bb1n.md): Returns a new size after applying the pose to the size.
- [+(\_:\_:)](size3d/+%28____%29.md): Returns a size that’s the element-wise sum of two sizes.
- [-(\_:)](size3d/-%28__%29.md): Returns a size that’s the element-wise negation of the size.
- [-(\_:\_:)](size3d/-%28____%29.md): Returns a size that’s the element-wise difference of two points.
- [\*=(\_:\_:)](size3d/_=%28____%29.md): Multiplies a size and a double-precision value, and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](size3d/+=%28____%29-75tn3.md): Adds two size structures and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](size3d/+=%28____%29-7yrej.md): Adds a size and a vector, and stores the result in the left-hand-side variable.
- [-=(\_:\_:)](size3d/-=%28____%29-8t5kg.md): Subtracts a size from a size and stores the difference in the left-hand-side variable.
- [-=(\_:\_:)](size3d/-=%28____%29-3te52.md): Subtracts a size from a vector and stores the difference in the left-hand-side variable.
- [/(\_:\_:)](size3d/_%28____%29.md): Returns a size with each element divided by a scalar value.
- [/=(\_:\_:)](size3d/_=%28____%29~4d69893e.md): Divides a size by a scalar vaue and stores the result in the left-hand-side variable.

### Deprecated symbols

- [simd](size3d/simd.md): Deprecated.
- [containsAny(of:)](size3d/containsany%28of_%29.md): Deprecated. Returns a Boolean value that indicates whether the size contains the specified point.

### Initializers

- [init(\_:)](size3d/init%28__%29-25dft.md): Creates a Spatial size from a simd packed vector.
- [init(\_:)](size3d/init%28__%29-2jfoh.md): Returns a double-precision size from a single-precision size.

### Default Implementations

- [AdditiveArithmetic Implementations](size3d/additivearithmetic-implementations.md)
- [CustomReflectable Implementations](size3d/customreflectable-implementations.md)
- [Decodable Implementations](size3d/decodable-implementations.md)
- [Encodable Implementations](size3d/encodable-implementations.md)
- [Equatable Implementations](size3d/equatable-implementations.md)
- [Hashable Implementations](size3d/hashable-implementations.md)
- [Primitive3DProtocol Implementations](size3d/primitive3dprotocol-implementations.md)
- [Scalable3DProtocol Implementations](size3d/scalable3dprotocol-implementations.md)
- [Shearable3D Implementations](size3d/shearable3d-implementations.md)
- [Volumetric Implementations](size3d/volumetric-implementations.md)
- [VolumetricProtocol Implementations](size3d/volumetricprotocol-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Primitive3D](primitive3d.md)
- [Primitive3DProtocol](primitive3dprotocol.md)
- [Rotatable3D](rotatable3d.md)
- [Rotatable3DProtocol](rotatable3dprotocol.md)
- [Scalable3D](scalable3d.md)
- [Scalable3DProtocol](scalable3dprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shearable3D](shearable3d.md)
- [SpatialTypeProtocol](spatialtypeprotocol.md)
- [VectorArithmetic](https://developer.apple.com/documentation/swiftui/vectorarithmetic)
- [Volumetric](volumetric.md)
- [VolumetricProtocol](volumetricprotocol.md)

## See Also

### 3D primitives

- [Point3D](point3d.md): A point in a 3D coordinate system.
- [Point3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [Size3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [Rect3D](rect3d.md): A rectangle in a 3D coordinate system.
- [Rect3DFloat](rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [Rotation3D](rotation3d.md): A rotation in three dimensions.
- [Rotation3DFloat](rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [RotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [RotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPSize3D (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A size that describes width, height, and depth in a 3D coordinate system.

## Declaration

```objectivec
typedef union { ... } SPSize3D;
```

## Topics

### Creating a 3D size structure

- [SPSize3DMakeWithPoint](spsize3dmakewithpoint.md): Creates a size structure from the specified Spatial point.
- [SPSize3DMakeWithVector](spsize3dmakewithvector-5cgfq.md): Creates a size structure from the specified double-precision vector.
- [SPSize3DMakeWithVector](spsize3dmakewithvector-6ar1t.md)

### Inspecting a 3D size’s properties

- [width](spsize3d/width.md): The width value.
- [height](spsize3d/height.md): The height value.
- [depth](spsize3d/depth.md): The depth value.
- [vector](size3d/vector.md)
- [SPSize3DGetVector](spsize3dgetvector.md): A simd three-element vector that contains the width, height, and depth values.

### Transforming a 3D size structure

- [SPSize3DScaleBySize](spsize3dscalebysize.md): Returns a size that results from scaling with the specified size structure.
- [SPSize3DScaleUniform](spsize3dscaleuniform.md): Returns a size that results from uniformly scaling with the specified double-precision value.
- [SPSize3DRotate](spsize3drotate.md): Returns a size that results from applying the specified rotation.
- [SPSize3DRotateByQuaternion](spsize3drotatebyquaternion.md): Returns a size that results from rotating with the specified quaternion.
- [SPSize3DApplyPose](spsize3dapplypose.md): Returns a size that results from applying the specified pose.
- [SPSize3DUnapplyPose](spsize3dunapplypose.md): Returns a size that results from unapplying the specified pose.
- [SPSize3DApplyAffineTransform](spsize3dapplyaffinetransform.md): Returns a size that results from applying the specified affine transform.
- [SPSize3DApplyProjectiveTransform](spsize3dapplyprojectivetransform.md): Returns a size that results from applying the specified projective transform.
- [SPSize3DUnapplyAffineTransform](spsize3dunapplyaffinetransform.md): Returns a size that results from unapplying the specified affine transform.
- [SPSize3DUnapplyProjectiveTransform](spsize3dunapplyprojectivetransform.md): Returns a size that results from unapplying the specified projective transform.
- [SPSize3DScaleBy](spsize3dscaleby.md): Returns a size that results from scaling with the specified double-precision values.
- [SPSize3DShear](spsize3dshear.md): Returns a size that results from shearing over an axis by shear factors for the other two axes.
- [SPSize3DApplyScaledPose](spsize3dapplyscaledpose.md): Returns a size that’s transformed by the specified scaled pose.
- [SPSize3DUnapplyScaledPose](spsize3dunapplyscaledpose.md): Returns a size that’s transformed by the inverse of the specified scaled pose.

### Checking characteristics

- [SPSize3DContainsAnyPoint](spsize3dcontainsanypoint.md): Returns a Boolean value that indicates whether the size contains the specified point.
- [SPSize3DContainsPoint](spsize3dcontainspoint.md): Returns a Boolean value that indicates whether the size contains the specified point.
- [SPSize3DContainsSize](spsize3dcontainssize.md): Returns a Boolean value that indicates whether the size contains the specified size.
- [SPSize3DIsValid](spsize3disvalid.md): A Boolean value that indicates whether the size represents a valid value.
- [SPSize3DIsFinite](spsize3disfinite.md)
- [SPSize3DIsNaN](spsize3disnan.md)
- [SPSize3DIsZero](spsize3diszero.md)

### Creating derived 3D sizes

- [SPSize3DIntersection](spsize3dintersection.md): Returns the intersection of two sizes.
- [SPSize3DUnion](spsize3dunion.md): Returns the smallest size that contains two sizes.

### Comparing values

- [SPSize3DEqualToSize](spsize3dequaltosize.md): Returns a Boolean value that indicates whether two values are equal.

### 3D size constants

- [SPSize3DZero](spsize3dzero.md): The size structure with the zero value.
- [SPSize3DInfinity](spsize3dinfinity.md): The size structure with infinite width, height, and depth values.

### Deprecated symbols

- [SPSize3DInvalid](spsize3dinvalid.md): The null size that represents an invalid value.

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [VectorArithmetic](https://developer.apple.com/documentation/swiftui/vectorarithmetic)

## See Also

### 3D primitives

- [SPPoint3D](point3d.md): A point in a 3D coordinate system.
- [SPPoint3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPSize3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [SPRect3D](rect3d.md): A rectangle in a 3D coordinate system.
- [SPRect3DFloat](rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [SPRotation3D](rotation3d.md): A rotation in three dimensions.
- [SPRotation3DFloat](rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [SPRotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [SPRotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [SPPose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [SPPose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [SPScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
