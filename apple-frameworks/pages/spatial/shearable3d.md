> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/shearable3d](https://developer.apple.com/documentation/spatial/shearable3d)

# Shearable3D

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A set of methods that defines the interface to shear Spatial entities.

## Declaration

```swift
protocol Shearable3D
```

## Topics

### Instance methods

- [shear(\_:)](shearable3d/shear%28__%29.md): Shears the entity by the specified axis and shear factors.
- [sheared(\_:)](shearable3d/sheared%28__%29.md): Returns the entity that results from shearing with the specified axis and shear factors.

## Relationships

### Conforming Types

- [AffineTransform3D](affinetransform3d.md)
- [ProjectiveTransform3D](projectivetransform3d.md)
- [Rect3D](rect3d.md)
- [Size3D](size3d.md)
- [Vector3D](vector3d.md)

## See Also

### Protocols

- [Primitive3D](primitive3d.md): A set of methods common to Spatial primitives.
- [Rotatable3D](rotatable3d.md): A set of methods that defines the interface to rotate Spatial entities.
- [Scalable3D](scalable3d.md): A set of methods that defines the interface to scale Spatial entities.
- [Translatable3D](translatable3d.md): A set of methods that defines the interface to translate Spatial entities.
- [Volumetric](volumetric.md): A set of methods for working with Spatial primitives with volume.
- [ClampableWithinRectProtocol](clampablewithinrectprotocol.md): A set of methods that defines the interface for Spatial entities that can be clamped to a volume.
