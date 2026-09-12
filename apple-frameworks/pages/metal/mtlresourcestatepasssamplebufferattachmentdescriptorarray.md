> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourcestatepasssamplebufferattachmentdescriptorarray](https://developer.apple.com/documentation/metal/mtlresourcestatepasssamplebufferattachmentdescriptorarray)

# MTLResourceStatePassSampleBufferAttachmentDescriptorArray (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An array of sample buffer attachments for a resource state pass.

## Declaration

```swift
class MTLResourceStatePassSampleBufferAttachmentDescriptorArray
```

## Topics

### Accessing a sample buffer attachment

- [subscript(\_:)](mtlresourcestatepasssamplebufferattachmentdescriptorarray/subscript%28__%29.md): Returns the descriptor object for the specified sample buffer attachment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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
- [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md): An encoder that encodes commands that modify resource configurations.
- [MTLMapIndirectArguments](mtlmapindirectarguments.md): The data layout for mapping sparse texture regions when using indirect commands.

# MTLResourceStatePassSampleBufferAttachmentDescriptorArray (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An array of sample buffer attachments for a resource state pass.

## Declaration

```objectivec
@interface MTLResourceStatePassSampleBufferAttachmentDescriptorArray : NSObject
```

## Topics

### Accessing a sample buffer attachment

- [objectAtIndexedSubscript:](mtlresourcestatepasssamplebufferattachmentdescriptorarray/subscript%28__%29.md): Returns the descriptor object for the specified sample buffer attachment.
- [setObject:atIndexedSubscript:](mtlresourcestatepasssamplebufferattachmentdescriptorarray/setobject_atindexedsubscript_.md): Sets the descriptor object for the specified sample buffer attachment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [MTLResourceStateCommandEncoder](mtlresourcestatecommandencoder.md): An encoder that encodes commands that modify resource configurations.
- [MTLMapIndirectArguments](mtlmapindirectarguments.md): The data layout for mapping sparse texture regions when using indirect commands.
