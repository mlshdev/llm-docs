> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshbuffercontainer](https://developer.apple.com/documentation/realitykit/meshbuffercontainer)

# MeshBufferContainer

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Conforming objects contain a table of mesh buffers.

## Declaration

```swift
protocol MeshBufferContainer
```

## Topics

### Accessing texture coordinates

- [textureCoordinates1](meshbuffercontainer/texturecoordinates1.md): Buffer of texture coordinates set 1, if any.
- [textureCoordinates2](meshbuffercontainer/texturecoordinates2.md): Buffer of texture coordinates set 2, if any.
- [textureCoordinates3](meshbuffercontainer/texturecoordinates3.md): Buffer of texture coordinates set 3, if any.
- [textureCoordinates4](meshbuffercontainer/texturecoordinates4.md): Buffer of texture coordinates set 4, if any.
- [textureCoordinates5](meshbuffercontainer/texturecoordinates5.md): Buffer of texture coordinates set 5, if any.
- [textureCoordinates6](meshbuffercontainer/texturecoordinates6.md): Buffer of texture coordinates set 6, if any.
- [textureCoordinates7](meshbuffercontainer/texturecoordinates7.md): Buffer of texture coordinates set 7, if any.

### Instance Properties

- [bitangents](meshbuffercontainer/bitangents.md): Buffer of bitangents, if any.
- [blendShapeNames](meshbuffercontainer/blendshapenames.md): An array of blendShape names that exist in MeshBufferContainer
- [buffers](meshbuffercontainer/buffers.md): Descriptors for the buffers.
- [normals](meshbuffercontainer/normals.md): Buffer of normals, if any.
- [positions](meshbuffercontainer/positions.md): Positions of all the points.
- [tangents](meshbuffercontainer/tangents.md): Buffer of tangents, if any.
- [textureCoordinates](meshbuffercontainer/texturecoordinates.md): Buffer of texture coordinates, if any.
- [uv2](meshbuffercontainer/uv2.md): Buffer of UV data set 2, if any.
- [uv3](meshbuffercontainer/uv3.md): Buffer of UV data set 3, if any.
- [uv4](meshbuffercontainer/uv4.md): Buffer of UV data set 4, if any.
- [uv5](meshbuffercontainer/uv5.md): Buffer of UV data set 5, if any.
- [uv6](meshbuffercontainer/uv6.md): Buffer of UV data set 6, if any.
- [uv7](meshbuffercontainer/uv7.md): Buffer of UV data set 7, if any.

### Instance Methods

- [blendShapeOffsets(named:)](meshbuffercontainer/blendshapeoffsets%28named_%29.md)
- [setBlendShapeOffsets(named:buffer:)](meshbuffercontainer/setblendshapeoffsets%28named_buffer_%29.md)

### Subscripts

- [subscript(\_:)](meshbuffercontainer/subscript%28__%29.md): The buffer for a given semantic. There can only be one buffer for any given ID.

## Relationships

### Conforming Types

- [MeshDescriptor](meshdescriptor.md)
- [MeshResource.Part](meshresource/part.md)

## See Also

### Mesh description

- [MeshBuffer](meshbuffer.md): Mesh buffer containing elements of any type.
- [MeshBufferSemantic](meshbuffersemantic.md): A protocol that holds an identifier value for mesh buffers.
- [MeshBuffers](meshbuffers.md): An object that holds the data for an model entity’s mesh.
- [AnyMeshBuffer](anymeshbuffer.md): Mesh buffer stored in the container.
- [MeshInstanceCollection](meshinstancecollection.md): An object that holds a collection of mesh resource instances.
- [MeshModelCollection](meshmodelcollection.md): An object that holds a collection of mesh models.
- [MeshPartCollection](meshpartcollection.md): An object that holds a collection of mesh parts.
