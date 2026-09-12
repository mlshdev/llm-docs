> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder](https://developer.apple.com/documentation/metal/mtlargumentencoder)

# MTLArgumentEncoder (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An interface you can use to encode argument data into an argument buffer.

## Declaration

```swift
protocol MTLArgumentEncoder : NSObjectProtocol
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)

<a id="overview"></a>

## Overview

An [MTLArgumentEncoder](mtlargumentencoder.md) instance encodes buffers, textures, samplers, and inlined constant data into an argument buffer. An [MTLBuffer](mtlbuffer.md) instance represents the argument buffer that you set as the encoding destination by calling the [setArgumentBuffer(\_:offset:)](mtlargumentencoder/setargumentbuffer%28__offset_%29.md) method.

The recommended way to declare an argument buffer is to define its structure in your Metal shading language code. You can assign the argument buffer to a function’s specific buffer index. To create an encoder for this type of argument buffer, call one of the following [MTLFunction](mtlfunction.md) methods:

- [makeArgumentEncoder(bufferIndex:)](mtlfunction/makeargumentencoder%28bufferindex_%29.md)
- [makeArgumentEncoder(bufferIndex:reflection:)](mtlfunction/makeargumentencoder%28bufferindex_reflection_%29.md)

If you construct your shaders dynamically at runtime, you can still construct argument buffers as parameters for the shader. Define each argument separately and then add it to an array of [MTLArgumentDescriptor](mtlargumentdescriptor.md) instances. To create an encoder for this type of argument buffer, call the [makeArgumentEncoder(arguments:)](mtldevice/makeargumentencoder%28arguments_%29.md) method of the [MTLDevice](mtldevice.md) class.

> **Important**

>  A runtime validation error occurs if you create a `MTLArgumentEncoder` instance using structures that don’t reference any other resources and don’t provide any `[[id()]]` annotation on any of their members.

## Topics

### Creating an argument buffer

- [setArgumentBuffer(\_:offset:)](mtlargumentencoder/setargumentbuffer%28__offset_%29.md): Specifies the position in a buffer where the encoder writes argument data.
- [setArgumentBuffer(\_:startOffset:arrayElement:)](mtlargumentencoder/setargumentbuffer%28__startoffset_arrayelement_%29.md): Specifies an array element within a buffer where the encoder writes argument data.
- [encodedLength](mtlargumentencoder/encodedlength.md): The number of bytes required to store the encoded resources of an argument buffer.

### Encoding buffers

- [setBuffer(\_:offset:index:)](mtlargumentencoder/setbuffer%28__offset_index_%29.md): Encodes a reference to a buffer into the argument buffer.
- [setBuffers(\_:offsets:range:)](mtlargumentencoder/setbuffers%28__offsets_range_%29.md): Encodes references to an array of buffers into the argument buffer.

### Encoding textures

- [setTexture(\_:index:)](mtlargumentencoder/settexture%28__index_%29.md): Encodes a reference to a texture into the argument buffer.
- [setTextures(\_:range:)](mtlargumentencoder/settextures%28__range_%29.md): Encodes references to an array of textures into the argument buffer.

### Encoding samplers

- [setSamplerState(\_:index:)](mtlargumentencoder/setsamplerstate%28__index_%29.md): Encodes a sampler into the argument buffer.
- [setSamplerStates(\_:range:)](mtlargumentencoder/setsamplerstates%28__range_%29.md): Encodes an array of samplers into the argument buffer.

### Encoding pipeline states

- [setRenderPipelineState(\_:index:)](mtlargumentencoder/setrenderpipelinestate%28__index_%29.md): Encodes a reference to a render pipeline state into the argument buffer.
- [setRenderPipelineStates(\_:range:)](mtlargumentencoder/setrenderpipelinestates%28__range_%29.md): Encodes references to an array of render pipeline states into the argument buffer.
- [setComputePipelineState(\_:index:)](mtlargumentencoder/setcomputepipelinestate%28__index_%29.md): Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates(\_:with:)](mtlargumentencoder/setcomputepipelinestates%28__with_%29.md): Deprecated. Encodes references to an array of compute pipeline states into the argument buffer.
- [setComputePipelineState(\_:at:)](mtlargumentencoder/setcomputepipelinestate%28__at_%29.md): Deprecated. Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates(\_:range:)](mtlargumentencoder/setcomputepipelinestates%28__range_%29.md): Encodes references to an array of compute pipeline states into the argument buffer.

### Encoding inlined constant data

- [constantData(at:)](mtlargumentencoder/constantdata%28at_%29.md): Returns a pointer to an inline, constant-data argument within the argument buffer.

### Encoding indirect command buffers

- [setIndirectCommandBuffer(\_:index:)](mtlargumentencoder/setindirectcommandbuffer%28__index_%29.md): Encodes a reference to an indirect command buffer into the argument buffer.
- [setIndirectCommandBuffers(\_:range:)](mtlargumentencoder/setindirectcommandbuffers%28__range_%29.md): Encodes an array of indirect command buffers into the argument buffer.

### Encoding acceleration structures

- [setAccelerationStructure(\_:index:)](mtlargumentencoder/setaccelerationstructure%28__index_%29.md): Encodes a reference to an acceleration structure into the argument buffer.

### Encoding function tables

- [setVisibleFunctionTable(\_:index:)](mtlargumentencoder/setvisiblefunctiontable%28__index_%29.md): Encodes a reference to a visible-function table into the argument buffer.
- [setIntersectionFunctionTable(\_:index:)](mtlargumentencoder/setintersectionfunctiontable%28__index_%29.md): Encodes a reference to a ray-tracing intersection-function table into the argument buffer.
- [setIntersectionFunctionTables(\_:range:)](mtlargumentencoder/setintersectionfunctiontables%28__range_%29.md): Encodes references to an array of ray-tracing intersection-function tables into the argument buffer.
- [setVisibleFunctionTables(\_:range:)](mtlargumentencoder/setvisiblefunctiontables%28__range_%29.md): Encodes references to an array of ray-tracing intersection-function tables into the argument buffer.

### Creating a nested argument encoder

- [makeArgumentEncoderForBuffer(atIndex:)](mtlargumentencoder/makeargumentencoderforbuffer%28atindex_%29.md): Creates a new argument encoder for a nested argument buffer.

### Querying alignment

- [alignment](mtlargumentencoder/alignment.md): The alignment, in bytes, required for storing the encoded resources of an argument buffer.

### Identifying the argument encoder

- [label](mtlargumentencoder/label.md): A string that identifies the argument buffer.
- [device](mtlargumentencoder/device.md): The device object that created the argument encoder.

### Instance Methods

- [setDepthStencilState(\_:index:)](mtlargumentencoder/setdepthstencilstate%28__index_%29.md)
- [setDepthStencilStates(\_:range:)](mtlargumentencoder/setdepthstencilstates%28__range_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Argument buffers

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md): Optimize your app’s performance by grouping your resources into argument buffers.
- [Managing groups of resources with argument buffers](managing-groups-of-resources-with-argument-buffers.md): Create argument buffers to organize related resources.
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md): Optimize resource performance within an argument buffer.
- [Indexing argument buffers](indexing-argument-buffers.md): Assign resource indices within an argument buffer.
- [Rendering terrain dynamically with argument buffers](rendering-terrain-dynamically-with-argument-buffers.md): Use argument buffers to render terrain in real time with a GPU-driven pipeline.
- [Encoding argument buffers on the GPU](encoding-argument-buffers-on-the-gpu.md): Use a compute pass to encode an argument buffer and access its arguments in a subsequent render pass.
- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [MTLArgumentDescriptor](mtlargumentdescriptor.md): A representation of an argument within an argument buffer.
- [MTLAttributeStrideStatic](mtlattributestridestatic.md)

# MTLArgumentEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An interface you can use to encode argument data into an argument buffer.

## Declaration

```objectivec
@protocol MTLArgumentEncoder <NSObject>
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)

