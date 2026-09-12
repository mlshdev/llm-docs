> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourcestatepasssamplebufferattachmentdescriptor](https://developer.apple.com/documentation/metal/mtlresourcestatepasssamplebufferattachmentdescriptor)

# MTLResourceStatePassSampleBufferAttachmentDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A description of where to store GPU counter information at the start and end of a resource state pass.

## Declaration

```swift
class MTLResourceStatePassSampleBufferAttachmentDescriptor
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

## Topics

### Configuring the sample buffer attachment

- [sampleBuffer](mtlresourcestatepasssamplebufferattachmentdescriptor/samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during the resource state pass.
- [startOfEncoderSampleIndex](mtlresourcestatepasssamplebufferattachmentdescriptor/startofencodersampleindex.md): The index the Metal device object should use to store GPU counters when starting the resource state pass.
- [endOfEncoderSampleIndex](mtlresourcestatepasssamplebufferattachmentdescriptor/endofencodersampleindex.md): The index the Metal device object should use to store GPU counters when ending the resource state pass.

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

### Sparse textures

- [Managing sparse texture memory](managing-sparse-texture-memory.md): Take direct control of memory allocation for texture data by using sparse textures.
- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md): Allocate memory for sparse textures by creating a sparse heap.
- [Converting between pixel regions and sparse tile regions](converting-between-pixel-regions-and-sparse-tile-regions.md): Learn how a sparse texture’s contents are organized in memory.
- [Assigning memory to sparse textures](assigning-memory-to-sparse-textures.md): Use a resource state encoder to allocate and deallocate sparse tiles for a sparse texture.
- [Reading and writing to sparse textures](reading-and-writing-to-sparse-textures.md): Decide how to handle access to unmapped texture regions.
- [Estimating how often a texture region is accessed](estimating-how-often-a-texture-region-is-accessed.md): Use texture access patterns to determine when you need to map a texture region.
- [MTLResourceStatePassDescriptor](mtlresourcestatepassdescriptor.md): A configuration for a resource state pass, used to create a resource state command encoder.
- [MTLResourceStatePassSampleBufferAttachmentDescriptorArray](mtlresourcestatepasssamplebufferattachmentdescriptorarray.md): An array of sample buffer attachments for a resource state pass.
- [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md): An encoder that encodes commands that modify resource configurations.
- [MTLMapIndirectArguments](mtlmapindirectarguments.md): The data layout for mapping sparse texture regions when using indirect commands.

# MTLResourceStatePassSampleBufferAttachmentDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A description of where to store GPU counter information at the start and end of a resource state pass.

## Declaration

```objectivec
@interface MTLResourceStatePassSampleBufferAttachmentDescriptor : NSObject
```

## Mentioned In

- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

## Topics

### Configuring the sample buffer attachment

- [sampleBuffer](mtlresourcestatepasssamplebufferattachmentdescriptor/samplebuffer.md): A specialized memory buffer that the GPU uses to store its counter data during the resource state pass.
- [startOfEncoderSampleIndex](mtlresourcestatepasssamplebufferattachmentdescriptor/startofencodersampleindex.md): The index the Metal device object should use to store GPU counters when starting the resource state pass.
- [endOfEncoderSampleIndex](mtlresourcestatepasssamplebufferattachmentdescriptor/endofencodersampleindex.md): The index the Metal device object should use to store GPU counters when ending the resource state pass.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Sparse textures

- [Managing sparse texture memory](managing-sparse-texture-memory.md): Take direct control of memory allocation for texture data by using sparse textures.
- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md): Allocate memory for sparse textures by creating a sparse heap.
- [Converting between pixel regions and sparse tile regions](converting-between-pixel-regions-and-sparse-tile-regions.md): Learn how a sparse texture’s contents are organized in memory.
- [Assigning memory to sparse textures](assigning-memory-to-sparse-textures.md): Use a resource state encoder to allocate and deallocate sparse tiles for a sparse texture.
- [Reading and writing to sparse textures](reading-and-writing-to-sparse-textures.md): Decide how to handle access to unmapped texture regions.
- [Estimating how often a texture region is accessed](estimating-how-often-a-texture-region-is-accessed.md): Use texture access patterns to determine when you need to map a texture region.
- [MTLResourceStatePassDescriptor](mtlresourcestatepassdescriptor.md): A configuration for a resource state pass, used to create a resource state command encoder.
- [MTLResourceStatePassSampleBufferAttachmentDescriptorArray](mtlresourcestatepasssamplebufferattachmentdescriptorarray.md): An array of sample buffer attachments for a resource state pass.
- [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md): An encoder that encodes commands that modify resource configurations.
- [MTLMapIndirectArguments](mtlmapindirectarguments.md): The data layout for mapping sparse texture regions when using indirect commands.
