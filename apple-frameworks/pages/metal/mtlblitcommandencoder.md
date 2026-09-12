> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder](https://developer.apple.com/documentation/metal/mtlblitcommandencoder)

# MTLBlitCommandEncoder (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes commands that copy and modify resources for a single blit pass.

## Declaration

```swift
protocol MTLBlitCommandEncoder : MTLCommandEncoder
```

## Mentioned In

- [Copying data into or out of mipmaps](copying-data-into-or-out-of-mipmaps.md)
- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)
- [Transferring data between connected GPUs](transferring-data-between-connected-gpus.md)

<a id="overview"></a>

## Overview

Create a blit encoder by calling one of the factory methods on an [MTLCommandBuffer](mtlcommandbuffer.md) instance, such as [makeBlitCommandEncoder()](mtlcommandbuffer/makeblitcommandencoder%28%29.md).

A blit command encoder adds commands to a command buffer that modify resources in various ways, including:

- Filling buffers with repeating bytes
- Generating mipmaps for textures
- Copying data between buffers
- Copying data between textures
- Copying data between a texture and a buffer
- Managing the contents of indirect command buffers
- Synchronizing buffers, textures, and other resources between the CPU and GPU
- Improving runtime performance for resources by optimizing their memory layout for the GPU or CPU

You typically use these commands to move data between a resource that uses private storage and another resource that uses CPU-accessible storage. Some apps also use them to apply image-processing and texture effects, such as blurring or reflections, or to render and work with offscreen image data.

When you finish encoding blit commands, finalize the blit pass into the command buffer by calling the encoder’s [endEncoding()](mtlcommandencoder/endencoding%28%29.md) method.

<a id="Command-stages"></a>

### Command stages

Most blit commands apply to one stage within a pass. The following table shows which stages apply to each command:

| Function | MTLStages |
| --- | --- |
| [fill(buffer:range:value:)](mtlblitcommandencoder/fill%28buffer_range_value_%29.md) | [blit](mtlstages/blit.md) |
| [generateMipmaps(for:)](mtlblitcommandencoder/generatemipmaps%28for_%29.md) | [blit](mtlstages/blit.md) |
| [copy(from:sourceOffset:to:destinationOffset:size:)](mtlblitcommandencoder/copy%28from_sourceoffset_to_destinationoffset_size_%29.md) | [blit](mtlstages/blit.md) |
| [copy(from:to:)](mtlblitcommandencoder/copy%28from_to_%29.md) | [blit](mtlstages/blit.md) |
| [copy(from:sourceSlice:sourceLevel:to:destinationSlice:destinationLevel:sliceCount:levelCount:)](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md) | [blit](mtlstages/blit.md) |
| [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:)](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md) | [blit](mtlstages/blit.md) |
| [copy(from:sourceOrigin:sourceDimensions:to:destinationOrigin:destinationDimensions:)](mtlblitcommandencoder/copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md) | [blit](mtlstages/blit.md) |
| [copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:)](mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md) | [blit](mtlstages/blit.md) |
| [copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:options:)](mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md) | [blit](mtlstages/blit.md) |
| [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:)](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_%29.md) | [blit](mtlstages/blit.md) |
| [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:)](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeContentsForGPUAccess(texture:)](mtlblitcommandencoder/optimizecontentsforgpuaccess%28texture_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeContentsForGPUAccess(texture:slice:level:)](mtlblitcommandencoder/optimizecontentsforgpuaccess%28texture_slice_level_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeContentsForCPUAccess(texture:)](mtlblitcommandencoder/optimizecontentsforcpuaccess%28texture_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeContentsForCPUAccess(texture:slice:level:)](mtlblitcommandencoder/optimizecontentsforcpuaccess%28texture_slice_level_%29.md) | [blit](mtlstages/blit.md) |
| [synchronize(resource:)](mtlblitcommandencoder/synchronize%28resource_%29.md) | None |
| [synchronize(texture:slice:level:)](mtlblitcommandencoder/synchronize%28texture_slice_level_%29.md) | None |
| [copyIndirectCommandBuffer(\_:sourceRange:destination:destinationIndex:)](mtlblitcommandencoder/copyindirectcommandbuffer%28__sourcerange_destination_destinationindex_%29.md) | [blit](mtlstages/blit.md) |
| [resetCommandsInBuffer(\_:range:)](mtlblitcommandencoder/resetcommandsinbuffer%28__range_%29.md) | [blit](mtlstages/blit.md) |
| [optimizeIndirectCommandBuffer(\_:range:)](mtlblitcommandencoder/optimizeindirectcommandbuffer%28__range_%29.md) | [blit](mtlstages/blit.md) |
| [sampleCounters(sampleBuffer:sampleIndex:barrier:)](mtlblitcommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) | None |
| [resolveCounters(\_:range:destinationBuffer:destinationOffset:)](mtlblitcommandencoder/resolvecounters%28__range_destinationbuffer_destinationoffset_%29.md) | [blit](mtlstages/blit.md) |
| [getTextureAccessCounters(\_:region:mipLevel:slice:resetCounters:countersBuffer:countersBufferOffset:)](mtlblitcommandencoder/gettextureaccesscounters%28__region_miplevel_slice_resetcounters_countersbuffer_countersbufferoffset_%29.md) | [blit](mtlstages/blit.md) |
| [resetTextureAccessCounters(\_:region:mipLevel:slice:)](mtlblitcommandencoder/resettextureaccesscounters%28__region_miplevel_slice_%29.md) | [blit](mtlstages/blit.md) |

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Filling buffers

