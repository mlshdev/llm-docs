> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/clampablewithinrectprotocol](https://developer.apple.com/documentation/spatial/clampablewithinrectprotocol)

# ClampableWithinRectProtocol

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of methods that defines the interface for Spatial entities that can be clamped to a volume.

## Declaration

```swift
protocol ClampableWithinRectProtocol<Scalar> : SpatialTypeProtocol
```

## Topics

### Instance Methods

- [clamp(to:)](clampablewithinrectprotocol/clamp%28to_%29.md): Clamps the mutable entity to the specified rectangle.
- [clamped(to:)](clampablewithinrectprotocol/clamped%28to_%29.md): Returns the entity with coordinates clamped to the specified rectangle.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [SpatialTypeProtocol](spatialtypeprotocol.md)

### Conforming Types

- [Point3D](point3d.md)
- [Point3DFloat](point3dfloat.md)

## See Also

### Protocols

- [Primitive3D](primitive3d.md): A set of methods common to Spatial primitives.
- [Rotatable3D](rotatable3d.md): A set of methods that defines the interface to rotate Spatial entities.
- [Scalable3D](scalable3d.md): A set of methods that defines the interface to scale Spatial entities.
- [Shearable3D](shearable3d.md): A set of methods that defines the interface to shear Spatial entities.
- [Translatable3D](translatable3d.md): A set of methods that defines the interface to translate Spatial entities.
- [Volumetric](volumetric.md): A set of methods for working with Spatial primitives with volume.
