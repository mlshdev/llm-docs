> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferzonedefault](https://developer.apple.com/documentation/modelio/mdlmeshbufferzonedefault)

# MDLMeshBufferZoneDefault (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.

## Declaration

```swift
class MDLMeshBufferZoneDefault
```

<a id="overview"></a>

## Overview

Model I/O uses zones to ensure that related allocations—such as the multiple vertex and index buffers associated with a [MDLMesh](mdlmesh.md) object—use contiguous blocks of memory for optimal performance. When working with a [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) object that does not implement its own zone management, Model I/O uses this zone class.This class declares no methods or properties of its own. For the key functionality of all mesh buffer zone objects, see [MDLMeshBufferZone](mdlmeshbufferzone.md).

## Topics

### Instance Properties

- [allocator](mdlmeshbufferzonedefault/allocator.md)
- [capacity](mdlmeshbufferzonedefault/capacity.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLMeshBufferZone](mdlmeshbufferzone.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.

# MDLMeshBufferZoneDefault (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.

## Declaration

```objectivec
@interface MDLMeshBufferZoneDefault : NSObject
```

<a id="overview"></a>

## Overview

Model I/O uses zones to ensure that related allocations—such as the multiple vertex and index buffers associated with a [MDLMesh](mdlmesh.md) object—use contiguous blocks of memory for optimal performance. When working with a [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) object that does not implement its own zone management, Model I/O uses this zone class.This class declares no methods or properties of its own. For the key functionality of all mesh buffer zone objects, see [MDLMeshBufferZone](mdlmeshbufferzone.md).

## Topics

### Instance Properties

- [allocator](mdlmeshbufferzonedefault/allocator.md)
- [capacity](mdlmeshbufferzonedefault/capacity.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLMeshBufferZone](mdlmeshbufferzone.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.
