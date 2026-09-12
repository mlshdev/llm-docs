> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scalable3d](https://developer.apple.com/documentation/spatial/scalable3d)

# Scalable3D

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A set of methods that defines the interface to scale Spatial entities.

## Declaration

```swift
protocol Scalable3D
```

## Topics

### Instance methods

- [scale(by:)](scalable3d/scale%28by_%29.md): Scales the entity by the specified size.
- [scaleBy(x:y:z:)](scalable3d/scaleby%28x_y_z_%29.md): Scales the entity by the specified values.
- [scaled(by:)](scalable3d/scaled%28by_%29.md): Returns the entity that results from scaling with the specified size.
- [scaledBy(x:y:z:)](scalable3d/scaledby%28x_y_z_%29.md): Returns the entity that results from scaling with the specified values.
- [uniformlyScale(by:)](scalable3d/uniformlyscale%28by_%29.md): Uniformly scales the entity by the specified scalar value.
- [uniformlyScaled(by:)](scalable3d/uniformlyscaled%28by_%29.md): Returns the entity that results from uniformly scaling with the specified scalar value.

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
- [Shearable3D](shearable3d.md): A set of methods that defines the interface to shear Spatial entities.
- [Translatable3D](translatable3d.md): A set of methods that defines the interface to translate Spatial entities.
- [Volumetric](volumetric.md): A set of methods for working with Spatial primitives with volume.
- [ClampableWithinRectProtocol](clampablewithinrectprotocol.md): A set of methods that defines the interface for Spatial entities that can be clamped to a volume.
