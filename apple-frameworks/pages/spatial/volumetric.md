> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/volumetric](https://developer.apple.com/documentation/spatial/volumetric)

# Volumetric

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A set of methods for working with Spatial primitives with volume.

## Declaration

```swift
protocol Volumetric
```

## Topics

### Instance properties

- [size](volumetric/size.md): The size of the volume.

### Instance methods

- [contains(\_:)](volumetric/contains%28__%29.md): Returns a Boolean value that indicates whether the entity contains the specified volumetric entity.
- [contains(point:)](volumetric/contains%28point_%29.md): Returns a Boolean value that indicates whether this volume contains the specified point.
- [contains(anyOf:)](volumetric/contains%28anyof_%29.md): Returns a Boolean value that indicates whether this volume contains any of the specified points.
- [formIntersection(\_:)](volumetric/formintersection%28__%29.md): Sets the primitive to the intersection of itself and the specified primitive.
- [formUnion(\_:)](volumetric/formunion%28__%29.md): Sets the primitive to the union of itself and the specified primitive.
- [intersection(\_:)](volumetric/intersection%28__%29.md): Returns the intersection of two volumetric entities.
- [union(\_:)](volumetric/union%28__%29.md): Returns the smallest volumetric entity that contains the two source entities.

### Deprecated methods

- [containsAny(of:)](volumetric/containsany%28of_%29.md): Deprecated. Returns a Boolean value that indicates whether this volume contains any of the specified points.

## Relationships

### Conforming Types

- [Rect3D](rect3d.md)
- [Size3D](size3d.md)

## See Also

### Protocols

- [Primitive3D](primitive3d.md): A set of methods common to Spatial primitives.
- [Rotatable3D](rotatable3d.md): A set of methods that defines the interface to rotate Spatial entities.
- [Scalable3D](scalable3d.md): A set of methods that defines the interface to scale Spatial entities.
- [Shearable3D](shearable3d.md): A set of methods that defines the interface to shear Spatial entities.
- [Translatable3D](translatable3d.md): A set of methods that defines the interface to translate Spatial entities.
- [ClampableWithinRectProtocol](clampablewithinrectprotocol.md): A set of methods that defines the interface for Spatial entities that can be clamped to a volume.
