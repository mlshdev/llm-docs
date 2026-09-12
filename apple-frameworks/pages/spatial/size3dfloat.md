> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/size3dfloat](https://developer.apple.com/documentation/spatial/size3dfloat)

# Size3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision structure that contains width, height, and depth values.

## Declaration

```swift
struct Size3DFloat
```

## Topics

### Operators

- [\*(\_:\_:)](size3dfloat/_%28____%29-124fk.md): Returns a size with each element mulitplied by a scalar value.
- [\*(\_:\_:)](size3dfloat/_%28____%29-544n3.md): Returns a size with each element mulitplied by a scalar value.
- [\*(\_:\_:)](size3dfloat/_%28____%29-57yj1.md): Returns the size that results from applying the transform to the size.
- [\*(\_:\_:)](size3dfloat/_%28____%29-61lpp.md): Returns the size that results from applying the pose to the size.
- [\*(\_:\_:)](size3dfloat/_%28____%29-7txph.md): Returns the size that results from applying the transform to the size.
- [\*=(\_:\_:)](size3dfloat/_=%28____%29.md): Calculates the element-wise product of a size and a scalar value and stores the result in the left-hand-side variable.
- [+=(\_:\_:)](size3dfloat/+=%28____%29-6yxe6.md): Calculates the size that’s the element-wise sum of a size and a vector and stores the result in the left-hand-side variable.
- [-(\_:)](size3dfloat/-%28__%29.md): Returns a size that’s the element-wise negation of the size.
- [-=(\_:\_:)](size3dfloat/-=%28____%29-4iec2.md): Calculates the size that’s the element-wise difference of a size and a vector and stores the result in the left-hand-side variable.
- [/(\_:\_:)](size3dfloat/_%28____%29.md): Returns a size with each element divided by a scalar value.
- [/=(\_:\_:)](size3dfloat/_=%28____%29~b152df55.md): Calculates the element-wise division of a size and a scalar value and stores the result in the left-hand-side variable.

### Initializers

- [init()](size3dfloat/init%28%29.md)
- [init(\_:)](size3dfloat/init%28__%29-208lc.md): Returns a size structure from the specified 3-element vector.
- [init(\_:)](size3dfloat/init%28__%29-3z2u6.md): Returns a size structure from the specified Spatial vector.
- [init(\_:)](size3dfloat/init%28__%29-4eoby.md): Returns a size structure from the specified point.
- [init(\_:)](size3dfloat/init%28__%29-4r1ha.md): Returns a single-precision size from a double-precision size.
- [init(\_:)](size3dfloat/init%28__%29-6y249.md): Returns a new point from a single-precision vector.
- [init(\_:)](size3dfloat/init%28__%29-8nzza.md): Creates a Spatial size from a simd packed vector.
- [init(vector:)](size3dfloat/init%28vector_%29.md)
- [init(width:height:depth:)](size3dfloat/init%28width_height_depth_%29-8h26f.md): Returns a new point from the floating-point values.
- [init(width:height:depth:)](size3dfloat/init%28width_height_depth_%29-9u3g4.md): Returns a size structure from the specified values.

### Instance Properties

- [depth](size3dfloat/depth.md)
- [height](size3dfloat/height.md)
- [vector](size3dfloat/vector.md)
- [width](size3dfloat/width.md)

### Instance Methods

- [applying(\_:)](size3dfloat/applying%28__%29-4x5w1.md): Returns the primitive that results from applying a scaled pose to the primitive.
- [sheared(\_:)](size3dfloat/sheared%28__%29.md): Returns a sheared size.
- [unapplying(\_:)](size3dfloat/unapplying%28__%29-9dyaz.md): Returns the primitive that results from applying a scaled pose to the primitive.

### Type Properties

- [one](size3dfloat/one.md): A size with a width, height, and depth of `1`.

### Default Implementations

- [AdditiveArithmetic Implementations](size3dfloat/additivearithmetic-implementations.md)
- [CustomReflectable Implementations](size3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](size3dfloat/decodable-implementations.md)
- [Encodable Implementations](size3dfloat/encodable-implementations.md)
- [Equatable Implementations](size3dfloat/equatable-implementations.md)
- [Hashable Implementations](size3dfloat/hashable-implementations.md)
- [Primitive3DProtocol Implementations](size3dfloat/primitive3dprotocol-implementations.md)
- [Scalable3DProtocol Implementations](size3dfloat/scalable3dprotocol-implementations.md)
- [VolumetricProtocol Implementations](size3dfloat/volumetricprotocol-implementations.md)

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Primitive3DProtocol](primitive3dprotocol.md)
- [Rotatable3DProtocol](rotatable3dprotocol.md)
- [Scalable3DProtocol](scalable3dprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialTypeProtocol](spatialtypeprotocol.md)
- [VolumetricProtocol](volumetricprotocol.md)

## See Also

### 3D primitives

- [Point3D](point3d.md): A point in a 3D coordinate system.
- [Point3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [Size3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
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

# SPSize3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision structure that contains width, height, and depth values.

## Declaration

```objectivec
typedef union { ... } SPSize3DFloat;
```

## Topics

### Instance Properties

- [depth](spsize3dfloat/depth.md): The depth of the size.
- [height](spsize3dfloat/height.md): The height of the size.
- [width](spsize3dfloat/width.md): The width of the size.
- [vector](size3dfloat/vector.md)

## See Also

### 3D primitives

- [SPPoint3D](point3d.md): A point in a 3D coordinate system.
- [SPPoint3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPSize3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
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
