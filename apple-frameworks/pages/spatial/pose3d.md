> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/pose3d](https://developer.apple.com/documentation/spatial/pose3d)

# Pose3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that contains a 3D position and a 3D rotation.

## Declaration

```swift
struct Pose3D
```

## Topics

### Creating a 3D pose structure

- [init()](pose3d/init%28%29.md): Creates a pose structure.
- [init(\_:)](pose3d/init%28__%29-8njy6.md): Creates a pose from the specified 4 x 4 single-precision matrix.
- [init(\_:)](pose3d/init%28__%29-9xspz.md): Creates a pose from the specified 4 x 4 double-precision matrix.
- [init(forward:up:)](pose3d/init%28forward_up_%29.md): Creates a pose with the specified forward and up vectors.
- [init(position:rotation:)](pose3d/init%28position_rotation_%29-1gu7k.md): Creates a pose with the specified single-precision position vector and quaternion.
- [init(position:rotation:)](pose3d/init%28position_rotation_%29-5afaf.md): Creates a pose with the specified Spatial position and rotation structures.
- [init(position:rotation:)](pose3d/init%28position_rotation_%29-5vswy.md): Creates a pose with the specified single-precision position vector and quaternion.
- [init(position:rotation:)](pose3d/init%28position_rotation_%29-zc2j.md): Creates a pose with the specified double-precision position vector and quaternion.
- [init(position:target:up:)](pose3d/init%28position_target_up_%29.md): Returns a pose at the specified position with the rotation towards the target.
- [init(transform:)](pose3d/init%28transform_%29-2sey4.md): Returns a pose with a position and rotation defined by an affine transform.
- [init(transform:)](pose3d/init%28transform_%29-4go9c.md): Returns a pose with a position and rotation defined by a projective transform.

### Constants

- [identity](pose3d/identity.md): The identity pose.

### Inspecting a 3D pose’s properties

- [matrix](pose3d/matrix.md): The pose’s underlying matrix.
- [position](pose3d/position.md): The pose’s position.
- [rotation](pose3d/rotation.md): The pose’s rotation.
- [inverse](pose3d/inverse.md): The pose’s inverse.

### Transforming a 3D pose structure

- [concatenating(\_:)](pose3d/concatenating%28__%29-4esra.md): Returns a pose that represents the concatenation of a scaled pose and a pose.
- [concatenating(\_:)](pose3d/concatenating%28__%29-6dd2s.md): Returns a pose that represents the concatenation of two poses.
- [flip(along:)](pose3d/flip%28along_%29.md): Flips a pose along the specified axis.
- [flipped(along:)](pose3d/flipped%28along_%29.md): Returns a pose that results from flipping it along the specified axis.
- [rotated(by:)](pose3d/rotated%28by_%29-10k2a.md): Returns a pose that results from rotating with the specified quaternion.
- [rotated(by:)](pose3d/rotated%28by_%29-377u.md): Returns a pose that results from applying the specified rotation.

### Checking characteristics

- [isIdentity](pose3d/isidentity.md): A Boolean value that indicates whether the pose is the identity pose.

### Comparing values

- [isApproximatelyEqual(to:tolerance:)](pose3d/isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two poses are equal within a specified tolerance.
- [==(\_:\_:)](pose3d/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

### Applying arithmetic operations

- [\*(\_:\_:)](pose3d/_%28____%29.md): Returns the concatenation of two poses.
- [\*=(\_:\_:)](pose3d/_=%28____%29.md): Concatenates two poses and stores the result in the left-hand-side variable.

### Deprecated symbols

- [init(matrix:)](pose3d/init%28matrix_%29-63uwf.md): Deprecated.
- [init(matrix:)](pose3d/init%28matrix_%29-6698w.md): Deprecated.

### Initializers

- [init(\_:)](pose3d/init%28__%29-6u9lt.md): Returns a double-precision pose from a single-precision pose.

### Default Implementations

- [CustomReflectable Implementations](pose3d/customreflectable-implementations.md)
- [Decodable Implementations](pose3d/decodable-implementations.md)
- [Encodable Implementations](pose3d/encodable-implementations.md)
- [Equatable Implementations](pose3d/equatable-implementations.md)
- [Hashable Implementations](pose3d/hashable-implementations.md)
- [ProjectiveTransformable3D Implementations](pose3d/projectivetransformable3d-implementations.md)
- [Rotatable3D Implementations](pose3d/rotatable3d-implementations.md)

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
- [Translatable3D](translatable3d.md)
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
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPPose3D (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a 3D position and a 3D rotation.

## Declaration

```objectivec
typedef struct { ... } SPPose3D;
```

## Topics

### Creating a 3D pose structure

- [SPPose3DMakeLookAt](sppose3dmakelookat-6y4bb.md): Returns a pose at the specified position with the rotation towards the target.
- [SPPose3DMakeLookAt](sppose3dmakelookat-8brxe.md)
- [SPPose3DMakeLookAt](sppose3dmakelookat-dgpp.md)
- [SPPose3DMakeWith4x4Matrix](sppose3dmakewith4x4matrix.md): Creates a pose from the specified 4 x 4 double-precision matrix.
- [SPPose3DMakeWithAffineTransform](sppose3dmakewithaffinetransform.md): Returns a pose with a position and rotation that an affine transform defines.
- [SPPose3DMakeWithProjectiveTransform](sppose3dmakewithprojectivetransform.md): Returns a pose with a position and rotation that a projective transform defines.
- [SPPose3DMakeWithVector](sppose3dmakewithvector.md): Creates a pose with the specified position and rotation vectors.

### Constants

- [SPPose3DInvalid](sppose3dinvalid.md): A pose that represents an invalid pose.
- [SPPose3DIdentity](sppose3didentity.md): The identity pose.

### Inspecting a 3D pose’s properties

- [position](pose3d/position.md): The pose’s position.
- [rotation](pose3d/rotation.md): The pose’s rotation.
- [SPPose3DGet4x4Matrix](sppose3dget4x4matrix.md): Returns the pose’s underlying matrix.
- [SPPose3DGetInverse](sppose3dgetinverse.md): Returns the affine pose’s inverse.

### Transforming a 3D pose structure

- [SPPose3DConcatenation](sppose3dconcatenation.md): Returns a pose that represents the concatenation of two poses.
- [SPPose3DFlip](sppose3dflip.md): Flips a pose along the specified axis.
- [SPPose3DRotate](sppose3drotate.md): Returns a transform that results from rotating with the specified rotation structure.
- [SPPose3DRotateByQuaternion](sppose3drotatebyquaternion.md): Returns a transform that results from rotating with the specified quaternion.
- [SPPose3DTranslate](sppose3dtranslate-6bwqc.md): Deprecated. Returns a transform with an origin that’s offset by the specified size structure.
- [SPPose3DTranslate](sppose3dtranslate-8v4sq.md): Returns a pose with an origin that’s offset by the specified vector.

### Checking characteristics

- [SPPose3DIsIdentity](sppose3disidentity.md): Returns a Boolean value that indicates whether the pose is the identity pose.
- [SPPose3DIsValid](sppose3disvalid.md): Returns a Boolean value that indicates whether the pose is a valid pose.

### Comparing values

- [SPPose3DEqualToPose](sppose3dequaltopose.md): Returns a Boolean value that indicates whether two values are equal.
- [SPPose3DAlmostEqualToPose](sppose3dalmostequaltopose-21t5f.md): Returns a Boolean value that indicates whether two poses are equal within a specified tolerance.
- [SPPose3DAlmostEqualToPose](sppose3dalmostequaltopose-9hr1m.md)

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
- [SPPose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [SPScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
