> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotationaxis3dfloat](https://developer.apple.com/documentation/spatial/rotationaxis3dfloat)

# RotationAxis3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A 3D axis.

## Declaration

```swift
struct RotationAxis3DFloat
```

## Topics

### Initializers

- [init()](rotationaxis3dfloat/init%28%29.md)
- [init(\_:)](rotationaxis3dfloat/init%28__%29-3r5wd.md): Returns a new rotation axis from a single-precision vector.
- [init(\_:)](rotationaxis3dfloat/init%28__%29-4n1ej.md): Returns a new rotation axis from a double-precision vector.
- [init(\_:)](rotationaxis3dfloat/init%28__%29-4q4aa.md): Returns a new rotation axis from a Spatial vector.
- [init(\_:)](rotationaxis3dfloat/init%28__%29-6c919.md): Returns a single-precision rotation axis from a double-precision rotation axis.
- [init(\_:)](rotationaxis3dfloat/init%28__%29-72zxm.md): Creates a Spatial rotation axis from a simd packed vector.
- [init(vector:)](rotationaxis3dfloat/init%28vector_%29.md)
- [init(x:y:z:)](rotationaxis3dfloat/init%28x_y_z_%29-273jp.md): Returns a rotation axis from the specified values.
- [init(x:y:z:)](rotationaxis3dfloat/init%28x_y_z_%29-hx2.md): Returns a new rotation axis from the floating-point values.

### Instance Properties

- [vector](rotationaxis3dfloat/vector.md)
- [x](rotationaxis3dfloat/x-swift.property.md): The x-axis value.
- [y](rotationaxis3dfloat/y-swift.property.md): The y-axis value.
- [z](rotationaxis3dfloat/z-swift.property.md): The z-axis value.

### Type Properties

- [x](rotationaxis3dfloat/x-swift.type.property.md): The x-axis, expressed in unit coordinates.
- [xy](rotationaxis3dfloat/xy.md): The xy-axis, expressed in unit coordinates.
- [xyz](rotationaxis3dfloat/xyz.md): The xyz-axis, expressed in unit coordinates.
- [xz](rotationaxis3dfloat/xz.md): The xz-axis, expressed in unit coordinates.
- [y](rotationaxis3dfloat/y-swift.type.property.md): The y-axis, expressed in unit coordinates.
- [yz](rotationaxis3dfloat/yz.md): The yz-axis, expressed in unit coordinates.
- [z](rotationaxis3dfloat/z-swift.type.property.md): The z-axis, expressed in unit coordinates.
- [zero](rotationaxis3dfloat/zero.md): A 3D axis.

### Default Implementations

- [CustomReflectable Implementations](rotationaxis3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](rotationaxis3dfloat/decodable-implementations.md)
- [Encodable Implementations](rotationaxis3dfloat/encodable-implementations.md)
- [Equatable Implementations](rotationaxis3dfloat/equatable-implementations.md)
- [Hashable Implementations](rotationaxis3dfloat/hashable-implementations.md)

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
- [RotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPRotationAxis3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 3D axis.

## Declaration

```objectivec
typedef union { ... } SPRotationAxis3DFloat;
```

## Topics

### Instance Properties

- [vector](rotationaxis3dfloat/vector.md)
- [x](sprotationaxis3dfloat/x.md): The x-axis value.
- [y](sprotationaxis3dfloat/y.md): The y-axis value.
- [z](sprotationaxis3dfloat/z.md): The z-axis value.

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
- [SPPose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [SPPose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [SPScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
