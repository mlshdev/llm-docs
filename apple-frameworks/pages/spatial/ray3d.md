> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3d](https://developer.apple.com/documentation/spatial/ray3d)

# Ray3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A ray in a 3D coordinate system.

## Declaration

```swift
struct Ray3D
```

## Topics

### Creating a 3D ray structure

- [init()](ray3d/init%28%29.md): Creates a ray structure.
- [init(origin:direction:)](ray3d/init%28origin_direction_%29-5sxkl.md): Creates a ray with the specified origin and the specified direction from Spatial primitives.
- [init(origin:direction:)](ray3d/init%28origin_direction_%29-3gfcj.md): Creates a ray with the specified origin and the specified direction from single-precision vectors.
- [init(origin:direction:)](ray3d/init%28origin_direction_%29-47w1c.md): Creates a ray with the specified origin and the specified direction from double-precision vectors.

### Inspecting a 3D ray’s properties

- [origin](ray3d/origin.md): The origin of the ray.
- [direction](ray3d/direction.md): The direction of the ray.

### Transforming a 3D ray structure

- [apply(\_:)](ray3d/apply%28__%29.md): Applies the specified pose to the ray.
- [applying(\_:)](ray3d/applying%28__%29-337n0.md): Returns a ray that results from applying the specified affine transform.
- [applying(\_:)](ray3d/applying%28__%29-2aom9.md): Returns a ray that results from applying the specified projective transform.
- [applying(\_:)](ray3d/applying%28__%29-34rqi.md): Returns a ray that results from applying the specified pose.
- [unapplying(\_:)](ray3d/unapplying%28__%29-7bc37.md): Returns a ray that results from unapplying the specified affine transform.
- [unapplying(\_:)](ray3d/unapplying%28__%29-6tj2w.md): Returns a ray that results from unapplying the specified projective transform.
- [unapplying(\_:)](ray3d/unapplying%28__%29-928o9.md): Unapplies the specified pose to the ray.
- [rotated(by:)](ray3d/rotated%28by_%29-qxp0.md): Returns a ray that results from applying the specified rotation.
- [rotated(by:)](ray3d/rotated%28by_%29-81glv.md): Returns a ray that results from rotating with the specified quaternion.
- [rotated(by:around:)](ray3d/rotated%28by_around_%29-uzon.md): Returns a ray that’s rotated by the specified quaternion around a specified pivot.
- [rotated(by:around:)](ray3d/rotated%28by_around_%29-7h43.md): Returns a ray that’s rotated by the specified rotation around a specified pivot.
- [applying(\_:)](ray3d/applying%28__%29-6hfqw.md): Returns a ray that’s transformed by the specified scaled pose.
- [unapplying(\_:)](ray3d/unapplying%28__%29-9x164.md): Returns a ray that’s transformed by the inverse of the specified scaled pose.

### Checking characteristics

- [isFinite](ray3d/isfinite.md): A Boolean value that indicates whether all of the values of the ray are finite.
- [isNaN](ray3d/isnan.md): A Boolean value that indicates whether the ray contains any NaN values.
- [isZero](ray3d/iszero.md): A Boolean value that indicates whether all of the values of the ray are zero.
- [intersects(\_:)](ray3d/intersects%28__%29.md): Returns a Boolean value that indicates whether a ray intersects a rectangle.
- [intersects(sphereOrigin:sphereRadius:)](ray3d/intersects%28sphereorigin_sphereradius_%29.md): Returns a Boolean value that indicates whether the ray intersects a specified sphere.

### Comparing values

- [==(\_:\_:)](ray3d/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

### Applying arithmetic operations

- [\*(\_:\_:)](ray3d/_%28____%29.md): Returns the ray that results from applying the pose to the ray.

### Initializers

- [init(\_:)](ray3d/init%28__%29.md): Returns a double-precision ray from a single-precision ray.
- [init(origin:direction:)](ray3d/init%28origin_direction_%29-63yk4.md): Creates a ray from Spatial primitives that describe the origin and direction.

### Default Implementations

- [CustomReflectable Implementations](ray3d/customreflectable-implementations.md)
- [Decodable Implementations](ray3d/decodable-implementations.md)
- [Encodable Implementations](ray3d/encodable-implementations.md)
- [Equatable Implementations](ray3d/equatable-implementations.md)
- [Hashable Implementations](ray3d/hashable-implementations.md)
- [Primitive3DProtocol Implementations](ray3d/primitive3dprotocol-implementations.md)
- [ProjectiveTransformable3D Implementations](ray3d/projectivetransformable3d-implementations.md)
- [Rotatable3DProtocol Implementations](ray3d/rotatable3dprotocol-implementations.md)

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
- [Primitive3D](primitive3d.md)
- [Primitive3DProtocol](primitive3dprotocol.md)
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
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPRay3D (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A ray in a 3D coordinate system.

## Declaration

```objectivec
typedef struct { ... } SPRay3D;
```

## Topics

### Creating a 3D ray structure

- [SPRay3DMakeWithVector](spray3dmakewithvector.md): Creates a ray with the specified origin and the specified direction from double-precision vectors.

### Inspecting a 3D ray’s properties

- [origin](ray3d/origin.md): The origin of the ray.
- [direction](ray3d/direction.md): The direction of the ray.

### Transforming a 3D ray structure

- [SPRay3DApplyAffineTransform](spray3dapplyaffinetransform.md): Returns a ray that results from applying the specified affine transform.
- [SPRay3DApplyProjectiveTransform](spray3dapplyprojectivetransform.md): Returns a ray that results from applying the specified projective transform.
- [SPRay3DTranslate](spray3dtranslate-13y4m.md): Deprecated. Returns a ray with an origin that’s offset by the specified size.
- [SPRay3DTranslate](spray3dtranslate-2t6zr.md): Returns a ray with an origin that’s offset by the specified vector.
- [SPRay3DApplyPose](spray3dapplypose.md): Returns a ray that results from applying the specified pose.
- [SPRay3DUnapplyAffineTransform](spray3dunapplyaffinetransform.md): Returns a ray that results from unapplying the specified affine transform.
- [SPRay3DUnapplyProjectiveTransform](spray3dunapplyprojectivetransform.md): Returns a ray that results from unapplying the specified projective transform.
- [SPRay3DUnapplyPose](spray3dunapplypose.md): Returns a ray that results from unapplying the specified projective transform.
- [SPRay3DRotate](spray3drotate.md): Returns a ray that results from applying the specified rotation.
- [SPRay3DRotateAroundPoint](spray3drotatearoundpoint.md): Returns a ray that’s rotated by the specified rotation around a specified pivot.
- [SPRay3DRotateByQuaternion](spray3drotatebyquaternion.md): Returns a ray that results from rotating with the specified quaternion.
- [SPRay3DRotateByQuaternionAroundPoint](spray3drotatebyquaternionaroundpoint.md): Returns a ray that’s rotated by the specified quaternion around a specified pivot.
- [SPRay3DApplyScaledPose](spray3dapplyscaledpose.md): Returns a ray that’s transformed by the specified scaled pose.
- [SPRay3DUnapplyScaledPose](spray3dunapplyscaledpose.md): Returns a ray that’s transformed by the inverse of the specified scaled pose.

### Checking characteristics

- [SPRay3DIntersectsSphere](ray3d/intersects%28sphereorigin_sphereradius_%29.md): Returns a Boolean value that indicates whether the ray intersects a specified sphere.
- [SPRay3DIsFinite](spray3disfinite.md): A Boolean value that indicates whether all of the values of the ray are finite.
- [SPRay3DIsNaN](spray3disnan.md): A Boolean value that indicates whether the ray contains any NaN values.
- [SPRay3DIsZero](spray3diszero.md): A Boolean value that indicates whether all of the values of the ray are zero.
- [SPRay3DIntersectsRect](spray3dintersectsrect.md): Returns a Boolean value that indicates whether a ray intersects a rectangle.

### Comparing values

- [SPRay3DEqualToRay](spray3dequaltoray.md): Returns a Boolean value that indicates whether two values are equal.

### Ray constants

- [SPRay3DInfinity](spray3dinfinity.md)
- [SPRay3DZero](spray3dzero.md)

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
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
