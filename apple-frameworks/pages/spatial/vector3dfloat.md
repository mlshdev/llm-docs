> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/vector3dfloat](https://developer.apple.com/documentation/spatial/vector3dfloat)

# Vector3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision structure that defines a three-element vector

## Declaration

```swift
struct Vector3DFloat
```

## Topics

### Operators

- [\*(\_:\_:)](vector3dfloat/_%28____%29-1nqw7.md): Returns the vector that results from applying the pose to the vector.
- [\*(\_:\_:)](vector3dfloat/_%28____%29-39da3.md): Returns the vector that results from applying the transform to the vector.
- [\*(\_:\_:)](vector3dfloat/_%28____%29-5f6x6.md): Returns the vector that’s the element-wise product of a vector and a scalar value.
- [\*(\_:\_:)](vector3dfloat/_%28____%29-77n9y.md): Returns the vector that’s the element-wise product of a scalar value and a vector.
- [\*(\_:\_:)](vector3dfloat/_%28____%29-86gx9.md): Returns the vector that results from applying the transform to the vector.
- [\*=(\_:\_:)](vector3dfloat/_=%28____%29.md): Calculates the vector that’s the element-wise product of a vector and a scalar value and stores the result in the left-hand-side variable.
- [+(\_:\_:)](vector3dfloat/+%28____%29-1l8zf.md): Returns the point that’s the element-wise sum of a point and a vector.
- [+(\_:\_:)](vector3dfloat/+%28____%29-1wtkv.md): Returns the point that’s the element-wise sum of a vector and a point.
- [+(\_:\_:)](vector3dfloat/+%28____%29-2l7re.md): Returns the size that’s the element-wise sum of a size and a vector.
- [+(\_:\_:)](vector3dfloat/+%28____%29-94qrx.md): Returns the size that’s the element-wise sum of a vector and a size.
- [-(\_:)](vector3dfloat/-%28__%29.md): Returns the vector that’s the element-wise negation of the vector.
- [-(\_:\_:)](vector3dfloat/-%28____%29-115el.md): Returns the size that’s the element-wise difference of a vector and a size.
- [-(\_:\_:)](vector3dfloat/-%28____%29-5qy45.md): Returns the size that’s the element-wise difference of a size and a vector.
- [-(\_:\_:)](vector3dfloat/-%28____%29-7h9bz.md): Returns the point that’s the element-wise difference of a vector and a point.
- [-(\_:\_:)](vector3dfloat/-%28____%29-8k83d.md): Returns the point that’s the element-wise difference of a point and a vector.
- [/(\_:\_:)](vector3dfloat/_%28____%29.md): Returns the vector that’s the element-wise division of a vector and a scalar value.
- [/=(\_:\_:)](vector3dfloat/_=%28____%29~d71b3ee1.md): Calculates the vector that’s the element-wise division of a vector and a scalar value and stores the result in the left-hand-side variable.

### Initializers

- [init()](vector3dfloat/init%28%29.md)
- [init(\_:)](vector3dfloat/init%28__%29-13p20.md): Returns a new vector from a rotation axis.
- [init(\_:)](vector3dfloat/init%28__%29-1w9o5.md): Creates a Spatial vector from a simd packed vector.
- [init(\_:)](vector3dfloat/init%28__%29-217dp.md): Returns a new vector from a point.
- [init(\_:)](vector3dfloat/init%28__%29-2qtq8.md): Returns a vector point from a single-precision vector.
- [init(\_:)](vector3dfloat/init%28__%29-3c8f6.md): Returns a new vector from a single-precision vector.
- [init(\_:)](vector3dfloat/init%28__%29-4svr4.md): Creates a new vector structure that contains the spherical coordinates converted to Cartesian coordinates.
- [init(\_:)](vector3dfloat/init%28__%29-538j2.md): Returns a single-precision vector from a double-precision vector.
- [init(\_:)](vector3dfloat/init%28__%29-7y4t0.md): Returns a new vector from a size.
- [init(vector:)](vector3dfloat/init%28vector_%29.md)
- [init(x:y:z:)](vector3dfloat/init%28x_y_z_%29-1h79g.md): Returns a new vector from the doubleing-point values.
- [init(x:y:z:)](vector3dfloat/init%28x_y_z_%29-8dkie.md): Returns a vector from the specified values.

### Instance Properties

- [length](vector3dfloat/length.md)
- [lengthSquared](vector3dfloat/lengthsquared.md)
- [normalized](vector3dfloat/normalized.md): Returns this vector with a length of `1`.
- [vector](vector3dfloat/vector.md)
- [x](vector3dfloat/x.md)
- [y](vector3dfloat/y.md)
- [z](vector3dfloat/z.md)

### Instance Methods

- [applying(\_:)](vector3dfloat/applying%28__%29-3mahk.md): Returns the primitive that results from applying a scaled pose to the primitive.
- [cross(\_:)](vector3dfloat/cross%28__%29.md): Returns the cross product of this vector and the specified vector.
- [dot(\_:)](vector3dfloat/dot%28__%29.md): Returns the dot product of this vector and the specified vector.
- [normalize()](vector3dfloat/normalize%28%29.md): Normalizes the vector.
- [projected(\_:)](vector3dfloat/projected%28__%29.md): Returns this vector projected onto the specified vector.
- [reflected(\_:)](vector3dfloat/reflected%28__%29.md): Returns the reflection direction of this incident vector and the specified unit normal vector.
- [rotation(to:)](vector3dfloat/rotation%28to_%29.md): Returns the rotation from the normalized first vector to the normalized second vector.
- [sheared(\_:)](vector3dfloat/sheared%28__%29.md): Returns a sheared vector.
- [unapplying(\_:)](vector3dfloat/unapplying%28__%29-9dwm2.md): Returns the primitive that results from unapplying a scaled pose to the primitive.

### Type Properties

- [forward](vector3dfloat/forward.md): A vector with values `[0, 0, 1]`.
- [right](vector3dfloat/right.md): A vector with values `[1, 0, 0]`.
- [up](vector3dfloat/up.md): A vector with values `[0, 1, 0]`.

### Type Methods

- [lerp(from:to:t:)](vector3dfloat/lerp%28from_to_t_%29.md): Returns a Spatial vector that represents the linear interpolation at `t` between two vectors.
- [smoothstep(edge0:edge1:x:)](vector3dfloat/smoothstep%28edge0_edge1_x_%29.md): Returns a Spatial vector that represents the smooth interpolation at `x` between two vectors.

### Default Implementations

- [AdditiveArithmetic Implementations](vector3dfloat/additivearithmetic-implementations.md)
- [CustomReflectable Implementations](vector3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](vector3dfloat/decodable-implementations.md)
- [Encodable Implementations](vector3dfloat/encodable-implementations.md)
- [Equatable Implementations](vector3dfloat/equatable-implementations.md)
- [Hashable Implementations](vector3dfloat/hashable-implementations.md)
- [Primitive3DProtocol Implementations](vector3dfloat/primitive3dprotocol-implementations.md)
- [Rotatable3DProtocol Implementations](vector3dfloat/rotatable3dprotocol-implementations.md)
- [Scalable3DProtocol Implementations](vector3dfloat/scalable3dprotocol-implementations.md)

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
- [ProjectiveTransformable3D](projectivetransformable3d.md)
- [ProjectiveTransformable3DFloat](projectivetransformable3dfloat.md)
- [Rotatable3DProtocol](rotatable3dprotocol.md)
- [Scalable3DProtocol](scalable3dprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialTypeProtocol](spatialtypeprotocol.md)

## See Also

### Data structures

- [Vector3D](vector3d.md): A three-element vector.
- [Axis3D](axis3d.md): Constants that describe an axis.

# SPVector3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision structure that defines a three-element vector

## Declaration

```objectivec
typedef union { ... } SPVector3DFloat;
```

## Topics

### Instance Properties

- [x](spvector3dfloat/x.md): The first element of the vector.
- [y](spvector3dfloat/y.md): The second element of the vector.
- [z](spvector3dfloat/z.md): The third element of the vector.
- [vector](vector3dfloat/vector.md)

## See Also

### Data structures

- [SPVector3D](vector3d.md): A three-element vector.
- [SPAxis](axis3d.md): Constants that describe an axis.
