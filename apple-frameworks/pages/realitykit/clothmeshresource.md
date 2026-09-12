> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshresource](https://developer.apple.com/documentation/realitykit/clothmeshresource)

# ClothMeshResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A mesh resource that defines the topology and shape of a cloth body or a mesh-shaped cloth collider.

## Declaration

```swift
final class ClothMeshResource
```

<a id="overview"></a>

## Overview

Use this resource as the mesh for a [mesh](clothbodycomponent/mesh.md) or a [mesh](clothmeshshape/mesh.md).

## Topics

### Creating a cloth mesh

- [init(positions:triangleIndices:)](clothmeshresource/init%28positions_triangleindices_%29.md): Creates a cloth mesh resource from the given vertex positions and triangle indices.
- [patch(size:targetEdgeLength:)](clothmeshresource/patch%28size_targetedgelength_%29.md): Creates a rectangular patch mesh with a topology suitable for cloth simulation.
- [box(size:targetEdgeLength:)](clothmeshresource/box%28size_targetedgelength_%29.md): Creates a box mesh with a topology suitable for cloth simulation.
- [sphere(radius:targetEdgeLength:)](clothmeshresource/sphere%28radius_targetedgelength_%29.md): Creates a sphere mesh with a topology suitable for cloth simulation.
- [capsule(height:radius:targetEdgeLength:)](clothmeshresource/capsule%28height_radius_targetedgelength_%29.md): Creates a capsule mesh with a topology suitable for cloth simulation.
- [cylinder(height:radius:withCaps:targetEdgeLength:)](clothmeshresource/cylinder%28height_radius_withcaps_targetedgelength_%29.md): Creates a cylinder mesh with a topology suitable for cloth simulation.
- [defaultTargetEdgeLength](clothmeshresource/defaulttargetedgelength.md): Default target edge length for mesh generation.

### Accessing vertex data

- [vertexCount](clothmeshresource/vertexcount.md): The number of vertices in the mesh.
- [position(at:)](clothmeshresource/position%28at_%29.md): Returns the position of the vertex at the given index.
- [withPositions(\_:)](clothmeshresource/withpositions%28__%29.md): Provides access to the positions of all the vertices within a callback.
- [vertexIndex(at:)](clothmeshresource/vertexindex%28at_%29.md): Returns the vertex index at the given position in the mesh’s flattened primitive index array.
- [vertexIndex(primitive:vertex:)](clothmeshresource/vertexindex%28primitive_vertex_%29.md): Returns the vertex index of the specified vertex within the specified primitive.
- [vertices(in:center:orientation:)](clothmeshresource/vertices%28in_center_orientation_%29.md): Returns the indices of the vertices that lie inside the given volume shape.

### Inspecting mesh geometry

- [isWatertight](clothmeshresource/iswatertight.md): Indicates whether the mesh is “watertight”.
- [volume](clothmeshresource/volume.md): The volume of the mesh, or `nil` if the mesh is not watertight.

### Initializers

- [init(from:)](clothmeshresource/init%28from_%29.md): Creates a cloth mesh resource from a rendering mesh resource.

### Instance Properties

- [indexCount](clothmeshresource/indexcount.md): The number of indices in the mesh.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cloth resources

- [ClothPoseResource](clothposeresource.md): A resource that defines a set of vertex positions for a cloth body.
