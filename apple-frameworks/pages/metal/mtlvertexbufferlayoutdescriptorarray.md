> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexbufferlayoutdescriptorarray](https://developer.apple.com/documentation/metal/mtlvertexbufferlayoutdescriptorarray)

# MTLVertexBufferLayoutDescriptorArray (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of vertex buffer layout descriptor instances.

## Declaration

```swift
class MTLVertexBufferLayoutDescriptorArray
```

<a id="overview"></a>

## Overview

An [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md) holds an array of vertex buffer layout states. The methods of [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md) set the vertex buffer layout state in the array or retrieve the state from the array.

## Topics

### Accessing a specified vertex buffer layout

- [subscript(\_:)](mtlvertexbufferlayoutdescriptorarray/subscript%28__%29.md): Returns the state of the specified vertex buffer layout.

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
- [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md): An array of vertex attribute descriptor instances.
- [MTLVertexBufferLayoutDescriptor](mtlvertexbufferlayoutdescriptor.md): An object that configures how a render pipeline fetches data to send to the vertex function.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)

# MTLVertexBufferLayoutDescriptorArray (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of vertex buffer layout descriptor instances.

## Declaration

```objectivec
@interface MTLVertexBufferLayoutDescriptorArray : NSObject
```

<a id="overview"></a>

## Overview

An [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md) holds an array of vertex buffer layout states. The methods of [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md) set the vertex buffer layout state in the array or retrieve the state from the array.

## Topics

### Accessing a specified vertex buffer layout

- [objectAtIndexedSubscript:](mtlvertexbufferlayoutdescriptorarray/subscript%28__%29.md): Returns the state of the specified vertex buffer layout.
- [setObject:atIndexedSubscript:](mtlvertexbufferlayoutdescriptorarray/setobject_atindexedsubscript_.md): Sets the state of the specified vertex buffer layout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Render pass inputs

- [MTLVertexDescriptor](mtlvertexdescriptor.md): An instance that describes how to organize and map data to a vertex function.
- [MTLVertexAttributeDescriptor](mtlvertexattributedescriptor.md): An object that determines how to store attribute data in memory and map it to the arguments of a vertex function.
- [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md): An array of vertex attribute descriptor instances.
- [MTLVertexBufferLayoutDescriptor](mtlvertexbufferlayoutdescriptor.md): An object that configures how a render pipeline fetches data to send to the vertex function.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)
