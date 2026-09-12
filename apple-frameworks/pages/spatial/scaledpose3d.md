> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3d](https://developer.apple.com/documentation/spatial/scaledpose3d)

# ScaledPose3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a position, rotation, and scale.

## Declaration

```swift
struct ScaledPose3D
```

## Topics

### Creating a 3D scaled-pose structure

- [init()](scaledpose3d/init%28%29.md): Creates a scaled pose structure.
- [init(\_:)](scaledpose3d/init%28__%29-v6ox.md): Creates a scaled pose from the specified 4 x 4 single-precision matrix.
- [init(\_:)](scaledpose3d/init%28__%29-4izkj.md): Creates a scaled pose from the specified 4 x 4 double-precision matrix.
- [init(forward:scale:up:)](scaledpose3d/init%28forward_scale_up_%29.md): Creates a scaled pose with the specified forward and up vectors.
- [init(position:rotation:scale:)](scaledpose3d/init%28position_rotation_scale_%29-8ndo4.md): Creates a scaled pose with the specified single-precision position vector and quaternion.
- [init(position:rotation:scale:)](scaledpose3d/init%28position_rotation_scale_%29-6fom1.md): Creates a scaled pose with the specified double-precision position vector and quaternion.
- [init(position:target:scale:up:)](scaledpose3d/init%28position_target_scale_up_%29.md): Returns a scaled pose at the specified position with the rotation toward the target.
- [init(position:rotation:scale:)](scaledpose3d/init%28position_rotation_scale_%29-7ya6f.md): Creates a pose with the specified Spatial position, rotation, and scale structures.
- [init(position:rotation:scale:)](scaledpose3d/init%28position_rotation_scale_%29-8fyu0.md): Creates a scaled pose with the specified double-precision position vector and quaternion.
- [init(transform:)](scaledpose3d/init%28transform_%29-oogv.md): Returns a scaled pose with a position, rotation, and scale defined by an affine transform.
- [init(transform:)](scaledpose3d/init%28transform_%29-9s08k.md): Returns a scaled pose with a position, rotation, and scale defined by a projective transform.

### Inspecting a 3D scaled pose’s properties

- [matrix](scaledpose3d/matrix.md): The scaled pose’s underlying matrix.
- [position](scaledpose3d/position.md): The scaled pose’s position.
- [rotation](scaledpose3d/rotation.md): The scaled pose’s rotation.
- [scale](scaledpose3d/scale.md): The scaled pose’s scale.
- [inverse](scaledpose3d/inverse.md): The scaled pose’s inverse.
- [customMirror](scaledpose3d/custommirror.md): A mirror that reflects the notification.
- [identity](scaledpose3d/identity.md): The identity scaled pose.

### Transforming a 3D scaled-pose structure

- [flip(along:)](scaledpose3d/flip%28along_%29.md): Flips a scaled pose along the specified axis.
- [flipped(along:)](scaledpose3d/flipped%28along_%29.md): Returns a scaled pose that results from flipping it along the specified axis.
- [rotated(by:)](scaledpose3d/rotated%28by_%29-5mxbl.md): Returns a scaled pose that results from rotating with the specified quaternion.
- [rotated(by:)](scaledpose3d/rotated%28by_%29-x75b.md): Returns a scaled pose that results from applying the specified rotation.
- [concatenating(\_:)](scaledpose3d/concatenating%28__%29-c38k.md): Returns a scaled pose that represents the concatenation of two scaled poses.
- [concatenating(\_:)](scaledpose3d/concatenating%28__%29-2xzgs.md): Returns a scaled pose that represents the concatenation of two poses.

### Checking characteristics

- [isIdentity](scaledpose3d/isidentity.md): Returns a Boolean value that indicates whether the scaled pose is the identity transform.

### Comparing values

- [isApproximatelyEqual(to:tolerance:)](scaledpose3d/isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two scaled poses are equal within a specified tolerance.
- [==(\_:\_:)](scaledpose3d/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

### Applying arithmetic operations

- [\*(\_:\_:)](scaledpose3d/_%28____%29-6nx9h.md): Returns the concatenation of two scaled poses.
- [\*(\_:\_:)](scaledpose3d/_%28____%29-93yyr.md): Returns the concatenation of a scaled pose and a pose.
- [\*(\_:\_:)](scaledpose3d/_%28____%29-179zu.md): Returns the concatenation of a pose and a scaled pose.
- [\*=(\_:\_:)](scaledpose3d/_=%28____%29.md): Concatenates two scaled poses and stores the result in the left-hand-side variable.

### Initializers

- [init(\_:)](scaledpose3d/init%28__%29-3fa9n.md): Returns a double-precision scaled pose from a single-precision scaled pose.

### Default Implementations

- [CustomReflectable Implementations](scaledpose3d/customreflectable-implementations.md)
- [Decodable Implementations](scaledpose3d/decodable-implementations.md)
- [Encodable Implementations](scaledpose3d/encodable-implementations.md)
- [Equatable Implementations](scaledpose3d/equatable-implementations.md)
- [Hashable Implementations](scaledpose3d/hashable-implementations.md)
- [Rotatable3D Implementations](scaledpose3d/rotatable3d-implementations.md)

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
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPScaledPose3D (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a position, rotation, and scale.

## Declaration

```objectivec
typedef struct { ... } SPScaledPose3D;
```

## Topics

### Creating a 3D scaled-pose structure

- [SPScaledPose3DMake](spscaledpose3dmake-9dbop.md): Returns a scaled pose with the specified position, rotation, and scale.
- [SPScaledPose3DMake](spscaledpose3dmake-793r5.md)
- [SPScaledPose3DMakeLookAt](spscaledpose3dmakelookat-7bxnk.md): Returns a scaled pose at the specified position with the rotation towards the target.
- [SPScaledPose3DMakeLookAt](spscaledpose3dmakelookat-8yp17.md)
- [SPScaledPose3DMakeLookAt](spscaledpose3dmakelookat-gxlk.md)
- [SPScaledPose3DMakeWith4x4Matrix](spscaledpose3dmakewith4x4matrix.md): Returns a new scaled pose structure from the specified 4 x 4 matrix.
- [SPScaledPose3DMakeWithAffineTransform](spscaledpose3dmakewithaffinetransform.md): Returns a scaled pose with a position, rotation, and scale that the specified affine transform defines.
- [SPScaledPose3DMakeWithProjectiveTransform](spscaledpose3dmakewithprojectivetransform.md): Returns a scaled pose with a position, rotation, and scale that the specified projective transform defines.
- [SPScaledPose3DMakeWithVector](spscaledpose3dmakewithvector.md): Returns a scaled pose with the specified position, rotation, and scale.
- [SPScaledPose3DIdentity](spscaledpose3didentity.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DInvalid](spscaledpose3dinvalid.md): A structure that contains a position, rotation, and scale.

### Inspecting a 3D scaled pose’s properties

- [position](scaledpose3d/position.md): The scaled pose’s position.
- [rotation](scaledpose3d/rotation.md): The scaled pose’s rotation.
- [scale](scaledpose3d/scale.md): The scaled pose’s scale.
- [SPScaledPose3DGet4x4Matrix](spscaledpose3dget4x4matrix.md): Returns a 4 x 4 matrix that represents the scaled pose’s translation, rotation, and scale.
- [SPScaledPose3DGetInverse](spscaledpose3dgetinverse.md): Returns a new scaled pose with the inverse matrix of the specified scaled pose.

### Transforming a 3D scaled-pose structure

- [SPScaledPose3DFlip](spscaledpose3dflip.md): Returns a scaled pose that’s flipped along the specified axis.
- [SPScaledPose3DRotate](spscaledpose3drotate.md): Returns a scaled pose with a rotation that’s rotated by the specified rotation.
- [SPScaledPose3DRotateByQuaternion](spscaledpose3drotatebyquaternion.md): Returns a scaled pose with a rotation that’s rotated by the specified quaternion.
- [SPScaledPose3DTranslate](spscaledpose3dtranslate.md): Returns a scaled pose with an origin that’s offset by the specified vector.
- [SPScaledPose3DConcatenation](spscaledpose3dconcatenation-7ljg6.md): Returns a new scaled pose that’s constructed by concatenating two existing poses.

### Concatenating

- [SPScaledPose3DConcatenation](spscaledpose3dconcatenation-94ryp.md)
- [SPScaledPose3DConcatenation](spscaledpose3dconcatenation-3i5ch.md)
- [SPScaledPose3DConcatenation](spscaledpose3dconcatenation-7ljg6.md): Returns a new scaled pose that’s constructed by concatenating two existing poses.

### Checking characteristics

- [SPScaledPose3DIsIdentity](spscaledpose3disidentity.md): Returns a Boolean value that indicates whether the scaled pose is the identity transform.
- [SPScaledPose3DIsValid](spscaledpose3disvalid.md): Returns a Boolean value that indicates whether a scaled pose structure represents a valid scaled pose.

### Comparing values

- [SPScaledPose3DAlmostEqualToPose](spscaledpose3dalmostequaltopose-1qgpl.md)
- [SPScaledPose3DAlmostEqualToPose](spscaledpose3dalmostequaltopose-4ahe1.md): Returns a Boolean value that indicates whether the two scaled poses are equal within the specified absolute tolerance.
- [SPScaledPose3DEqualToPose](spscaledpose3dequaltopose.md): Returns a Boolean value that indicates whether two values are equal.

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
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