<a id="overview"></a>

## Overview

An [MTLArgumentEncoder](mtlargumentencoder.md) instance encodes buffers, textures, samplers, and inlined constant data into an argument buffer. An [MTLBuffer](mtlbuffer.md) instance represents the argument buffer that you set as the encoding destination by calling the [setArgumentBuffer:offset:](mtlargumentencoder/setargumentbuffer%28__offset_%29.md) method.

The recommended way to declare an argument buffer is to define its structure in your Metal shading language code. You can assign the argument buffer to a function’s specific buffer index. To create an encoder for this type of argument buffer, call one of the following [MTLFunction](mtlfunction.md) methods:

- [newArgumentEncoderWithBufferIndex:](mtlfunction/makeargumentencoder%28bufferindex_%29.md)
- [newArgumentEncoderWithBufferIndex:reflection:](mtlfunction/makeargumentencoder%28bufferindex_reflection_%29.md)

If you construct your shaders dynamically at runtime, you can still construct argument buffers as parameters for the shader. Define each argument separately and then add it to an array of [MTLArgumentDescriptor](mtlargumentdescriptor.md) instances. To create an encoder for this type of argument buffer, call the [newArgumentEncoderWithArguments:](mtldevice/makeargumentencoder%28arguments_%29.md) method of the [MTLDevice](mtldevice.md) class.

> **Important**

>  A runtime validation error occurs if you create a `MTLArgumentEncoder` instance using structures that don’t reference any other resources and don’t provide any `[[id()]]` annotation on any of their members.

## Topics

### Creating an argument buffer

- [setArgumentBuffer:offset:](mtlargumentencoder/setargumentbuffer%28__offset_%29.md): Specifies the position in a buffer where the encoder writes argument data.
- [setArgumentBuffer:startOffset:arrayElement:](mtlargumentencoder/setargumentbuffer%28__startoffset_arrayelement_%29.md): Specifies an array element within a buffer where the encoder writes argument data.
- [encodedLength](mtlargumentencoder/encodedlength.md): The number of bytes required to store the encoded resources of an argument buffer.

