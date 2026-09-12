> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3dfloat](https://developer.apple.com/documentation/spatial/rect3dfloat)

# Rect3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision structure that contains the location and dimensions of a 3D rectangle.

## Declaration

```swift
struct Rect3DFloat
```

## Topics

### Operators

- [\*(\_:\_:)](rect3dfloat/_%28____%29-1iaiz.md): Returns the rectangle that results from applying the transform to the rectangle.
- [\*(\_:\_:)](rect3dfloat/_%28____%29-1xai0.md): Returns the rectangle that results from applying the pose to the rectangle.
- [\*(\_:\_:)](rect3dfloat/_%28____%29-2fdne.md): Returns the rectangle that results from applying the transform to the rectangle.

### Initializers

- [init()](rect3dfloat/init%28%29.md)
- [init(\_:)](rect3dfloat/init%28__%29.md): Returns a single-precision rectangle from a double-precision rectangle.
- [init(center:size:)](rect3dfloat/init%28center_size_%29-1gsbj.md): Creates a rectangle from single-precision vectors that describe the center and size.
- [init(center:size:)](rect3dfloat/init%28center_size_%29-2c8oz.md): Creates a rectangle from simd vectors that describe the center and size.
- [init(center:size:)](rect3dfloat/init%28center_size_%29-92ay9.md): Creates a rectangle from Spatial vectors that describe the center and size.
- [init(center:size:)](rect3dfloat/init%28center_size_%29-e8la.md): Creates a rectangle at the specified center with the specified size.
- [init(origin:size:)](rect3dfloat/init%28origin_size_%29-27.md): Creates a rectangle from simd vectors that describe the origin and size.
- [init(origin:size:)](rect3dfloat/init%28origin_size_%29-8tqau.md)
- [init(origin:size:)](rect3dfloat/init%28origin_size_%29-9his9.md)
- [init(origin:size:)](rect3dfloat/init%28origin_size_%29-uw6h.md): Creates a rectangle from double-precision vectors that describe the origin and size.
- [init(origin:size:)](rect3dfloat/init%28origin_size_%29-ywzp.md): Creates a rectangle from Spatial vectors that describe the origin and size.
- [init(points:)](rect3dfloat/init%28points_%29.md): Creates a rectangle that’s the bounding box of the specified points.

### Instance Properties

- [center](rect3dfloat/center.md)
- [cornerPoints](rect3dfloat/cornerpoints.md): Returns the corner points of the rectangle.
- [integral](rect3dfloat/integral.md)
- [isEmpty](rect3dfloat/isempty.md)
- [isNull](rect3dfloat/isnull.md)
- [max](rect3dfloat/max.md)
- [min](rect3dfloat/min.md)
- [origin](rect3dfloat/origin.md): The origin of the rectangle.
- [standardized](rect3dfloat/standardized.md): Returns a rectangle with a positive width and height.

### Instance Methods

- [applying(\_:)](rect3dfloat/applying%28__%29-7i8x5.md): Returns the primitive that results from applying a scaled pose to the primitive.
- [formInset(by:)](rect3dfloat/forminset%28by_%29.md): Insets the rectangle by the specified size.
- [inset(by:)](rect3dfloat/inset%28by_%29.md)
- [intersects(\_:)](rect3dfloat/intersects%28__%29.md)
- [rotated(by:around:)](rect3dfloat/rotated%28by_around_%29-1g90c.md)
- [rotated(by:around:)](rect3dfloat/rotated%28by_around_%29-9yw64.md)
- [sheared(\_:)](rect3dfloat/sheared%28__%29.md): Returns a sheared rectangle.
- [unapplying(\_:)](rect3dfloat/unapplying%28__%29-4dm1d.md): Returns the primitive that results from applying a scaled pose to the primitive.

### Default Implementations

- [CustomReflectable Implementations](rect3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](rect3dfloat/decodable-implementations.md)
- [Encodable Implementations](rect3dfloat/encodable-implementations.md)
- [Equatable Implementations](rect3dfloat/equatable-implementations.md)
- [Hashable Implementations](rect3dfloat/hashable-implementations.md)
- [Primitive3DProtocol Implementations](rect3dfloat/primitive3dprotocol-implementations.md)
- [Scalable3DProtocol Implementations](rect3dfloat/scalable3dprotocol-implementations.md)
- [VolumetricProtocol Implementations](rect3dfloat/volumetricprotocol-implementations.md)

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
- [Scalable3DProtocol](scalable3dprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialTypeProtocol](spatialtypeprotocol.md)
- [Translatable3DProtocol](translatable3dprotocol.md)
- [VolumetricProtocol](volumetricprotocol.md)

## See Also

### 3D primitives

- [Point3D](point3d.md): A point in a 3D coordinate system.
- [Point3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [Size3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [Size3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [Rect3D](rect3d.md): A rectangle in a 3D coordinate system.
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

# SPRect3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision structure that contains the location and dimensions of a 3D rectangle.

## Declaration

```objectivec
typedef struct { ... } SPRect3DFloat;
```

## Topics

### Instance Properties

- [origin](rect3dfloat/origin.md): The origin of the rectangle.
- [size](sprect3dfloat/size.md): The size of the rectangle.

## See Also

### 3D primitives

- [SPPoint3D](point3d.md): A point in a 3D coordinate system.
- [SPPoint3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPSize3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [SPSize3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [SPRect3D](rect3d.md): A rectangle in a 3D coordinate system.
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