Write repeating byte values to buffer memory.

- [fill(buffer:range:value:)](mtlblitcommandencoder/fill%28buffer_range_value_%29.md): Encodes a command that fills a buffer with a constant value for each byte.

### Generating texture mipmaps

Create mipmap levels from a texture’s base layer.

- [generateMipmaps(for:)](mtlblitcommandencoder/generatemipmaps%28for_%29.md): Encodes a command that generates mipmaps for a texture from the base mipmap level up to the highest mipmap level.

### Copying buffer data to another buffer

Transfer data between Metal buffers.

- [copy(from:sourceOffset:to:destinationOffset:size:)](mtlblitcommandencoder/copy%28from_sourceoffset_to_destinationoffset_size_%29.md): Encodes a command that copies data from one buffer into another.

### Copying texture data to another texture

Transfer data between Metal textures.

- [copy(from:to:)](mtlblitcommandencoder/copy%28from_to_%29.md): Encodes a command that copies data from one texture to another.
- [copy(from:sourceSlice:sourceLevel:to:destinationSlice:destinationLevel:sliceCount:levelCount:)](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to another texture’s slices.
- [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:)](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a texture’s slice into another slice.
- [copy(from:sourceOrigin:sourceDimensions:to:destinationOrigin:destinationDimensions:)](mtlblitcommandencoder/copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.

### Copying buffer data to a texture

Transfer data from a Metal buffer to a Metal texture.

- [copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:)](mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command to copy image data from a source buffer into a destination texture.
- [copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:options:)](mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md): Encodes a command to copy image data from a source buffer into a destination texture.

### Copying texture data to a buffer

Transfer data from a Metal texture to a Metal buffer.

- [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:)](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_%29.md): Encodes a command that copies image data from a texture slice to a buffer.
- [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:)](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_%29.md): Encodes a command that copies image data from a texture slice to a buffer, and provides options for special texture formats.

### Optimizing textures for GPU access

Improve GPU access times by altering a texture’s memory layout.

- [optimizeContentsForGPUAccess(texture:)](mtlblitcommandencoder/optimizecontentsforgpuaccess%28texture_%29.md): Encodes a command that improves the performance of GPU memory operations with a texture.
- [optimizeContentsForGPUAccess(texture:slice:level:)](mtlblitcommandencoder/optimizecontentsforgpuaccess%28texture_slice_level_%29.md): Encodes a command that improves the performance of GPU memory operations with a specific portion of a texture.

### Optimizing textures for CPU access

Improve CPU access times by altering a texture’s memory layout.

- [optimizeContentsForCPUAccess(texture:)](mtlblitcommandencoder/optimizecontentsforcpuaccess%28texture_%29.md): Encodes a command that improves the performance of CPU memory operations with a texture.
- [optimizeContentsForCPUAccess(texture:slice:level:)](mtlblitcommandencoder/optimizecontentsforcpuaccess%28texture_slice_level_%29.md): Encodes a command that improves the performance of CPU memory operations with a specific portion of a texture.

### Synchronizing managed resources

Update the CPU’s copy of a managed resource to match the GPU’s copy.

- [synchronize(resource:)](mtlblitcommandencoder/synchronize%28resource_%29.md): Deprecated. Encodes a command that synchronizes the CPU’s copy of a managed resource, such as a buffer or texture, so that it matches the GPU’s copy.
- [synchronize(texture:slice:level:)](mtlblitcommandencoder/synchronize%28texture_slice_level_%29.md): Deprecated. Encodes a command that synchronizes a part of the CPU’s copy of a texture so that it matches the GPU’s copy.

