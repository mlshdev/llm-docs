> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotatable3dprotocol](https://developer.apple.com/documentation/spatial/rotatable3dprotocol)

# Rotatable3DProtocol

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of methods that defines the interface for Spatial entities that can rotate.

## Declaration

```swift
protocol Rotatable3DProtocol<Scalar> : SpatialTypeProtocol
```

## Topics

### Operators

- [\*(\_:\_:)](rotatable3dprotocol/_%28____%29.md): Conforms when `Scalar` is `Float`. Returns the `Rotatable3DFloat` entity rotated by the specified rotation.

### Instance Methods

- [rotate(by:)](rotatable3dprotocol/rotate%28by_%29-66sot.md): Rotates the entity rotated by the specified quaternion around the origin.
- [rotate(by:)](rotatable3dprotocol/rotate%28by_%29-7waub.md): Rotates the entity rotated by the specified rotation around the origin.
- [rotated(by:)](rotatable3dprotocol/rotated%28by_%29-3xjsw.md): Returns the entity rotated by the specified rotation around the origin.
- [rotated(by:)](rotatable3dprotocol/rotated%28by_%29-4mye4.md): Returns the entity rotated by the specified quaternion around the origin.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [SpatialTypeProtocol](spatialtypeprotocol.md)

### Inherited By

- [Primitive3DProtocol](primitive3dprotocol.md)

### Conforming Types

- [AffineTransform3D](affinetransform3d.md)
- [AffineTransform3DFloat](affinetransform3dfloat.md)
- [Point3D](point3d.md)
- [Point3DFloat](point3dfloat.md)
- [Pose3D](pose3d.md)
- [Pose3DFloat](pose3dfloat.md)
- [ProjectiveTransform3D](projectivetransform3d.md)
- [ProjectiveTransform3DFloat](projectivetransform3dfloat.md)
- [Ray3D](ray3d.md)
- [Ray3DFloat](ray3dfloat.md)
- [Rect3D](rect3d.md)
- [Rect3DFloat](rect3dfloat.md)
- [Rotation3D](rotation3d.md)
- [Rotation3DFloat](rotation3dfloat.md)
- [ScaledPose3D](scaledpose3d.md)
- [ScaledPose3DFloat](scaledpose3dfloat.md)
- [Size3D](size3d.md)
- [Size3DFloat](size3dfloat.md)
- [Vector3D](vector3d.md)
- [Vector3DFloat](vector3dfloat.md)
