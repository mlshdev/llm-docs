> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothposeresource](https://developer.apple.com/documentation/realitykit/clothposeresource)

# ClothPoseResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A resource that defines a set of vertex positions for a cloth body.

## Declaration

```swift
final class ClothPoseResource
```

<a id="overview"></a>

## Overview

A pose resource provides an alternate set of positions for the vertices of a [ClothMeshResource](clothmeshresource.md); the topology is still determined by the mesh resource. One common use is to specify an already-draped starting configuration via [initialMeshDraping](clothbodycomponent/initialmeshdraping.md).

## Topics

### Creating a pose resource

- [init(positions:)](clothposeresource/init%28positions_%29.md): Creates a cloth pose resource with the given vertex positions.

### Accessing pose positions

- [withPositions(\_:)](clothposeresource/withpositions%28__%29.md): Provides access to the positions of all the vertices within a callback.
- [position(at:)](clothposeresource/position%28at_%29.md): Returns the position of the vertex at the given index.
- [vertexCount](clothposeresource/vertexcount.md): The number of vertices in the pose resource.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cloth resources

- [ClothMeshResource](clothmeshresource.md): A mesh resource that defines the topology and shape of a cloth body or a mesh-shaped cloth collider.
