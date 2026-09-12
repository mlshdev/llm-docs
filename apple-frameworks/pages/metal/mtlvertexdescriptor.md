> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexdescriptor](https://developer.apple.com/documentation/metal/mtlvertexdescriptor)

# MTLVertexDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that describes how to organize and map data to a vertex function.

## Declaration

```swift
class MTLVertexDescriptor
```

<a id="overview"></a>

## Overview

An [MTLVertexDescriptor](mtlvertexdescriptor.md) instance is used to configure how vertex data stored in memory is mapped to attributes in a vertex shader.

A pipeline state is the state of the graphics rendering pipeline, including shaders, blending, multisampling, and visibility testing. For every pipeline state, there can be only one [MTLVertexDescriptor](mtlvertexdescriptor.md) instance. When you configure an [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md) instance to create this pipeline state, you use an [MTLVertexDescriptor](mtlvertexdescriptor.md) instance to establish the vertex layout for the function associated with the pipeline. Create and configure an [MTLVertexDescriptor](mtlvertexdescriptor.md) instance, then use this instance to set the [vertexDescriptor](mtlrenderpipelinedescriptor/vertexdescriptor.md) property of the [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md) instance.

## Topics

### Setting default values

- [reset()](mtlvertexdescriptor/reset%28%29.md): Resets the default state for the vertex descriptor.

### Accessing the vertex buffer layouts and vertex attributes

- [attributes](mtlvertexdescriptor/attributes.md): An array of state data that describes how vertex attribute data is stored in memory and is mapped to arguments for a vertex shader function.
- [layouts](mtlvertexdescriptor/layouts.md): An array of state data that describes how data are fetched by a vertex shader function when rendering primitives.

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

- [MTLVertexAttributeDescriptor](mtlvertexattributedescriptor.md): An object that determines how to store attribute data in memory and map it to the arguments of a vertex function.
- [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md): An array of vertex attribute descriptor instances.
- [MTLVertexBufferLayoutDescriptor](mtlvertexbufferlayoutdescriptor.md): An object that configures how a render pipeline fetches data to send to the vertex function.
- [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md): An array of vertex buffer layout descriptor instances.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)

# MTLVertexDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that describes how to organize and map data to a vertex function.

## Declaration

```objectivec
@interface MTLVertexDescriptor : NSObject
```

<a id="overview"></a>

## Overview

An [MTLVertexDescriptor](mtlvertexdescriptor.md) instance is used to configure how vertex data stored in memory is mapped to attributes in a vertex shader.

A pipeline state is the state of the graphics rendering pipeline, including shaders, blending, multisampling, and visibility testing. For every pipeline state, there can be only one [MTLVertexDescriptor](mtlvertexdescriptor.md) instance. When you configure an [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md) instance to create this pipeline state, you use an [MTLVertexDescriptor](mtlvertexdescriptor.md) instance to establish the vertex layout for the function associated with the pipeline. Create and configure an [MTLVertexDescriptor](mtlvertexdescriptor.md) instance, then use this instance to set the [vertexDescriptor](mtlrenderpipelinedescriptor/vertexdescriptor.md) property of the [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md) instance.

## Topics

### Creating a new vertex descriptor

- [vertexDescriptor](mtlvertexdescriptor/vertexdescriptor.md): Creates and returns a new vertex descriptor.

### Setting default values

- [reset](mtlvertexdescriptor/reset%28%29.md): Resets the default state for the vertex descriptor.

### Accessing the vertex buffer layouts and vertex attributes

- [attributes](mtlvertexdescriptor/attributes.md): An array of state data that describes how vertex attribute data is stored in memory and is mapped to arguments for a vertex shader function.
- [layouts](mtlvertexdescriptor/layouts.md): An array of state data that describes how data are fetched by a vertex shader function when rendering primitives.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Render pass inputs

- [MTLVertexAttributeDescriptor](mtlvertexattributedescriptor.md): An object that determines how to store attribute data in memory and map it to the arguments of a vertex function.
- [MTLVertexAttributeDescriptorArray](mtlvertexattributedescriptorarray.md): An array of vertex attribute descriptor instances.
- [MTLVertexBufferLayoutDescriptor](mtlvertexbufferlayoutdescriptor.md): An object that configures how a render pipeline fetches data to send to the vertex function.
- [MTLVertexBufferLayoutDescriptorArray](mtlvertexbufferlayoutdescriptorarray.md): An array of vertex buffer layout descriptor instances.
- [MTLBufferLayoutStrideDynamic](mtlbufferlayoutstridedynamic.md)
