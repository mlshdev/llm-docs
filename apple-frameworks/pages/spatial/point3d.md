> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/point3d](https://developer.apple.com/documentation/spatial/point3d)

# Point3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A point in a 3D coordinate system.

## Declaration

```swift
struct Point3D
```

## Topics

### Creating a 3D point structure

- [init()](point3d/init%28%29.md): Creates a point.
- [init(x:y:z:)](point3d/init%28x_y_z_%29-3lary.md): Creates a point from the specified double-precision values.
- [init(x:y:z:)](point3d/init%28x_y_z_%29-28jhw.md): Creates a point from the specified floating-point values.
- [init(vector:)](point3d/init%28vector_%29.md): Creates a point from the specified double-precision vector.
- [init(\_:)](point3d/init%28__%29-1f1ha.md): Creates a point from the specified Spatial size structure.
- [init(\_:)](point3d/init%28__%29-1kved.md): Creates a point from the specified single-precision vector.
- [init(\_:)](point3d/init%28__%29-34plj.md): Creates a point from the specified Spatial vector.
- [init(\_:)](point3d/init%28__%29-4gu20.md): Creates a point from the specified double-precision vector.
- [init(\_:)](point3d/init%28__%29-50tw4.md): Returns a Spatial point that represents the Cartesian coordinates of the specified spherical coordinates structure.

### Inspecting a 3D point’s properties

- [x](point3d/x.md): The x-coordinate value.
- [y](point3d/y.md): The y-coordinate value.
- [z](point3d/z.md): The z-coordinate value.
- [vector](point3d/vector.md)
- [magnitudeSquared](point3d/magnitudesquared.md)

### Checking characteristics

- [distance(to:)](point3d/distance%28to_%29.md): Returns the distance between two points.

### Transforming a 3D point structure

- [applying(\_:)](point3d/applying%28__%29-1f4em.md): Returns a point that’s transformed by the specified scaled pose.
- [applying(\_:)](point3d/applying%28__%29-1f4em.md): Returns a point that’s transformed by the specified scaled pose.
- [applying(\_:)](point3d/applying%28__%29-7ulww.md): Returns a point that results from applying the specified pose.
- [clamp(to:)](point3d/clamp%28to_%29.md): Clamps the mutable point to the specified rectangle.
- [scale(by:)](point3d/scale%28by_%29.md)
- [rotated(by:around:)](point3d/rotated%28by_around_%29-4tmfq.md): Returns a point that results from applying a rotation around the specified point.
- [rotated(by:around:)](point3d/rotated%28by_around_%29-chuy.md): Returns a point that results from rotating with a quaternion around the specified point.
- [unapplying(\_:)](point3d/unapplying%28__%29-5hk6t.md): Returns a point that results from unapplying the specified pose.
- [unapplying(\_:)](point3d/unapplying%28__%29-7wdtv.md): Returns a point that’s transformed by the inverse of the specified scaled pose.
- [unapplying(\_:)](point3d/unapplying%28__%29-7wdtv.md): Returns a point that’s transformed by the inverse of the specified scaled pose.

### Comparing values

- [==(\_:\_:)](point3d/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.
- [isApproximatelyEqual(to:tolerance:)](point3d/isapproximatelyequal%28to_tolerance_%29.md)

### Applying arithmetic operations

- [\*(\_:\_:)](point3d/_%28____%29-9rqvh.md): Returns a point that’s the product of a point and a scalar value.
- [\*(\_:\_:)](point3d/_%28____%29-9w7dk.md): Returns a point that’s the product of a scalar value and a point.
- [\*(\_:\_:)](point3d/_%28____%29-8ewep.md): Returns the point that results from applying the affine transform to the point.
- [\*(\_:\_:)](point3d/_%28____%29-9ak06.md): Returns the point that results from applying the projective transform to the point.
- [\*(\_:\_:)](point3d/_%28____%29-8wgkb.md): Returns a new point after applying the pose to the point.
- [+(\_:\_:)](point3d/+%28____%29-5v6x4.md): Returns a point that’s the element-wise sum of a point and a size.
- [+(\_:\_:)](point3d/+%28____%29-4g55.md): Returns a point that’s the element-wise sum of a size and a point.
- [-(\_:)](point3d/-%28__%29.md): Returns a point that’s the element-wise negation of the point.
- [-(\_:\_:)](point3d/-%28____%29-6om9g.md): Returns a point that’s the element-wise difference of a point and a size.
- [-(\_:\_:)](point3d/-%28____%29-9l6rn.md): Returns a point that’s the element-wise difference of two points.
- [-(\_:\_:)](point3d/-%28____%29-5t01r.md): Returns a point that’s the element-wise difference of a size and a point.
- [+=(\_:\_:)](point3d/+=%28____%29-80hjz.md): Adds a point and a vector, and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](point3d/+=%28____%29-3v0zk.md): Adds a point and a size, and stores the result in the left-hand-side variable.
- [-=(\_:\_:)](point3d/-=%28____%29-23bow.md): Subtracts a vector from a point and stores the difference in the left-hand-side variable.
- [-=(\_:\_:)](point3d/-=%28____%29-9xu2.md): Subtracts a vector from a point and stores the difference in the left-hand-side variable.
- [\*=(\_:\_:)](point3d/_=%28____%29.md): Multiplies a point and a double-precision value, and stores the result in the left-hand-side variable.
- [/(\_:\_:)](point3d/_%28____%29.md): Returns a point with each element divided by a scalar value.
- [/=(\_:\_:)](point3d/_=%28____%29~e95dcbca.md): Divides a point by a scalar value and stores the result in the left-hand-side variable.

### Deprecated symbols

- [rotation(to:)](point3d/rotation%28to_%29.md): Deprecated. Returns the rotation around the origin from the first point to the second point.
- [origin](point3d/origin.md): Deprecated.
- [simd](point3d/simd.md): Deprecated. A simd three-element vector that contains the x-, y-, and z-coordinate values.

### Initializers

- [init(\_:)](point3d/init%28__%29-7wgtj.md): Returns a double-precision point from a single-precision point.
- [init(\_:)](point3d/init%28__%29-8r7om.md): Creates a Spatial point from a simd packed vector.

### Default Implementations

- [Animatable Implementations](point3d/animatable-implementations.md)
- [ClampableWithinRectProtocol Implementations](point3d/clampablewithinrectprotocol-implementations.md)
- [CustomReflectable Implementations](point3d/customreflectable-implementations.md)
- [Decodable Implementations](point3d/decodable-implementations.md)
- [Encodable Implementations](point3d/encodable-implementations.md)
- [Equatable Implementations](point3d/equatable-implementations.md)
- [Hashable Implementations](point3d/hashable-implementations.md)
- [Primitive3D Implementations](point3d/primitive3d-implementations.md)

## Relationships

### Conforms To

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [ClampableWithinRectProtocol](clampablewithinrectprotocol.md)
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
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPPoint3D (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A point in a 3D coordinate system.

## Declaration

```objectivec
typedef union { ... } SPPoint3D;
```

## Topics

### Creating a 3D point structure

- [SPPoint3DMakeWithSize](sppoint3dmakewithsize.md): Creates a point from the specified Spatial size structure.
- [SPPoint3DMakeWithSphericalCoordinates](sppoint3dmakewithsphericalcoordinates.md): Returns a Spatial point that represents the Cartesian coordinates of the specified spherical coordinates structure.
- [SPPoint3DMakeWithVector](sppoint3dmakewithvector-39d4f.md): Creates a point from the specified double-precision vector.
- [SPPoint3DMakeWithVector](sppoint3dmakewithvector-6eegc.md)

### Constants

- [SPPoint3DInfinity](sppoint3dinfinity.md): The point with infinite x-, y-, and z-coordinate values.
- [SPPoint3DZero](sppoint3dzero.md): The point with the zero value.

### Inspecting a 3D point’s properties

- [x](sppoint3d/x.md): The x-coordinate value.
- [y](sppoint3d/y.md): The y-coordinate value.
- [z](sppoint3d/z.md): The z-coordinate value.
- [vector](point3d/vector.md)
- [SPPoint3DGetVector](sppoint3dgetvector.md): A simd three-element vector that contains the x-, y-, and z-coordinate values.

### Checking characteristics

- [SPPoint3DDistanceToPoint](point3d/distance%28to_%29.md): Returns the distance between two points.
- [SPPoint3DIsFinite](sppoint3disfinite.md)
- [SPPoint3DIsNaN](sppoint3disnan.md)
- [SPPoint3DIsZero](sppoint3diszero.md)

### Transforming a 3D point structure

- [SPPoint3DApplyAffineTransform](sppoint3dapplyaffinetransform.md): Returns a point that results from applying the specified affine transform.
- [SPPoint3DApplyPose](sppoint3dapplypose.md): Returns a point that results from applying the specified pose.
- [SPPoint3DApplyProjectiveTransform](sppoint3dapplyprojectivetransform.md): Returns a point that results from applying the specified projective transform.
- [SPPoint3DApplyScaledPose](sppoint3dapplyscaledpose.md): Returns a point that’s transformed by the specified scaled pose.
- [SPPoint3DRotate](sppoint3drotate.md): Returns a point that results from applying the specified rotation.
- [SPPoint3DRotateAroundPoint](point3d/rotated%28by_around_%29-4tmfq.md): Returns a point that results from applying a rotation around the specified point.
- [SPPoint3DRotateByQuaternion](sppoint3drotatebyquaternion.md): Returns a point that results from rotating with the specified quaternion.
- [SPPoint3DRotateByQuaternionAroundPoint](point3d/rotated%28by_around_%29-chuy.md): Returns a point that results from rotating with a quaternion around the specified point.
- [SPPoint3DTranslate](sppoint3dtranslate-8xo6b.md): Deprecated. Returns a point with an origin that’s offset by the specified size.
- [SPPoint3DTranslate](sppoint3dtranslate-9aj4h.md): Returns a point with an origin that’s offset by the specified vector.
- [SPPoint3DUnapplyAffineTransform](sppoint3dunapplyaffinetransform.md): Returns a point that results from unapplying the specified affine transform.
- [SPPoint3DUnapplyPose](sppoint3dunapplypose.md): Returns a point that results from unapplying the specified pose.
- [SPPoint3DUnapplyProjectiveTransform](sppoint3dunapplyprojectivetransform.md): Returns a point that results from unapplying the specified projective transform.
- [SPPoint3DUnapplyScaledPose](sppoint3dunapplyscaledpose.md): Returns a point that’s transformed by the inverse of the specified scaled pose.

### Comparing values

- [SPPoint3DAlmostEqualToPoint](sppoint3dalmostequaltopoint-8qyca.md)
- [SPPoint3DAlmostEqualToPoint](sppoint3dalmostequaltopoint-9vk02.md): Returns a Boolean value that indicates whether the two points are equal within the specified default absolute tolerance.
- [SPPoint3DEqualToPoint](sppoint3dequaltopoint.md): Returns a Boolean value that indicates whether two values are equal.

### Deprecated symbols

- [SPPoint3DRotationToPoint](point3d/rotation%28to_%29.md): Deprecated. Returns the rotation around the origin from the first point to the second point.
- [SPPoint3DGetOrigin](sppoint3dgetorigin.md): Deprecated. The location of the point.
- [SPPoint3DTranslate](sppoint3dtranslate-8xo6b.md): Deprecated. Returns a point with an origin that’s offset by the specified size.

## Relationships

### Conforms To

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### 3D primitives

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
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
