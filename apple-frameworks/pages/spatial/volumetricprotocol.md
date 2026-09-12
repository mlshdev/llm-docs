> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/volumetricprotocol](https://developer.apple.com/documentation/spatial/volumetricprotocol)

# VolumetricProtocol

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of methods for working with Spatial primitives with volume.

## Declaration

```swift
protocol VolumetricProtocol<Scalar> : SpatialTypeProtocol
```

## Topics

### Instance Properties

- [size](volumetricprotocol/size.md): The size of the volume.

### Instance Methods

- [contains(\_:)](volumetricprotocol/contains%28__%29.md): Returns a Boolean value that indicates whether the entity contains the specified volumetric entity.
- [contains(anyOf:)](volumetricprotocol/contains%28anyof_%29.md): Returns a Boolean value that indicates whether this volume contains any of the specified points.
- [contains(point:)](volumetricprotocol/contains%28point_%29.md): Returns a Boolean value that indicates whether this volume contains the specified point.
- [formIntersection(\_:)](volumetricprotocol/formintersection%28__%29.md): Sets the primitive to the intersection of itself and the specified primitive.
- [formUnion(\_:)](volumetricprotocol/formunion%28__%29.md): Sets the primitive to the union of itself and the specified primitive.
- [intersection(\_:)](volumetricprotocol/intersection%28__%29.md): Returns the intersection of two volumetric entities.
- [union(\_:)](volumetricprotocol/union%28__%29.md): Returns the smallest volumetric entity that contains the two source entities.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [SpatialTypeProtocol](spatialtypeprotocol.md)

### Conforming Types

- [Rect3D](rect3d.md)
- [Rect3DFloat](rect3dfloat.md)
- [Size3D](size3d.md)
- [Size3DFloat](size3dfloat.md)
