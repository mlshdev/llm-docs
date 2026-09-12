> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmapindirectarguments](https://developer.apple.com/documentation/metal/mtlmapindirectarguments)

# MTLMapIndirectArguments (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout for mapping sparse texture regions when using indirect commands.

## Declaration

```swift
struct MTLMapIndirectArguments
```

## Topics

### Creating indirect mapping arguments

- [init()](mtlmapindirectarguments/init%28%29.md): Returns a default data layout for mapping sparse texture regions.
- [init(regionOriginX:regionOriginY:regionOriginZ:regionSizeWidth:regionSizeHeight:regionSizeDepth:mipMapLevel:sliceId:)](mtlmapindirectarguments/init%28regionoriginx_regionoriginy_regionoriginz_regionsizewidth_regionsizeheight_regionsizedepth_mipmaplevel_sliceid_%29.md): Returns a new data layout for mapping sparse texture regions.

### Specifying region origin

- [regionOriginX](mtlmapindirectarguments/regionoriginx.md): The x coordinate of the region to change, measured in tile coordinates.
- [regionOriginY](mtlmapindirectarguments/regionoriginy.md): The y coordinate of the region to change, measured in tile coordinates.
- [regionOriginZ](mtlmapindirectarguments/regionoriginz.md): The z coordinate of the region to change, measured in tile coordinates.

### Specifying region dimensions

- [regionSizeWidth](mtlmapindirectarguments/regionsizewidth.md): The width of the region, measured in tile coordinates.
- [regionSizeHeight](mtlmapindirectarguments/regionsizeheight.md): The height of the region, measured in tile coordinates.
- [regionSizeDepth](mtlmapindirectarguments/regionsizedepth.md): The depth of the region, measured in tile coordinates.

### Specifying texture location

- [mipMapLevel](mtlmapindirectarguments/mipmaplevel.md): The mipmap to change.
- [sliceId](mtlmapindirectarguments/sliceid.md): The texture slice to change.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

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
- [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md): An encoder that encodes commands that modify resource configurations.

# MTLMapIndirectArguments (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout for mapping sparse texture regions when using indirect commands.

## Declaration

```objectivec
typedef struct { ... } MTLMapIndirectArguments;
```

## Topics

### Specifying region origin

- [regionOriginX](mtlmapindirectarguments/regionoriginx.md): The x coordinate of the region to change, measured in tile coordinates.
- [regionOriginY](mtlmapindirectarguments/regionoriginy.md): The y coordinate of the region to change, measured in tile coordinates.
- [regionOriginZ](mtlmapindirectarguments/regionoriginz.md): The z coordinate of the region to change, measured in tile coordinates.

### Specifying region dimensions

- [regionSizeWidth](mtlmapindirectarguments/regionsizewidth.md): The width of the region, measured in tile coordinates.
- [regionSizeHeight](mtlmapindirectarguments/regionsizeheight.md): The height of the region, measured in tile coordinates.
- [regionSizeDepth](mtlmapindirectarguments/regionsizedepth.md): The depth of the region, measured in tile coordinates.

### Specifying texture location

- [mipMapLevel](mtlmapindirectarguments/mipmaplevel.md): The mipmap to change.
- [sliceId](mtlmapindirectarguments/sliceid.md): The texture slice to change.

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
- [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md): An encoder that encodes commands that modify resource configurations.
