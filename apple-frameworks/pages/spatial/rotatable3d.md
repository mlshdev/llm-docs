> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotatable3d](https://developer.apple.com/documentation/spatial/rotatable3d)

# Rotatable3D

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A set of methods that defines the interface to rotate Spatial entities.

## Declaration

```swift
protocol Rotatable3D
```

## Topics

### Instance methods

- [rotate(by:)](rotatable3d/rotate%28by_%29-usrg.md): Rotates the entity by a quaternion.
- [rotate(by:)](rotatable3d/rotate%28by_%29-1g3rl.md): Rotates the entity by an angle over an axis.
- [rotated(by:)](rotatable3d/rotated%28by_%29-4gdqe.md): Returns the entity that a quaternion rotates.
- [rotated(by:)](rotatable3d/rotated%28by_%29-7bx4w.md): Returns the entity that results from applying the specified rotation.

## Relationships

### Conforming Types

- [AffineTransform3D](affinetransform3d.md)
- [Point3D](point3d.md)
- [Pose3D](pose3d.md)
- [ProjectiveTransform3D](projectivetransform3d.md)
- [Ray3D](ray3d.md)
- [Rect3D](rect3d.md)
- [Rotation3D](rotation3d.md)
- [ScaledPose3D](scaledpose3d.md)
- [Size3D](size3d.md)
- [Vector3D](vector3d.md)

## See Also

### Protocols

- [Primitive3D](primitive3d.md): A set of methods common to Spatial primitives.
- [Scalable3D](scalable3d.md): A set of methods that defines the interface to scale Spatial entities.
- [Shearable3D](shearable3d.md): A set of methods that defines the interface to shear Spatial entities.
- [Translatable3D](translatable3d.md): A set of methods that defines the interface to translate Spatial entities.
- [Volumetric](volumetric.md): A set of methods for working with Spatial primitives with volume.
- [ClampableWithinRectProtocol](clampablewithinrectprotocol.md): A set of methods that defines the interface for Spatial entities that can be clamped to a volume.
