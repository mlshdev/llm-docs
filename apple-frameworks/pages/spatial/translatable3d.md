> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/translatable3d](https://developer.apple.com/documentation/spatial/translatable3d)

# Translatable3D

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A set of methods that defines the interface to translate Spatial entities.

## Declaration

```swift
protocol Translatable3D
```

## Topics

### Instance methods

- [translate(by:)](translatable3d/translate%28by_%29-6dj5o.md): Translates the entity by the specified vector.
- [translated(by:)](translatable3d/translated%28by_%29-5h847.md): Returns the entity that results from translating with the specified vector.

### Deprecated methods

- [translate(by:)](translatable3d/translate%28by_%29-86nwy.md): Deprecated. Translates the entity by the specified size.
- [translated(by:)](translatable3d/translated%28by_%29-9ndur.md): Deprecated. Returns the entity that results from translating with the specified size.

## Relationships

### Conforming Types

- [AffineTransform3D](affinetransform3d.md)
- [Point3D](point3d.md)
- [Pose3D](pose3d.md)
- [ProjectiveTransform3D](projectivetransform3d.md)
- [Ray3D](ray3d.md)
- [Rect3D](rect3d.md)
- [ScaledPose3D](scaledpose3d.md)

## See Also

### Protocols

- [Primitive3D](primitive3d.md): A set of methods common to Spatial primitives.
- [Rotatable3D](rotatable3d.md): A set of methods that defines the interface to rotate Spatial entities.
- [Scalable3D](scalable3d.md): A set of methods that defines the interface to scale Spatial entities.
- [Shearable3D](shearable3d.md): A set of methods that defines the interface to shear Spatial entities.
- [Volumetric](volumetric.md): A set of methods for working with Spatial primitives with volume.
- [ClampableWithinRectProtocol](clampablewithinrectprotocol.md): A set of methods that defines the interface for Spatial entities that can be clamped to a volume.
