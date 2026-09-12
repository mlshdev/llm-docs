> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/primitive3dprotocol](https://developer.apple.com/documentation/spatial/primitive3dprotocol)

# Primitive3DProtocol

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of methods common to Spatial primitives.

## Declaration

```swift
protocol Primitive3DProtocol<Scalar> : Rotatable3DProtocol
```

## Topics

### Instance Properties

- [isFinite](primitive3dprotocol/isfinite.md): Returns whether the primitive is finite.
- [isNaN](primitive3dprotocol/isnan.md): Returns whether the primitive contains any `NaN` values.
- [isZero](primitive3dprotocol/iszero.md): Returns whether the primitive is zero.

### Instance Methods

- [apply(\_:)](primitive3dprotocol/apply%28__%29-1qcu6.md): Applies a pose.
- [apply(\_:)](primitive3dprotocol/apply%28__%29-3bne6.md): Applies a projective transform.
- [apply(\_:)](primitive3dprotocol/apply%28__%29-6b1fd.md): Applies an affine transform.
- [applying(\_:)](primitive3dprotocol/applying%28__%29-1tt2b.md): Returns the primitive that results from applying an affine transform to the primitive.
- [applying(\_:)](primitive3dprotocol/applying%28__%29-4ylq8.md): Returns the primitive that results from applying a pose to the primitive.
- [applying(\_:)](primitive3dprotocol/applying%28__%29-690k5.md): Returns the primitive that results from applying a projective transform to the primitive.
- [unapply(\_:)](primitive3dprotocol/unapply%28__%29-22esh.md): Unapplies a projective transform.
- [unapply(\_:)](primitive3dprotocol/unapply%28__%29-34afa.md): Unapplies an affine transform.
- [unapply(\_:)](primitive3dprotocol/unapply%28__%29-5dfj2.md): Unapplies a pose.
- [unapplying(\_:)](primitive3dprotocol/unapplying%28__%29-1px2q.md): Returns the primitive that results from unapplying a projective transform to the primitive.
- [unapplying(\_:)](primitive3dprotocol/unapplying%28__%29-53rsn.md): Returns the primitive that results from unapplying an affine transform to the primitive.
- [unapplying(\_:)](primitive3dprotocol/unapplying%28__%29-5fmf2.md): Returns the primitive that results from unapplying a pose to the primitive.

### Type Properties

- [infinity](primitive3dprotocol/infinity.md): A primitive with infinite values.
- [zero](primitive3dprotocol/zero.md): A primitive with zero values.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Rotatable3DProtocol](rotatable3dprotocol.md)
- [SpatialTypeProtocol](spatialtypeprotocol.md)

### Conforming Types

- [Point3D](point3d.md)
- [Point3DFloat](point3dfloat.md)
- [Ray3D](ray3d.md)
- [Ray3DFloat](ray3dfloat.md)
- [Rect3D](rect3d.md)
- [Rect3DFloat](rect3dfloat.md)
- [Size3D](size3d.md)
- [Size3DFloat](size3dfloat.md)
- [Vector3D](vector3d.md)
- [Vector3DFloat](vector3dfloat.md)
