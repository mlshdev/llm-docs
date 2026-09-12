> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sphericalcoordinates3dfloat](https://developer.apple.com/documentation/spatial/sphericalcoordinates3dfloat)

# SphericalCoordinates3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

## Declaration

```swift
struct SphericalCoordinates3DFloat
```

## Topics

### Initializers

- [init()](sphericalcoordinates3dfloat/init%28%29.md)
- [init(\_:)](sphericalcoordinates3dfloat/init%28__%29-4t1io.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates represented by a Spatial vector.
- [init(\_:)](sphericalcoordinates3dfloat/init%28__%29-6dp94.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates.
- [init(\_:)](sphericalcoordinates3dfloat/init%28__%29-6lfdm.md): Returns a single-precision spherical coordinates structure from a double-precision spherical coordinates structure.
- [init(\_:)](sphericalcoordinates3dfloat/init%28__%29-8zaur.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates represented by a Spatial point.
- [init(\_:)](sphericalcoordinates3dfloat/init%28__%29-99axl.md): Creates a Spatial spherical coordinates structure from a simd packed vector.
- [init(radius:inclination:azimuth:)](sphericalcoordinates3dfloat/init%28radius_inclination_azimuth_%29.md)
- [init(vector:)](sphericalcoordinates3dfloat/init%28vector_%29.md)
- [init(x:y:z:)](sphericalcoordinates3dfloat/init%28x_y_z_%29.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates.

### Instance Properties

- [azimuth](sphericalcoordinates3dfloat/azimuth.md)
- [inclination](sphericalcoordinates3dfloat/inclination.md)
- [radius](sphericalcoordinates3dfloat/radius.md)
- [vector](sphericalcoordinates3dfloat/vector.md)

### Default Implementations

- [CustomReflectable Implementations](sphericalcoordinates3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](sphericalcoordinates3dfloat/decodable-implementations.md)
- [Encodable Implementations](sphericalcoordinates3dfloat/encodable-implementations.md)
- [Equatable Implementations](sphericalcoordinates3dfloat/equatable-implementations.md)
- [Hashable Implementations](sphericalcoordinates3dfloat/hashable-implementations.md)

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
- [RotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPSphericalCoordinates3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

## Declaration

```objectivec
typedef union { ... } SPSphericalCoordinates3DFloat;
```

## Topics

### Instance Properties

- [azimuth](spsphericalcoordinates3dfloat/azimuth.md): The azimuthal angle.
- [inclination](spsphericalcoordinates3dfloat/inclination.md): The inclination angle.
- [radius](spsphericalcoordinates3dfloat/radius.md): The distance to the origin.
- [vector](sphericalcoordinates3dfloat/vector.md)

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