### Preventing resource access conflicts

Address hazards for untracked resources with fences.

- [waitForFence(\_:)](mtlblitcommandencoder/waitforfence%28__%29.md): Encodes a command that instructs the GPU to pause the blit pass until another pass updates a fence.
- [updateFence(\_:)](mtlblitcommandencoder/updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the blit pass completes.

### Managing indirect command buffers

Modify commands within an indirect command buffer.

- [copyIndirectCommandBuffer(\_:sourceRange:destination:destinationIndex:)](mtlblitcommandencoder/copyindirectcommandbuffer%28__sourcerange_destination_destinationindex_%29.md): Encodes a command that copies commands from one indirect command buffer into another.
- [resetCommandsInBuffer(\_:range:)](mtlblitcommandencoder/resetcommandsinbuffer%28__range_%29.md): Encodes a command that resets a range of commands in an indirect command buffer.
- [optimizeIndirectCommandBuffer(\_:range:)](mtlblitcommandencoder/optimizeindirectcommandbuffer%28__range_%29.md): Encodes a command that can improve the performance of a range of commands within an indirect command buffer.

### Sampling counters

Capture runtime data from GPU hardware counters.

- [sampleCounters(sampleBuffer:sampleIndex:barrier:)](mtlblitcommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md): Encodes a command that samples the GPU’s hardware counters during a blit pass and stores the data in a counter sample buffer.
- [resolveCounters(\_:range:destinationBuffer:destinationOffset:)](mtlblitcommandencoder/resolvecounters%28__range_destinationbuffer_destinationoffset_%29.md): Encodes a command that resolves the data from the samples in a sample counter buffer and stores the results into a buffer.

### Managing sparse texture access counters

Retrieve and reset access counters for sparse textures.

- [getTextureAccessCounters(\_:region:mipLevel:slice:resetCounters:countersBuffer:countersBufferOffset:)](mtlblitcommandencoder/gettextureaccesscounters%28__region_miplevel_slice_resetcounters_countersbuffer_countersbufferoffset_%29.md): Deprecated. Encodes a command that retrieves a sparse texture’s access data for a specific region, mipmap level, and slice.
- [resetTextureAccessCounters(\_:region:mipLevel:slice:)](mtlblitcommandencoder/resettextureaccesscounters%28__region_miplevel_slice_%29.md): Deprecated. Encodes a command that resets a sparse texture’s access data for a specific region, mipmap level, and slice.

### Instance Methods

- [copy(from:sourceOrigin:sourceDimensions:sourcePlane:to:destinationOrigin:destinationDimensions:destinationPlane:)](mtlblitcommandencoder/copy%28from_sourceorigin_sourcedimensions_sourceplane_to_destinationorigin_destinationdimensions_destinationplane_%29.md): Encodes a command to copy data from a slice of a plane of a tensor into a slice of a plane of another tensor.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Encoding a blit pass

- [MTLBlitOption](mtlblitoption.md): The options that enable behavior for some blit operations.

# MTLBlitCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes commands that copy and modify resources for a single blit pass.

## Declaration

```objectivec
@protocol MTLBlitCommandEncoder <MTLCommandEncoder>
```

## Mentioned In

- [Copying data into or out of mipmaps](copying-data-into-or-out-of-mipmaps.md)
- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)
- [Transferring data between connected GPUs](transferring-data-between-connected-gpus.md)

<a id="overview"></a>

## Overview

Create a blit encoder by calling one of the factory methods on an [MTLCommandBuffer](mtlcommandbuffer.md) instance, such as [blitCommandEncoder](mtlcommandbuffer/makeblitcommandencoder%28%29.md).

A blit command encoder adds commands to a command buffer that modify resources in various ways, including:

- Filling buffers with repeating bytes
- Generating mipmaps for textures
- Copying data between buffers
- Copying data between textures
- Copying data between a texture and a buffer
- Managing the contents of indirect command buffers
- Synchronizing buffers, textures, and other resources between the CPU and GPU
- Improving runtime performance for resources by optimizing their memory layout for the GPU or CPU

You typically use these commands to move data between a resource that uses private storage and another resource that uses CPU-accessible storage. Some apps also use them to apply image-processing and texture effects, such as blurring or reflections, or to render and work with offscreen image data.

When you finish encoding blit commands, finalize the blit pass into the command buffer by calling the encoder’s [endEncoding](mtlcommandencoder/endencoding%28%29.md) method.

