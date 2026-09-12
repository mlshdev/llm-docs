> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d](https://developer.apple.com/documentation/spatial/rotation3d)

# Rotation3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A rotation in three dimensions.

## Declaration

```swift
struct Rotation3D
```

## Topics

### Creating a 3D rotation structure

- [init()](rotation3d/init%28%29-2uz53.md): Creates a rotation.
- [init()](rotation3d/init%28%29-krpj.md): Creates a rotation structure.
- [init(eulerAngles:)](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [init(eulerAngles:)](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [EulerAngles](eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [init(quaternion:)](rotation3d/init%28quaternion_%29-2c79y.md): Creates a rotation axis from the specified double-precision quaternion.
- [init(\_:)](rotation3d/init%28__%29-8z2bn.md): Creates a rotation from the specified double-precision quaternion.
- [init(\_:)](rotation3d/init%28__%29-829qb.md): Creates a rotation axis from the specified single-precision quaternion.
- [init(angle:axis:)](rotation3d/init%28angle_axis_%29.md): Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [init(position:target:up:)](rotation3d/init%28position_target_up_%29.md): Creates a rotation structure that represents the look-at direction from a position to a target.
- [init(forward:)](rotation3d/init%28forward_%29.md): Creates a rotation with the specified forward vector.
- [init(forward:up:)](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [init(forward:up:)](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.

### Inspecting a 3D rotation’s properties

- [angle](rotation3d/angle.md): The angle of the rotation.
- [axis](rotation3d/axis.md): The axis of the rotation.
- [eulerAngles(order:)](rotation3d/eulerangles%28order_%29.md): Returns a rotation’s Euler angles.
- [EulerAngles](eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [quaternion](rotation3d/quaternion.md): A quaternion that represents the rotation.
- [vector](rotation3d/vector.md): The underlying vector of the rotation.

### Transforming a 3D rotation structure

- [slerp(from:to:t:along:)](rotation3d/slerp%28from_to_t_along_%29.md): Returns the spherical linear interpolation along either the shortest or the longest arc between two rotations.
- [Rotation3D.SlerpPath](rotation3d/slerppath.md): Constants that define the arc that a slerp operation takes.
- [inverse](rotation3d/inverse.md): The inverse of the rotation.
- [identity](rotation3d/identity.md): The identity rotation.

### Decomposing a 3D rotation structure

- [swing(twistAxis:)](rotation3d/swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
- [twist(twistAxis:)](rotation3d/twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.
- [swingTwist(twistAxis:)](rotation3d/swingtwist%28twistaxis_%29.md): Returns the rotation’s swing-twist decomposition for a given twist axis.
- [swing(twistAxis:)](rotation3d/swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
- [twist(twistAxis:)](rotation3d/twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.

### Checking characteristics

- [isIdentity](rotation3d/isidentity.md): A Boolean value that indicates whether the rotation is the identity rotation.
- [isIdentity](rotation3d/isidentity.md): A Boolean value that indicates whether the rotation is the identity rotation.

### Comparing values

- [isApproximatelyEqual(to:tolerance:)](rotation3d/isapproximatelyequal%28to_tolerance_%29.md)
- [==(\_:\_:)](rotation3d/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

### Applying arithmetic operations

- [\*(\_:\_:)](rotation3d/_%28____%29-1tc8f.md): Returns the product of two rotations.
- [\*(\_:\_:)](rotation3d/_%28____%29-5dxqv.md): Returns the spherical linear interpolation between the identity rotation and the left-hand-side rotation at the right-hand-side interpolation parameter.
- [\*(\_:\_:)](rotation3d/_%28____%29-9t389.md): Returns the spherical linear interpolation between the identity rotation and the right-hand-side rotation at the left-hand-side interpolation parameter.
- [\*(\_:\_:)](_%28____%29.md): Returns the rotatable entity that results from applying the rotatable entity.
- [\*=(\_:\_:)](rotation3d/_=%28____%29.md): Computes the product of two rotations and stores the result in the left-hand-side variable.

### Interpolating a 3D rotation structure

- [spline(leftEndpoint:from:to:rightEndpoint:t:)](rotation3d/spline%28leftendpoint_from_to_rightendpoint_t_%29.md): Returns an interpolated value between two rotations along a spherical cubic spline.

### Deprecated symbols

- [init(\_:\_:\_:order:)](eulerangles/init%28______order_%29.md): Deprecated. Creates a new Euler angles structure from the specified angle structures and order.
- [init(eye:target:up:)](rotation3d/init%28eye_target_up_%29.md): Deprecated. Creates a rotation structure that’s the look-at direction from a position to a target.
- [init(axis:angle:)](rotation3d/init%28axis_angle_%29.md): Deprecated. Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [init(quaternion:)](rotation3d/init%28quaternion_%29-6ajmn.md): Deprecated. Creates a rotation axis from the specified single-precision quaternion.
- [zero](rotation3d/zero.md): Deprecated. The rotation with the zero value.
- [isZero](rotation3d/iszero.md): Deprecated. A Boolean value that indicates whether the rotation is zero.

### Initializers

- [init(\_:)](rotation3d/init%28__%29-1r1iq.md): Returns a double-precision rotation from a single-precision rotation.
- [init(\_:)](rotation3d/init%28__%29-9yxln.md): Creates a Spatial rotation from a simd packed vector.
- [init(quaternion:)](rotation3d/init%28quaternion_%29-500aq.md): Deprecated.

### Default Implementations

- [CustomReflectable Implementations](rotation3d/customreflectable-implementations.md)
- [Decodable Implementations](rotation3d/decodable-implementations.md)
- [Encodable Implementations](rotation3d/encodable-implementations.md)
- [Equatable Implementations](rotation3d/equatable-implementations.md)
- [Hashable Implementations](rotation3d/hashable-implementations.md)
- [ProjectiveTransformable3D Implementations](rotation3d/projectivetransformable3d-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ProjectiveTransformable3D](projectivetransformable3d.md)
- [Rotatable3D](rotatable3d.md)
- [Rotatable3DProtocol](rotatable3dprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialTypeProtocol](spatialtypeprotocol.md)

## See Also

### 3D primitives

- [Point3D](point3d.md): A point in a 3D coordinate system.
- [Point3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [Size3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [Size3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [Rect3D](rect3d.md): A rectangle in a 3D coordinate system.
- [Rect3DFloat](rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [Rotation3DFloat](rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [RotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [RotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPRotation3D (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rotation in three dimensions.

## Declaration

```objectivec
typedef union { ... } SPRotation3D;
```

## Topics

### Creating a 3D rotation structure

- [SPRotation3DMakeWithEulerAngles](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPRotation3DMakeWithEulerAngles](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPEulerAngles](eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [SPRotation3DMake](rotation3d/init%28angle_axis_%29.md): Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [SPRotation3DMakeLookAt](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [SPRotation3DMakeWithQuaternion](sprotation3dmakewithquaternion.md)
- [SPRotation3DMake](sprotation3dmake-2i9jt.md): Deprecated. Creates a rotation structure.
- [SPRotation3DMakeLookAt](sprotation3dmakelookat-6ypo8.md): Creates a rotation structure that’s the look-at direction from a position to a target.
- [SPRotation3DMakeLookAt](sprotation3dmakelookat-4xrh6.md)
- [SPRotation3DMakeLookAt](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [SPRotationAxis3DMakeWithVector](sprotationaxis3dmakewithvector-1n9ib.md): Creates a rotation axis from the specified double-precision vector.
- [SPRotationAxis3DMakeWithVector](sprotationaxis3dmakewithvector-kk1p.md)

### Inspecting a 3D rotation’s properties

- [SPRotation3DGetEulerAngles](rotation3d/eulerangles%28order_%29.md): Returns a rotation’s Euler angles.
- [SPRotation3DGetAngle](sprotation3dgetangle.md): The angle of the rotation.
- [SPRotation3DGetAxis](sprotation3dgetaxis.md): The axis of the rotation.
- [SPEulerAngles](eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [quaternion](rotation3d/quaternion.md): A quaternion that represents the rotation.
- [vector](sprotation3d/vector.md): The underlying vector of the rotation.
- [SPRotation3DGetQuaternion](sprotation3dgetquaternion.md): A quaternion that represents the rotation.
- [SPRotationAxis3DGetVector](sprotationaxis3dgetvector.md): A simd three-element vector that contains the x-, y-, and z-coordinate values.

### Setting a 3D rotation’s properties

- [SPRotation3DSetAngle](sprotation3dsetangle.md): Sets a rotation’s angle.
- [SPRotation3DSetAxis](sprotation3dsetaxis.md): Sets a rotation’s axis.

### Transforming a 3D rotation structure

- [SPRotation3DInverse](rotation3d/inverse.md): The inverse of the rotation.
- [SPRotation3DSlerp](sprotation3dslerp.md): Returns the spherical linear interpolation along the shortest arc between two rotations.
- [SPRotation3DSlerpLongest](sprotation3dslerplongest.md): Returns the spherical linear interpolation along the longest arc between two rotations.
- [SPRotation3DIdentity](rotation3d/identity.md): The identity rotation.

### Decomposing a 3D rotation structure

- [SPRotation3DSwing](rotation3d/swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
- [SPRotation3DTwist](rotation3d/twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.
- [SPRotation3DSwing](rotation3d/swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
- [SPRotation3DTwist](rotation3d/twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.

### Checking characteristics

- [SPRotation3DIsIdentity](rotation3d/isidentity.md): A Boolean value that indicates whether the rotation is the identity rotation.
- [SPRotation3DIsIdentity](rotation3d/isidentity.md): A Boolean value that indicates whether the rotation is the identity rotation.
- [SPRotation3DIsValid](sprotation3disvalid.md): A Boolean value that indicates whether the rotation represents a valid value.
- [SPRotation3DInvalid](sprotation3dinvalid.md): The null rotation that represents an invalid value.

### Comparing values

- [SPRotation3DEqualToRotation](sprotation3dequaltorotation.md): Returns a Boolean value that indicates whether two values are equal.
- [SPRotation3DAlmostEqualToRotation](sprotation3dalmostequaltorotation-53c20.md)
- [SPRotation3DAlmostEqualToRotation](sprotation3dalmostequaltorotation-3deix.md)

### Interpolating a 3D rotation structure

- [SPRotation3DSpline](sprotation3dspline.md): Returns an interpolated value between two rotations along a spherical cubic spline.

### Deprecated symbols

- [SPRotation3DZero](rotation3d/zero.md): Deprecated. The rotation with the zero value.
- [SPRotation3DIsZero](rotation3d/iszero.md): Deprecated. A Boolean value that indicates whether the rotation is zero.
- [SPEulerAngleOrder](speulerangleorder.md): Constants that describe the order of Euler angles.

## See Also

### 3D primitives

- [SPPoint3D](point3d.md): A point in a 3D coordinate system.
- [SPPoint3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPSize3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [SPSize3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [SPRect3D](rect3d.md): A rectangle in a 3D coordinate system.
- [SPRect3DFloat](rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [SPRotation3DFloat](rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [SPRotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [SPRotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [SPPose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [SPPose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [SPScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
