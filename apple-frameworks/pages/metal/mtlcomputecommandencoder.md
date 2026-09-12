> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder)

# MTLComputeCommandEncoder (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes computation dispatch commands for a single compute pass into a command buffer.

## Declaration

```swift
protocol MTLComputeCommandEncoder : MTLCommandEncoder
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)
- [Setting up a command structure](setting-up-a-command-structure.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md)

<a id="overview"></a>

## Overview

Create a compute encoder by calling one of the factory methods on an [MTLCommandBuffer](mtlcommandbuffer.md) instance, such as [makeComputeCommandEncoder(dispatchType:)](mtlcommandbuffer/makecomputecommandencoder%28dispatchtype_%29.md). You can encode multiple commands that each run a compute kernel as part of a single pass of the encoder with the following steps:

1. Configure an [MTLComputePipelineState](mtlcomputepipelinestate.md) instance with a kernel, using a method such as [makeComputePipelineState(function:)](mtldevice/makecomputepipelinestate%28function_%29.md). See the [Creating compute pipeline states](pipeline-state-creation.md#Creating-compute-pipeline-states) section of [Pipeline state creation](pipeline-state-creation.md) for all [MTLDevice](mtldevice.md) methods that create a new pipeline state for your command encoder.
2. Set the pipeline state with the [setComputePipelineState(\_:)](mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method on your command encoder.
3. Set kernel arguments by binding buffers, textures, and other resources with methods such as [setBuffer(\_:offset:index:)](mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md) and [setTexture(\_:index:)](mtlcomputecommandencoder/settexture%28__index_%29.md).
4. Encode compute commands that call your kernel by either [Dispatching kernel calls directly](mtlcomputecommandencoder.md#Dispatching-kernel-calls-directly) or [Dispatching from indirect command buffers](mtlcomputecommandencoder.md#Dispatching-from-indirect-command-buffers).
5. Call [endEncoding()](mtlcommandencoder/endencoding%28%29.md) to finish encoding the kernel call of the compute pass.

<a id="Command-stages"></a>

### Command stages

Most compute commands apply to one stage within a pass. The following table shows which stage applies to each command:

| Function | MTLStages |
| --- | --- |
| [dispatchThreads(\_:threadsPerThreadgroup:)](mtlcomputecommandencoder/dispatchthreads%28__threadsperthreadgroup_%29.md) | [dispatch](mtlstages/dispatch.md) |
| [dispatchThreadgroups(\_:threadsPerThreadgroup:)](mtlcomputecommandencoder/dispatchthreadgroups%28__threadsperthreadgroup_%29.md) | [dispatch](mtlstages/dispatch.md) |
| [dispatchThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerThreadgroup:)](mtlcomputecommandencoder/dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md) | [dispatch](mtlstages/dispatch.md) |
| [executeCommandsInBuffer(\_:range:)](mtlcomputecommandencoder/executecommandsinbuffer%28__range_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:withRange:](mtlcomputecommandencoder/executecommandsinbuffer_withrange_.md) | None |
| [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlcomputecommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:indirectBuffer:indirectBufferOffset:](mtlcomputecommandencoder/executecommandsinbuffer_indirectbuffer_indirectbufferoffset_.md) | None |
| [sampleCounters(sampleBuffer:sampleIndex:barrier:)](mtlcomputecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) | None |

The [executeCommandsInBuffer(\_:range:)](mtlcomputecommandencoder/executecommandsinbuffer%28__range_%29.md) and [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlcomputecommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md) commands don’t apply to any stage, which means you can’t use a barrier to wait for all commands in an indirect command buffer to complete. However, each command within the [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) applies to the same stages as when you encode the equivalent command directly.

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Configuring the pipeline state

Configure a compute pipeline state to describe the runtime environment of an encoder.

- [setComputePipelineState(\_:)](mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md): Configures the compute encoder with a pipeline state for subsequent kernel calls.
- [dispatchType](mtlcomputecommandencoder/dispatchtype.md): The dispatch type to use when submitting compute work to the GPU.

### Binding buffers

Bind buffers to kernel argument entries on the GPU.

- [setBuffer(\_:offset:index:)](mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md): Binds a buffer to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffer(\_:offset:attributeStride:index:)](mtlcomputecommandencoder/setbuffer%28__offset_attributestride_index_%29.md): Binds a buffer with a stride to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffers(\_:offsets:range:)](mtlcomputecommandencoder/setbuffers%28__offsets_range_%29.md): Binds multiple buffers to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBuffers(\_:offsets:attributeStrides:range:)](mtlcomputecommandencoder/setbuffers%28__offsets_attributestrides_range_%29.md): Binds multiple buffers with data in stride to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBufferOffset(\_:index:)](mtlcomputecommandencoder/setbufferoffset%28__index_%29.md): Changes where the data begins in a buffer already bound to the buffer argument table.
- [setBufferOffset(offset:attributeStride:index:)](mtlcomputecommandencoder/setbufferoffset%28offset_attributestride_index_%29.md): Changes where the data begins and the distance between adjacent elements in a buffer already bound to the buffer argument table.

### Binding raw bytes

Bind copies of raw bytes to kernel argument entries on the GPU, up to 4 KB.

- [setBytes(\_:length:index:)](mtlcomputecommandencoder/setbytes%28__length_index_%29.md): Copies data directly to the GPU to populate an entry in the buffer argument table.
- [setBytes(\_:length:attributeStride:index:)](mtlcomputecommandencoder/setbytes%28__length_attributestride_index_%29.md): Copies data with a given stride directly to the GPU to populate an entry in the buffer argument table.

### Binding textures

Bind textures to kernel argument entries on the GPU.

- [setTexture(\_:index:)](mtlcomputecommandencoder/settexture%28__index_%29.md): Binds a texture to the texture argument table, allowing compute kernels to access its data on the GPU.
- [setTextures(\_:range:)](mtlcomputecommandencoder/settextures%28__range_%29.md): Binds multiple textures to the texture argument table, allowing compute functions to access their data on the GPU.

### Binding texture samplers

Bind texture samplers to kernel argument entries on the GPU.

- [setSamplerState(\_:index:)](mtlcomputecommandencoder/setsamplerstate%28__index_%29.md): Encodes a texture sampler, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](mtlcomputecommandencoder/setsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Encodes a texture sampler with a custom level of detail clamping, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerStates(\_:range:)](mtlcomputecommandencoder/setsamplerstates%28__range_%29.md): Encodes multiple texture samplers to the sampler argument table, allowing compute kernels to use them for sampling textures on the GPU.
- [setSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](mtlcomputecommandencoder/setsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Encodes multiple texture samplers for the compute function, specifying clamp values for the level of detail of each sampler.

### Binding function tables

Bind tables of function pointers to kernel argument entries on the GPU.

- [setVisibleFunctionTable(\_:bufferIndex:)](mtlcomputecommandencoder/setvisiblefunctiontable%28__bufferindex_%29.md): Binds a visible function table to the buffer argument table, allowing you to call its functions on the GPU.
- [setVisibleFunctionTables(\_:bufferRange:)](mtlcomputecommandencoder/setvisiblefunctiontables%28__bufferrange_%29.md): Binds multiple visible function tables to the buffer argument table, allowing you to call their functions on the GPU.
- [setIntersectionFunctionTables(\_:bufferRange:)](mtlcomputecommandencoder/setintersectionfunctiontables%28__bufferrange_%29.md): Binds multiple intersection function tables to the buffer argument table, allowing you to call their functions on the GPU.

### Binding arguments for acceleration structures

Bind acceleration structures to kernel argument entries on the GPU.

- [setAccelerationStructure(\_:bufferIndex:)](mtlcomputecommandencoder/setaccelerationstructure%28__bufferindex_%29.md): Binds an acceleration structure to the buffer argument table, allowing functions to access it on the GPU.
- [setIntersectionFunctionTable(\_:bufferIndex:)](mtlcomputecommandencoder/setintersectionfunctiontable%28__bufferindex_%29.md): Binds an intersection function table to the buffer argument table, making it callable in your Metal shaders.

### Making indirect resources resident

Move data for resources without direct bindings into GPU-accessible memory — such as resources the pass accesses through an argument buffer.

- [useResource(\_:usage:)](mtlcomputecommandencoder/useresource%28__usage_%29.md): Ensures kernel calls that the system encodes in subsequent commands have access to a resource.
- [useResources(\_:usage:)](mtlcomputecommandencoder/useresources%28__usage_%29.md): Ensures kernel calls that the system encodes in subsequent commands have access to multiple resources.
- [useHeap(\_:)](mtlcomputecommandencoder/useheap%28__%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to all of the resources you allocate from a heap.
- [useHeaps(\_:)](mtlcomputecommandencoder/useheaps%28__%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to all of the resources you allocate from multiple heaps.

### Configuring tile memory

Reserve space in tile memory for threadgroups and imageblocks.

- [setThreadgroupMemoryLength(\_:index:)](mtlcomputecommandencoder/setthreadgroupmemorylength%28__index_%29.md): Configures the size of a block of threadgroup memory.
- [setImageblockWidth(\_:height:)](mtlcomputecommandencoder/setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of imageblock data in tile memory.

### Configuring stage-in data

Set per-thread input data for compute kernels.

- [setStageInRegion(\_:)](mtlcomputecommandencoder/setstageinregion%28__%29.md): Sets the dimensions over the thread grid of how your compute kernel receives stage-in arguments.
- [setStageInRegionWithIndirectBuffer(\_:indirectBufferOffset:)](mtlcomputecommandencoder/setstageinregionwithindirectbuffer%28__indirectbufferoffset_%29.md): Sets the region of the stage-in attributes to apply to a compute kernel using an indirect buffer.

### Dispatching kernel calls directly

Run compute kernels as part of a compute pass.

- [dispatchThreads(\_:threadsPerThreadgroup:)](mtlcomputecommandencoder/dispatchthreads%28__threadsperthreadgroup_%29.md): Encodes a compute command using an arbitrarily sized grid.
- [dispatchThreadgroups(\_:threadsPerThreadgroup:)](mtlcomputecommandencoder/dispatchthreadgroups%28__threadsperthreadgroup_%29.md): Encodes a compute dispatch command using a grid aligned to threadgroup boundaries.

### Dispatching from indirect command buffers

Run commands from an indirect command buffer.

- [dispatchThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerThreadgroup:)](mtlcomputecommandencoder/dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md): Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.
- [executeCommandsInBuffer(\_:range:)](mtlcomputecommandencoder/executecommandsinbuffer%28__range_%29.md): Encodes an instruction to run commands from an indirect buffer.
- [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlcomputecommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md): Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommands(in:indirectBuffer:indirectBufferOffset:)](mtlcomputecommandencoder/executecommands%28in_indirectbuffer_indirectbufferoffset_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommands(in:with:)](mtlcomputecommandencoder/executecommands%28in_with_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer.

### Preventing resource access conflicts

Address hazards for untracked resources with fences and barriers.

- [waitForFence(\_:)](mtlcomputecommandencoder/waitforfence%28__%29.md): Encodes a command that instructs the GPU to pause the compute pass until another pass updates a fence.
- [updateFence(\_:)](mtlcomputecommandencoder/updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the compute pass completes.
- [memoryBarrier(scope:)](mtlcomputecommandencoder/memorybarrier%28scope_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resource types.
- [memoryBarrier(resources:)](mtlcomputecommandencoder/memorybarrier%28resources_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.

### Sampling counters

Capture runtime data from GPU hardware counters.

- [sampleCounters(sampleBuffer:sampleIndex:barrier:)](mtlcomputecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md): Encodes a command to sample hardware counters, providing performance information.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Encoding a compute pass

- [Creating threads and threadgroups](creating-threads-and-threadgroups.md): Learn how Metal organizes compute-processing workloads.
- [Calculating threadgroup and grid sizes](calculating-threadgroup-and-grid-sizes.md): Calculate the optimum sizes for threadgroups and grids when dispatching compute-processing workloads.
- [MTL4ComputeCommandEncoder](mtl4computecommandencoder.md): Encodes computation dispatches, resource copying commands, and acceleration structure building commands for a single pass into a command buffer.

# MTLComputeCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes computation dispatch commands for a single compute pass into a command buffer.

## Declaration

```objectivec
@protocol MTLComputeCommandEncoder <MTLCommandEncoder>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)
- [Setting up a command structure](setting-up-a-command-structure.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md)