### Encoding buffers

- [setBuffer:offset:atIndex:](mtlargumentencoder/setbuffer%28__offset_index_%29.md): Encodes a reference to a buffer into the argument buffer.
- [setBuffers:offsets:withRange:](mtlargumentencoder/setbuffers_offsets_withrange_.md): Encodes references to an array of buffers into the argument buffer.

### Encoding textures

- [setTexture:atIndex:](mtlargumentencoder/settexture%28__index_%29.md): Encodes a reference to a texture into the argument buffer.
- [setTextures:withRange:](mtlargumentencoder/settextures_withrange_.md): Encodes references to an array of textures into the argument buffer.

### Encoding samplers

- [setSamplerState:atIndex:](mtlargumentencoder/setsamplerstate%28__index_%29.md): Encodes a sampler into the argument buffer.
- [setSamplerStates:withRange:](mtlargumentencoder/setsamplerstates_withrange_.md): Encodes an array of samplers into the argument buffer.

### Encoding pipeline states

- [setRenderPipelineState:atIndex:](mtlargumentencoder/setrenderpipelinestate%28__index_%29.md): Encodes a reference to a render pipeline state into the argument buffer.
- [setRenderPipelineStates:withRange:](mtlargumentencoder/setrenderpipelinestates_withrange_.md): Encodes references to an array of render pipeline states into the argument buffer.
- [setComputePipelineState:atIndex:](mtlargumentencoder/setcomputepipelinestate%28__index_%29.md): Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates:withRange:](mtlargumentencoder/setcomputepipelinestates_withrange_.md): Encodes references to an array of compute pipeline states into the argument buffer.

### Encoding inlined constant data

- [constantDataAtIndex:](mtlargumentencoder/constantdata%28at_%29.md): Returns a pointer to an inline, constant-data argument within the argument buffer.

### Encoding indirect command buffers

- [setIndirectCommandBuffer:atIndex:](mtlargumentencoder/setindirectcommandbuffer%28__index_%29.md): Encodes a reference to an indirect command buffer into the argument buffer.
- [setIndirectCommandBuffers:withRange:](mtlargumentencoder/setindirectcommandbuffers_withrange_.md): Encodes an array of indirect command buffers into the argument buffer.

### Encoding acceleration structures

- [setAccelerationStructure:atIndex:](mtlargumentencoder/setaccelerationstructure%28__index_%29.md): Encodes a reference to an acceleration structure into the argument buffer.

### Encoding function tables

- [setVisibleFunctionTable:atIndex:](mtlargumentencoder/setvisiblefunctiontable%28__index_%29.md): Encodes a reference to a visible-function table into the argument buffer.
- [setVisibleFunctionTables:withRange:](mtlargumentencoder/setvisiblefunctiontables_withrange_.md): Encodes references to an array of visible function tables into the argument buffer.
- [setIntersectionFunctionTable:atIndex:](mtlargumentencoder/setintersectionfunctiontable%28__index_%29.md): Encodes a reference to a ray-tracing intersection-function table into the argument buffer.
- [setIntersectionFunctionTables:withRange:](mtlargumentencoder/setintersectionfunctiontables_withrange_.md): Encodes references to an array of ray-tracing intersection-function tables into the argument buffer.

### Creating a nested argument encoder

- [newArgumentEncoderForBufferAtIndex:](mtlargumentencoder/makeargumentencoderforbuffer%28atindex_%29.md): Creates a new argument encoder for a nested argument buffer.

### Querying alignment

- [alignment](mtlargumentencoder/alignment.md): The alignment, in bytes, required for storing the encoded resources of an argument buffer.

### Identifying the argument encoder

- [label](mtlargumentencoder/label.md): A string that identifies the argument buffer.
- [device](mtlargumentencoder/device.md): The device object that created the argument encoder.

### Instance Methods

- [setDepthStencilState:atIndex:](mtlargumentencoder/setdepthstencilstate%28__index_%29.md)
- [setDepthStencilStates:withRange:](mtlargumentencoder/setdepthstencilstates_withrange_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Argument buffers

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md): Optimize your app’s performance by grouping your resources into argument buffers.
- [Managing groups of resources with argument buffers](managing-groups-of-resources-with-argument-buffers.md): Create argument buffers to organize related resources.
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md): Optimize resource performance within an argument buffer.
- [Indexing argument buffers](indexing-argument-buffers.md): Assign resource indices within an argument buffer.
- [Rendering terrain dynamically with argument buffers](rendering-terrain-dynamically-with-argument-buffers.md): Use argument buffers to render terrain in real time with a GPU-driven pipeline.
- [Encoding argument buffers on the GPU](encoding-argument-buffers-on-the-gpu.md): Use a compute pass to encode an argument buffer and access its arguments in a subsequent render pass.
- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [MTLArgumentDescriptor](mtlargumentdescriptor.md): A representation of an argument within an argument buffer.
- [MTLAttributeStrideStatic](mtlattributestridestatic.md)
