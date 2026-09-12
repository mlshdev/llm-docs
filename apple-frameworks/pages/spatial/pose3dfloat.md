> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/pose3dfloat](https://developer.apple.com/documentation/spatial/pose3dfloat)

# Pose3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision structure that contains a position and rotation.

## Declaration

```swift
struct Pose3DFloat
```

## Topics

### Operators

- [\*(\_:\_:)](pose3dfloat/_%28____%29.md): Returns a new pose that’s constructed by concatenating two existing poses.
- [\*=(\_:\_:)](pose3dfloat/_=%28____%29.md): Calculates the concatenation of poses and stores the result in the left-hand-side variable.

### Initializers

- [init()](pose3dfloat/init%28%29.md)
- [init(\_:)](pose3dfloat/init%28__%29-6yai5.md): Creates a pose with the specified double-precision 4 x 4 matrix
- [init(\_:)](pose3dfloat/init%28__%29-91dxh.md): Returns a single-precision pose from a double-precision pose.
- [init(forward:up:)](pose3dfloat/init%28forward_up_%29.md): Creates a pose with the specified forward and up vectors.
- [init(position:rotation:)](pose3dfloat/init%28position_rotation_%29-1r25j.md): Creates a pose from double-precision simd primitives that describe the position and rotation.
- [init(position:rotation:)](pose3dfloat/init%28position_rotation_%29-6979c.md): Creates a pose from Spatial primitives that describe the position and rotation.
- [init(position:rotation:)](pose3dfloat/init%28position_rotation_%29-9nvnb.md): Creates a pose from Spatial primitives that describe the position and rotation.
- [init(position:target:up:)](pose3dfloat/init%28position_target_up_%29.md): Creates a pose at the specified position that’s oriented towards a look at target.
- [init(transform:)](pose3dfloat/init%28transform_%29-7bffd.md): Creates a pose with with a position and rotation that are defined by an affine transform.
- [init(transform:)](pose3dfloat/init%28transform_%29-94kwr.md): Creates a pose with with a position and rotation that are defined by a projective transform.

### Instance Properties

- [inverse](pose3dfloat/inverse.md): The inverse of the pose’s underlying matrix.
- [isIdentity](pose3dfloat/isidentity.md): Returns `true` if the pose is the identity transform.
- [matrix](pose3dfloat/matrix.md): A 4 x 4 matrix that represents the pose’s translation and rotation.
- [position](pose3dfloat/position.md): The position
- [rotation](pose3dfloat/rotation.md): The rotation

### Instance Methods

- [concatenating(\_:)](pose3dfloat/concatenating%28__%29-2kbxs.md): Returns a transform that’s constructed by concatenating two existing poses.
- [concatenating(\_:)](pose3dfloat/concatenating%28__%29-3anuw.md): Returns a transform that’s constructed by concatenating two a pose and a scaled pose.
- [flip(along:)](pose3dfloat/flip%28along_%29.md): Flips the pose along the specified axis.
- [flipped(along:)](pose3dfloat/flipped%28along_%29.md): Returns the pose flipped along the specified axis.
- [isApproximatelyEqual(to:tolerance:)](pose3dfloat/isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two poses are equal within a specified tolerance.

### Type Properties

- [identity](pose3dfloat/identity.md): The identity pose.

### Default Implementations

- [CustomReflectable Implementations](pose3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](pose3dfloat/decodable-implementations.md)
- [Encodable Implementations](pose3dfloat/encodable-implementations.md)
- [Equatable Implementations](pose3dfloat/equatable-implementations.md)
- [Hashable Implementations](pose3dfloat/hashable-implementations.md)
- [ProjectiveTransformable3DFloat Implementations](pose3dfloat/projectivetransformable3dfloat-implementations.md)
- [Rotatable3DProtocol Implementations](pose3dfloat/rotatable3dprotocol-implementations.md)

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
- [Translatable3DProtocol](translatable3dprotocol.md)

## See Also

### 3D primitives

- [Point3D](point3d.md): A point in a 3D coordinate system.
- [Point3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [Size3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [Size3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [Rect3D](rect3d.md): A rectangle in a 3D coordinate system.
- [Rect3DFloat](rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [Rotation3D](rotation3d.md): A rotation in three dimensions.
- [Rotation3DFloat](rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [RotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [RotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPPose3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision structure that contains a position and rotation.

## Declaration

```objectivec
typedef struct { ... } SPPose3DFloat;
```

## Topics

### Instance Properties

- [position](pose3dfloat/position.md): The position
- [rotation](pose3dfloat/rotation.md): The rotation

## See Also

### 3D primitives

- [SPPoint3D](point3d.md): A point in a 3D coordinate system.
- [SPPoint3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPSize3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [SPSize3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [SPRect3D](rect3d.md): A rectangle in a 3D coordinate system.
- [SPRect3DFloat](rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [SPRotation3D](rotation3d.md): A rotation in three dimensions.
- [SPRotation3DFloat](rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [SPRotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [SPRotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [SPPose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [SPScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
