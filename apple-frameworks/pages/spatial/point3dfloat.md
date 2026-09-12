> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/point3dfloat](https://developer.apple.com/documentation/spatial/point3dfloat)

# Point3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision structure that contains a point in a three-dimensional coordinate system.

## Declaration

```swift
struct Point3DFloat
```

## Topics

### Operators

- [\*(\_:\_:)](point3dfloat/_%28____%29-1r8dj.md): Returns the point that results from applying the pose to the point.
- [\*(\_:\_:)](point3dfloat/_%28____%29-22247.md): Returns the point that results from applying the transform to the point.
- [\*(\_:\_:)](point3dfloat/_%28____%29-3doxu.md): Returns the point that results from applying the transform to the point.
- [\*(\_:\_:)](point3dfloat/_%28____%29-5k7wl.md): Returns a point with each element mulitplied by a scalar value.
- [\*(\_:\_:)](point3dfloat/_%28____%29-8ug4a.md): Returns a point with each element mulitplied by a scalar value.
- [\*=(\_:\_:)](point3dfloat/_=%28____%29.md): Calculates the product of each element of a point and a scalar value and stores the result in the left-hand-side variable.
- [+(\_:\_:)](point3dfloat/+%28____%29-1t1gn.md): Returns a point that’s the element-wise sum of a size’s `width`, `height`, and `depth` and a point’s `x`, `y`, and `z` .
- [+(\_:\_:)](point3dfloat/+%28____%29-6ihv8.md): Returns a point that’s the element-wise sum of a point’s `x`, `y`, and `z` and a size’s `width`, `height`, and `depth`.
- [+=(\_:\_:)](point3dfloat/+=%28____%29-1x97i.md): Calculates the point that’s the element-wise sum of a point and a vector and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](point3dfloat/+=%28____%29-83599.md): Calculates the element-wise sum of a point’s `x`, `y`, and `z` and a size’s `width`, `height`, and `depth` and stores the result in the left-hand-side variable.
- [-(\_:)](point3dfloat/-%28__%29.md): Returns a point that’s the element-wise negation of the point.
- [-(\_:\_:)](point3dfloat/-%28____%29-46bqa.md): Returns a point that’s the element-wise difference of a size’s `width`, `height`, and `depth` and a point’s `x`, `y`, and `z`.
- [-(\_:\_:)](point3dfloat/-%28____%29-5jrc.md): Returns a vector that’s the element-wise difference of two points.
- [-(\_:\_:)](point3dfloat/-%28____%29-5rz8s.md): Returns a point that’s the element-wise difference of a point’s `x`, `y`, and `z` and a size’s `width`, `height`, and `depth`.
- [-=(\_:\_:)](point3dfloat/-=%28____%29-7r1d1.md): Calculates the element-wise difference of a point’s `x`, `y`, and `z` and a size’s `width`, `height`, and `depth` and stores the result in the left-hand-side variable.
- [-=(\_:\_:)](point3dfloat/-=%28____%29-8fp0l.md): Calculates the point that’s the element-wise difference of a point and a vector and stores the result in the left-hand-side variable.
- [/(\_:\_:)](point3dfloat/_%28____%29.md): Returns a point with each element divided by a scalar value.
- [/=(\_:\_:)](point3dfloat/_=%28____%29~e1759d39.md): Calculates the division of each element of a point and a scalar value and stores the result in the left-hand-side variable.

### Initializers

- [init()](point3dfloat/init%28%29.md)
- [init(\_:)](point3dfloat/init%28__%29-1h5vt.md): Returns a new point from a size.
- [init(\_:)](point3dfloat/init%28__%29-4sdjs.md): Returns a new point from a Spatial vector.
- [init(\_:)](point3dfloat/init%28__%29-4uwq7.md): Creates a Spatial point from a simd packed vector.
- [init(\_:)](point3dfloat/init%28__%29-5fcqk.md): Returns a new point from a double-precision vector.
- [init(\_:)](point3dfloat/init%28__%29-5g1ob.md): Returns a single-precision point from a double-precision point.
- [init(\_:)](point3dfloat/init%28__%29-8c02t.md): Creates a new point structure that contains the spherical coordinates converted to Cartesian coordinates.
- [init(\_:)](point3dfloat/init%28__%29-8dj77.md): Returns a new point from a double-precision vector.
- [init(vector:)](point3dfloat/init%28vector_%29.md)
- [init(x:y:z:)](point3dfloat/init%28x_y_z_%29-3hzkg.md): Returns a new point from the doubleing-point values.
- [init(x:y:z:)](point3dfloat/init%28x_y_z_%29-59uqs.md): Returns a point from the specified values.

### Instance Properties

- [vector](point3dfloat/vector.md)
- [x](point3dfloat/x.md)
- [y](point3dfloat/y.md)
- [z](point3dfloat/z.md)

### Instance Methods

- [applying(\_:)](point3dfloat/applying%28__%29-2dhmf.md): Returns the primitive that results from applying a scaled pose to the primitive.
- [distance(to:)](point3dfloat/distance%28to_%29.md)
- [isApproximatelyEqual(to:tolerance:)](point3dfloat/isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two points are equal within a specified tolerance.
- [rotated(by:around:)](point3dfloat/rotated%28by_around_%29-1ejmw.md)
- [rotated(by:around:)](point3dfloat/rotated%28by_around_%29-5xwwi.md)
- [unapplying(\_:)](point3dfloat/unapplying%28__%29-93yzx.md): Returns the primitive that results from unapplying a scaled pose to the primitive.

### Default Implementations

- [CustomReflectable Implementations](point3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](point3dfloat/decodable-implementations.md)
- [Encodable Implementations](point3dfloat/encodable-implementations.md)
- [Equatable Implementations](point3dfloat/equatable-implementations.md)
- [Hashable Implementations](point3dfloat/hashable-implementations.md)
- [Primitive3DProtocol Implementations](point3dfloat/primitive3dprotocol-implementations.md)

## Relationships

### Conforms To

- [ClampableWithinRectProtocol](clampablewithinrectprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Primitive3DProtocol](primitive3dprotocol.md)
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

# SPPoint3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision structure that contains a point in a three-dimensional coordinate system.

## Declaration

```objectivec
typedef union { ... } SPPoint3DFloat;
```

## Topics

### Instance Properties

- [vector](point3dfloat/vector.md)
- [x](sppoint3dfloat/x.md): The x-coordinate of the point.
- [y](sppoint3dfloat/y.md): The y-coordinate of the point.
- [z](sppoint3dfloat/z.md): The z-coordinate of the point.

## See Also

### 3D primitives

- [SPPoint3D](point3d.md): A point in a 3D coordinate system.
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
