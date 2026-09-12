> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scalable3dprotocol](https://developer.apple.com/documentation/spatial/scalable3dprotocol)

# Scalable3DProtocol

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of methods that defines the interface for Spatial entities that can scale.

## Declaration

```swift
protocol Scalable3DProtocol<Scalar> : SpatialTypeProtocol
```

## Topics

### Instance Methods

- [scale(by:)](scalable3dprotocol/scale%28by_%29.md): Scales the entity by the specified size.
- [scaleBy(x:y:z:)](scalable3dprotocol/scaleby%28x_y_z_%29.md): Scales the entity by the specified values.
- [scaled(by:)](scalable3dprotocol/scaled%28by_%29.md): Returns the entity scaled by the specified size.
- [scaledBy(x:y:z:)](scalable3dprotocol/scaledby%28x_y_z_%29.md): Returns the entity scaled by the specified values.
- [uniformlyScale(by:)](scalable3dprotocol/uniformlyscale%28by_%29.md): Uniformly scales the entity by the specified scalar value.
- [uniformlyScaled(by:)](scalable3dprotocol/uniformlyscaled%28by_%29.md): Returns the entity uniformly scaled by the specified scalar value.

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
- [Rect3D](rect3d.md)
- [Rect3DFloat](rect3dfloat.md)
- [Size3D](size3d.md)
- [Size3DFloat](size3dfloat.md)
- [Vector3D](vector3d.md)
- [Vector3DFloat](vector3dfloat.md)
