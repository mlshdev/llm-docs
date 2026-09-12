> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattributedescriptorarray](https://developer.apple.com/documentation/metal/mtlvertexattributedescriptorarray)

# MTLVertexAttributeDescriptorArray (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of vertex attribute descriptor instances.

## Declaration

```swift
class MTLVertexAttributeDescriptorArray
```

<a id="overview"></a>

## Overview

An [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md) instance is an array of instances that defines how vertex attribute data is formatted and assigned to an index in the attribute argument table. The methods of [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md) set or retrieve the attribute formatting information from the array.

## Topics

### Accessing a specified vertex attribute

- [subscript(\_:)](mtlvertexattributedescriptorarray/subscript%28__%29.md): Returns the state of the specified vertex attribute.

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

### Render pass inputs

- [MTLVertexDescriptor](mtlvertexdescriptor.md): An instance that describes how to organize and map data to a vertex function.
- [MTLVertexAttributeDescriptor](mtlvertexattributedescriptor.md): An object that determines how to store attribute data in memory and map it to the arguments of a vertex function.
- [MTLVertexBufferLayoutDescriptor](mtlvertexbufferlayoutdescriptor.md): An object that configures how a render pipeline fetches data to send to the vertex function.
- [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md): An array of vertex buffer layout descriptor instances.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)

# MTLVertexAttributeDescriptorArray (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of vertex attribute descriptor instances.

## Declaration

```objectivec
@interface MTLVertexAttributeDescriptorArray : NSObject
```

<a id="overview"></a>

## Overview

An [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md) instance is an array of instances that defines how vertex attribute data is formatted and assigned to an index in the attribute argument table. The methods of [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md) set or retrieve the attribute formatting information from the array.

## Topics

### Accessing a specified vertex attribute

- [objectAtIndexedSubscript:](mtlvertexattributedescriptorarray/subscript%28__%29.md): Returns the state of the specified vertex attribute.
- [setObject:atIndexedSubscript:](mtlvertexattributedescriptorarray/setobject_atindexedsubscript_.md): Sets state for the specified vertex attribute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Render pass inputs

- [MTLVertexDescriptor](mtlvertexdescriptor.md): An instance that describes how to organize and map data to a vertex function.
- [MTLVertexAttributeDescriptor](mtlvertexattributedescriptor.md): An object that determines how to store attribute data in memory and map it to the arguments of a vertex function.
- [MTLVertexBufferLayoutDescriptor](mtlvertexbufferlayoutdescriptor.md): An object that configures how a render pipeline fetches data to send to the vertex function.
- [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md): An array of vertex buffer layout descriptor instances.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)
