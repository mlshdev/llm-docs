> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder](https://developer.apple.com/documentation/metal/mtl4computecommandencoder)

# MTL4ComputeCommandEncoder (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes computation dispatches, resource copying commands, and acceleration structure building commands for a single pass into a command buffer.

## Declaration

```swift
protocol MTL4ComputeCommandEncoder : MTL4CommandEncoder
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Each Metal 4 compute encoder combines compute dispatch commands, blit commands, and acceleration structure commands into a single pass. The unified nature of this encoder type eliminates the overhead from creating separate encoders like [MTLComputeCommandEncoder](mtlcomputecommandencoder.md), [MTLBlitCommandEncoder](mtlblitcommandencoder.md), and [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md), and then encoding separate passes with them.

Create a compute encoder by calling a factory method of an [MTL4CommandBuffer](mtl4commandbuffer.md) instance, such as [makeComputeCommandEncoder()](mtl4commandbuffer/makecomputecommandencoder%28%29.md).

<a id="Command-stages"></a>

### Command stages

Most compute commands apply to one stage within a pass. The following table shows which stage applies to each command:

| Function | MTLStages |
| --- | --- |
| [dispatchThreads(threadsPerGrid:threadsPerThreadgroup:)](mtl4computecommandencoder/dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md) | [dispatch](mtlstages/dispatch.md) |
| [dispatchThreads(indirectBuffer:)](mtl4computecommandencoder/dispatchthreads%28indirectbuffer_%29.md) | [dispatch](mtlstages/dispatch.md) |
| [dispatchThreadgroups(threadgroupsPerGrid:threadsPerThreadgroup:)](mtl4computecommandencoder/dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md) | [dispatch](mtlstages/dispatch.md) |
| [dispatchThreadgroups(indirectBuffer:threadsPerThreadgroup:)](mtl4computecommandencoder/dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md) | [dispatch](mtlstages/dispatch.md) |
| [copy(sourceBuffer:sourceOffset:destinationBuffer:destinationOffset:size:)](mtl4computecommandencoder/copy%28sourcebuffer_sourceoffset_destinationbuffer_destinationoffset_size_%29.md) | [blit](mtlstages/blit.md) |
| [copy(sourceBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:destinationTexture:destinationSlice:destinationLevel:destinationOrigin:options:)](mtl4computecommandencoder/copy%28sourcebuffer_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_options_%29.md) | [blit](mtlstages/blit.md) |
| [copy(sourceTensor:sourceOrigin:sourceDimensions:destinationTensor:destinationOrigin:destinationDimensions:)](mtl4computecommandencoder/copy%28sourcetensor_sourceorigin_sourcedimensions_destinationtensor_destinationorigin_destinationdimensions_%29.md) | [blit](mtlstages/blit.md) |
| [copy(sourceTexture:destinationTexture:)](mtl4computecommandencoder/copy%28sourcetexture_destinationtexture_%29.md) | [blit](mtlstages/blit.md) |
| [copy(sourceTexture:sourceSlice:sourceLevel:destinationTexture:destinationSlice:destinationLevel:sliceCount:levelCount:)](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_destinationtexture_destinationslice_destinationlevel_slicecount_levelcount_%29.md) | [blit](mtlstages/blit.md) |
| [copy(sourceTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:destinationBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:)](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationbuffer_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_%29.md) | [blit](mtlstages/blit.md) |
| [copy(sourceTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:destinationTexture:destinationSlice:destinationLevel:destinationOrigin:)](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md) | [blit](mtlstages/blit.md) |
| [copyCommands(sourceBuffer:sourceRange:destinationBuffer:destinationIndex:)](mtl4computecommandencoder/copycommands%28sourcebuffer_sourcerange_destinationbuffer_destinationindex_%29.md) | [blit](mtlstages/blit.md) |
| [fill(buffer:range:value:)](mtl4computecommandencoder/fill%28buffer_range_value_%29.md) | [blit](mtlstages/blit.md) |
| [generateMipmaps(texture:)](mtl4computecommandencoder/generatemipmaps%28texture_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeCommands(buffer:range:)](mtl4computecommandencoder/optimizecommands%28buffer_range_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeContents(forCPUAccess:)](mtl4computecommandencoder/optimizecontents%28forcpuaccess_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeContents(forCPUAccess:slice:level:)](mtl4computecommandencoder/optimizecontents%28forcpuaccess_slice_level_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeContents(forGPUAccess:)](mtl4computecommandencoder/optimizecontents%28forgpuaccess_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeContents(forGPUAccess:slice:level:)](mtl4computecommandencoder/optimizecontents%28forgpuaccess_slice_level_%29.md) | [blit](mtlstages/blit.md) |
| [resetCommands(buffer:range:)](mtl4computecommandencoder/resetcommands%28buffer_range_%29.md) | [blit](mtlstages/blit.md) |
| [build(destinationAccelerationStructure:descriptor:scratchBuffer:)](mtl4computecommandencoder/build%28destinationaccelerationstructure_descriptor_scratchbuffer_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [copy(sourceAccelerationStructure:destinationAccelerationStructure:)](mtl4computecommandencoder/copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](mtl4computecommandencoder/copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [refit(sourceAccelerationStructure:descriptor:destinationAccelerationStructure:scratchBuffer:options:)](mtl4computecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_options_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [writeCompactedSize(sourceAccelerationStructure:destinationBuffer:)](mtl4computecommandencoder/writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [executeCommands(buffer:range:)](mtl4computecommandencoder/executecommands%28buffer_range_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:withRange:](mtl4computecommandencoder/executecommandsinbuffer_withrange_.md) | None |
| [executeCommands(buffer:indirectBuffer:)](mtl4computecommandencoder/executecommands%28buffer_indirectbuffer_%29.md) | None |
| [writeTimestamp(granularity:counterHeap:index:)](mtl4computecommandencoder/writetimestamp%28granularity_counterheap_index_%29.md) | None |

The [executeCommands(buffer:range:)](mtl4computecommandencoder/executecommands%28buffer_range_%29.md) and [executeCommands(buffer:indirectBuffer:)](mtl4computecommandencoder/executecommands%28buffer_indirectbuffer_%29.md) commands don’t apply to any stage, which means you can’t use a barrier to wait for all commands in an indirect command buffer to complete. However, each command within the [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) applies to the same stages as when you encode the equivalent command directly.

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Configuring the pass

- [setComputePipelineState(\_:)](mtl4computecommandencoder/setcomputepipelinestate%28__%29.md): Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.
- [setArgumentTable(\_:)](mtl4computecommandencoder/setargumenttable%28__%29.md): Sets an argument table for the compute shader stage of this pipeline.
- [setThreadgroupMemoryLength(\_:index:)](mtl4computecommandencoder/setthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.
- [setImageblockSize(width:height:)](mtl4computecommandencoder/setimageblocksize%28width_height_%29.md): Specifies the size, in pixels, of imageblock data in tile memory.

### Inspecting the pass

- [stages()](mtl4computecommandencoder/stages%28%29.md): Queries a bitmask representing the shader stages on which commands currently present in this command encoder operate.

### Running dispatch commands

Run compute kernels on the GPU.

- [dispatchThreads(threadsPerGrid:threadsPerThreadgroup:)](mtl4computecommandencoder/dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command using an arbitrarily-sized grid.
- [dispatchThreads(indirectBuffer:)](mtl4computecommandencoder/dispatchthreads%28indirectbuffer_%29.md): Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.
- [dispatchThreadgroups(threadgroupsPerGrid:threadsPerThreadgroup:)](mtl4computecommandencoder/dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.
- [dispatchThreadgroups(indirectBuffer:threadsPerThreadgroup:)](mtl4computecommandencoder/dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.

### Encoding buffer copy commands

Copy data between buffers.

- [copy(sourceBuffer:sourceOffset:destinationBuffer:destinationOffset:size:)](mtl4computecommandencoder/copy%28sourcebuffer_sourceoffset_destinationbuffer_destinationoffset_size_%29.md): Encodes a command that copies data from a buffer instance into another.

### Encoding buffer-to-texture copy commands

Copy data from buffers to textures.

- [copy(sourceBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:destinationTexture:destinationSlice:destinationLevel:destinationOrigin:options:)](mtl4computecommandencoder/copy%28sourcebuffer_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_options_%29.md): Encodes a command to copy image data from a buffer into a texture with options for special texture formats.

### Encoding texture copy commands

Copy data between textures.

- [copy(sourceTensor:sourceOrigin:sourceDimensions:destinationTensor:destinationOrigin:destinationDimensions:)](mtl4computecommandencoder/copy%28sourcetensor_sourceorigin_sourcedimensions_destinationtensor_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.
- [copy(sourceTexture:destinationTexture:)](mtl4computecommandencoder/copy%28sourcetexture_destinationtexture_%29.md): Encodes a command that copies data from a texture to another.
- [copy(sourceTexture:sourceSlice:sourceLevel:destinationTexture:destinationSlice:destinationLevel:sliceCount:levelCount:)](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_destinationtexture_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to slices of another texture.
- [copy(sourceTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:destinationTexture:destinationSlice:destinationLevel:destinationOrigin:)](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a slice of a texture into a slice of another texture.

### Encoding texture-to-buffer copy commands

Copy data from textures to buffers.

- [copy(sourceTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:destinationBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:)](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationbuffer_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_%29.md): Encodes a command that copies image data from a slice of a texture instance to a buffer, with options for special texture formats.

### Encoding indirect command buffer copy commands

Copy commands between indirect command buffers.

- [copyCommands(sourceBuffer:sourceRange:destinationBuffer:destinationIndex:)](mtl4computecommandencoder/copycommands%28sourcebuffer_sourcerange_destinationbuffer_destinationindex_%29.md): Encodes a command that copies commands from one indirect command buffer into another.

### Encoding buffer fill commands

Fill buffers with repeating values.

- [fill(buffer:range:value:)](mtl4computecommandencoder/fill%28buffer_range_value_%29.md): Encodes a command that fills a buffer with a constant value for each byte.

### Encoding mipmap generation commands

Generate mipmaps for textures.

- [generateMipmaps(texture:)](mtl4computecommandencoder/generatemipmaps%28texture_%29.md): Encodes a command that generates mipmaps for a texture instance from the base mipmap level up to the highest mipmap level.

### Encoding optimization commands

Optimize resources and command buffers.

- [optimizeCommands(buffer:range:)](mtl4computecommandencoder/optimizecommands%28buffer_range_%29.md): Encode a command to attempt to improve the performance of a range of commands within an indirect command buffer.
- [optimizeContents(forCPUAccess:)](mtl4computecommandencoder/optimizecontents%28forcpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents.
- [optimizeContents(forCPUAccess:slice:level:)](mtl4computecommandencoder/optimizecontents%28forcpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents in a specific region.
- [optimizeContents(forGPUAccess:)](mtl4computecommandencoder/optimizecontents%28forgpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of GPU accesses to its contents.
- [optimizeContents(forGPUAccess:slice:level:)](mtl4computecommandencoder/optimizecontents%28forgpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture instance to improve the performance of GPU accesses to its contents in a specific region.

### Encoding reset commands

- [resetCommands(buffer:range:)](mtl4computecommandencoder/resetcommands%28buffer_range_%29.md): Encodes a command that resets a range of commands in an indirect command buffer.

### Encoding acceleration structure build commands

Build acceleration structures for ray tracing.

- [build(destinationAccelerationStructure:descriptor:scratchBuffer:)](mtl4computecommandencoder/build%28destinationaccelerationstructure_descriptor_scratchbuffer_%29.md): Encodes an acceleration structure build into the command buffer.

### Encoding acceleration structure copy commands

Copy and compact acceleration structures.

- [copy(sourceAccelerationStructure:destinationAccelerationStructure:)](mtl4computecommandencoder/copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes an acceleration structure copy operation into the command buffer.
- [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](mtl4computecommandencoder/copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy and compact an acceleration structure.
- [writeCompactedSize(sourceAccelerationStructure:destinationBuffer:)](mtl4computecommandencoder/writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md): Encodes a command to compute the size an acceleration structure can compact into, writing the result into a buffer.

### Encoding acceleration structure refit commands

Update acceleration structures without rebuilding.

- [refit(sourceAccelerationStructure:descriptor:destinationAccelerationStructure:scratchBuffer:options:)](mtl4computecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_options_%29.md): Encodes an acceleration structure refit operation into the command buffer, providing additional options.

### Encoding indirect command buffers

Encode a command that runs an indirect command buffer.

- [executeCommands(buffer:range:)](mtl4computecommandencoder/executecommands%28buffer_range_%29.md): Encodes a command to execute commands from an indirect command buffer.
- [executeCommands(buffer:indirectBuffer:)](mtl4computecommandencoder/executecommands%28buffer_indirectbuffer_%29.md): Encodes an instruction to execute commands from an indirect command buffer, using an indirect buffer for arguments.

### Encoding performance measurement commands

Measure runtime performance with timestamps.

- [writeTimestamp(granularity:counterHeap:index:)](mtl4computecommandencoder/writetimestamp%28granularity_counterheap_index_%29.md): Writes a GPU timestamp into a heap.

### Instance Methods

- [copy(sourceTensor:sourceOrigin:sourceDimensions:sourcePlane:destinationTensor:destinationOrigin:destinationDimensions:destinationPlane:)](mtl4computecommandencoder/copy%28sourcetensor_sourceorigin_sourcedimensions_sourceplane_destinationtensor_destinationorigin_destinationdimensions_destinationplane_%29.md): Encodes a command to copy data from a slice of a plane of a tensor into a slice of a plane of another tensor.

## Relationships

### Inherits From

- [MTL4CommandEncoder](mtl4commandencoder.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Encoding a compute pass

- [Creating threads and threadgroups](creating-threads-and-threadgroups.md): Learn how Metal organizes compute-processing workloads.
- [Calculating threadgroup and grid sizes](calculating-threadgroup-and-grid-sizes.md): Calculate the optimum sizes for threadgroups and grids when dispatching compute-processing workloads.
- [MTLComputeCommandEncoder](mtlcomputecommandencoder.md): Encodes computation dispatch commands for a single compute pass into a command buffer.

# MTL4ComputeCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes computation dispatches, resource copying commands, and acceleration structure building commands for a single pass into a command buffer.

## Declaration

```objectivec
@protocol MTL4ComputeCommandEncoder <MTL4CommandEncoder>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Each Metal 4 compute encoder combines compute dispatch commands, blit commands, and acceleration structure commands into a single pass. The unified nature of this encoder type eliminates the overhead from creating separate encoders like [MTLComputeCommandEncoder](mtlcomputecommandencoder.md), [MTLBlitCommandEncoder](mtlblitcommandencoder.md), and [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md), and then encoding separate passes with them.

Create a compute encoder by calling a factory method of an [MTL4CommandBuffer](mtl4commandbuffer.md) instance, such as [computeCommandEncoder](mtl4commandbuffer/makecomputecommandencoder%28%29.md).

<a id="Command-stages"></a>

### Command stages

Most compute commands apply to one stage within a pass. The following table shows which stage applies to each command:

| Function | MTLStages |
| --- | --- |
| [dispatchThreads:threadsPerThreadgroup:](mtl4computecommandencoder/dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md) | [MTLStageDispatch](mtlstages/dispatch.md) |
| [dispatchThreadsWithIndirectBuffer:](mtl4computecommandencoder/dispatchthreads%28indirectbuffer_%29.md) | [MTLStageDispatch](mtlstages/dispatch.md) |
| [dispatchThreadgroups:threadsPerThreadgroup:](mtl4computecommandencoder/dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md) | [MTLStageDispatch](mtlstages/dispatch.md) |
| [dispatchThreadgroupsWithIndirectBuffer:threadsPerThreadgroup:](mtl4computecommandencoder/dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md) | [MTLStageDispatch](mtlstages/dispatch.md) |
| [copyFromBuffer:sourceOffset:toBuffer:destinationOffset:size:](mtl4computecommandencoder/copy%28sourcebuffer_sourceoffset_destinationbuffer_destinationoffset_size_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copy(sourceBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:destinationTexture:destinationSlice:destinationLevel:destinationOrigin:options:)](mtl4computecommandencoder/copy%28sourcebuffer_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_options_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions:](mtl4computecommandencoder/copy%28sourcetensor_sourceorigin_sourcedimensions_destinationtensor_destinationorigin_destinationdimensions_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTexture:toTexture:](mtl4computecommandencoder/copy%28sourcetexture_destinationtexture_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount:](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_destinationtexture_destinationslice_destinationlevel_slicecount_levelcount_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copy(sourceTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:destinationBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:)](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationbuffer_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyCommands(sourceBuffer:sourceRange:destinationBuffer:destinationIndex:)](mtl4computecommandencoder/copycommands%28sourcebuffer_sourcerange_destinationbuffer_destinationindex_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [fill(buffer:range:value:)](mtl4computecommandencoder/fill%28buffer_range_value_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [generateMipmapsForTexture:](mtl4computecommandencoder/generatemipmaps%28texture_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeCommands(buffer:range:)](mtl4computecommandencoder/optimizecommands%28buffer_range_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeContentsForCPUAccess:](mtl4computecommandencoder/optimizecontents%28forcpuaccess_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeContentsForCPUAccess:slice:level:](mtl4computecommandencoder/optimizecontents%28forcpuaccess_slice_level_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeContentsForGPUAccess:](mtl4computecommandencoder/optimizecontents%28forgpuaccess_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeContentsForGPUAccess:slice:level:](mtl4computecommandencoder/optimizecontents%28forgpuaccess_slice_level_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [resetCommands(buffer:range:)](mtl4computecommandencoder/resetcommands%28buffer_range_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [buildAccelerationStructure:descriptor:scratchBuffer:](mtl4computecommandencoder/build%28destinationaccelerationstructure_descriptor_scratchbuffer_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [copyAccelerationStructure:toAccelerationStructure:](mtl4computecommandencoder/copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [copyAndCompactAccelerationStructure:toAccelerationStructure:](mtl4computecommandencoder/copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [refitAccelerationStructure:descriptor:destination:scratchBuffer:options:](mtl4computecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_options_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [writeCompactedAccelerationStructureSize:toBuffer:](mtl4computecommandencoder/writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [executeCommands(buffer:range:)](mtl4computecommandencoder/executecommands%28buffer_range_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:withRange:](mtl4computecommandencoder/executecommandsinbuffer_withrange_.md) | None |
| [executeCommandsInBuffer:indirectBuffer:](mtl4computecommandencoder/executecommands%28buffer_indirectbuffer_%29.md) | None |
| [writeTimestampWithGranularity:intoHeap:atIndex:](mtl4computecommandencoder/writetimestamp%28granularity_counterheap_index_%29.md) | None |

The [executeCommands(buffer:range:)](mtl4computecommandencoder/executecommands%28buffer_range_%29.md) and [executeCommandsInBuffer:indirectBuffer:](mtl4computecommandencoder/executecommands%28buffer_indirectbuffer_%29.md) commands don’t apply to any stage, which means you can’t use a barrier to wait for all commands in an indirect command buffer to complete. However, each command within the [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) applies to the same stages as when you encode the equivalent command directly.

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Configuring the pass

- [setComputePipelineState:](mtl4computecommandencoder/setcomputepipelinestate%28__%29.md): Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.
- [setArgumentTable:](mtl4computecommandencoder/setargumenttable%28__%29.md): Sets an argument table for the compute shader stage of this pipeline.
- [setThreadgroupMemoryLength:atIndex:](mtl4computecommandencoder/setthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.
- [setImageblockWidth:height:](mtl4computecommandencoder/setimageblocksize%28width_height_%29.md): Specifies the size, in pixels, of imageblock data in tile memory.

### Inspecting the pass

- [stages](mtl4computecommandencoder/stages%28%29.md): Queries a bitmask representing the shader stages on which commands currently present in this command encoder operate.

### Running dispatch commands

Run compute kernels on the GPU.

- [dispatchThreads:threadsPerThreadgroup:](mtl4computecommandencoder/dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command using an arbitrarily-sized grid.
- [dispatchThreadsWithIndirectBuffer:](mtl4computecommandencoder/dispatchthreads%28indirectbuffer_%29.md): Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.
- [dispatchThreadgroups:threadsPerThreadgroup:](mtl4computecommandencoder/dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.
- [dispatchThreadgroupsWithIndirectBuffer:threadsPerThreadgroup:](mtl4computecommandencoder/dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.

### Encoding buffer copy commands

Copy data between buffers.

- [copyFromBuffer:sourceOffset:toBuffer:destinationOffset:size:](mtl4computecommandencoder/copy%28sourcebuffer_sourceoffset_destinationbuffer_destinationoffset_size_%29.md): Encodes a command that copies data from a buffer instance into another.

### Encoding buffer-to-texture copy commands

Copy data from buffers to textures.

- [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](mtl4computecommandencoder/copyfrombuffer_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_totexture_destinationslice_destinationlevel_destinationorigin_.md): Encodes a command to copy image data from a buffer instance into a texture.
- [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:options:](mtl4computecommandencoder/copyfrombuffer_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_totexture_destinationslice_destinationlevel_destinationorigin_options_.md): Encodes a command to copy image data from a buffer into a texture with options for special texture formats.

### Encoding texture copy commands

Copy data between textures.

- [copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions:](mtl4computecommandencoder/copy%28sourcetensor_sourceorigin_sourcedimensions_destinationtensor_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.
- [copyFromTexture:toTexture:](mtl4computecommandencoder/copy%28sourcetexture_destinationtexture_%29.md): Encodes a command that copies data from a texture to another.
- [copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount:](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_destinationtexture_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to slices of another texture.
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](mtl4computecommandencoder/copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a slice of a texture into a slice of another texture.

### Encoding texture-to-buffer copy commands

Copy data from textures to buffers.

- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:](mtl4computecommandencoder/copyfromtexture_sourceslice_sourcelevel_sourceorigin_sourcesize_tobuffer_destinationoffset_destinationbytesperrow_destinationbytesperimage_.md): Encodes a command that copies image data from a slice of an [MTLTexture](mtltexture.md) instance to an [MTLBuffer](mtlbuffer.md) instance.
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:](mtl4computecommandencoder/copyfromtexture_sourceslice_sourcelevel_sourceorigin_sourcesize_tobuffer_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_.md): Encodes a command that copies image data from a slice of a texture instance to a buffer, with options for special texture formats.

### Encoding indirect command buffer copy commands

Copy commands between indirect command buffers.

- [copyIndirectCommandBuffer:sourceRange:destination:destinationIndex:](mtl4computecommandencoder/copyindirectcommandbuffer_sourcerange_destination_destinationindex_.md): Encodes a command that copies commands from an indirect command buffer into another.

### Encoding buffer fill commands

Fill buffers with repeating values.

- [fillBuffer:range:value:](mtl4computecommandencoder/fillbuffer_range_value_.md): Encodes a command that fills a buffer with a constant value for each byte.

### Encoding mipmap generation commands

Generate mipmaps for textures.

- [generateMipmapsForTexture:](mtl4computecommandencoder/generatemipmaps%28texture_%29.md): Encodes a command that generates mipmaps for a texture instance from the base mipmap level up to the highest mipmap level.

### Encoding optimization commands

Optimize resources and command buffers.

- [optimizeContentsForCPUAccess:](mtl4computecommandencoder/optimizecontents%28forcpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents.
- [optimizeContentsForCPUAccess:slice:level:](mtl4computecommandencoder/optimizecontents%28forcpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents in a specific region.
- [optimizeContentsForGPUAccess:](mtl4computecommandencoder/optimizecontents%28forgpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of GPU accesses to its contents.
- [optimizeContentsForGPUAccess:slice:level:](mtl4computecommandencoder/optimizecontents%28forgpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture instance to improve the performance of GPU accesses to its contents in a specific region.
- [optimizeIndirectCommandBuffer:withRange:](mtl4computecommandencoder/optimizeindirectcommandbuffer_withrange_.md): Encode a command to attempt to improve the performance of a range of commands within an indirect command buffer.

### Encoding reset commands

- [resetCommandsInBuffer:withRange:](mtl4computecommandencoder/resetcommandsinbuffer_withrange_.md): Encodes a command that resets a range of commands in an indirect command buffer.

### Encoding acceleration structure build commands

Build acceleration structures for ray tracing.

- [buildAccelerationStructure:descriptor:scratchBuffer:](mtl4computecommandencoder/build%28destinationaccelerationstructure_descriptor_scratchbuffer_%29.md): Encodes an acceleration structure build into the command buffer.

### Encoding acceleration structure copy commands

Copy and compact acceleration structures.

- [copyAccelerationStructure:toAccelerationStructure:](mtl4computecommandencoder/copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes an acceleration structure copy operation into the command buffer.
- [copyAndCompactAccelerationStructure:toAccelerationStructure:](mtl4computecommandencoder/copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy and compact an acceleration structure.
- [writeCompactedAccelerationStructureSize:toBuffer:](mtl4computecommandencoder/writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md): Encodes a command to compute the size an acceleration structure can compact into, writing the result into a buffer.

### Encoding acceleration structure refit commands

Update acceleration structures without rebuilding.

- [refitAccelerationStructure:descriptor:destination:scratchBuffer:options:](mtl4computecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_options_%29.md): Encodes an acceleration structure refit operation into the command buffer, providing additional options.
- [refitAccelerationStructure:descriptor:destination:scratchBuffer:](mtl4computecommandencoder/refitaccelerationstructure_descriptor_destination_scratchbuffer_.md): Encodes an acceleration structure refit into the command buffer.

### Encoding indirect command buffers

Encode a command that runs an indirect command buffer.

- [executeCommandsInBuffer:indirectBuffer:](mtl4computecommandencoder/executecommands%28buffer_indirectbuffer_%29.md): Encodes an instruction to execute commands from an indirect command buffer, using an indirect buffer for arguments.
- [executeCommandsInBuffer:withRange:](mtl4computecommandencoder/executecommandsinbuffer_withrange_.md): Encodes a command to execute a series of commands from an indirect command buffer.

### Encoding performance measurement commands

Measure runtime performance with timestamps.

- [writeTimestampWithGranularity:intoHeap:atIndex:](mtl4computecommandencoder/writetimestamp%28granularity_counterheap_index_%29.md): Writes a GPU timestamp into a heap.

### Instance Methods

- [copyFromTensor:sourceOrigin:sourceDimensions:sourcePlane:toTensor:destinationOrigin:destinationDimensions:destinationPlane:](mtl4computecommandencoder/copy%28sourcetensor_sourceorigin_sourcedimensions_sourceplane_destinationtensor_destinationorigin_destinationdimensions_destinationplane_%29.md): Encodes a command to copy data from a slice of a plane of a tensor into a slice of a plane of another tensor.

## Relationships

### Inherits From

- [MTL4CommandEncoder](mtl4commandencoder.md)

## See Also

### Encoding a compute pass

- [Creating threads and threadgroups](creating-threads-and-threadgroups.md): Learn how Metal organizes compute-processing workloads.
- [Calculating threadgroup and grid sizes](calculating-threadgroup-and-grid-sizes.md): Calculate the optimum sizes for threadgroups and grids when dispatching compute-processing workloads.
- [MTLComputeCommandEncoder](mtlcomputecommandencoder.md): Encodes computation dispatch commands for a single compute pass into a command buffer.
