> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/resource-creation](https://developer.apple.com/documentation/metal/resource-creation)

# Resource creation (Swift)

**Framework:** Metal  
**Kind:** API Collection

Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.

## Topics

### Working with resource heaps

- [makeHeap(descriptor:)](mtldevice/makeheap%28descriptor_%29.md): Creates a new GPU heap instance.
- [heapBufferSizeAndAlign(length:options:)](mtldevice/heapbuffersizeandalign%28length_options_%29.md): Returns the size and alignment, in bytes, of a buffer if you create it from a heap.
- [heapTextureSizeAndAlign(descriptor:)](mtldevice/heaptexturesizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of a texture if you create it from a heap.
- [heapAccelerationStructureSizeAndAlign(size:)](mtldevice/heapaccelerationstructuresizeandalign%28size_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap.
- [heapAccelerationStructureSizeAndAlign(descriptor:)](mtldevice/heapaccelerationstructuresizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap with a descriptor.
- [MTLSizeAndAlign](mtlsizeandalign.md): The size and alignment of a resource, in bytes.

### Creating buffers

- [maxBufferLength](mtldevice/maxbufferlength.md): The largest amount of memory, in bytes, that a GPU device can allocate to a buffer instance.
- [makeBuffer(length:options:)](mtldevice/makebuffer%28length_options_%29.md): Creates a buffer the method clears with zero values.
- [makeBuffer(bytes:length:options:)](mtldevice/makebuffer%28bytes_length_options_%29.md): Allocates a new buffer of a given length and initializes its contents by copying existing data into it.
- [makeBuffer(bytesNoCopy:length:options:deallocator:)](mtldevice/makebuffer%28bytesnocopy_length_options_deallocator_%29.md): Creates a buffer that wraps an existing contiguous memory allocation.

### Creating textures

- [makeTexture(descriptor:)](mtldevice/maketexture%28descriptor_%29.md): Creates a new texture instance.
- [makeTexture(descriptor:iosurface:plane:)](mtldevice/maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [makeSharedTexture(descriptor:)](mtldevice/makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [makeSharedTexture(handle:)](mtldevice/makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignment(for:)](mtldevice/minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignment(for:)](mtldevice/minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.

### Creating samplers

- [supportsTextureSampleCount(\_:)](mtldevice/supportstexturesamplecount%28__%29.md): Returns a Boolean value that indicates whether the GPU can sample a texture with a specific number of sample points.
- [makeSamplerState(descriptor:)](mtldevice/makesamplerstate%28descriptor_%29.md): Creates a sampler state instance.
- [getDefaultSamplePositions(sampleCount:)](mtldevice/getdefaultsamplepositions%28samplecount_%29.md): Returns the default sample locations based on the number of samples.

### Working with sparse textures

- [sparseTileSize(textureType:pixelFormat:sampleCount:sparsePageSize:)](mtldevice/sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSize(with:pixelFormat:sampleCount:)](mtldevice/sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytes(sparsePageSize:)](mtldevice/sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](mtldevice/sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparsePixelRegions(\_:toTileRegions:withTileSize:alignmentMode:numRegions:)](mtldevice/convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions(\_:toPixelRegions:withTileSize:numRegions:)](mtldevice/convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.

### Creating acceleration structures for ray tracing

- [makeAccelerationStructure(descriptor:)](mtldevice/makeaccelerationstructure%28descriptor_%29.md): Creates a new ray-tracing acceleration structure from a descriptor.
- [makeAccelerationStructure(size:)](mtldevice/makeaccelerationstructure%28size_%29.md): Creates a new acceleration structure with a specific size.
- [accelerationStructureSizes(descriptor:)](mtldevice/accelerationstructuresizes%28descriptor_%29.md): Returns the buffer sizes the GPU device needs to build, refit, and store an acceleration structure.
- [MTLAccelerationStructureSizes](mtlaccelerationstructuresizes.md): The expected sizes for a ray-tracing acceleration structure.

### Creating argument buffer encoders

- [argumentBuffersSupport](mtldevice/argumentbufferssupport.md): Returns the GPU device’s support tier for argument buffers.
- [maxArgumentBufferSamplerCount](mtldevice/maxargumentbuffersamplercount.md): The maximum number of unique argument buffer samplers per app.
- [makeArgumentEncoder(arguments:)](mtldevice/makeargumentencoder%28arguments_%29.md): Creates a new argument encoder for an array of arguments.
- [makeArgumentEncoder(bufferBinding:)](mtldevice/makeargumentencoder%28bufferbinding_%29.md): Creates a new argument encoder for a buffer binding.

### Creating fences and events

- [makeFence()](mtldevice/makefence%28%29.md): Creates a new memory fence instance.
- [makeEvent()](mtldevice/makeevent%28%29.md): Creates a new event instance that you can use to synchronize commands and resources within the same GPU device.
- [makeSharedEvent()](mtldevice/makesharedevent%28%29.md): Creates a new shared event instance that you can use to synchronize commands and resources across different GPU devices.
- [makeSharedEvent(handle:)](mtldevice/makesharedevent%28handle_%29.md): Recreates a shared event from a handle.

### Creating rasterization rate maps

- [supportsRasterizationRateMap(layerCount:)](mtldevice/supportsrasterizationratemap%28layercount_%29.md): Returns a Boolean value that indicates whether the GPU can create a rasterization rate map with a specific number of layers.
- [makeRasterizationRateMap(descriptor:)](mtldevice/makerasterizationratemap%28descriptor_%29.md): Creates a rasterization rate map instance.

## See Also

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Work submission](work-submission.md): Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.
- [Pipeline state creation](pipeline-state-creation.md): Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.
- [Shader library and archive creation](shader-library-and-archive-creation.md): Create static and dynamic shader libraries, and binary shader archives.

# Resource creation (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.

## Topics

### Working with resource heaps

- [newHeapWithDescriptor:](mtldevice/makeheap%28descriptor_%29.md): Creates a new GPU heap instance.
- [heapBufferSizeAndAlignWithLength:options:](mtldevice/heapbuffersizeandalign%28length_options_%29.md): Returns the size and alignment, in bytes, of a buffer if you create it from a heap.
- [heapTextureSizeAndAlignWithDescriptor:](mtldevice/heaptexturesizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of a texture if you create it from a heap.
- [heapAccelerationStructureSizeAndAlignWithSize:](mtldevice/heapaccelerationstructuresizeandalign%28size_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap.
- [heapAccelerationStructureSizeAndAlignWithDescriptor:](mtldevice/heapaccelerationstructuresizeandalign%28descriptor_%29.md): Returns the size and alignment, in bytes, of an acceleration structure if you create it from a heap with a descriptor.
- [MTLSizeAndAlign](mtlsizeandalign.md): The size and alignment of a resource, in bytes.

### Creating buffers

- [maxBufferLength](mtldevice/maxbufferlength.md): The largest amount of memory, in bytes, that a GPU device can allocate to a buffer instance.
- [newBufferWithLength:options:](mtldevice/makebuffer%28length_options_%29.md): Creates a buffer the method clears with zero values.
- [newBufferWithBytes:length:options:](mtldevice/makebuffer%28bytes_length_options_%29.md): Allocates a new buffer of a given length and initializes its contents by copying existing data into it.
- [newBufferWithBytesNoCopy:length:options:deallocator:](mtldevice/makebuffer%28bytesnocopy_length_options_deallocator_%29.md): Creates a buffer that wraps an existing contiguous memory allocation.

### Creating textures

- [newTextureWithDescriptor:](mtldevice/maketexture%28descriptor_%29.md): Creates a new texture instance.
- [newTextureWithDescriptor:iosurface:plane:](mtldevice/maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [newSharedTextureWithDescriptor:](mtldevice/makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [newSharedTextureWithHandle:](mtldevice/makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignmentForPixelFormat:](mtldevice/minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignmentForPixelFormat:](mtldevice/minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.

### Creating samplers

- [supportsTextureSampleCount:](mtldevice/supportstexturesamplecount%28__%29.md): Returns a Boolean value that indicates whether the GPU can sample a texture with a specific number of sample points.
- [newSamplerStateWithDescriptor:](mtldevice/makesamplerstate%28descriptor_%29.md): Creates a sampler state instance.
- [getDefaultSamplePositions:count:](mtldevice/getdefaultsamplepositions_count_.md): Retrieves the default sample positions for a specific sample count.

### Working with sparse textures

- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:sparsePageSize:](mtldevice/sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:](mtldevice/sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytesForSparsePageSize:](mtldevice/sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](mtldevice/sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparsePixelRegions:toTileRegions:withTileSize:alignmentMode:numRegions:](mtldevice/convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions:toPixelRegions:withTileSize:numRegions:](mtldevice/convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.

### Creating acceleration structures for ray tracing

- [newAccelerationStructureWithDescriptor:](mtldevice/makeaccelerationstructure%28descriptor_%29.md): Creates a new ray-tracing acceleration structure from a descriptor.
- [newAccelerationStructureWithSize:](mtldevice/makeaccelerationstructure%28size_%29.md): Creates a new acceleration structure with a specific size.
- [accelerationStructureSizesWithDescriptor:](mtldevice/accelerationstructuresizes%28descriptor_%29.md): Returns the buffer sizes the GPU device needs to build, refit, and store an acceleration structure.
- [MTLAccelerationStructureSizes](mtlaccelerationstructuresizes.md): The expected sizes for a ray-tracing acceleration structure.

### Creating argument buffer encoders

- [argumentBuffersSupport](mtldevice/argumentbufferssupport.md): Returns the GPU device’s support tier for argument buffers.
- [maxArgumentBufferSamplerCount](mtldevice/maxargumentbuffersamplercount.md): The maximum number of unique argument buffer samplers per app.
- [newArgumentEncoderWithArguments:](mtldevice/makeargumentencoder%28arguments_%29.md): Creates a new argument encoder for an array of arguments.
- [newArgumentEncoderWithBufferBinding:](mtldevice/makeargumentencoder%28bufferbinding_%29.md): Creates a new argument encoder for a buffer binding.

### Creating fences and events

- [newFence](mtldevice/makefence%28%29.md): Creates a new memory fence instance.
- [newEvent](mtldevice/makeevent%28%29.md): Creates a new event instance that you can use to synchronize commands and resources within the same GPU device.
- [newSharedEvent](mtldevice/makesharedevent%28%29.md): Creates a new shared event instance that you can use to synchronize commands and resources across different GPU devices.
- [newSharedEventWithHandle:](mtldevice/makesharedevent%28handle_%29.md): Recreates a shared event from a handle.

### Creating rasterization rate maps

- [supportsRasterizationRateMapWithLayerCount:](mtldevice/supportsrasterizationratemap%28layercount_%29.md): Returns a Boolean value that indicates whether the GPU can create a rasterization rate map with a specific number of layers.
- [newRasterizationRateMapWithDescriptor:](mtldevice/makerasterizationratemap%28descriptor_%29.md): Creates a rasterization rate map instance.

## See Also

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Work submission](work-submission.md): Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.
- [Pipeline state creation](pipeline-state-creation.md): Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.
- [Shader library and archive creation](shader-library-and-archive-creation.md): Create static and dynamic shader libraries, and binary shader archives.
