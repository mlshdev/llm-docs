> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothboxshape](https://developer.apple.com/documentation/realitykit/clothboxshape)

# ClothBoxShape

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Shape representing a box.

## Declaration

```swift
struct ClothBoxShape
```

## Topics

### Creating a box shape

- [init(size:)](clothboxshape/init%28size_%29.md): Creates a box shape with the given size.

### Accessing the dimensions

- [size](clothboxshape/size.md): The size of the box along each axis.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cloth shapes

- [ClothMeshShape](clothmeshshape.md): Shape representing a mesh with a configurable inflation bias.
- [ClothPlaneShape](clothplaneshape.md): Shape representing an infinite plane that encloses one half of the world.
- [ClothRoundedBoxShape](clothroundedboxshape.md): Shape representing a box with rounded edges.
- [ClothSphereShape](clothsphereshape.md): Shape representing a sphere.
- [ClothCapsuleShape](clothcapsuleshape.md): Shape representing a capsule (full height is `height + 2 * radius`).
- [ClothVolumeShape](clothvolumeshape.md): Shape suitable for use as a volume.
