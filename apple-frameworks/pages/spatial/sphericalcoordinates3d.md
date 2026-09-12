> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sphericalcoordinates3d](https://developer.apple.com/documentation/spatial/sphericalcoordinates3d)

# SphericalCoordinates3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that defines spherical coordinates in radial, inclination, azimuthal order.

## Declaration

```swift
struct SphericalCoordinates3D
```

## Topics

### Creating a spherical coordinates structure

- [init()](sphericalcoordinates3d/init%28%29.md): Creates a spherical coordinates structure.
- [init(\_:)](sphericalcoordinates3d/init%28__%29-2eoox.md): Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified simd vector.
- [init(\_:)](sphericalcoordinates3d/init%28__%29-45qdy.md): Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified Spatial point.
- [init(\_:)](sphericalcoordinates3d/init%28__%29-1xzjz.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates represented by a simd vector.
- [init(radius:inclination:azimuth:)](sphericalcoordinates3d/init%28radius_inclination_azimuth_%29.md): Creates a new spherical coordinates structure with the specified radius, inclination, and azimuth.
- [init(vector:)](sphericalcoordinates3d/init%28vector_%29.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates represented by a simd vector.
- [init(x:y:z:)](sphericalcoordinates3d/init%28x_y_z_%29.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates.

### Inspecting a spherical coordinates structure’s properties

- [azimuth](sphericalcoordinates3d/azimuth.md): The azimuthal angle, in radians.
- [inclination](sphericalcoordinates3d/inclination.md): The inclination angle, in radians.
- [radius](sphericalcoordinates3d/radius.md): The distance to the origin.
- [vector](sphericalcoordinates3d/vector.md): A simd three-element vector that contains the radius, inclination, and azimuth values.
- [customMirror](sphericalcoordinates3d/custommirror.md): The custom mirror for this instance.

### Initializers

- [init(\_:)](sphericalcoordinates3d/init%28__%29-1hxjg.md): Returns a double-precision spherical coordinates structure from a single-precision spherical coordinates structure.
- [init(\_:)](sphericalcoordinates3d/init%28__%29-91oq0.md): Creates a Spatial spherical coordinates structure from a simd packed vector.

### Default Implementations

- [CustomReflectable Implementations](sphericalcoordinates3d/customreflectable-implementations.md)
- [Decodable Implementations](sphericalcoordinates3d/decodable-implementations.md)
- [Encodable Implementations](sphericalcoordinates3d/encodable-implementations.md)
- [Equatable Implementations](sphericalcoordinates3d/equatable-implementations.md)
- [Hashable Implementations](sphericalcoordinates3d/hashable-implementations.md)

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
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPSphericalCoordinates3D (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines spherical coordinates in radial, inclination, azimuthal order.

## Declaration

```objectivec
typedef union { ... } SPSphericalCoordinates3D;
```

## Topics

### Creating a spherical coordinates structure

- [SPSphericalCoordinates3DMake](sphericalcoordinates3d/init%28radius_inclination_azimuth_%29.md): Creates a new spherical coordinates structure with the specified radius, inclination, and azimuth.
- [SPSphericalCoordinates3DMakeWithCartesianPoint](spsphericalcoordinates3dmakewithcartesianpoint.md): Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified Spatial point.
- [SPSphericalCoordinates3DMakeWithCartesianVector](spsphericalcoordinates3dmakewithcartesianvector-940l6.md): Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified simd vector.
- [SPSphericalCoordinates3DMakeWithCartesianVector](spsphericalcoordinates3dmakewithcartesianvector-9pfp3.md)

### Inspecting a spherical coordinates structure’s properties

- [azimuth](spsphericalcoordinates3d/azimuth.md): The azimuthal angle, in radians.
- [inclination](spsphericalcoordinates3d/inclination.md): The inclination angle, in radians.
- [radius](spsphericalcoordinates3d/radius.md): The distance to the origin.
- [vector](sphericalcoordinates3d/vector.md): A simd three-element vector that contains the radius, inclination, and azimuth values.

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
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
