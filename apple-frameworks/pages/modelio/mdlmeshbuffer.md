> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbuffer](https://developer.apple.com/documentation/modelio/mdlmeshbuffer)

# MDLMeshBuffer (Swift)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.

## Declaration

```swift
protocol MDLMeshBuffer : NSCopying, NSObjectProtocol
```

<a id="overview"></a>

## Overview

Model I/O creates buffers using an allocator that you specify when loading mesh data from a file with the [MDLAsset](mdlasset.md) class or generating meshes with the [MDLMesh](mdlmesh.md) class. You can also create buffers using an allocator method such as [newBuffer(with:type:)](mdlmeshbufferallocator/newbuffer%28with_type_%29.md). The allocator you choose determines the concrete class of a mesh buffer and thus its storage mechanism—for example, the MetalKit [MTKMeshBufferAllocator](../metalkit/mtkmeshbufferallocator.md) class allocates [MTKMeshBuffer](../metalkit/mtkmeshbuffer.md) objects, which share storage with Metal buffers for use in rendering.

## Topics

### Working with Data in a Buffer

- [fill(\_:offset:)](mdlmeshbuffer/fill%28__offset_%29.md): Writes the specified data into the buffer.
- [map()](mdlmeshbuffer/map%28%29.md): Provides direct, read-only access to the buffer’s contents.
- [length](mdlmeshbuffer/length.md): The data size of the buffer, in bytes.

### Inspecting a Buffer

- [allocator](mdlmeshbuffer/allocator.md): The allocator object that created the buffer.
- [zone](mdlmeshbuffer/zone.md): The memory pool from which the buffer was created.
- [type](mdlmeshbuffer/type.md): The type of data contained in a buffer.

### Constants

- [MDLMeshBufferType](mdlmeshbuffertype.md): Options for the content of a mesh buffer, used by the [type](mdlmeshbuffer/type.md) property and by [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) methods for creating buffers.

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MDLMeshBufferData](mdlmeshbufferdata.md)

## See Also

### Managing Mesh Data

- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.

# MDLMeshBuffer (Objective-C)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.

## Declaration

```objectivec
@protocol MDLMeshBuffer <NSObject, NSCopying>
```

<a id="overview"></a>

## Overview

Model I/O creates buffers using an allocator that you specify when loading mesh data from a file with the [MDLAsset](mdlasset.md) class or generating meshes with the [MDLMesh](mdlmesh.md) class. You can also create buffers using an allocator method such as [newBufferWithData:type:](mdlmeshbufferallocator/newbuffer%28with_type_%29.md). The allocator you choose determines the concrete class of a mesh buffer and thus its storage mechanism—for example, the MetalKit [MTKMeshBufferAllocator](../metalkit/mtkmeshbufferallocator.md) class allocates [MTKMeshBuffer](../metalkit/mtkmeshbuffer.md) objects, which share storage with Metal buffers for use in rendering.

## Topics

### Working with Data in a Buffer

- [fillData:offset:](mdlmeshbuffer/fill%28__offset_%29.md): Writes the specified data into the buffer.
- [map](mdlmeshbuffer/map%28%29.md): Provides direct, read-only access to the buffer’s contents.
- [length](mdlmeshbuffer/length.md): The data size of the buffer, in bytes.

### Inspecting a Buffer

- [allocator](mdlmeshbuffer/allocator.md): The allocator object that created the buffer.
- [zone](mdlmeshbuffer/zone.md): The memory pool from which the buffer was created.
- [type](mdlmeshbuffer/type.md): The type of data contained in a buffer.

### Constants

- [MDLMeshBufferType](mdlmeshbuffertype.md): Options for the content of a mesh buffer, used by the [type](mdlmeshbuffer/type.md) property and by [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) methods for creating buffers.

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MDLMeshBufferData](mdlmeshbufferdata.md)

## See Also

### Managing Mesh Data

- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.
