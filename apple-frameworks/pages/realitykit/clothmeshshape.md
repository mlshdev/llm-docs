> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshshape](https://developer.apple.com/documentation/realitykit/clothmeshshape)

# ClothMeshShape

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Shape representing a mesh with a configurable inflation bias.

## Declaration

```swift
struct ClothMeshShape
```

## Topics

### Creating a cloth mesh shape

- [init(mesh:bias:)](clothmeshshape/init%28mesh_bias_%29.md): Creates a mesh shape from the given mesh resource and inflation bias.

### Configuring the mesh shape

- [mesh](clothmeshshape/mesh.md): The mesh resource that this shape is based off.
- [bias](clothmeshshape/bias.md): The distance by which the vertices are extended outwards along the direction of their normals.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cloth shapes

- [ClothPlaneShape](clothplaneshape.md): Shape representing an infinite plane that encloses one half of the world.
- [ClothBoxShape](clothboxshape.md): Shape representing a box.
- [ClothRoundedBoxShape](clothroundedboxshape.md): Shape representing a box with rounded edges.
- [ClothSphereShape](clothsphereshape.md): Shape representing a sphere.
- [ClothCapsuleShape](clothcapsuleshape.md): Shape representing a capsule (full height is `height + 2 * radius`).
- [ClothVolumeShape](clothvolumeshape.md): Shape suitable for use as a volume.