<a id="overview"></a>

## Overview

Create a compute encoder by calling one of the factory methods on an [MTLCommandBuffer](mtlcommandbuffer.md) instance, such as [computeCommandEncoderWithDispatchType:](mtlcommandbuffer/makecomputecommandencoder%28dispatchtype_%29.md). You can encode multiple commands that each run a compute kernel as part of a single pass of the encoder with the following steps:

1. Configure an [MTLComputePipelineState](mtlcomputepipelinestate.md) instance with a kernel, using a method such as [newComputePipelineStateWithFunction:error:](mtldevice/makecomputepipelinestate%28function_%29.md). See the [Creating compute pipeline states](pipeline-state-creation.md#Creating-compute-pipeline-states) section of [Pipeline state creation](pipeline-state-creation.md) for all [MTLDevice](mtldevice.md) methods that create a new pipeline state for your command encoder.
2. Set the pipeline state with the [setComputePipelineState:](mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method on your command encoder.
3. Set kernel arguments by binding buffers, textures, and other resources with methods such as [setBuffer:offset:atIndex:](mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md) and [setTexture:atIndex:](mtlcomputecommandencoder/settexture%28__index_%29.md).
4. Encode compute commands that call your kernel by either [Dispatching kernel calls directly](mtlcomputecommandencoder.md#Dispatching-kernel-calls-directly) or [Dispatching from indirect command buffers](mtlcomputecommandencoder.md#Dispatching-from-indirect-command-buffers).
5. Call [endEncoding](mtlcommandencoder/endencoding%28%29.md) to finish encoding the kernel call of the compute pass.

<a id="Command-stages"></a>

### Command stages

Most compute commands apply to one stage within a pass. The following table shows which stage applies to each command:

| Function | MTLStages |
| --- | --- |
| [dispatchThreads:threadsPerThreadgroup:](mtlcomputecommandencoder/dispatchthreads%28__threadsperthreadgroup_%29.md) | [MTLStageDispatch](mtlstages/dispatch.md) |
| [dispatchThreadgroups:threadsPerThreadgroup:](mtlcomputecommandencoder/dispatchthreadgroups%28__threadsperthreadgroup_%29.md) | [MTLStageDispatch](mtlstages/dispatch.md) |
| [dispatchThreadgroupsWithIndirectBuffer:indirectBufferOffset:threadsPerThreadgroup:](mtlcomputecommandencoder/dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md) | [MTLStageDispatch](mtlstages/dispatch.md) |
| [executeCommandsInBuffer(\_:range:)](mtlcomputecommandencoder/executecommandsinbuffer%28__range_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:withRange:](mtlcomputecommandencoder/executecommandsinbuffer_withrange_.md) | None |
| [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlcomputecommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:indirectBuffer:indirectBufferOffset:](mtlcomputecommandencoder/executecommandsinbuffer_indirectbuffer_indirectbufferoffset_.md) | None |
| [sampleCountersInBuffer:atSampleIndex:withBarrier:](mtlcomputecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) | None |

The [executeCommandsInBuffer(\_:range:)](mtlcomputecommandencoder/executecommandsinbuffer%28__range_%29.md) and [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlcomputecommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md) commands don’t apply to any stage, which means you can’t use a barrier to wait for all commands in an indirect command buffer to complete. However, each command within the [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) applies to the same stages as when you encode the equivalent command directly.

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Configuring the pipeline state

Configure a compute pipeline state to describe the runtime environment of an encoder.

- [setComputePipelineState:](mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md): Configures the compute encoder with a pipeline state for subsequent kernel calls.
- [dispatchType](mtlcomputecommandencoder/dispatchtype.md): The dispatch type to use when submitting compute work to the GPU.

### Binding buffers

Bind buffers to kernel argument entries on the GPU.

- [setBuffer:offset:atIndex:](mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md): Binds a buffer to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffer:offset:attributeStride:atIndex:](mtlcomputecommandencoder/setbuffer%28__offset_attributestride_index_%29.md): Binds a buffer with a stride to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffers:offsets:withRange:](mtlcomputecommandencoder/setbuffers_offsets_withrange_.md): Binds multiple buffers to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBuffers:offsets:attributeStrides:withRange:](mtlcomputecommandencoder/setbuffers_offsets_attributestrides_withrange_.md): Binds multiple buffers with data in stride to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBufferOffset:atIndex:](mtlcomputecommandencoder/setbufferoffset%28__index_%29.md): Changes where the data begins in a buffer already bound to the buffer argument table.
- [setBufferOffset:attributeStride:atIndex:](mtlcomputecommandencoder/setbufferoffset%28offset_attributestride_index_%29.md): Changes where the data begins and the distance between adjacent elements in a buffer already bound to the buffer argument table.

