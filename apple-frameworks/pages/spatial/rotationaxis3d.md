> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotationaxis3d](https://developer.apple.com/documentation/spatial/rotationaxis3d)

# RotationAxis3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A 3D rotation axis.

## Declaration

```swift
struct RotationAxis3D
```

## Topics

### Creating a 3D rotation axis structure

- [init()](rotationaxis3d/init%28%29.md): Creates a rotation axis.
- [init(\_:)](rotationaxis3d/init%28__%29-96si4.md): Creates a rotation axis from the specified single-precision vector.
- [init(\_:)](rotationaxis3d/init%28__%29-804sx.md): Creates a rotation axis from the specified double-precision vector.
- [init(vector:)](rotationaxis3d/init%28vector_%29.md): Creates a rotation axis from a three-element double-precision vector.
- [init(\_:)](rotationaxis3d/init%28__%29-2zdal.md): Creates a rotation axis from a Spatial vector.
- [init(x:y:z:)](rotationaxis3d/init%28x_y_z_%29-3z5nm.md): Creates a rotation axis from the specified double-precision values.
- [init(x:y:z:)](rotationaxis3d/init%28x_y_z_%29-1x93q.md): Creates a rotation axis from the specified floating-point values.

### Checking characteristics

- [x](rotationaxis3d/x-swift.property.md): The x-coordinate value.
- [y](rotationaxis3d/y-swift.property.md): The y-coordinate value.
- [z](rotationaxis3d/z-swift.property.md): The z-coordinate value.
- [vector](rotationaxis3d/vector.md): A simd three-element vector that contains the x-, y-, and z-coordinate values.
- [isZero](rotationaxis3d/iszero.md): A Boolean value that indicates whether the rotation axis is zero.

### Constants

- [x](rotationaxis3d/x-swift.type.property.md): The x-axis, expressed in unit coordinates.
- [y](rotationaxis3d/y-swift.type.property.md): The y-axis, expressed in unit coordinates.
- [z](rotationaxis3d/z-swift.type.property.md): The z-axis, expressed in unit coordinates.
- [xy](rotationaxis3d/xy.md): The xy-axis, expressed in unit coordinates.
- [yz](rotationaxis3d/yz.md): The yz-axis, expressed in unit coordinates.
- [xz](rotationaxis3d/xz.md): The xz-axis, expressed in unit coordinates.
- [xyz](rotationaxis3d/xyz.md): The xyz-axis, expressed in unit coordinates.
- [zero](rotationaxis3d/zero.md): The rotation axis with the zero value.

### Deprecated symbols

- [simd](rotationaxis3d/simd.md): Deprecated. A simd three-element vector that contains the x-, y-, and z-coordinate values.

### Initializers

- [init(\_:)](rotationaxis3d/init%28__%29-ctks.md): Creates a Spatial rotation axis from a simd packed vector.
- [init(\_:)](rotationaxis3d/init%28__%29-lvvq.md): Returns a double-precision rotation axis from a single-precision rotation axis.

### Default Implementations

- [CustomReflectable Implementations](rotationaxis3d/customreflectable-implementations.md)
- [Decodable Implementations](rotationaxis3d/decodable-implementations.md)
- [Encodable Implementations](rotationaxis3d/encodable-implementations.md)
- [Equatable Implementations](rotationaxis3d/equatable-implementations.md)
- [Hashable Implementations](rotationaxis3d/hashable-implementations.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [RotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPRotationAxis3D (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 3D rotation axis.

## Declaration

```objectivec
typedef union { ... } SPRotationAxis3D;
```

## Topics

### Creating a 3D rotation axis structure

- [SPRotationAxis3DMakeWithVector](sprotationaxis3dmakewithvector-1n9ib.md): Creates a rotation axis from the specified double-precision vector.

### Checking characteristics

- [x](sprotationaxis3d/x.md): The x-axis value.
- [y](sprotationaxis3d/y.md): The y-axis value.
- [z](sprotationaxis3d/z.md): The z-axis value.
- [vector](rotationaxis3d/vector.md): A simd three-element vector that contains the x-, y-, and z-coordinate values.
- [SPRotationAxis3DIsZero](rotationaxis3d/iszero.md): A Boolean value that indicates whether the rotation axis is zero.

### Constants

- [SPRotationAxis3DZero](rotationaxis3d/zero.md): The rotation axis with the zero value.

### Deprecated symbols

- [SPRotationAxis3DEqualToRotationAxis](sprotationaxis3dequaltorotationaxis.md): Returns a Boolean value that indicates whether two values are equal.

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
- [SPRotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [SPPose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [SPPose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [SPScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
