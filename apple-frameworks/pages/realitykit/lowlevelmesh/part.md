> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/part](https://developer.apple.com/documentation/realitykit/lowlevelmesh/part)

# LowLevelMesh.Part

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An object that describes a range of primitives to display, and their material index.

## Declaration

```swift
struct Part
```

## Topics

### Creating a low-level mesh part

- [init(indexOffset:indexCount:topology:materialIndex:bounds:)](part/init%28indexoffset_indexcount_topology_materialindex_bounds_%29.md): Creates a low-level mesh part.

### Describing a low-level mesh part

- [indexOffset](part/indexoffset.md): The offset, in bytes, of the first index.
- [indexCount](part/indexcount.md): The number of indices to use for this part.
- [topology](part/topology.md): The geometric primitive to use when rendering this part.
- [materialIndex](part/materialindex.md): The material index this part associates with.
- [bounds](part/bounds.md): The model-space bounding box of this part.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updatable meshes

- [Integrating virtual objects with your environment](../integrating-virtual-objects-with-your-environment.md): Create an immersive game using native anchor support, environmental blending, model manipulation, and mesh instance duplication.
- [Creating a spatial drawing app with RealityKit](../creating-a-spatial-drawing-app-with-realitykit.md): Use low-level mesh and texture APIs to achieve fast updates to a person’s brush strokes by integrating RealityKit with ARKit and SwiftUI.
- [Creating a plane with low-level mesh](../creating-a-plane-with-low-level-mesh.md): Create a low-level mesh and set its vertex positions and normals to form a plane.
- [LowLevelMesh](../lowlevelmesh.md): A container for vertex data that you can use to create and update meshes using your own format.
- [LowLevelMesh.Descriptor](descriptor-swift.struct.md): An object that describes the data format and layout of the buffers in a low-level mesh.
- [LowLevelMesh.Layout](layout.md): An object that describes a set of attributes that share a buffer index, offset, and stride.
- [LowLevelMesh.Attribute](attribute.md): An object that determines how to store vertex attribute data in memory and map it to RealityKit shader attributes.
- [LowLevelMesh.VertexSemantic](vertexsemantic.md): Designates the intended usage of a vertex attribute.
- [LowLevelMesh.PartsCollection](partscollection.md): An object that holds a mutable collection low-level mesh parts.
- [LowLevelBuffer](../lowlevelbuffer.md)
- [LowLevelInstanceData](../lowlevelinstancedata.md)
