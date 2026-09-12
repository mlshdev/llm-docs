> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothplaneshape](https://developer.apple.com/documentation/realitykit/clothplaneshape)

# ClothPlaneShape

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Shape representing an infinite plane that encloses one half of the world.

## Declaration

```swift
struct ClothPlaneShape
```

<a id="overview"></a>

## Overview

The plane passes through the entity’s origin with the given `normal`. Everything on the side opposite the normal (including the plane itself) is considered inside the shape.

## Topics

### Creating a plane shape

- [init(normal:bias:)](clothplaneshape/init%28normal_bias_%29.md): Creates a plane shape with the given normal and surface displacement.

### Configuring the plane

- [bias](clothplaneshape/bias.md): The distance by which the surface of the plane shape is displaced along the direction of its normal.

### Instance Properties

- [normal](clothplaneshape/normal.md): The normal vector determining the orientation of the plane.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cloth shapes

- [ClothMeshShape](clothmeshshape.md): Shape representing a mesh with a configurable inflation bias.
- [ClothBoxShape](clothboxshape.md): Shape representing a box.
- [ClothRoundedBoxShape](clothroundedboxshape.md): Shape representing a box with rounded edges.
- [ClothSphereShape](clothsphereshape.md): Shape representing a sphere.
- [ClothCapsuleShape](clothcapsuleshape.md): Shape representing a capsule (full height is `height + 2 * radius`).
- [ClothVolumeShape](clothvolumeshape.md): Shape suitable for use as a volume.
