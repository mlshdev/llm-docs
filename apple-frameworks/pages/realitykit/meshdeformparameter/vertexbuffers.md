> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformparameter/vertexbuffers](https://developer.apple.com/documentation/realitykit/meshdeformparameter/vertexbuffers)

# MeshDeformParameter.VertexBuffers

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The vertices requested by the developer when they defined their custom deformations. These will be passed into their custom deformation functions.

## Declaration

```swift
struct VertexBuffers<Buffer>
```

## Topics

### Accessing geometry buffers

- [positions](vertexbuffers/positions.md): The positions buffer, if the custom deformer author specified it.
- [normals](vertexbuffers/normals.md): The normals buffer, if the custom deformer author specified it.
- [tangents](vertexbuffers/tangents.md): The tangents buffer, if the custom deformer author specified it.
- [bitangents](vertexbuffers/bitangents.md): The bitangents buffer, if the custom deformer author specified it.

### Accessing texture coordinates

- [uvs](vertexbuffers/uvs.md): The uvs buffer, if the custom deformer author specified it
- [uv1s](vertexbuffers/uv1s.md): The uv1s buffer, if the custom deformer author specified it
- [uv2s](vertexbuffers/uv2s.md): The uv2s buffer, if the custom deformer author specified it
- [uv3s](vertexbuffers/uv3s.md): The uv3s buffer, if the custom deformer author specified it
- [uv4s](vertexbuffers/uv4s.md): The uv4s buffer, if the custom deformer author specified it
- [uv5s](vertexbuffers/uv5s.md): The uv5s buffer, if the custom deformer author specified it
- [uv6s](vertexbuffers/uv6s.md): The uv6s buffer, if the custom deformer author specified it
- [uv7s](vertexbuffers/uv7s.md): The uv7s buffer, if the custom deformer author specified it

### Inspecting buffer storage

- [count](vertexbuffers/count.md): The number of elements in each of the specified buffers.
- [MeshDeformParameter.VertexBuffers.Data](vertexbuffers/data.md): Provides low-level information about the memory allocation of the buffers.

## See Also

### Accessing deformation buffers

- [inputBuffers](inputbuffers.md): The specified input vertex data for the deformer function.
- [outputBuffers](outputbuffers.md): The specified output vertex data for the deformer function.
