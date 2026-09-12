> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmesh](https://developer.apple.com/documentation/metalkit/mtkmesh)

# MTKMesh (Swift)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.

## Declaration

```swift
class MTKMesh
```

## Topics

### Initialization

- [init(mesh:device:)](mtkmesh/init%28mesh_device_%29.md): Initializes a MetalKit mesh and its submeshes from a Model I/O mesh.

### Loading Meshes from an Asset

- [newMeshes(asset:device:)](mtkmesh/newmeshes%28asset_device_%29.md)

### Submeshes

- [submeshes](mtkmesh/submeshes.md): An array of submeshes containing index buffers referencing the mesh vertices.

### Vertex Properties

- [vertexBuffers](mtkmesh/vertexbuffers.md): An array of buffers in which mesh vertex data resides.
- [vertexCount](mtkmesh/vertexcount.md): The number of vertices in the vertex buffers.
- [vertexDescriptor](mtkmesh/vertexdescriptor.md): A Model I/O vertex descriptor specifying the data layout in the vertex buffers.

### Identifying Properties

- [name](mtkmesh/name.md): The name of the mesh.

### Constants

- [Mesh Error Handling](mesh-error-handling.md): Strings used when handling [NSError](../foundation/nserror.md) messages returned from a mesh initialization method.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Model Handling

- [MTKMeshBuffer](mtkmeshbuffer.md): A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBufferAllocator](mtkmeshbufferallocator.md): An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKSubmesh](mtksubmesh.md): A container for the index data of a Model I/O submesh, suitable for use in a Metal app.
- [Conversion Functions](conversion-functions.md): Convert between Metal and Model I/O vertex representations.
- [Model Errors](model-errors.md): Learn about errors thrown by model handling methods.

# MTKMesh (Objective-C)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.

## Declaration

```objectivec
@interface MTKMesh : NSObject
```

## Topics

### Initialization

- [initWithMesh:device:error:](mtkmesh/init%28mesh_device_%29.md): Initializes a MetalKit mesh and its submeshes from a Model I/O mesh.

### Loading Meshes from an Asset

- [newMeshesFromAsset:device:sourceMeshes:error:](mtkmesh/newmeshesfromasset_device_sourcemeshes_error_.md): Creates and initializes MetalKit meshes from all Model I/O meshes in a Model I/O asset.

### Submeshes

- [submeshes](mtkmesh/submeshes.md): An array of submeshes containing index buffers referencing the mesh vertices.

### Vertex Properties

- [vertexBuffers](mtkmesh/vertexbuffers.md): An array of buffers in which mesh vertex data resides.
- [vertexCount](mtkmesh/vertexcount.md): The number of vertices in the vertex buffers.
- [vertexDescriptor](mtkmesh/vertexdescriptor.md): A Model I/O vertex descriptor specifying the data layout in the vertex buffers.

### Identifying Properties

- [name](mtkmesh/name.md): The name of the mesh.

### Constants

- [Mesh Error Handling](mesh-error-handling.md): Strings used when handling [NSError](../foundation/nserror.md) messages returned from a mesh initialization method.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Model Handling

- [MTKMeshBuffer](mtkmeshbuffer.md): A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBufferAllocator](mtkmeshbufferallocator.md): An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKSubmesh](mtksubmesh.md): A container for the index data of a Model I/O submesh, suitable for use in a Metal app.
- [Conversion Functions](conversion-functions.md): Convert between Metal and Model I/O vertex representations.
- [Model Errors](model-errors.md): Learn about errors thrown by model handling methods.
