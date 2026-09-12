> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpstemporaryimage/init(commandbuffer:texturedescriptor:featurechannels:)](https://developer.apple.com/documentation/metalperformanceshaders/mpstemporaryimage/init(commandbuffer:texturedescriptor:featurechannels:))

# init(commandBuffer:textureDescriptor:featureChannels:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
convenience init(commandBuffer: any MTLCommandBuffer, textureDescriptor: MTLTextureDescriptor, featureChannels: Int)
```

## See Also

### Initializers

- [init(commandBuffer:imageDescriptor:)](init%28commandbuffer_imagedescriptor_%29.md): Initializes a temporary image for use on a command buffer.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [init(commandBuffer:textureDescriptor:)](init%28commandbuffer_texturedescriptor_%29.md): Low-level interface for creating a temporary image using a texture descriptor.
- [MTLTextureDescriptor](../../metal/mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.

# temporaryImageWithCommandBuffer:textureDescriptor:featureChannels: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) temporaryImageWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer textureDescriptor:(const MTLTextureDescriptor *) textureDescriptor featureChannels:(NSUInteger) featureChannels;
```

## See Also

### Initializers

- [temporaryImageWithCommandBuffer:imageDescriptor:](init%28commandbuffer_imagedescriptor_%29.md): Initializes a temporary image for use on a command buffer.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [temporaryImageWithCommandBuffer:textureDescriptor:](init%28commandbuffer_texturedescriptor_%29.md): Low-level interface for creating a temporary image using a texture descriptor.
- [MTLTextureDescriptor](../../metal/mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
