> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferdata](https://developer.apple.com/documentation/modelio/mdlmeshbufferdata)

# MDLMeshBufferData (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A memory buffer that stores vertex or index data for a Model I/O mesh.

## Declaration

```swift
class MDLMeshBufferData
```

<a id="overview"></a>

## Overview

This class is the simplest concrete implementation of the [MDLMeshBuffer](mdlmeshbuffer.md) protocol—use this class when you need only a single data store for loading or processing mesh data. To share mesh data for other uses, use another concrete implementation of the [MDLMeshBuffer](mdlmeshbuffer.md) protocol—for example, the [MTKMeshBuffer](../metalkit/mtkmeshbuffer.md) class shares mesh data with Metal buffers, ensuring that data is copied a minimal number of times between loading, processing, and rendering.If you do not specify a [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) object for loading meshes from a file with the [MDLAsset](mdlasset.md) class or generating meshes with the [MDLMesh](mdlmesh.md) class, Model I/O uses [MDLMeshBufferData](mdlmeshbufferdata.md) objects to store mesh data.

## Topics

### Creating a Buffer

- [init(type:data:)](mdlmeshbufferdata/init%28type_data_%29.md): Initializes a buffer containing the specified data.
- [init(type:length:)](mdlmeshbufferdata/init%28type_length_%29.md): Initializes a buffer of the specified length.

### Accessing a Buffer’s Data

- [data](mdlmeshbufferdata/data.md): The underlying data storage for the mesh buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLMeshBuffer](mdlmeshbuffer.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.

# MDLMeshBufferData (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A memory buffer that stores vertex or index data for a Model I/O mesh.

## Declaration

```objectivec
@interface MDLMeshBufferData : NSObject
```

<a id="overview"></a>

## Overview

This class is the simplest concrete implementation of the [MDLMeshBuffer](mdlmeshbuffer.md) protocol—use this class when you need only a single data store for loading or processing mesh data. To share mesh data for other uses, use another concrete implementation of the [MDLMeshBuffer](mdlmeshbuffer.md) protocol—for example, the [MTKMeshBuffer](../metalkit/mtkmeshbuffer.md) class shares mesh data with Metal buffers, ensuring that data is copied a minimal number of times between loading, processing, and rendering.If you do not specify a [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) object for loading meshes from a file with the [MDLAsset](mdlasset.md) class or generating meshes with the [MDLMesh](mdlmesh.md) class, Model I/O uses [MDLMeshBufferData](mdlmeshbufferdata.md) objects to store mesh data.

## Topics

### Creating a Buffer

- [initWithType:data:](mdlmeshbufferdata/init%28type_data_%29.md): Initializes a buffer containing the specified data.
- [initWithType:length:](mdlmeshbufferdata/init%28type_length_%29.md): Initializes a buffer of the specified length.

### Accessing a Buffer’s Data

- [data](mdlmeshbufferdata/data.md): The underlying data storage for the mesh buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLMeshBuffer](mdlmeshbuffer.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.
