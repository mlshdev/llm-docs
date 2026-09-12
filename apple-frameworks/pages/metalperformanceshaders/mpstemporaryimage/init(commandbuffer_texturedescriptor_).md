> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpstemporaryimage/init(commandbuffer:texturedescriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpstemporaryimage/init(commandbuffer:texturedescriptor:))

# init(commandBuffer:textureDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Low-level interface for creating a temporary image using a texture descriptor.

## Declaration

```swift
convenience init(commandBuffer: any MTLCommandBuffer, textureDescriptor: MTLTextureDescriptor)
```

## Parameters

- `commandBuffer`: The command buffer on which the temporary image will be exclusively used.
- `textureDescriptor`: A texture descriptor that describes the temporary image texture to create.

<a id="return-value"></a>

## Return Value

A valid [MPSTemporaryImage](../mpstemporaryimage.md) object.

<a id="Discussion"></a>

## Discussion

The temporary image will be released when the command buffer is committed. The underlying texture will become invalid before this time due to the action of the [readCount](readcount.md) property.

This function provides access to pixel formats not typically covered by the [init(commandBuffer:imageDescriptor:)](init%28commandbuffer_imagedescriptor_%29.md) method. The feature channels will be inferred from the pixel format without changing the width. The following restrictions apply:

- The texture type must be [MTLTextureType.type2D](../../metal/mtltexturetype/type2d.md) or [MTLTextureType.type2DArray](../../metal/mtltexturetype/type2darray.md).
- The texture usage must contain at least one of [shaderRead](../../metal/mtltextureusage/shaderread.md) or [shaderWrite](../../metal/mtltextureusage/shaderwrite.md).
- The storage mode must be [MTLStorageMode.private](../../metal/mtlstoragemode/private.md).
- The depth must be 1.

## See Also

### Initializers

- [init(commandBuffer:imageDescriptor:)](init%28commandbuffer_imagedescriptor_%29.md): Initializes a temporary image for use on a command buffer.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [MTLTextureDescriptor](../../metal/mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [init(commandBuffer:textureDescriptor:featureChannels:)](init%28commandbuffer_texturedescriptor_featurechannels_%29.md)

# temporaryImageWithCommandBuffer:textureDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Low-level interface for creating a temporary image using a texture descriptor.

## Declaration

```objectivec
+ (instancetype) temporaryImageWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer textureDescriptor:(const MTLTextureDescriptor *) textureDescriptor;
```

## Parameters

- `commandBuffer`: The command buffer on which the temporary image will be exclusively used.
- `textureDescriptor`: A texture descriptor that describes the temporary image texture to create.

<a id="return-value"></a>

## Return Value

A valid [MPSTemporaryImage](../mpstemporaryimage.md) object.

<a id="Discussion"></a>

## Discussion

The temporary image will be released when the command buffer is committed. The underlying texture will become invalid before this time due to the action of the [readCount](readcount.md) property.

This function provides access to pixel formats not typically covered by the [temporaryImageWithCommandBuffer:imageDescriptor:](init%28commandbuffer_imagedescriptor_%29.md) method. The feature channels will be inferred from the pixel format without changing the width. The following restrictions apply:

- The texture type must be [MTLTextureType2D](../../metal/mtltexturetype/type2d.md) or [MTLTextureType2DArray](../../metal/mtltexturetype/type2darray.md).
- The texture usage must contain at least one of [MTLTextureUsageShaderRead](../../metal/mtltextureusage/shaderread.md) or [MTLTextureUsageShaderWrite](../../metal/mtltextureusage/shaderwrite.md).
- The storage mode must be [MTLStorageModePrivate](../../metal/mtlstoragemode/private.md).
- The depth must be 1.

## See Also

### Initializers

- [temporaryImageWithCommandBuffer:imageDescriptor:](init%28commandbuffer_imagedescriptor_%29.md): Initializes a temporary image for use on a command buffer.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [MTLTextureDescriptor](../../metal/mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [temporaryImageWithCommandBuffer:textureDescriptor:featureChannels:](init%28commandbuffer_texturedescriptor_featurechannels_%29.md)
