> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcapsuleshape](https://developer.apple.com/documentation/realitykit/clothcapsuleshape)

# ClothCapsuleShape

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Shape representing a capsule (full height is `height + 2 * radius`).

## Declaration

```swift
struct ClothCapsuleShape
```

## Topics

### Creating a capsule shape

- [init(height:radius:)](clothcapsuleshape/init%28height_radius_%29.md): Creates a capsule shape with the given height and radius.

### Instance Properties

- [height](clothcapsuleshape/height.md): The length of the cylinder portion of the capsule.
- [radius](clothcapsuleshape/radius.md): The radius of the cylinder portion and the radius of each hemisphere.

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
- [ClothVolumeShape](clothvolumeshape.md): Shape suitable for use as a volume.
