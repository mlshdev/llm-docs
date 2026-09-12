> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexdescriptor](https://developer.apple.com/documentation/modelio/mdlvertexdescriptor)

# MDLVertexDescriptor (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of the structure, format, and layout for vertex data buffers associated with a mesh.

## Declaration

```swift
class MDLVertexDescriptor
```

<a id="overview"></a>

## Overview

A [MDLMesh](mdlmesh.md) object contains arrays of data for separate attributes of each vertex, such as position, color, surface normal vector, or texture coordinates. The vertex data for various attributes can be contained in one or more buffers and may be laid out in various contiguous or interleaved formats. You use a mesh’s [vertexDescriptor](mdlmesh/vertexdescriptor.md) property to determine the structure of vertex data for a mesh loaded from an asset file for use in rendering or processing a mesh. You also use vertex descriptors to describe the structure of existing vertex data when creating a new mesh.

## Topics

### Working with Vertex Attributes

- [attributes](mdlvertexdescriptor/attributes.md): The list of vertex attributes described by the vertex descriptor.
- [attributeNamed(\_:)](mdlvertexdescriptor/attributenamed%28__%29.md): Returns the vertex attribute with the specified name in the vertex descriptor.
- [addOrReplaceAttribute(\_:)](mdlvertexdescriptor/addorreplaceattribute%28__%29.md): Adds the specified vertex attribute to the vertex descriptor, replacing any existing attribute with the same name.
- [setPackedOffsets()](mdlvertexdescriptor/setpackedoffsets%28%29.md): Sets the offset for each vertex attribute to the minimum value to pack vertex data together in a single buffer.

### Working with Vertex Buffer Layouts

- [layouts](mdlvertexdescriptor/layouts.md): The list of vertex buffer layouts described by the vertex descriptor.
- [setPackedStrides()](mdlvertexdescriptor/setpackedstrides%28%29.md): Sets the stride for each vertex layout to the minimum value to pack vertex data together in a single buffer.

### Resetting a Vertex Descriptor

- [reset()](mdlvertexdescriptor/reset%28%29.md): Resets a vertex descriptor to its default state.

### Copying a Vertex Descriptor

- [init(vertexDescriptor:)](mdlvertexdescriptor/init%28vertexdescriptor_%29.md): Creates a new vertex descriptor by performing a deep copy of the specified vertex descriptor.

### Instance Methods

- [removeAttributeNamed(\_:)](mdlvertexdescriptor/removeattributenamed%28__%29.md)

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
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.

# MDLVertexDescriptor (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of the structure, format, and layout for vertex data buffers associated with a mesh.

## Declaration

```objectivec
@interface MDLVertexDescriptor : NSObject
```

<a id="overview"></a>

## Overview

A [MDLMesh](mdlmesh.md) object contains arrays of data for separate attributes of each vertex, such as position, color, surface normal vector, or texture coordinates. The vertex data for various attributes can be contained in one or more buffers and may be laid out in various contiguous or interleaved formats. You use a mesh’s [vertexDescriptor](mdlmesh/vertexdescriptor.md) property to determine the structure of vertex data for a mesh loaded from an asset file for use in rendering or processing a mesh. You also use vertex descriptors to describe the structure of existing vertex data when creating a new mesh.

## Topics

### Working with Vertex Attributes

- [attributes](mdlvertexdescriptor/attributes.md): The list of vertex attributes described by the vertex descriptor.
- [attributeNamed:](mdlvertexdescriptor/attributenamed%28__%29.md): Returns the vertex attribute with the specified name in the vertex descriptor.
- [addOrReplaceAttribute:](mdlvertexdescriptor/addorreplaceattribute%28__%29.md): Adds the specified vertex attribute to the vertex descriptor, replacing any existing attribute with the same name.
- [setPackedOffsets](mdlvertexdescriptor/setpackedoffsets%28%29.md): Sets the offset for each vertex attribute to the minimum value to pack vertex data together in a single buffer.

### Working with Vertex Buffer Layouts

- [layouts](mdlvertexdescriptor/layouts.md): The list of vertex buffer layouts described by the vertex descriptor.
- [setPackedStrides](mdlvertexdescriptor/setpackedstrides%28%29.md): Sets the stride for each vertex layout to the minimum value to pack vertex data together in a single buffer.

### Resetting a Vertex Descriptor

- [reset](mdlvertexdescriptor/reset%28%29.md): Resets a vertex descriptor to its default state.

### Copying a Vertex Descriptor

- [initWithVertexDescriptor:](mdlvertexdescriptor/init%28vertexdescriptor_%29.md): Creates a new vertex descriptor by performing a deep copy of the specified vertex descriptor.

### Instance Methods

- [removeAttributeNamed:](mdlvertexdescriptor/removeattributenamed%28__%29.md)

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
- [MDLVertexAttribute](mdlvertexattribute.md): A description of the format of per-vertex data for a single vertex attribute in a mesh object.
- [MDLVertexAttributeData](mdlvertexattributedata.md): An object that provides convenience access to vertex data for a specific vertex attribute of a mesh.
- [MDLVertexBufferLayout](mdlvertexbufferlayout.md): A [MDLVertexBufferLayout](mdlvertexbufferlayout.md) object describes layout information for a vertex buffer in a [MDLMesh](mdlmesh.md) object. A collection of vertex layer objects, vertex attribute objects, and additional information forms a [MDLVertexDescriptor](mdlvertexdescriptor.md) object, which completely describes the layout of vertex buffers for a mesh.
