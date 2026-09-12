> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexattributedata](https://developer.apple.com/documentation/modelio/mdlvertexattributedata)

# MDLVertexAttributeData (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.

## Declaration

```swift
class MDLVertexAttributeData
```

<a id="overview"></a>

## Overview

You retrieve a vertex attribute data object by calling the [vertexAttributeData(forAttributeNamed:)](mdlmesh/vertexattributedata%28forattributenamed_%29.md) method of a [MDLMesh](mdlmesh.md) object, which is shorthand for looking up the the [MDLMeshBuffer](mdlmeshbuffer.md) object corresponding to the named attribute and using the [map()](mdlmeshbuffer/map%28%29.md) method to gain read-only access to its contents.

## Topics

### Accessing Data for a Vertex Attribute

- [dataStart](mdlvertexattributedata/datastart.md): The offset, in bytes, from the start of the data to where vertex attribute information begins.
- [stride](mdlvertexattributedata/stride.md): The stride, in bytes, between vertex information for consecutive vertices in the data.
- [format](mdlvertexattributedata/format.md): The format of per-vertex data for the attribute.

### Instance Properties

- [bufferSize](mdlvertexattributedata/buffersize.md)
- [map](mdlvertexattributedata/map.md)

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

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.

# MDLVertexAttributeData (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.

## Declaration

```objectivec
@interface MDLVertexAttributeData : NSObject
```

<a id="overview"></a>

## Overview

You retrieve a vertex attribute data object by calling the [vertexAttributeDataForAttributeNamed:](mdlmesh/vertexattributedata%28forattributenamed_%29.md) method of a [MDLMesh](mdlmesh.md) object, which is shorthand for looking up the the [MDLMeshBuffer](mdlmeshbuffer.md) object corresponding to the named attribute and using the [map](mdlmeshbuffer/map%28%29.md) method to gain read-only access to its contents.

## Topics

### Accessing Data for a Vertex Attribute

- [dataStart](mdlvertexattributedata/datastart.md): The offset, in bytes, from the start of the data to where vertex attribute information begins.
- [stride](mdlvertexattributedata/stride.md): The stride, in bytes, between vertex information for consecutive vertices in the data.
- [format](mdlvertexattributedata/format.md): The format of per-vertex data for the attribute.

### Instance Properties

- [bufferSize](mdlvertexattributedata/buffersize.md)
- [map](mdlvertexattributedata/map.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.
