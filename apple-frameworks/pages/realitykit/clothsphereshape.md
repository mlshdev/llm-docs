> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsphereshape](https://developer.apple.com/documentation/realitykit/clothsphereshape)

# ClothSphereShape

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Shape representing a sphere.

## Declaration

```swift
struct ClothSphereShape
```

## Topics

### Creating a sphere shape

- [init(radius:)](clothsphereshape/init%28radius_%29.md): Creates a sphere shape with the given radius.

### Instance Properties

- [radius](clothsphereshape/radius.md): The radius of the sphere.

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
- [ClothCapsuleShape](clothcapsuleshape.md): Shape representing a capsule (full height is `height + 2 * radius`).
- [ClothVolumeShape](clothvolumeshape.md): Shape suitable for use as a volume.