### Binding raw bytes

Bind copies of raw bytes to kernel argument entries on the GPU, up to 4 KB.

- [setBytes:length:atIndex:](mtlcomputecommandencoder/setbytes%28__length_index_%29.md): Copies data directly to the GPU to populate an entry in the buffer argument table.
- [setBytes:length:attributeStride:atIndex:](mtlcomputecommandencoder/setbytes%28__length_attributestride_index_%29.md): Copies data with a given stride directly to the GPU to populate an entry in the buffer argument table.

### Binding textures

Bind textures to kernel argument entries on the GPU.

- [setTexture:atIndex:](mtlcomputecommandencoder/settexture%28__index_%29.md): Binds a texture to the texture argument table, allowing compute kernels to access its data on the GPU.
- [setTextures:withRange:](mtlcomputecommandencoder/settextures_withrange_.md): Binds multiple textures to the texture argument table, allowing compute kernels to access their data on the GPU.

### Binding texture samplers

Bind texture samplers to kernel argument entries on the GPU.

- [setSamplerState:atIndex:](mtlcomputecommandencoder/setsamplerstate%28__index_%29.md): Encodes a texture sampler, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerState:lodMinClamp:lodMaxClamp:atIndex:](mtlcomputecommandencoder/setsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Encodes a texture sampler with a custom level of detail clamping, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerStates:withRange:](mtlcomputecommandencoder/setsamplerstates_withrange_.md): Encodes multiple texture samplers, allowing compute kernels to use them for sampling textures on the GPU.
- [setSamplerStates:lodMinClamps:lodMaxClamps:withRange:](mtlcomputecommandencoder/setsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Encodes multiple texture samplers with custom levels of detail clamping, allowing compute kernels to use them for sampling textures on the GPU.

### Binding function tables

Bind tables of function pointers to kernel argument entries on the GPU.

- [setVisibleFunctionTable:atBufferIndex:](mtlcomputecommandencoder/setvisiblefunctiontable%28__bufferindex_%29.md): Binds a visible function table to the buffer argument table, allowing you to call its functions on the GPU.
- [setVisibleFunctionTables:withBufferRange:](mtlcomputecommandencoder/setvisiblefunctiontables_withbufferrange_.md): Binds multiple visible function tables to the buffer argument table, allowing you to call their functions on the GPU.
- [setIntersectionFunctionTables:withBufferRange:](mtlcomputecommandencoder/setintersectionfunctiontables_withbufferrange_.md): Binds multiple intersection function tables to the buffer argument table, allowing you to call their functions on the GPU.

### Binding arguments for acceleration structures

Bind acceleration structures to kernel argument entries on the GPU.

- [setAccelerationStructure:atBufferIndex:](mtlcomputecommandencoder/setaccelerationstructure%28__bufferindex_%29.md): Binds an acceleration structure to the buffer argument table, allowing functions to access it on the GPU.
- [setIntersectionFunctionTable:atBufferIndex:](mtlcomputecommandencoder/setintersectionfunctiontable%28__bufferindex_%29.md): Binds an intersection function table to the buffer argument table, making it callable in your Metal shaders.

### Making indirect resources resident

Move data for resources without direct bindings into GPU-accessible memory — such as resources the pass accesses through an argument buffer.

- [useResource:usage:](mtlcomputecommandencoder/useresource%28__usage_%29.md): Ensures kernel calls that the system encodes in subsequent commands have access to a resource.
- [useResources:count:usage:](mtlcomputecommandencoder/useresources_count_usage_.md): Ensures kernel calls that the system encodes in subsequent commands have access to multiple resources.
- [useHeap:](mtlcomputecommandencoder/useheap%28__%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to all of the resources you allocate from a heap.
- [useHeaps:count:](mtlcomputecommandencoder/useheaps_count_.md): Ensures the shaders in the render pass’s subsequent draw commands have access to all of the resources you allocate from multiple heaps.

### Configuring tile memory

Reserve space in tile memory for threadgroups and imageblocks.

- [setThreadgroupMemoryLength:atIndex:](mtlcomputecommandencoder/setthreadgroupmemorylength%28__index_%29.md): Configures the size of a block of threadgroup memory.
- [setImageblockWidth:height:](mtlcomputecommandencoder/setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of imageblock data in tile memory.

### Configuring stage-in data

Set per-thread input data for compute kernels.

- [setStageInRegion:](mtlcomputecommandencoder/setstageinregion%28__%29.md): Sets the dimensions over the thread grid of how your compute kernel receives stage-in arguments.
- [setStageInRegionWithIndirectBuffer:indirectBufferOffset:](mtlcomputecommandencoder/setstageinregionwithindirectbuffer%28__indirectbufferoffset_%29.md): Sets the region of the stage-in attributes to apply to a compute kernel using an indirect buffer.

### Dispatching kernel calls directly

Run compute kernels as part of a compute pass.

- [dispatchThreads:threadsPerThreadgroup:](mtlcomputecommandencoder/dispatchthreads%28__threadsperthreadgroup_%29.md): Encodes a compute command using an arbitrarily sized grid.
- [dispatchThreadgroups:threadsPerThreadgroup:](mtlcomputecommandencoder/dispatchthreadgroups%28__threadsperthreadgroup_%29.md): Encodes a compute dispatch command using a grid aligned to threadgroup boundaries.

### Dispatching from indirect command buffers

Run commands from an indirect command buffer.

- [dispatchThreadgroupsWithIndirectBuffer:indirectBufferOffset:threadsPerThreadgroup:](mtlcomputecommandencoder/dispatchthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperthreadgroup_%29.md): Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.
- [executeCommandsInBuffer:indirectBuffer:indirectBufferOffset:](mtlcomputecommandencoder/executecommandsinbuffer_indirectbuffer_indirectbufferoffset_.md): Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommandsInBuffer:withRange:](mtlcomputecommandencoder/executecommandsinbuffer_withrange_.md): Encodes an instruction to run commands from an indirect buffer.

### Preventing resource access conflicts

Address hazards for untracked resources with fences and barriers.

- [waitForFence:](mtlcomputecommandencoder/waitforfence%28__%29.md): Encodes a command that instructs the GPU to pause the compute pass until another pass updates a fence.
- [updateFence:](mtlcomputecommandencoder/updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the compute pass completes.
- [memoryBarrierWithScope:](mtlcomputecommandencoder/memorybarrier%28scope_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resource types.
- [memoryBarrierWithResources:count:](mtlcomputecommandencoder/memorybarrierwithresources_count_.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.

### Sampling counters

Capture runtime data from GPU hardware counters.

- [sampleCountersInBuffer:atSampleIndex:withBarrier:](mtlcomputecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md): Encodes a command to sample hardware counters, providing performance information.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)

## See Also

### Encoding a compute pass

- [Creating threads and threadgroups](creating-threads-and-threadgroups.md): Learn how Metal organizes compute-processing workloads.
- [Calculating threadgroup and grid sizes](calculating-threadgroup-and-grid-sizes.md): Calculate the optimum sizes for threadgroups and grids when dispatching compute-processing workloads.
- [MTL4ComputeCommandEncoder](mtl4computecommandencoder.md): Encodes computation dispatches, resource copying commands, and acceleration structure building commands for a single pass into a command buffer.
