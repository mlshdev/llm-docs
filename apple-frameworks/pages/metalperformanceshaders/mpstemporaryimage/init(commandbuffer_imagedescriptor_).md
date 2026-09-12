> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpstemporaryimage/init(commandbuffer:imagedescriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpstemporaryimage/init(commandbuffer:imagedescriptor:))

# init(commandBuffer:imageDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a temporary image for use on a command buffer.

## Declaration

```swift
convenience init(commandBuffer: any MTLCommandBuffer, imageDescriptor: MPSImageDescriptor)
```

## Parameters

- `commandBuffer`: The command buffer on which the temporary image will be exclusively used.
- `imageDescriptor`: An image descriptor that describes the image to create.

<a id="return-value"></a>

## Return Value

A valid [MPSTemporaryImage](../mpstemporaryimage.md) object.

<a id="Discussion"></a>

## Discussion

The temporary image will be released when the command buffer is committed. The underlying texture will become invalid before this time due to the action of the [readCount](readcount.md) property.

## See Also

### Initializers

- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [init(commandBuffer:textureDescriptor:)](init%28commandbuffer_texturedescriptor_%29.md): Low-level interface for creating a temporary image using a texture descriptor.
- [MTLTextureDescriptor](../../metal/mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [init(commandBuffer:textureDescriptor:featureChannels:)](init%28commandbuffer_texturedescriptor_featurechannels_%29.md)

# temporaryImageWithCommandBuffer:imageDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a temporary image for use on a command buffer.

## Declaration

```objectivec
+ (instancetype) temporaryImageWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer imageDescriptor:(const MPSImageDescriptor *) imageDescriptor;
```

## Parameters

- `commandBuffer`: The command buffer on which the temporary image will be exclusively used.
- `imageDescriptor`: An image descriptor that describes the image to create.

<a id="return-value"></a>

## Return Value

A valid [MPSTemporaryImage](../mpstemporaryimage.md) object.

<a id="Discussion"></a>

## Discussion

The temporary image will be released when the command buffer is committed. The underlying texture will become invalid before this time due to the action of the [readCount](readcount.md) property.

## See Also

### Initializers

- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [temporaryImageWithCommandBuffer:textureDescriptor:](init%28commandbuffer_texturedescriptor_%29.md): Low-level interface for creating a temporary image using a texture descriptor.
- [MTLTextureDescriptor](../../metal/mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [temporaryImageWithCommandBuffer:textureDescriptor:featureChannels:](init%28commandbuffer_texturedescriptor_featurechannels_%29.md)
