> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3dfloat](https://developer.apple.com/documentation/spatial/ray3dfloat)

# Ray3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision structure that contains the origin and direction of a 3D ray.

## Declaration

```swift
struct Ray3DFloat
```

## Topics

### Operators

- [\*(\_:\_:)](ray3dfloat/_%28____%29.md): Returns the point that results from applying the pose to the ray.

### Initializers

- [init()](ray3dfloat/init%28%29.md)
- [init(\_:)](ray3dfloat/init%28__%29.md): Returns a single-precision ray from a double-precision ray.
- [init(origin:direction:)](ray3dfloat/init%28origin_direction_%29-2oe8j.md): Creates a ray from Spatial primitives that describe the origin and direction.
- [init(origin:direction:)](ray3dfloat/init%28origin_direction_%29-32dzt.md): Creates a ray from Spatial primitives that describe the origin and direction.
- [init(origin:direction:)](ray3dfloat/init%28origin_direction_%29-6g59d.md): Creates a ray from single-precision simd vectors that describe the origin and direction.

### Instance Properties

- [direction](ray3dfloat/direction.md): The direction of the ray.
- [origin](ray3dfloat/origin.md): The origin of the ray.

### Instance Methods

- [applying(\_:)](ray3dfloat/applying%28__%29-9e23e.md): Returns a ray that’s transformed by the specified scaled pose.
- [intersects(\_:)](ray3dfloat/intersects%28__%29.md): Returns `true` if the the ray intersects the specified rectangle.
- [intersects(sphereOrigin:sphereRadius:)](ray3dfloat/intersects%28sphereorigin_sphereradius_%29.md)
- [rotated(by:around:)](ray3dfloat/rotated%28by_around_%29-4etjl.md): Returns a ray that’s rotated by the specified rotation around a specified pivot.
- [rotated(by:around:)](ray3dfloat/rotated%28by_around_%29-7tmtq.md): Returns a ray that’s rotated by the specified rotation around a specified pivot.
- [unapplying(\_:)](ray3dfloat/unapplying%28__%29-3zk38.md): Returns a ray that’s transformed by the inverse of the specified scaled pose.

### Default Implementations

- [CustomReflectable Implementations](ray3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](ray3dfloat/decodable-implementations.md)
- [Encodable Implementations](ray3dfloat/encodable-implementations.md)
- [Equatable Implementations](ray3dfloat/equatable-implementations.md)
- [Hashable Implementations](ray3dfloat/hashable-implementations.md)
- [Primitive3DProtocol Implementations](ray3dfloat/primitive3dprotocol-implementations.md)
- [Rotatable3DProtocol Implementations](ray3dfloat/rotatable3dprotocol-implementations.md)

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

# SPRay3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision structure that contains the origin and direction of a 3D ray.

## Declaration

```objectivec
typedef struct { ... } SPRay3DFloat;
```

## Topics

### Instance Properties

- [direction](ray3dfloat/direction.md): The direction of the ray.
- [origin](ray3dfloat/origin.md): The origin of the ray.

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
