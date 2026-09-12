> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/primitive3d](https://developer.apple.com/documentation/spatial/primitive3d)

# Primitive3D

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A set of methods common to Spatial primitives.

## Declaration

```swift
protocol Primitive3D : Decodable, Encodable, Equatable
```

## Topics

### Instance properties

- [isFinite](primitive3d/isfinite.md): Returns a Boolean value that indicates whether the primitive is infinite.
- [isNaN](primitive3d/isnan.md): Returns a Boolean value that indicates whether the primitive contains any NaN values.
- [isZero](primitive3d/iszero.md): Returns a Boolean value that indicates whether the primitive is zero.

### Type properties

- [infinity](primitive3d/infinity.md): A primitive with infinite values.
- [zero](primitive3d/zero.md): A primitive with zero values.

### Transforming primitives

- [apply(\_:)](primitive3d/apply%28__%29-1nv9y.md): Applies an affine transform.
- [apply(\_:)](primitive3d/apply%28__%29-64cgp.md): Applies a projective transform.
- [applying(\_:)](primitive3d/applying%28__%29-6264n.md): Returns the entity that results from applying an affine transform.
- [applying(\_:)](primitive3d/applying%28__%29-6icvg.md): Returns the entity that results from applying a projective transform.
- [apply(\_:)](primitive3d/apply%28__%29-4ic73.md): Applies a pose.
- [applying(\_:)](primitive3d/applying%28__%29-5yia.md): Returns the entity that results from applying a pose.
- [unapply(\_:)](primitive3d/unapply%28__%29-4z6og.md): Unapplies an affine transform.
- [unapply(\_:)](primitive3d/unapply%28__%29-5haxp.md): Unapplies a projective transform.
- [unapplying(\_:)](primitive3d/unapplying%28__%29-8ihh5.md): Returns the entity that results from unapplying an affine transform.
- [unapplying(\_:)](primitive3d/unapplying%28__%29-5ppqi.md): Returns the entity that results from unapplying a projective transform.
- [unapply(\_:)](primitive3d/unapply%28__%29-2992s.md): Unapplies a pose.
- [unapplying(\_:)](primitive3d/unapplying%28__%29-37fbg.md): Returns the entity that results from unapplying a pose.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

### Conforming Types

- [Point3D](point3d.md)
- [Ray3D](ray3d.md)
- [Rect3D](rect3d.md)
- [Size3D](size3d.md)
- [Vector3D](vector3d.md)

## See Also

### Protocols

- [Rotatable3D](rotatable3d.md): A set of methods that defines the interface to rotate Spatial entities.
- [Scalable3D](scalable3d.md): A set of methods that defines the interface to scale Spatial entities.
- [Shearable3D](shearable3d.md): A set of methods that defines the interface to shear Spatial entities.
- [Translatable3D](translatable3d.md): A set of methods that defines the interface to translate Spatial entities.
- [Volumetric](volumetric.md): A set of methods for working with Spatial primitives with volume.
- [ClampableWithinRectProtocol](clampablewithinrectprotocol.md): A set of methods that defines the interface for Spatial entities that can be clamped to a volume.
