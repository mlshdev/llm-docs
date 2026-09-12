> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattributedescriptor](https://developer.apple.com/documentation/metal/mtlvertexattributedescriptor)

# MTLVertexAttributeDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An object that determines how to store attribute data in memory and map it to the arguments of a vertex function.

## Declaration

```swift
class MTLVertexAttributeDescriptor
```

<a id="overview"></a>

## Overview

A vertex attribute descriptor provides organization information so a vertex shader function can locate and load data into its arguments. The descriptor maps memory locations to attribute locations. It supports access to multiple attributes (such as vertex coordinates, surface normals, and texture coordinates) that are interleaved within the same buffer.

## Topics

### Organizing the vertex attribute

- [format](mtlvertexattributedescriptor/format.md): The format of the vertex attribute.
- [offset](mtlvertexattributedescriptor/offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [bufferIndex](mtlvertexattributedescriptor/bufferindex.md): The index in the argument table for the associated vertex buffer.
- [MTLVertexFormat](mtlvertexformat.md): The vertex data format options for render pipelines.

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

### Render pass inputs

- [MTLVertexDescriptor](mtlvertexdescriptor.md): An instance that describes how to organize and map data to a vertex function.
- [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md): An array of vertex attribute descriptor instances.
- [MTLVertexBufferLayoutDescriptor](mtlvertexbufferlayoutdescriptor.md): An object that configures how a render pipeline fetches data to send to the vertex function.
- [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md): An array of vertex buffer layout descriptor instances.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)

# MTLVertexAttributeDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An object that determines how to store attribute data in memory and map it to the arguments of a vertex function.

## Declaration

```objectivec
@interface MTLVertexAttributeDescriptor : NSObject
```

<a id="overview"></a>

## Overview

A vertex attribute descriptor provides organization information so a vertex shader function can locate and load data into its arguments. The descriptor maps memory locations to attribute locations. It supports access to multiple attributes (such as vertex coordinates, surface normals, and texture coordinates) that are interleaved within the same buffer.

## Topics

### Organizing the vertex attribute

- [format](mtlvertexattributedescriptor/format.md): The format of the vertex attribute.
- [offset](mtlvertexattributedescriptor/offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [bufferIndex](mtlvertexattributedescriptor/bufferindex.md): The index in the argument table for the associated vertex buffer.
- [MTLVertexFormat](mtlvertexformat.md): The vertex data format options for render pipelines.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Render pass inputs

- [MTLVertexDescriptor](mtlvertexdescriptor.md): An instance that describes how to organize and map data to a vertex function.
- [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md): An array of vertex attribute descriptor instances.
- [MTLVertexBufferLayoutDescriptor](mtlvertexbufferlayoutdescriptor.md): An object that configures how a render pipeline fetches data to send to the vertex function.
- [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md): An array of vertex buffer layout descriptor instances.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)
