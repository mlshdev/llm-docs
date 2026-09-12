> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexbufferlayoutdescriptor](https://developer.apple.com/documentation/metal/mtlvertexbufferlayoutdescriptor)

# MTLVertexBufferLayoutDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An object that configures how a render pipeline fetches data to send to the vertex function.

## Declaration

```swift
class MTLVertexBufferLayoutDescriptor
```

## Topics

### Organizing the vertex buffer layout

- [stepFunction](mtlvertexbufferlayoutdescriptor/stepfunction.md): The circumstances under which the vertex and its attributes are presented to the vertex function.
- [stepRate](mtlvertexbufferlayoutdescriptor/steprate.md): The interval at which the vertex and its attributes are presented to the vertex function.
- [stride](mtlvertexbufferlayoutdescriptor/stride.md): The number of bytes between the first byte of two consecutive vertices in a buffer.
- [MTLVertexStepFunction](mtlvertexstepfunction.md): The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.

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
- [MTLVertexAttributeDescriptor](mtlvertexattributedescriptor.md): An object that determines how to store attribute data in memory and map it to the arguments of a vertex function.
- [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md): An array of vertex attribute descriptor instances.
- [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md): An array of vertex buffer layout descriptor instances.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)

# MTLVertexBufferLayoutDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An object that configures how a render pipeline fetches data to send to the vertex function.

## Declaration

```objectivec
@interface MTLVertexBufferLayoutDescriptor : NSObject
```

## Topics

### Organizing the vertex buffer layout

- [stepFunction](mtlvertexbufferlayoutdescriptor/stepfunction.md): The circumstances under which the vertex and its attributes are presented to the vertex function.
- [stepRate](mtlvertexbufferlayoutdescriptor/steprate.md): The interval at which the vertex and its attributes are presented to the vertex function.
- [stride](mtlvertexbufferlayoutdescriptor/stride.md): The number of bytes between the first byte of two consecutive vertices in a buffer.
- [MTLVertexStepFunction](mtlvertexstepfunction.md): The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Render pass inputs

- [MTLVertexDescriptor](mtlvertexdescriptor.md): An instance that describes how to organize and map data to a vertex function.
- [MTLVertexAttributeDescriptor](mtlvertexattributedescriptor.md): An object that determines how to store attribute data in memory and map it to the arguments of a vertex function.
- [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md): An array of vertex attribute descriptor instances.
- [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md): An array of vertex buffer layout descriptor instances.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)
