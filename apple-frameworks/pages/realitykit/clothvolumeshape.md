> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothvolumeshape](https://developer.apple.com/documentation/realitykit/clothvolumeshape)

# ClothVolumeShape

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Shape suitable for use as a volume.

## Declaration

```swift
enum ClothVolumeShape
```

## Topics

### Specifying the volume shape

- [ClothVolumeShape.box(\_:)](clothvolumeshape/box%28__%29.md): A box volume shape.
- [ClothVolumeShape.roundedBox(\_:)](clothvolumeshape/roundedbox%28__%29.md): A rounded box volume shape.
- [ClothVolumeShape.sphere(\_:)](clothvolumeshape/sphere%28__%29.md): A sphere volume shape.
- [ClothVolumeShape.capsule(\_:)](clothvolumeshape/capsule%28__%29.md): A capsule volume shape.
- [ClothVolumeShape.plane(\_:)](clothvolumeshape/plane%28__%29.md): A plane volume shape.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cloth shapes

- [ClothMeshShape](clothmeshshape.md): Shape representing a mesh with a configurable inflation bias.
- [ClothPlaneShape](clothplaneshape.md): Shape representing an infinite plane that encloses one half of the world.
- [ClothBoxShape](clothboxshape.md): Shape representing a box.
- [ClothRoundedBoxShape](clothroundedboxshape.md): Shape representing a box with rounded edges.
- [ClothSphereShape](clothsphereshape.md): Shape representing a sphere.
- [ClothCapsuleShape](clothcapsuleshape.md): Shape representing a capsule (full height is `height + 2 * radius`).
