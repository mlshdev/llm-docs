> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourcestatecommandencoder](https://developer.apple.com/documentation/metal/mtlresourcestatecommandencoder)

# MTLResourceStateCommandEncoder (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

An encoder that encodes commands that modify resource configurations.

## Declaration

```swift
protocol MTLResourceStateCommandEncoder : MTLCommandEncoder
```

## Mentioned In

- [Assigning memory to sparse textures](assigning-memory-to-sparse-textures.md)

<a id="overview"></a>

## Overview

Use a resource state command encoder to manage memory mappings for sparse textures.

Your app does not define classes that implement this protocol. To create an [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md) instance, call the [makeResourceStateCommandEncoder()](mtlcommandbuffer/makeresourcestatecommandencoder%28%29.md) method of the [MTLCommandBuffer](mtlcommandbuffer.md) instance into which you want to encode blit commands. Next, call methods on the [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md) instance to enqueue state updates. Finally, call [endEncoding()](mtlcommandencoder/endencoding%28%29.md) to finish the encoding process.

## Topics

### Updating texture memory assignments

- [updateTextureMapping(\_:mode:region:mipLevel:slice:)](mtlresourcestatecommandencoder/updatetexturemapping%28__mode_region_miplevel_slice_%29.md): Encodes a command to update the texture mappings for a region in a single texture mipmap.
- [updateTextureMappings(\_:mode:regions:mipLevels:slices:numRegions:)](mtlresourcestatecommandencoder/updatetexturemappings%28__mode_regions_miplevels_slices_numregions_%29.md): Encodes a command to update memory mappings for multiple regions inside a texture.
- [MTLSparseTextureMappingMode](mtlsparsetexturemappingmode.md): Options for sparse texture mapping.

### Updating texture memory assignments indirectly

- [updateTextureMapping(\_:mode:indirectBuffer:indirectBufferOffset:)](mtlresourcestatecommandencoder/updatetexturemapping%28__mode_indirectbuffer_indirectbufferoffset_%29.md): Encodes a command to update a texture’s memory mappings, specifying the parameters indirectly.

### Performing fence operations

- [update(\_:)](mtlresourcestatecommandencoder/update%28__%29.md): Encodes a command that instructs the GPU to update a fence, which signals passes waiting on the fence.
- [wait(for:)](mtlresourcestatecommandencoder/wait%28for_%29.md): Encodes a command that instructs the GPU to pause before starting the resource state commands until another pass updates a fence.

### Instance Methods

- [moveTextureMappings(sourceTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:destinationTexture:destinationSlice:destinationLevel:destinationOrigin:)](mtlresourcestatecommandencoder/movetexturemappings%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md)

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sparse textures

- [Managing sparse texture memory](managing-sparse-texture-memory.md): Take direct control of memory allocation for texture data by using sparse textures.
- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md): Allocate memory for sparse textures by creating a sparse heap.
- [Converting between pixel regions and sparse tile regions](converting-between-pixel-regions-and-sparse-tile-regions.md): Learn how a sparse texture’s contents are organized in memory.
- [Assigning memory to sparse textures](assigning-memory-to-sparse-textures.md): Use a resource state encoder to allocate and deallocate sparse tiles for a sparse texture.
- [Reading and writing to sparse textures](reading-and-writing-to-sparse-textures.md): Decide how to handle access to unmapped texture regions.
- [Estimating how often a texture region is accessed](estimating-how-often-a-texture-region-is-accessed.md): Use texture access patterns to determine when you need to map a texture region.
- [MTLResourceStatePassDescriptor](mtlresourcestatepassdescriptor.md): A configuration for a resource state pass, used to create a resource state command encoder.
- [MTLResourceStatePassSampleBufferAttachmentDescriptor](mtlresourcestatepasssamplebufferattachmentdescriptor.md): A description of where to store GPU counter information at the start and end of a resource state pass.
- [MTLResourceStatePassSampleBufferAttachmentDescriptorArray](mtlresourcestatepasssamplebufferattachmentdescriptorarray.md): An array of sample buffer attachments for a resource state pass.
- [MTLMapIndirectArguments](mtlmapindirectarguments.md): The data layout for mapping sparse texture regions when using indirect commands.

# MTLResourceStateCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

An encoder that encodes commands that modify resource configurations.

## Declaration

```objectivec
@protocol MTLResourceStateCommandEncoder <MTLCommandEncoder>
```

## Mentioned In

- [Assigning memory to sparse textures](assigning-memory-to-sparse-textures.md)

<a id="overview"></a>

## Overview

Use a resource state command encoder to manage memory mappings for sparse textures.

Your app does not define classes that implement this protocol. To create an [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md) instance, call the [resourceStateCommandEncoder](mtlcommandbuffer/makeresourcestatecommandencoder%28%29.md) method of the [MTLCommandBuffer](mtlcommandbuffer.md) instance into which you want to encode blit commands. Next, call methods on the [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md) instance to enqueue state updates. Finally, call [endEncoding](mtlcommandencoder/endencoding%28%29.md) to finish the encoding process.

## Topics

### Updating texture memory assignments

- [updateTextureMapping:mode:region:mipLevel:slice:](mtlresourcestatecommandencoder/updatetexturemapping%28__mode_region_miplevel_slice_%29.md): Encodes a command to update the texture mappings for a region in a single texture mipmap.
- [updateTextureMappings:mode:regions:mipLevels:slices:numRegions:](mtlresourcestatecommandencoder/updatetexturemappings%28__mode_regions_miplevels_slices_numregions_%29.md): Encodes a command to update memory mappings for multiple regions inside a texture.
- [MTLSparseTextureMappingMode](mtlsparsetexturemappingmode.md): Options for sparse texture mapping.

### Updating texture memory assignments indirectly

- [updateTextureMapping:mode:indirectBuffer:indirectBufferOffset:](mtlresourcestatecommandencoder/updatetexturemapping%28__mode_indirectbuffer_indirectbufferoffset_%29.md): Encodes a command to update a texture’s memory mappings, specifying the parameters indirectly.

### Performing fence operations

- [updateFence:](mtlresourcestatecommandencoder/update%28__%29.md): Encodes a command that instructs the GPU to update a fence, which signals passes waiting on the fence.
- [waitForFence:](mtlresourcestatecommandencoder/wait%28for_%29.md): Encodes a command that instructs the GPU to pause before starting the resource state commands until another pass updates a fence.

### Instance Methods

- [moveTextureMappingsFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](mtlresourcestatecommandencoder/movetexturemappings%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md)

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)

## See Also

### Sparse textures

- [Managing sparse texture memory](managing-sparse-texture-memory.md): Take direct control of memory allocation for texture data by using sparse textures.
- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md): Allocate memory for sparse textures by creating a sparse heap.
- [Converting between pixel regions and sparse tile regions](converting-between-pixel-regions-and-sparse-tile-regions.md): Learn how a sparse texture’s contents are organized in memory.
- [Assigning memory to sparse textures](assigning-memory-to-sparse-textures.md): Use a resource state encoder to allocate and deallocate sparse tiles for a sparse texture.
- [Reading and writing to sparse textures](reading-and-writing-to-sparse-textures.md): Decide how to handle access to unmapped texture regions.
- [Estimating how often a texture region is accessed](estimating-how-often-a-texture-region-is-accessed.md): Use texture access patterns to determine when you need to map a texture region.
- [MTLResourceStatePassDescriptor](mtlresourcestatepassdescriptor.md): A configuration for a resource state pass, used to create a resource state command encoder.
- [MTLResourceStatePassSampleBufferAttachmentDescriptor](mtlresourcestatepasssamplebufferattachmentdescriptor.md): A description of where to store GPU counter information at the start and end of a resource state pass.
- [MTLResourceStatePassSampleBufferAttachmentDescriptorArray](mtlresourcestatepasssamplebufferattachmentdescriptorarray.md): An array of sample buffer attachments for a resource state pass.
- [MTLMapIndirectArguments](mtlmapindirectarguments.md): The data layout for mapping sparse texture regions when using indirect commands.
