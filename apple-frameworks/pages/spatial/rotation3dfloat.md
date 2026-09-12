> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat](https://developer.apple.com/documentation/spatial/rotation3dfloat)

# Rotation3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision structure that represents a rotation in three dimensions.

## Declaration

```swift
struct Rotation3DFloat
```

## Topics

### Operators

- [\*(\_:\_:)](rotation3dfloat/_%28____%29-2mmaj.md): Calculates the spherical linear interpolation between the identity rotation and the LHS rotation at the RHS interpolation parameter.
- [\*(\_:\_:)](rotation3dfloat/_%28____%29-30js8.md): Calculates the product of two rotations.
- [\*(\_:\_:)](rotation3dfloat/_%28____%29-99umr.md): Calculates the spherical linear interpolation between the identity rotation and the RHS rotation at the LHS interpolation parameter.
- [\*=(\_:\_:)](rotation3dfloat/_=%28____%29.md): Calculates the product of two rotations and stores the result in the left-hand-side variable.

### Initializers

- [init()](rotation3dfloat/init%28%29-4vjiv.md)
- [init()](rotation3dfloat/init%28%29-4y09q.md)
- [init(\_:)](rotation3dfloat/init%28__%29-140am.md)
- [init(\_:)](rotation3dfloat/init%28__%29-20sue.md): Returns a new rotation from a double-precision quaternion.
- [init(\_:)](rotation3dfloat/init%28__%29-5vfv0.md): Returns a single-precision rotation from a double-precision rotation.
- [init(\_:)](rotation3dfloat/init%28__%29-7mhwz.md): Creates a Spatial rotation from a simd packed vector.
- [init(angle:axis:)](rotation3dfloat/init%28angle_axis_%29.md)
- [init(eulerAngles:)](rotation3dfloat/init%28eulerangles_%29.md)
- [init(forward:)](rotation3dfloat/init%28forward_%29.md): Returns a rotation with the specified forward vector.
- [init(forward:up:)](rotation3dfloat/init%28forward_up_%29.md)
- [init(position:target:up:)](rotation3dfloat/init%28position_target_up_%29.md): Returns a rotation that’s the look at direction from the eye position to the target.
- [init(quaternion:)](rotation3dfloat/init%28quaternion_%29.md)

### Instance Properties

- [angle](rotation3dfloat/angle.md): The angle of the rotation.
- [axis](rotation3dfloat/axis.md): The axis of the rotation.
- [inverse](rotation3dfloat/inverse.md)
- [isIdentity](rotation3dfloat/isidentity.md)
- [quaternion](rotation3dfloat/quaternion.md)
- [vector](rotation3dfloat/vector.md)

### Instance Methods

- [eulerAngles(order:)](rotation3dfloat/eulerangles%28order_%29.md)
- [isApproximatelyEqual(to:tolerance:)](rotation3dfloat/isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two rotations are equal within a specified tolerance.
- [swing(twistAxis:)](rotation3dfloat/swing%28twistaxis_%29.md)
- [swingTwist(twistAxis:)](rotation3dfloat/swingtwist%28twistaxis_%29.md): Returns the rotation’s swing-twist decomposition for a given twist axis.
- [twist(twistAxis:)](rotation3dfloat/twist%28twistaxis_%29.md)

### Type Properties

- [identity](rotation3dfloat/identity.md): A single-precision structure that represents a rotation in three dimensions.

### Type Methods

- [slerp(from:to:t:along:)](rotation3dfloat/slerp%28from_to_t_along_%29.md): Returns the spherical linear interpolation along the either the shortest or longest arc between two rotations.
- [spline(leftEndpoint:from:to:rightEndpoint:t:)](rotation3dfloat/spline%28leftendpoint_from_to_rightendpoint_t_%29.md): Returns an interpolated value between two rotations along a spherical cubic spline.

### Default Implementations

- [CustomReflectable Implementations](rotation3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](rotation3dfloat/decodable-implementations.md)
- [Encodable Implementations](rotation3dfloat/encodable-implementations.md)
- [Equatable Implementations](rotation3dfloat/equatable-implementations.md)
- [Hashable Implementations](rotation3dfloat/hashable-implementations.md)
- [ProjectiveTransformable3DFloat Implementations](rotation3dfloat/projectivetransformable3dfloat-implementations.md)

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
- [ProjectiveTransformable3DFloat](projectivetransformable3dfloat.md)
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
- [Rotation3D](rotation3d.md): A rotation in three dimensions.
- [RotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [RotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPRotation3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision structure that represents a rotation in three dimensions.

## Declaration

```objectivec
typedef union { ... } SPRotation3DFloat;
```

## Topics

### Instance Properties

- [quaternion](rotation3dfloat/quaternion.md)
- [vector](sprotation3dfloat/vector.md): The underlying vector of the quaternion.

## See Also

### 3D primitives

- [SPPoint3D](point3d.md): A point in a 3D coordinate system.
- [SPPoint3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPSize3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [SPSize3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [SPRect3D](rect3d.md): A rectangle in a 3D coordinate system.
- [SPRect3DFloat](rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [SPRotation3D](rotation3d.md): A rotation in three dimensions.
- [SPRotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [SPRotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [SPPose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [SPPose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [SPScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
