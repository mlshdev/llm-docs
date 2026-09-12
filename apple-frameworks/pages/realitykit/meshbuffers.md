> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshbuffers](https://developer.apple.com/documentation/realitykit/meshbuffers)

# MeshBuffers

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that holds the data for an model entity’s mesh.

## Declaration

```swift
enum MeshBuffers
```

## Topics

### Creating texture coordinate buffers

- [textureCoordinates(\_:)](meshbuffers/texturecoordinates%28__%29.md)
- [MeshBuffers.UVs](meshbuffers/uvs.md)

### Accessing coordinate channels

- [textureCoordinates1](meshbuffers/texturecoordinates1.md)
- [textureCoordinates2](meshbuffers/texturecoordinates2.md)
- [textureCoordinates3](meshbuffers/texturecoordinates3.md)
- [textureCoordinates4](meshbuffers/texturecoordinates4.md)
- [textureCoordinates5](meshbuffers/texturecoordinates5.md)
- [textureCoordinates6](meshbuffers/texturecoordinates6.md)
- [textureCoordinates7](meshbuffers/texturecoordinates7.md)

### Structures

- [MeshBuffers.Identifier](meshbuffers/identifier.md)
- [MeshBuffers.Semantic](meshbuffers/semantic.md)

### Type Aliases

- [MeshBuffers.BlendShapeOffsets](meshbuffers/blendshapeoffsets.md)
- [MeshBuffers.JointInfluences](meshbuffers/jointinfluences-swift.typealias.md)
- [MeshBuffers.Normals](meshbuffers/normals-swift.typealias.md)
- [MeshBuffers.Positions](meshbuffers/positions-swift.typealias.md)
- [MeshBuffers.Tangents](meshbuffers/tangents-swift.typealias.md)
- [MeshBuffers.TextureCoordinates](meshbuffers/texturecoordinates-swift.typealias.md)
- [MeshBuffers.TriangleIndices](meshbuffers/triangleindices-swift.typealias.md)

### Type Properties

- [bitangents](meshbuffers/bitangents.md)
- [jointInfluences](meshbuffers/jointinfluences-swift.type.property.md)
- [normals](meshbuffers/normals-swift.type.property.md)
- [positions](meshbuffers/positions-swift.type.property.md)
- [tangents](meshbuffers/tangents-swift.type.property.md)
- [textureCoordinates](meshbuffers/texturecoordinates-swift.type.property.md)
- [triangleIndices](meshbuffers/triangleindices-swift.type.property.md)
- [uv2](meshbuffers/uv2.md)
- [uv3](meshbuffers/uv3.md)
- [uv4](meshbuffers/uv4.md)
- [uv5](meshbuffers/uv5.md)
- [uv6](meshbuffers/uv6.md)
- [uv7](meshbuffers/uv7.md)

### Type Methods

- [blendShapeOffsets(named:)](meshbuffers/blendshapeoffsets%28named_%29.md)
- [custom(\_:type:)](meshbuffers/custom%28__type_%29.md)

### Enumerations

- [MeshBuffers.ElementType](meshbuffers/elementtype.md): The data type for each element of the buffer.
- [MeshBuffers.Rate](meshbuffers/rate.md): Defines how elements in the buffer map to features of the mesh.

## See Also

### Mesh description

- [MeshBuffer](meshbuffer.md): Mesh buffer containing elements of any type.
- [MeshBufferContainer](meshbuffercontainer.md): Conforming objects contain a table of mesh buffers.
- [MeshBufferSemantic](meshbuffersemantic.md): A protocol that holds an identifier value for mesh buffers.
- [AnyMeshBuffer](anymeshbuffer.md): Mesh buffer stored in the container.
- [MeshInstanceCollection](meshinstancecollection.md): An object that holds a collection of mesh resource instances.
- [MeshModelCollection](meshmodelcollection.md): An object that holds a collection of mesh models.
- [MeshPartCollection](meshpartcollection.md): An object that holds a collection of mesh parts.
