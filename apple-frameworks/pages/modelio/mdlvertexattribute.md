> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexattribute](https://developer.apple.com/documentation/modelio/mdlvertexattribute)

# MDLVertexAttribute (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of the format of per-vertex data for a single vertex attribute in a mesh object.

## Declaration

```swift
class MDLVertexAttribute
```

<a id="overview"></a>

## Overview

The vertex buffers of a [MDLMesh](mdlmesh.md) object store vertex attributes—such as vertex position, surface normal vector, or texture coordinates—that define its 3D shape and other data for use in rendering. Attribute information describes the structure and layout of that data. A collection of vertex attribute objects and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.

## Topics

### Creating a Vertex Attribute

- [init(name:format:offset:bufferIndex:)](mdlvertexattribute/init%28name_format_offset_bufferindex_%29.md): Initializes a vertex attribute object with the specified property values.

### Inspecting a Vertex Attribute

- [name](mdlvertexattribute/name.md): An identifier for the semantic use of the vertex attribute.
- [format](mdlvertexattribute/format.md): The format of per-vertex data for the attribute.
- [offset](mdlvertexattribute/offset.md): The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.
- [bufferIndex](mdlvertexattribute/bufferindex.md): The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](mdlmesh/vertexbuffers.md) array.
- [initializationValue](mdlvertexattribute/initializationvalue.md): The default value for vertex data for this attribute.

### Constants

- [Vertex Attributes](vertex-attributes.md): Names that identify semantic uses for vertex attribute data, used by the [name](mdlvertexattribute/name.md) property.
- [MDLVertexFormat](mdlvertexformat.md): Descriptions of the data size and layout for a vertex attribute, used by the [format](mdlvertexattribute/format.md) property.

### Instance Properties

- [time](mdlvertexattribute/time.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
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
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.

# MDLVertexAttribute (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of the format of per-vertex data for a single vertex attribute in a mesh object.

## Declaration

```objectivec
@interface MDLVertexAttribute : NSObject
```

<a id="overview"></a>

## Overview

The vertex buffers of a [MDLMesh](mdlmesh.md) object store vertex attributes—such as vertex position, surface normal vector, or texture coordinates—that define its 3D shape and other data for use in rendering. Attribute information describes the structure and layout of that data. A collection of vertex attribute objects and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.

## Topics

### Creating a Vertex Attribute

- [initWithName:format:offset:bufferIndex:](mdlvertexattribute/init%28name_format_offset_bufferindex_%29.md): Initializes a vertex attribute object with the specified property values.

### Inspecting a Vertex Attribute

- [name](mdlvertexattribute/name.md): An identifier for the semantic use of the vertex attribute.
- [format](mdlvertexattribute/format.md): The format of per-vertex data for the attribute.
- [offset](mdlvertexattribute/offset.md): The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.
- [bufferIndex](mdlvertexattribute/bufferindex.md): The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](mdlmesh/vertexbuffers.md) array.
- [initializationValue](mdlvertexattribute/initializationvalue.md): The default value for vertex data for this attribute.

### Constants

- [Vertex Attributes](vertex-attributes.md): Names that identify semantic uses for vertex attribute data, used by the [name](mdlvertexattribute/name.md) property.
- [MDLVertexFormat](mdlvertexformat.md): Descriptions of the data size and layout for a vertex attribute, used by the [format](mdlvertexattribute/format.md) property.

### Instance Properties

- [time](mdlvertexattribute/time.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Managing Mesh Data

- [MDLMeshBuffer](mdlmeshbuffer.md): The general interface for managing storage of vertex and index data used in loading, processing, and rendering meshes.
- [MDLMeshBufferAllocator](mdlmeshbufferallocator.md): The general interface for managing allocation of data buffers to be used in loading, processing, and rendering meshes.
- [MDLMeshBufferData](mdlmeshbufferdata.md): A memory buffer that stores vertex or index data for a Model I/O mesh.
- [MDLMeshBufferDataAllocator](mdlmeshbufferdataallocator.md): A basic allocator implementation that allocates from main memory using data objects.
- [MDLMeshBufferMap](mdlmeshbuffermap.md): An object that manages access to a memory buffer used for the data storage of a Model I/O mesh.
- [MDLMeshBufferZone](mdlmeshbufferzone.md): The general interface for logical pools of memory used in allocation of related mesh data buffers.
- [MDLMeshBufferZoneDefault](mdlmeshbufferzonedefault.md): A standard implementation of the [MDLMeshBufferZone](mdlmeshbufferzone.md) protocol.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
- [MDLVertexDescriptor](mdlvertexdescriptor.md): A description of the structure, format, and layout for vertex data buffers associated with a mesh.
