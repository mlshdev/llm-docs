> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimage](https://developer.apple.com/documentation/metalperformanceshaders/mpsimage)

# MPSImage (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A texture that may have more than four channels for use in convolutional neural networks.

## Declaration

```swift
class MPSImage
```

<a id="overview"></a>

## Overview

Some image types, such as those found in convolutional neural networks (CNN), differ from a standard texture in that they may have more than 4 channels per pixel. While the channels could hold RGBA data, they will more commonly hold a number of structural permutations upon an RGBA image as the neural network progresses. It is not uncommon for each pixel to have 32 or 64 channels in it.

Since a standard [MTLTexture](../metal/mtltexture.md) object cannot have more than 4 channels, the additional channels are stored in slices of a 2D texture array (i.e. a texture of type [MTLTextureType.type2DArray](../metal/mtltexturetype/type2darray.md)) such that 4 consecutive channels are stored in each slice of this array. If the number of feature channels is `N`, the number of array slices needed is `(N+3)/4`. For example, a 9-channel CNN image with a width of 3 and a height of 2 will be stored as follows:

![](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2556907@2x.png)

Thus, the width and height of the underlying 2D texture array is the same as the width and height of the [MPSImage](mpsimage.md) object and the array length is equal to  `(` [featureChannels](mpsimagedescriptor/featurechannels.md) `+3)/4`. (Channels marked with a `?` are just for padding and should not contain `NaN` or `INF` values.)

An [MPSImage](mpsimage.md) object can contain multiple CNN images for batch processing. In order to create an [MPSImage](mpsimage.md) object that contains `N` images, create an [MPSImageDescriptor](mpsimagedescriptor.md) object with the [numberOfImages](mpsimagedescriptor/numberofimages.md) property set to `N`. The length of the 2D texture array (i.e. the number of slices) will be equal to `((` [featureChannels](mpsimagedescriptor/featurechannels.md) `+3)/4)*` [numberOfImages](mpsimagedescriptor/numberofimages.md), where consecutive `(featureChannels+3)/4` slices of this array represent one image.

Although an [MPSImage](mpsimage.md) object can contain more than one image, the actual number of images among these processed by an [MPSCNNKernel](mpscnnkernel.md) object is controlled by the `z` dimension of the [clipRect](mpscnnkernel/cliprect.md) property. (A kernel processes `n=clipRect.size.depth` images from this collection.)

The starting index of the image to process from the source [MPSImage](mpsimage.md) object is given by `offset.z`. The starting index of the image in the destination [MPSImage](mpsimage.md) object where this processed image is written to is given by `clipRect.origin.z`. Thus, an [MPSCNNKernel](mpscnnkernel.md) object takes the `n=clipRect.size.depth` image from the source at indices `[offset.z, offset.z+n]`, processes each independently, and stores the result in the destination at indices `[clipRect.origin.z, clipRect.origin.z+n]` respectively. Thus, `offset.z+n` should be `<=[source numberOfImages]`, `clipRect.origin.z+n` should be `<=[destination numberOfImages]`, and `offset.z` must be `>=0`.

For example, suppose an [MPSCNNConvolution](mpscnnconvolution.md) object takes an input image with 16 channels and outputs an image with 32 channels. The number of slices needed in the source 2D texture array is 4 and the number of slices needed in the destination 2D texture array is 8. Suppose the source batch size is 5 and the destination batch size is 4. Thus, the number of source slices will be `4*5=20` and the number of destination slices will be `8*4=32`. If you want to process image 2 and 3 of the source and store the result at index 1 and 2 in the destination, you can achieve this by setting `offset.z=2`, `clipRect.origin.z=1`, and `clipRect.size.depth=2`. The [MPSCNNConvolution](mpscnnconvolution.md) object will take, in this case, slices 4 and 5 of the source and produce slices 4 to 7 of the destination. Similarly, slices 6 and 7 will be used to produce slices 8 to 11 of the destination.

All [MPSCNNKernel](mpscnnkernel.md) objects process images in the batch independently. That is, calling a [MPSCNNKernel](mpscnnkernel.md) object on a batch is formally the same as calling it on each image in the batch sequentially. Computational and GPU work submission overhead will be amortized over more work if batch processing is used. This is especially important for better performance on small images.

If `featureChannels<=4` and `numberOfImages=1` (i.e. only one slice is needed to represent the image), the underlying metal texture type is chosen to be [MTLTextureType.type2D](../metal/mtltexturetype/type2d.md) rather than [MTLTextureType.type2DArray](../metal/mtltexturetype/type2darray.md) as explained above.

The framework also provides [MPSTemporaryImage](mpstemporaryimage.md) objects, intended for very short-lived image data that is produced and consumed immediately in the same [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object. They are a useful way to minimize CPU-side texture allocation costs and greatly reduce the amount of memory used by your image pipeline.

Creation of the underlying texture may occur lazily in some cases. In general, you should avoid calling the [texture](mpsimage/texture.md) property to avoid materializing memory for longer than necessary. When possible, use the other [MPSImage](mpsimage.md) properties to get information about the object instead.

<a id="The-MPSImage-Class"></a>

### The MPSImage Class

[MTLBuffer](../metal/mtlbuffer.md) and [MTLTexture](../metal/mtltexture.md) objects are commonly used in Metal apps and are used directly by the Metal Performance Shaders framework when possible. In apps that use CNN, kernels may need more than the four data channels that a [MTLTexture](../metal/mtltexture.md) object can provide. In these cases, an [MPSImage](mpsimage.md) object is used instead as an abstraction layer on top of a [MTLTexture](../metal/mtltexture.md) object. When more than 4 channels are needed, additional textures in the 2D texture array are added to hold additional channels in sets of four. An [MPSImage](mpsimage.md) object tracks this information as the number of *feature channels* in an image.

<a id="CNN-Images"></a>

### CNN Images

[MPSCNNKernel](mpscnnkernel.md) objects operate on [MPSImage](mpsimage.md) objects. [MPSImage](mpsimage.md) objects are at their core [MTLTexture](../metal/mtltexture.md) objects; however, whereas [MTLTexture](../metal/mtltexture.md) objects commonly represent image or texel data, an [MPSImage](mpsimage.md) object is a more abstract representation of image features. The channels within an [MPSImage](mpsimage.md) do not necessarily correspond to colors in a color space (although they can, if necessary). As a result, there can be many more than four of them. Having 32 or 64 channels per pixel is not uncommon in CNN. This is achieved on the [MTLTexture](../metal/mtltexture.md) object abstraction by inserting extra RGBA pixels to handle the additional feature channels (if any) beyond 4. These extra pixels are stored as multiple slices of a 2D image array. Thus, each CNN pixel in a 32-channel image is represented as 8 array slices, with 4-channels stored per-pixel in each slice. The width and height of the [MTLTexture](../metal/mtltexture.md) object is the same as the width and height of the [MPSImage](mpsimage.md) object. The number of slices in the [MTLTexture](../metal/mtltexture.md) object is given by the number of feature channels rounded up to a multiple of 4.

[MPSImage](mpsimage.md) objects can be created from existing [MTLTexture](../metal/mtltexture.md) objects. They may also be created anew from an [MPSImageDescriptor](mpsimagedescriptor.md) and backed with either standard texture memory, or as [MPSTemporaryImage](mpstemporaryimage.md) objects using memory drawn from the framework’s internal cached texture backing store. [MPSTemporaryImage](mpstemporaryimage.md) objects can provide great memory usage and CPU time savings, but come with significant restrictions that should be understood before using them. For example, their contents are only valid during the GPU-side execution of a single [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object and can not be read from or written to by the CPU. They are provided as an efficient way to hold CNN computations that are used immediately within the scope of the same [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object and then discarded. Concatenation is also supported by allowing you to define from which destination feature channel to start writing the output of the current layer. In this way, your app can make a large [MPSImage](mpsimage.md) or [MPSTemporaryImage](mpstemporaryimage.md) object and fill in parts of it with multiple layers (as long as the destination feature channel offset is a multiple of 4).

<a id="Supported-Pixel-Formats"></a>

### Supported Pixel Formats

The following table shows pixel formats supported by [MPSImage](mpsimage.md).

| [MTLPixelFormat.r8Unorm](../metal/mtlpixelformat/r8unorm.md) | [MTLPixelFormat.rg8Unorm](../metal/mtlpixelformat/rg8unorm.md) | [MTLPixelFormat.rgba8Unorm](../metal/mtlpixelformat/rgba8unorm.md) | [MTLPixelFormat.bgra8Unorm](../metal/mtlpixelformat/bgra8unorm.md) |
| --- | --- | --- | --- |
| [MTLPixelFormat.r8Unorm_srgb](../metal/mtlpixelformat/r8unorm_srgb.md) | [MTLPixelFormat.rg8Unorm_srgb](../metal/mtlpixelformat/rg8unorm_srgb.md) | [MTLPixelFormat.rgba8Unorm_srgb](../metal/mtlpixelformat/rgba8unorm_srgb.md) | [MTLPixelFormat.bgra8Unorm_srgb](../metal/mtlpixelformat/bgra8unorm_srgb.md) |
| [MTLPixelFormat.r16Unorm](../metal/mtlpixelformat/r16unorm.md) | [MTLPixelFormat.rg16Unorm](../metal/mtlpixelformat/rg16unorm.md) | [MTLPixelFormat.rgba16Unorm](../metal/mtlpixelformat/rgba16unorm.md) |  |
| [MTLPixelFormat.r16Float](../metal/mtlpixelformat/r16float.md) | [MTLPixelFormat.rg16Float](../metal/mtlpixelformat/rg16float.md) | [MTLPixelFormat.rgba16Float](../metal/mtlpixelformat/rgba16float.md) |  |
| [MTLPixelFormat.r32Float](../metal/mtlpixelformat/r32float.md) | [MTLPixelFormat.rg32Float](../metal/mtlpixelformat/rg32float.md) | [MTLPixelFormat.rgba32Float](../metal/mtlpixelformat/rgba32float.md) |  |

## Topics

### Initializers

- [init(device:imageDescriptor:)](mpsimage/init%28device_imagedescriptor_%29.md): Initializes an empty image.
- [MPSImageDescriptor](mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](mpsimage.md).
- [init(texture:featureChannels:)](mpsimage/init%28texture_featurechannels_%29.md): Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.
- [init(parentImage:sliceRange:featureChannels:)](mpsimage/init%28parentimage_slicerange_featurechannels_%29.md)

### Methods

- [setPurgeableState(\_:)](mpsimage/setpurgeablestate%28__%29.md): Set (or query) the purgeable state of the image’s underlying texture.
- [MPSPurgeableState](mpspurgeablestate.md): The purgeable state of an image’s underlying texture.

### Methods to Read and Write Raw Data

- [readBytes(\_:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:)](mpsimage/readbytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [readBytes(\_:dataLayout:imageIndex:)](mpsimage/readbytes%28__datalayout_imageindex_%29.md)
- [writeBytes(\_:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:)](mpsimage/writebytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes(\_:dataLayout:imageIndex:)](mpsimage/writebytes%28__datalayout_imageindex_%29.md)
- [MPSImageReadWriteParams](mpsimagereadwriteparams.md): Parameters that control reading and writing of a particular set of feature channels.
- [MPSDataLayout](mpsdatalayout.md): Options that define how buffer data is arranged.

### Methods to Get an Image Allocator

- [defaultAllocator()](mpsimage/defaultallocator%28%29.md)
- [MPSImageAllocator](mpsimageallocator.md)

### Properties

- [device](mpsimage/device.md): The device on which the image will be used.
- [width](mpsimage/width.md): The formal width of the image, in pixels.
- [height](mpsimage/height.md): The formal height of the image, in pixels.
- [featureChannels](mpsimage/featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](mpsimage/numberofimages.md): The number of images for batch processing.
- [textureType](mpsimage/texturetype.md): The type of the underlying texture.
- [MTLTextureType](../metal/mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [pixelFormat](mpsimage/pixelformat.md): The pixel format of the underlying texture.
- [MTLPixelFormat](../metal/mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.
- [precision](mpsimage/precision.md): The number of bits of numeric precision available for each feature channel.
- [usage](mpsimage/usage.md): The intended usage of the underlying texture.
- [MTLTextureUsage](../metal/mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.
- [pixelSize](mpsimage/pixelsize.md): The number of bytes from the first byte of one pixel to the first byte of the next pixel, in storage order. (Includes padding.)
- [texture](mpsimage/texture.md): The underlying texture.
- [MTLTexture](../metal/mtltexture.md): A resource that holds formatted image data.
- [label](mpsimage/label.md): A string to help identify this object.

### Instance Properties

- [featureChannelFormat](mpsimage/featurechannelformat.md)
- [parent](mpsimage/parent.md)

### Instance Methods

- [batchRepresentation()](mpsimage/batchrepresentation%28%29.md)
- [batchRepresentation(withSubRange:)](mpsimage/batchrepresentation%28withsubrange_%29.md)
- [readBytes(\_:dataLayout:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex:)](mpsimage/readbytes%28__datalayout_bytesperrow_bytesperimage_region_featurechannelinfo_imageindex_%29.md)
- [resourceSize()](mpsimage/resourcesize%28%29.md)
- [subImage(withFeatureChannelRange:)](mpsimage/subimage%28withfeaturechannelrange_%29.md)
- [synchronize(on:)](mpsimage/synchronize%28on_%29.md)
- [writeBytes(\_:dataLayout:bytesPerColumn:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex:)](mpsimage/writebytes%28__datalayout_bytespercolumn_bytesperrow_bytesperimage_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes(\_:dataLayout:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex:)](mpsimage/writebytes%28__datalayout_bytesperrow_bytesperimage_region_featurechannelinfo_imageindex_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSTemporaryImage](mpstemporaryimage.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Neural Networks

- [Training a Neural Network with Metal Performance Shaders](training-a-neural-network-with-metal-performance-shaders.md): Use an MPS neural network graph to train a simple neural network digit classifier.
- [MPSTemporaryImage](mpstemporaryimage.md): A texture for use in convolutional neural networks that stores transient data to be used and discarded promptly.
- [Objects that Simplify the Creation of Neural Networks](objects-that-simplify-the-creation-of-neural-networks.md): Simplify the creation of neural networks using networks of filter, image, and state nodes.
- [Convolutional Neural Network Kernels](convolutional-neural-network-kernels.md): Build neural networks with layers.
- [Recurrent Neural Networks](recurrent-neural-networks.md): Create recurrent neural networks.

# MPSImage (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A texture that may have more than four channels for use in convolutional neural networks.

## Declaration

```objectivec
@interface MPSImage : NSObject
```

<a id="overview"></a>

## Overview

Some image types, such as those found in convolutional neural networks (CNN), differ from a standard texture in that they may have more than 4 channels per pixel. While the channels could hold RGBA data, they will more commonly hold a number of structural permutations upon an RGBA image as the neural network progresses. It is not uncommon for each pixel to have 32 or 64 channels in it.

Since a standard [MTLTexture](../metal/mtltexture.md) object cannot have more than 4 channels, the additional channels are stored in slices of a 2D texture array (i.e. a texture of type [MTLTextureType2DArray](../metal/mtltexturetype/type2darray.md)) such that 4 consecutive channels are stored in each slice of this array. If the number of feature channels is `N`, the number of array slices needed is `(N+3)/4`. For example, a 9-channel CNN image with a width of 3 and a height of 2 will be stored as follows:

![](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2556907@2x.png)

Thus, the width and height of the underlying 2D texture array is the same as the width and height of the [MPSImage](mpsimage.md) object and the array length is equal to  `(` [featureChannels](mpsimagedescriptor/featurechannels.md) `+3)/4`. (Channels marked with a `?` are just for padding and should not contain `NaN` or `INF` values.)

An [MPSImage](mpsimage.md) object can contain multiple CNN images for batch processing. In order to create an [MPSImage](mpsimage.md) object that contains `N` images, create an [MPSImageDescriptor](mpsimagedescriptor.md) object with the [numberOfImages](mpsimagedescriptor/numberofimages.md) property set to `N`. The length of the 2D texture array (i.e. the number of slices) will be equal to `((` [featureChannels](mpsimagedescriptor/featurechannels.md) `+3)/4)*` [numberOfImages](mpsimagedescriptor/numberofimages.md), where consecutive `(featureChannels+3)/4` slices of this array represent one image.

Although an [MPSImage](mpsimage.md) object can contain more than one image, the actual number of images among these processed by an [MPSCNNKernel](mpscnnkernel.md) object is controlled by the `z` dimension of the [clipRect](mpscnnkernel/cliprect.md) property. (A kernel processes `n=clipRect.size.depth` images from this collection.)

The starting index of the image to process from the source [MPSImage](mpsimage.md) object is given by `offset.z`. The starting index of the image in the destination [MPSImage](mpsimage.md) object where this processed image is written to is given by `clipRect.origin.z`. Thus, an [MPSCNNKernel](mpscnnkernel.md) object takes the `n=clipRect.size.depth` image from the source at indices `[offset.z, offset.z+n]`, processes each independently, and stores the result in the destination at indices `[clipRect.origin.z, clipRect.origin.z+n]` respectively. Thus, `offset.z+n` should be `<=[source numberOfImages]`, `clipRect.origin.z+n` should be `<=[destination numberOfImages]`, and `offset.z` must be `>=0`.

For example, suppose an [MPSCNNConvolution](mpscnnconvolution.md) object takes an input image with 16 channels and outputs an image with 32 channels. The number of slices needed in the source 2D texture array is 4 and the number of slices needed in the destination 2D texture array is 8. Suppose the source batch size is 5 and the destination batch size is 4. Thus, the number of source slices will be `4*5=20` and the number of destination slices will be `8*4=32`. If you want to process image 2 and 3 of the source and store the result at index 1 and 2 in the destination, you can achieve this by setting `offset.z=2`, `clipRect.origin.z=1`, and `clipRect.size.depth=2`. The [MPSCNNConvolution](mpscnnconvolution.md) object will take, in this case, slices 4 and 5 of the source and produce slices 4 to 7 of the destination. Similarly, slices 6 and 7 will be used to produce slices 8 to 11 of the destination.

All [MPSCNNKernel](mpscnnkernel.md) objects process images in the batch independently. That is, calling a [MPSCNNKernel](mpscnnkernel.md) object on a batch is formally the same as calling it on each image in the batch sequentially. Computational and GPU work submission overhead will be amortized over more work if batch processing is used. This is especially important for better performance on small images.

If `featureChannels<=4` and `numberOfImages=1` (i.e. only one slice is needed to represent the image), the underlying metal texture type is chosen to be [MTLTextureType2D](../metal/mtltexturetype/type2d.md) rather than [MTLTextureType2DArray](../metal/mtltexturetype/type2darray.md) as explained above.

The framework also provides [MPSTemporaryImage](mpstemporaryimage.md) objects, intended for very short-lived image data that is produced and consumed immediately in the same [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object. They are a useful way to minimize CPU-side texture allocation costs and greatly reduce the amount of memory used by your image pipeline.

Creation of the underlying texture may occur lazily in some cases. In general, you should avoid calling the [texture](mpsimage/texture.md) property to avoid materializing memory for longer than necessary. When possible, use the other [MPSImage](mpsimage.md) properties to get information about the object instead.

<a id="The-MPSImage-Class"></a>

### The MPSImage Class

[MTLBuffer](../metal/mtlbuffer.md) and [MTLTexture](../metal/mtltexture.md) objects are commonly used in Metal apps and are used directly by the Metal Performance Shaders framework when possible. In apps that use CNN, kernels may need more than the four data channels that a [MTLTexture](../metal/mtltexture.md) object can provide. In these cases, an [MPSImage](mpsimage.md) object is used instead as an abstraction layer on top of a [MTLTexture](../metal/mtltexture.md) object. When more than 4 channels are needed, additional textures in the 2D texture array are added to hold additional channels in sets of four. An [MPSImage](mpsimage.md) object tracks this information as the number of *feature channels* in an image.

<a id="CNN-Images"></a>

### CNN Images

[MPSCNNKernel](mpscnnkernel.md) objects operate on [MPSImage](mpsimage.md) objects. [MPSImage](mpsimage.md) objects are at their core [MTLTexture](../metal/mtltexture.md) objects; however, whereas [MTLTexture](../metal/mtltexture.md) objects commonly represent image or texel data, an [MPSImage](mpsimage.md) object is a more abstract representation of image features. The channels within an [MPSImage](mpsimage.md) do not necessarily correspond to colors in a color space (although they can, if necessary). As a result, there can be many more than four of them. Having 32 or 64 channels per pixel is not uncommon in CNN. This is achieved on the [MTLTexture](../metal/mtltexture.md) object abstraction by inserting extra RGBA pixels to handle the additional feature channels (if any) beyond 4. These extra pixels are stored as multiple slices of a 2D image array. Thus, each CNN pixel in a 32-channel image is represented as 8 array slices, with 4-channels stored per-pixel in each slice. The width and height of the [MTLTexture](../metal/mtltexture.md) object is the same as the width and height of the [MPSImage](mpsimage.md) object. The number of slices in the [MTLTexture](../metal/mtltexture.md) object is given by the number of feature channels rounded up to a multiple of 4.

[MPSImage](mpsimage.md) objects can be created from existing [MTLTexture](../metal/mtltexture.md) objects. They may also be created anew from an [MPSImageDescriptor](mpsimagedescriptor.md) and backed with either standard texture memory, or as [MPSTemporaryImage](mpstemporaryimage.md) objects using memory drawn from the framework’s internal cached texture backing store. [MPSTemporaryImage](mpstemporaryimage.md) objects can provide great memory usage and CPU time savings, but come with significant restrictions that should be understood before using them. For example, their contents are only valid during the GPU-side execution of a single [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object and can not be read from or written to by the CPU. They are provided as an efficient way to hold CNN computations that are used immediately within the scope of the same [MTLCommandBuffer](../metal/mtlcommandbuffer.md) object and then discarded. Concatenation is also supported by allowing you to define from which destination feature channel to start writing the output of the current layer. In this way, your app can make a large [MPSImage](mpsimage.md) or [MPSTemporaryImage](mpstemporaryimage.md) object and fill in parts of it with multiple layers (as long as the destination feature channel offset is a multiple of 4).

<a id="Supported-Pixel-Formats"></a>

### Supported Pixel Formats

The following table shows pixel formats supported by [MPSImage](mpsimage.md).

| [MTLPixelFormatR8Unorm](../metal/mtlpixelformat/r8unorm.md) | [MTLPixelFormatRG8Unorm](../metal/mtlpixelformat/rg8unorm.md) | [MTLPixelFormatRGBA8Unorm](../metal/mtlpixelformat/rgba8unorm.md) | [MTLPixelFormatBGRA8Unorm](../metal/mtlpixelformat/bgra8unorm.md) |
| --- | --- | --- | --- |
| [MTLPixelFormatR8Unorm_sRGB](../metal/mtlpixelformat/r8unorm_srgb.md) | [MTLPixelFormatRG8Unorm_sRGB](../metal/mtlpixelformat/rg8unorm_srgb.md) | [MTLPixelFormatRGBA8Unorm_sRGB](../metal/mtlpixelformat/rgba8unorm_srgb.md) | [MTLPixelFormatBGRA8Unorm_sRGB](../metal/mtlpixelformat/bgra8unorm_srgb.md) |
| [MTLPixelFormatR16Unorm](../metal/mtlpixelformat/r16unorm.md) | [MTLPixelFormatRG16Unorm](../metal/mtlpixelformat/rg16unorm.md) | [MTLPixelFormatRGBA16Unorm](../metal/mtlpixelformat/rgba16unorm.md) |  |
| [MTLPixelFormatR16Float](../metal/mtlpixelformat/r16float.md) | [MTLPixelFormatRG16Float](../metal/mtlpixelformat/rg16float.md) | [MTLPixelFormatRGBA16Float](../metal/mtlpixelformat/rgba16float.md) |  |
| [MTLPixelFormatR32Float](../metal/mtlpixelformat/r32float.md) | [MTLPixelFormatRG32Float](../metal/mtlpixelformat/rg32float.md) | [MTLPixelFormatRGBA32Float](../metal/mtlpixelformat/rgba32float.md) |  |

## Topics

### Initializers

- [initWithDevice:imageDescriptor:](mpsimage/init%28device_imagedescriptor_%29.md): Initializes an empty image.
- [MPSImageDescriptor](mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](mpsimage.md).
- [initWithTexture:featureChannels:](mpsimage/init%28texture_featurechannels_%29.md): Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.
- [initWithParentImage:sliceRange:featureChannels:](mpsimage/init%28parentimage_slicerange_featurechannels_%29.md)

### Methods

- [setPurgeableState:](mpsimage/setpurgeablestate%28__%29.md): Set (or query) the purgeable state of the image’s underlying texture.
- [MPSPurgeableState](mpspurgeablestate.md): The purgeable state of an image’s underlying texture.

### Methods to Read and Write Raw Data

- [readBytes:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:](mpsimage/readbytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [readBytes:dataLayout:imageIndex:](mpsimage/readbytes%28__datalayout_imageindex_%29.md)
- [writeBytes:dataLayout:bytesPerRow:region:featureChannelInfo:imageIndex:](mpsimage/writebytes%28__datalayout_bytesperrow_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes:dataLayout:imageIndex:](mpsimage/writebytes%28__datalayout_imageindex_%29.md)
- [MPSImageReadWriteParams](mpsimagereadwriteparams.md): Parameters that control reading and writing of a particular set of feature channels.
- [MPSDataLayout](mpsdatalayout.md): Options that define how buffer data is arranged.

### Methods to Get an Image Allocator

- [defaultAllocator](mpsimage/defaultallocator%28%29.md)
- [MPSImageAllocator](mpsimageallocator.md)

### Properties

- [device](mpsimage/device.md): The device on which the image will be used.
- [width](mpsimage/width.md): The formal width of the image, in pixels.
- [height](mpsimage/height.md): The formal height of the image, in pixels.
- [featureChannels](mpsimage/featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](mpsimage/numberofimages.md): The number of images for batch processing.
- [textureType](mpsimage/texturetype.md): The type of the underlying texture.
- [MTLTextureType](../metal/mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [pixelFormat](mpsimage/pixelformat.md): The pixel format of the underlying texture.
- [MTLPixelFormat](../metal/mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.
- [precision](mpsimage/precision.md): The number of bits of numeric precision available for each feature channel.
- [usage](mpsimage/usage.md): The intended usage of the underlying texture.
- [MTLTextureUsage](../metal/mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.
- [pixelSize](mpsimage/pixelsize.md): The number of bytes from the first byte of one pixel to the first byte of the next pixel, in storage order. (Includes padding.)
- [texture](mpsimage/texture.md): The underlying texture.
- [MTLTexture](../metal/mtltexture.md): A resource that holds formatted image data.
- [label](mpsimage/label.md): A string to help identify this object.

### Instance Properties

- [featureChannelFormat](mpsimage/featurechannelformat.md)
- [parent](mpsimage/parent.md)

### Instance Methods

- [batchRepresentation](mpsimage/batchrepresentation%28%29.md)
- [batchRepresentationWithSubRange:](mpsimage/batchrepresentation%28withsubrange_%29.md)
- [readBytes:dataLayout:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex:](mpsimage/readbytes%28__datalayout_bytesperrow_bytesperimage_region_featurechannelinfo_imageindex_%29.md)
- [resourceSize](mpsimage/resourcesize%28%29.md)
- [subImageWithFeatureChannelRange:](mpsimage/subimage%28withfeaturechannelrange_%29.md)
- [synchronizeOnCommandBuffer:](mpsimage/synchronize%28on_%29.md)
- [writeBytes:dataLayout:bytesPerColumn:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex:](mpsimage/writebytes%28__datalayout_bytespercolumn_bytesperrow_bytesperimage_region_featurechannelinfo_imageindex_%29.md)
- [writeBytes:dataLayout:bytesPerRow:bytesPerImage:region:featureChannelInfo:imageIndex:](mpsimage/writebytes%28__datalayout_bytesperrow_bytesperimage_region_featurechannelinfo_imageindex_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSTemporaryImage](mpstemporaryimage.md)

## See Also

### Neural Networks

- [Training a Neural Network with Metal Performance Shaders](training-a-neural-network-with-metal-performance-shaders.md): Use an MPS neural network graph to train a simple neural network digit classifier.
- [MPSTemporaryImage](mpstemporaryimage.md): A texture for use in convolutional neural networks that stores transient data to be used and discarded promptly.
- [Objects that Simplify the Creation of Neural Networks](objects-that-simplify-the-creation-of-neural-networks.md): Simplify the creation of neural networks using networks of filter, image, and state nodes.
- [Convolutional Neural Network Kernels](convolutional-neural-network-kernels.md): Build neural networks with layers.
- [Recurrent Neural Networks](recurrent-neural-networks.md): Create recurrent neural networks.
