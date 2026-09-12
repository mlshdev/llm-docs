> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferallocator](https://developer.apple.com/documentation/modelio/mdlmeshbufferallocator)

# MDLMeshBufferAllocator (Swift)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.

## Declaration

```swift
protocol MDLMeshBufferAllocator : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Classes adopting this protocol provide different ways of handling mesh buffer data. For example, the [MTKMeshBufferAllocator](../metalkit/mtkmeshbufferallocator.md) class can share mesh data with Metal buffers for use in rendering.

When you load meshes from a file with the [MDLAsset](mdlasset.md) class or generate meshes with the [MDLMesh](mdlmesh.md) class, you must specify an allocator. By choosing an allocator specific to how you use a mesh, you can ensure that vertex and index data for the mesh is copied and transformed a minimal number of times between loading and use.

## Topics

### Allocating Mesh Buffers

- [newZone(\_:)](mdlmeshbufferallocator/newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffers(withSize:andType:)](mdlmeshbufferallocator/newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer(\_:type:)](mdlmeshbufferallocator/newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBuffer(from:length:type:)](mdlmeshbufferallocator/newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBuffer(with:type:)](mdlmeshbufferallocator/newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBuffer(from:data:type:)](mdlmeshbufferallocator/newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.

# MDLMeshBufferAllocator (Objective-C)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.

## Declaration

```objectivec
@protocol MDLMeshBufferAllocator <NSObject>
```

<a id="overview"></a>

## Overview

Classes adopting this protocol provide different ways of handling mesh buffer data. For example, the [MTKMeshBufferAllocator](../metalkit/mtkmeshbufferallocator.md) class can share mesh data with Metal buffers for use in rendering.

When you load meshes from a file with the [MDLAsset](mdlasset.md) class or generate meshes with the [MDLMesh](mdlmesh.md) class, you must specify an allocator. By choosing an allocator specific to how you use a mesh, you can ensure that vertex and index data for the mesh is copied and transformed a minimal number of times between loading and use.

## Topics

### Allocating Mesh Buffers

- [newZone:](mdlmeshbufferallocator/newzone%28__%29.md): Creates a zone for related memory allocations.
- [newZoneForBuffersWithSize:andType:](mdlmeshbufferallocator/newzoneforbuffers%28withsize_andtype_%29.md): Creates a zone large enough to fit the specified group of allocation sizes.
- [newBuffer:type:](mdlmeshbufferallocator/newbuffer%28__type_%29.md): Creates a new buffer of the specified length.
- [newBufferFromZone:length:type:](mdlmeshbufferallocator/newbuffer%28from_length_type_%29.md): Creates a new buffer of the specified length in the specified zone.
- [newBufferWithData:type:](mdlmeshbufferallocator/newbuffer%28with_type_%29.md): Creates a new buffer containing the specified data.
- [newBufferFromZone:data:type:](mdlmeshbufferallocator/newbuffer%28from_data_type_%29.md): Creates a new buffer containing the specified data in the specified zone.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.
