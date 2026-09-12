> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimage/init(texture:featurechannels:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimage/init(texture:featurechannels:))

# init(texture:featureChannels:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.

## Declaration

```swift
convenience init(texture: any MTLTexture, featureChannels: Int)
```

## Parameters

- `texture`: The texture allocated by the user to be used as a backing storage for the image.
- `featureChannels`: The number of feature channels the texture contains.

<a id="return-value"></a>

## Return Value

A valid [MPSImage](../mpsimage.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

In a memory-intensive app, you can save memory (and allocation/deallocation time) by using an [MPSTemporaryImage](../mpstemporaryimage.md) object, where the framework aggressively reuses underlying texture memory within the same command buffer. However, in certain cases, you may want more control on the allocation, placement, reuse, and recycling of memory-backing textures used in your app by using the Metal Resource Heaps API. In this case, an app can create an [MPSImage](../mpsimage.md) object from a pre-allocated texture by calling this method.

The [textureType](../../metal/mtltexture/texturetype.md) property of the given texture can be of type [MTLTextureType.type2D](../../metal/mtltexturetype/type2d.md) *only* if `featureChannels<=4` (meaning that `numberOfImages=1`). Otherwise, the texture type should be [MTLTextureType.type2DArray](../../metal/mtltexturetype/type2darray.md) with the [arrayLength](../../metal/mtltexture/arraylength.md) property of the given texture being equal to `numberOfImages*((featureChannels+3)/4)`.

For textures containing typical image data, the `featureChannels` parameter should be set to the number of valid color channels (e.g. for RGB data, even though the pixel format is a form of `MTLPixelFormatRGBA`, `featureChannels` should be set to 3.).

## See Also

### Initializers

- [init(device:imageDescriptor:)](init%28device_imagedescriptor_%29.md): Initializes an empty image.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [init(parentImage:sliceRange:featureChannels:)](init%28parentimage_slicerange_featurechannels_%29.md)

# initWithTexture:featureChannels: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.

## Declaration

```objectivec
- (instancetype) initWithTexture:(id<MTLTexture>) texture featureChannels:(NSUInteger) featureChannels;
```

## Parameters

- `texture`: The texture allocated by the user to be used as a backing storage for the image.
- `featureChannels`: The number of feature channels the texture contains.

<a id="return-value"></a>

## Return Value

A valid [MPSImage](../mpsimage.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

In a memory-intensive app, you can save memory (and allocation/deallocation time) by using an [MPSTemporaryImage](../mpstemporaryimage.md) object, where the framework aggressively reuses underlying texture memory within the same command buffer. However, in certain cases, you may want more control on the allocation, placement, reuse, and recycling of memory-backing textures used in your app by using the Metal Resource Heaps API. In this case, an app can create an [MPSImage](../mpsimage.md) object from a pre-allocated texture by calling this method.

The [textureType](../../metal/mtltexture/texturetype.md) property of the given texture can be of type [MTLTextureType2D](../../metal/mtltexturetype/type2d.md) *only* if `featureChannels<=4` (meaning that `numberOfImages=1`). Otherwise, the texture type should be [MTLTextureType2DArray](../../metal/mtltexturetype/type2darray.md) with the [arrayLength](../../metal/mtltexture/arraylength.md) property of the given texture being equal to `numberOfImages*((featureChannels+3)/4)`.

For textures containing typical image data, the `featureChannels` parameter should be set to the number of valid color channels (e.g. for RGB data, even though the pixel format is a form of `MTLPixelFormatRGBA`, `featureChannels` should be set to 3.).

## See Also

### Initializers

- [initWithDevice:imageDescriptor:](init%28device_imagedescriptor_%29.md): Initializes an empty image.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [initWithParentImage:sliceRange:featureChannels:](init%28parentimage_slicerange_featurechannels_%29.md)