<a id="Command-stages"></a>

### Command stages

Most blit commands apply to one stage within a pass. The following table shows which stages apply to each command:

| Function | MTLStages |
| --- | --- |
| [fill(buffer:range:value:)](mtlblitcommandencoder/fill%28buffer_range_value_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [generateMipmapsForTexture:](mtlblitcommandencoder/generatemipmaps%28for_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromBuffer:sourceOffset:toBuffer:destinationOffset:size:](mtlblitcommandencoder/copy%28from_sourceoffset_to_destinationoffset_size_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTexture:toTexture:](mtlblitcommandencoder/copy%28from_to_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount:](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions:](mtlblitcommandencoder/copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:options:](mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeContentsForGPUAccess:](mtlblitcommandencoder/optimizecontentsforgpuaccess%28texture_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeContentsForGPUAccess:slice:level:](mtlblitcommandencoder/optimizecontentsforgpuaccess%28texture_slice_level_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeContentsForCPUAccess:](mtlblitcommandencoder/optimizecontentsforcpuaccess%28texture_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeContentsForCPUAccess:slice:level:](mtlblitcommandencoder/optimizecontentsforcpuaccess%28texture_slice_level_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [synchronizeResource:](mtlblitcommandencoder/synchronize%28resource_%29.md) | None |
| [synchronizeTexture:slice:level:](mtlblitcommandencoder/synchronize%28texture_slice_level_%29.md) | None |
| [copyIndirectCommandBuffer(\_:sourceRange:destination:destinationIndex:)](mtlblitcommandencoder/copyindirectcommandbuffer%28__sourcerange_destination_destinationindex_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [resetCommandsInBuffer(\_:range:)](mtlblitcommandencoder/resetcommandsinbuffer%28__range_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [optimizeIndirectCommandBuffer(\_:range:)](mtlblitcommandencoder/optimizeindirectcommandbuffer%28__range_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [sampleCountersInBuffer:atSampleIndex:withBarrier:](mtlblitcommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) | None |
| [resolveCounters(\_:range:destinationBuffer:destinationOffset:)](mtlblitcommandencoder/resolvecounters%28__range_destinationbuffer_destinationoffset_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [getTextureAccessCounters:region:mipLevel:slice:resetCounters:countersBuffer:countersBufferOffset:](mtlblitcommandencoder/gettextureaccesscounters%28__region_miplevel_slice_resetcounters_countersbuffer_countersbufferoffset_%29.md) | [MTLStageBlit](mtlstages/blit.md) |
| [resetTextureAccessCounters:region:mipLevel:slice:](mtlblitcommandencoder/resettextureaccesscounters%28__region_miplevel_slice_%29.md) | [MTLStageBlit](mtlstages/blit.md) |

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Filling buffers

Write repeating byte values to buffer memory.

- [fillBuffer:range:value:](mtlblitcommandencoder/fillbuffer_range_value_.md): Encodes a command that fills a buffer with a constant value for each byte.

### Generating texture mipmaps

Create mipmap levels from a texture’s base layer.

- [generateMipmapsForTexture:](mtlblitcommandencoder/generatemipmaps%28for_%29.md): Encodes a command that generates mipmaps for a texture from the base mipmap level up to the highest mipmap level.

### Copying buffer data to another buffer

Transfer data between Metal buffers.

- [copyFromBuffer:sourceOffset:toBuffer:destinationOffset:size:](mtlblitcommandencoder/copy%28from_sourceoffset_to_destinationoffset_size_%29.md): Encodes a command that copies data from one buffer into another.

### Copying texture data to another texture

Transfer data between Metal textures.

- [copyFromTexture:toTexture:](mtlblitcommandencoder/copy%28from_to_%29.md): Encodes a command that copies data from one texture to another.
- [copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount:](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to another texture’s slices.
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a texture’s slice into another slice.
- [copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions:](mtlblitcommandencoder/copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.

### Copying buffer data to a texture

Transfer data from a Metal buffer to a Metal texture.

- [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command to copy image data from a source buffer into a destination texture.
- [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:options:](mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md): Encodes a command to copy image data from a source buffer into a destination texture.

### Copying texture data to a buffer

Transfer data from a Metal texture to a Metal buffer.

- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_%29.md): Encodes a command that copies image data from a texture slice to a buffer.
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:](mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_%29.md): Encodes a command that copies image data from a texture slice to a buffer, and provides options for special texture formats.

### Optimizing textures for GPU access

Improve GPU access times by altering a texture’s memory layout.

- [optimizeContentsForGPUAccess:](mtlblitcommandencoder/optimizecontentsforgpuaccess%28texture_%29.md): Encodes a command that improves the performance of GPU memory operations with a texture.
- [optimizeContentsForGPUAccess:slice:level:](mtlblitcommandencoder/optimizecontentsforgpuaccess%28texture_slice_level_%29.md): Encodes a command that improves the performance of GPU memory operations with a specific portion of a texture.

### Optimizing textures for CPU access

Improve CPU access times by altering a texture’s memory layout.

- [optimizeContentsForCPUAccess:](mtlblitcommandencoder/optimizecontentsforcpuaccess%28texture_%29.md): Encodes a command that improves the performance of CPU memory operations with a texture.
- [optimizeContentsForCPUAccess:slice:level:](mtlblitcommandencoder/optimizecontentsforcpuaccess%28texture_slice_level_%29.md): Encodes a command that improves the performance of CPU memory operations with a specific portion of a texture.

### Synchronizing managed resources

Update the CPU’s copy of a managed resource to match the GPU’s copy.

- [synchronizeResource:](mtlblitcommandencoder/synchronize%28resource_%29.md): Deprecated. Encodes a command that synchronizes the CPU’s copy of a managed resource, such as a buffer or texture, so that it matches the GPU’s copy.
- [synchronizeTexture:slice:level:](mtlblitcommandencoder/synchronize%28texture_slice_level_%29.md): Deprecated. Encodes a command that synchronizes a part of the CPU’s copy of a texture so that it matches the GPU’s copy.

### Preventing resource access conflicts

Address hazards for untracked resources with fences.

- [waitForFence:](mtlblitcommandencoder/waitforfence%28__%29.md): Encodes a command that instructs the GPU to pause the blit pass until another pass updates a fence.
- [updateFence:](mtlblitcommandencoder/updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the blit pass completes.

### Managing indirect command buffers

Modify commands within an indirect command buffer.

- [copyIndirectCommandBuffer:sourceRange:destination:destinationIndex:](mtlblitcommandencoder/copyindirectcommandbuffer_sourcerange_destination_destinationindex_.md): Encodes a command that copies commands from one indirect command buffer into another.
- [resetCommandsInBuffer:withRange:](mtlblitcommandencoder/resetcommandsinbuffer_withrange_.md): Encodes a command that resets a range of commands in an indirect command buffer.
- [optimizeIndirectCommandBuffer:withRange:](mtlblitcommandencoder/optimizeindirectcommandbuffer_withrange_.md): Encodes a command that can improve the performance of a range of commands within an indirect command buffer.

### Sampling counters

Capture runtime data from GPU hardware counters.

- [sampleCountersInBuffer:atSampleIndex:withBarrier:](mtlblitcommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md): Encodes a command that samples the GPU’s hardware counters during a blit pass and stores the data in a counter sample buffer.
- [resolveCounters:inRange:destinationBuffer:destinationOffset:](mtlblitcommandencoder/resolvecounters_inrange_destinationbuffer_destinationoffset_.md): Encodes a command that resolves the data from the samples in a sample counter buffer and stores the results into a buffer.

### Managing sparse texture access counters

Retrieve and reset access counters for sparse textures.

- [getTextureAccessCounters:region:mipLevel:slice:resetCounters:countersBuffer:countersBufferOffset:](mtlblitcommandencoder/gettextureaccesscounters%28__region_miplevel_slice_resetcounters_countersbuffer_countersbufferoffset_%29.md): Deprecated. Encodes a command that retrieves a sparse texture’s access data for a specific region, mipmap level, and slice.
- [resetTextureAccessCounters:region:mipLevel:slice:](mtlblitcommandencoder/resettextureaccesscounters%28__region_miplevel_slice_%29.md): Deprecated. Encodes a command that resets a sparse texture’s access data for a specific region, mipmap level, and slice.

### Instance Methods

- [copyFromTensor:sourceOrigin:sourceDimensions:sourcePlane:toTensor:destinationOrigin:destinationDimensions:destinationPlane:](mtlblitcommandencoder/copy%28from_sourceorigin_sourcedimensions_sourceplane_to_destinationorigin_destinationdimensions_destinationplane_%29.md): Encodes a command to copy data from a slice of a plane of a tensor into a slice of a plane of another tensor.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)

## See Also

### Encoding a blit pass

- [MTLBlitOption](mtlblitoption.md): The options that enable behavior for some blit operations.
