> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferdataallocator](https://developer.apple.com/documentation/modelio/mdlmeshbufferdataallocator)

# MDLMeshBufferDataAllocator (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A basic allocator implementation that allocates from main memory using data objects.

## Declaration

```swift
class MDLMeshBufferDataAllocator
```

<a id="overview"></a>

## Overview

Model I/O uses this allocator by default if you do not specify an allocator when loading, creating, or modifying objects that require mesh buffer storage (for example, when loading an asset with the [init(url:vertexDescriptor:bufferAllocator:)](mdlasset/init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md) initializer). Use this allocator only if sharing mesh buffer memory with GPU-based renderers is not a concern. To minimize data copying when rendering with Metal or OpenGL, use the [MTKMeshBufferAllocator](../metalkit/mtkmeshbufferallocator.md) or [GLKMeshBufferAllocator](../glkit/glkmeshbufferallocator.md) class instead.This class declares no methods or properties of its own. For the key functionality of all mesh buffer allocator objects, see [MDLMeshBufferAllocator](mdlmeshbufferallocator.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.

# MDLMeshBufferDataAllocator (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A basic allocator implementation that allocates from main memory using data objects.

## Declaration

```objectivec
@interface MDLMeshBufferDataAllocator : NSObject
```

<a id="overview"></a>

## Overview

Model I/O uses this allocator by default if you do not specify an allocator when loading, creating, or modifying objects that require mesh buffer storage (for example, when loading an asset with the [initWithURL:vertexDescriptor:bufferAllocator:](mdlasset/init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md) initializer). Use this allocator only if sharing mesh buffer memory with GPU-based renderers is not a concern. To minimize data copying when rendering with Metal or OpenGL, use the [MTKMeshBufferAllocator](../metalkit/mtkmeshbufferallocator.md) or [GLKMeshBufferAllocator](../glkit/glkmeshbufferallocator.md) class instead.This class declares no methods or properties of its own. For the key functionality of all mesh buffer allocator objects, see [MDLMeshBufferAllocator](mdlmeshbufferallocator.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.
