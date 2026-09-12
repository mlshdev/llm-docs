> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3dfloat](https://developer.apple.com/documentation/spatial/scaledpose3dfloat)

# ScaledPose3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a position, rotation, and scale.

## Declaration

```swift
struct ScaledPose3DFloat
```

## Topics

### Operators

- [\*(\_:\_:)](scaledpose3dfloat/_%28____%29-2wclg.md): Returns a new scaled pose that’s constructed by concatenating two existing poses.
- [\*(\_:\_:)](scaledpose3dfloat/_%28____%29-5qwyl.md): Returns a new pose that’s constructed by concatenating two existing poses.
- [\*(\_:\_:)](scaledpose3dfloat/_%28____%29-9z6s.md): Returns a new scaled pose that’s constructed by concatenating a pose and a scaled pose.
- [\*=(\_:\_:)](scaledpose3dfloat/_=%28____%29.md): Calculates the concatenation of scaled poses and stores the result in the left-hand-side variable.

### Initializers

- [init()](scaledpose3dfloat/init%28%29.md)
- [init(\_:)](scaledpose3dfloat/init%28__%29-4hh5z.md): Creates a scaled pose with the specified single-precision 4 x 4 matrix
- [init(\_:)](scaledpose3dfloat/init%28__%29-7zqj3.md): Returns a single-precision scaled pose from a double-precision scaled pose.
- [init(forward:scale:up:)](scaledpose3dfloat/init%28forward_scale_up_%29.md): Creates a scaled pose with the specified forward and up vectors.
- [init(position:rotation:scale:)](scaledpose3dfloat/init%28position_rotation_scale_%29-1j1mg.md): Creates a scaled pose from Spatial primitives that describe the position, rotation, and scale.
- [init(position:rotation:scale:)](scaledpose3dfloat/init%28position_rotation_scale_%29-1xgkl.md): Creates a scaled pose from Spatial primitives that describe the position, rotation, and scale.
- [init(position:rotation:scale:)](scaledpose3dfloat/init%28position_rotation_scale_%29-3l2fe.md): Creates a pose from single-precision simd primitives that describe the position, rotation, and scale.
- [init(position:target:scale:up:)](scaledpose3dfloat/init%28position_target_scale_up_%29.md): Creates a scaled pose at the specified position that’s oriented towards a look at target.
- [init(transform:)](scaledpose3dfloat/init%28transform_%29-1m87a.md): Creates a scaled pose with with a position, rotation, and scale that are defined by an affine transform.
- [init(transform:)](scaledpose3dfloat/init%28transform_%29-xeog.md): Creates a pose with with a position, rotation, and scale that are defined by a projective transform.

### Instance Properties

- [inverse](scaledpose3dfloat/inverse.md): The inverse of the scaled pose’s underlying matrix.
- [isIdentity](scaledpose3dfloat/isidentity.md): Returns true if the scaled pose is the identity pose.
- [matrix](scaledpose3dfloat/matrix.md): A 4 x 4 matrix that represents the scaled pose’s scale, rotation, and translation.
- [position](scaledpose3dfloat/position.md): The position
- [rotation](scaledpose3dfloat/rotation.md): The rotation
- [scale](scaledpose3dfloat/scale.md): The uniform scale

### Instance Methods

- [concatenating(\_:)](scaledpose3dfloat/concatenating%28__%29-3pywy.md): Returns a transform that’s constructed by concatenating two existing scaled poses.
- [concatenating(\_:)](scaledpose3dfloat/concatenating%28__%29-7ol75.md): Returns a transform that’s constructed by concatenating two a scaled pose and a pose.
- [flip(along:)](scaledpose3dfloat/flip%28along_%29.md): Flips the scaled pose along the specified axis.
- [flipped(along:)](scaledpose3dfloat/flipped%28along_%29.md): Returns the scaled pose flipped along the specified axis.
- [isApproximatelyEqual(to:tolerance:)](scaledpose3dfloat/isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two scaled poses are equal within a specified tolerance.

### Type Properties

- [identity](scaledpose3dfloat/identity.md): The identity scaled pose.

### Default Implementations

- [CustomReflectable Implementations](scaledpose3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](scaledpose3dfloat/decodable-implementations.md)
- [Encodable Implementations](scaledpose3dfloat/encodable-implementations.md)
- [Equatable Implementations](scaledpose3dfloat/equatable-implementations.md)
- [Hashable Implementations](scaledpose3dfloat/hashable-implementations.md)
- [Rotatable3DProtocol Implementations](scaledpose3dfloat/rotatable3dprotocol-implementations.md)

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
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPScaledPose3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a position, rotation, and scale.

## Declaration

```objectivec
typedef struct { ... } SPScaledPose3DFloat;
```

## Topics

### Instance Properties

- [position](scaledpose3dfloat/position.md): The position
- [rotation](scaledpose3dfloat/rotation.md): The rotation
- [scale](scaledpose3dfloat/scale.md): The uniform scale

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
- [SPPose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [SPScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
