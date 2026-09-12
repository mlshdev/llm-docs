> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/shearable3dprotocol](https://developer.apple.com/documentation/spatial/shearable3dprotocol)

# Shearable3DProtocol

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of methods that defines the interface for Spatial entities that can shear.

## Declaration

```swift
protocol Shearable3DProtocol<Scalar> : SpatialTypeProtocol
```

## Topics

### Instance Methods

- [shear(\_:)](shearable3dprotocol/shear%28__%29.md): Shears the entity.
- [sheared(\_:)](shearable3dprotocol/sheared%28__%29.md): Returns a sheared entity.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [SpatialTypeProtocol](spatialtypeprotocol.md)

### Conforming Types

- [AffineTransform3D](affinetransform3d.md)
- [AffineTransform3DFloat](affinetransform3dfloat.md)
- [ProjectiveTransform3D](projectivetransform3d.md)
- [ProjectiveTransform3DFloat](projectivetransform3dfloat.md)
