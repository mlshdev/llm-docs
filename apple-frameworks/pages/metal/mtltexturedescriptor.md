> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturedescriptor](https://developer.apple.com/documentation/metal/mtltexturedescriptor)

# MTLTextureDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that you use to configure new Metal texture instances.

## Declaration

```swift
class MTLTextureDescriptor
```

## Mentioned In

- [Choosing a resource storage mode for Apple GPUs](choosing-a-resource-storage-mode-for-apple-gpus.md)
- [Setting resource storage modes](setting-resource-storage-modes.md)
- [Synchronizing a managed resource in macOS](synchronizing-a-managed-resource-in-macos.md)
- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

To create a new texture, first create an [MTLTextureDescriptor](mtltexturedescriptor.md) instance and set its property values. Then, call either the [makeTexture(descriptor:)](mtldevice/maketexture%28descriptor_%29.md) or [makeTexture(descriptor:iosurface:plane:)](mtldevice/maketexture%28descriptor_iosurface_plane_%29.md) method of an [MTLDevice](mtldevice.md) instance, or the [makeTexture(descriptor:offset:bytesPerRow:)](mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md) method of an [MTLBuffer](mtlbuffer.md) instance.

When you create a texture, Metal copies property values from the descriptor into the new texture. You can reuse an [MTLTextureDescriptor](mtltexturedescriptor.md) instance, modifying its property values as needed, to create more [MTLTexture](mtltexture.md) instances, without affecting any textures you already created.

## Topics

### Creating texture descriptors

- [texture2DDescriptor(pixelFormat:width:height:mipmapped:)](mtltexturedescriptor/texture2ddescriptor%28pixelformat_width_height_mipmapped_%29.md): Creates a texture descriptor object for a 2D texture.
- [textureCubeDescriptor(pixelFormat:size:mipmapped:)](mtltexturedescriptor/texturecubedescriptor%28pixelformat_size_mipmapped_%29.md): Creates a texture descriptor object for a cube texture.
- [textureBufferDescriptor(with:width:resourceOptions:usage:)](mtltexturedescriptor/texturebufferdescriptor%28with_width_resourceoptions_usage_%29.md): Creates a texture descriptor object for a texture buffer.

### Specifying texture attributes

- [textureType](mtltexturedescriptor/texturetype.md): The dimension and arrangement of texture image data.
- [pixelFormat](mtltexturedescriptor/pixelformat.md): The size and bit layout of all pixels in the texture.
- [width](mtltexturedescriptor/width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](mtltexturedescriptor/height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](mtltexturedescriptor/depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mtltexturedescriptor/mipmaplevelcount.md): The number of mipmap levels for this texture.
- [sampleCount](mtltexturedescriptor/samplecount.md): The number of samples in each fragment.
- [arrayLength](mtltexturedescriptor/arraylength.md): The number of array elements for this texture.
- [resourceOptions](mtltexturedescriptor/resourceoptions.md): The behavior of a new memory allocation.
- [cpuCacheMode](mtltexturedescriptor/cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](mtltexturedescriptor/storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](mtltexturedescriptor/hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](mtltexturedescriptor/allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](mtltexturedescriptor/usage.md): Options that determine how you can use the texture.
- [swizzle](mtltexturedescriptor/swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.
- [MTLTextureSwizzle](mtltextureswizzle.md): A set of options to choose from when creating a texture swizzle pattern.
- [MTLTextureType](mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.

### Instance Properties

- [compressionType](mtltexturedescriptor/compressiontype.md)
- [placementSparsePageSize](mtltexturedescriptor/placementsparsepagesize.md): Determines the page size for a placement sparse texture.

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

### Texture basics

- [Understanding color-renderable pixel format sizes](understanding-color-renderable-pixel-format-sizes.md): Know the size limits of color render targets in Apple GPUs based on the target’s pixel format.
- [Optimizing texture data](optimizing-texture-data.md): Optimize a texture’s data to improve GPU or CPU access.
- [MTLTexture](mtltexture.md): A resource that holds formatted image data.
- [MTLTextureCompressionType](mtltexturecompressiontype.md)
- [MTKTextureLoader](../metalkit/mtktextureloader.md): An object that creates textures from existing data in common image formats.
- [MTLSharedTextureHandle](mtlsharedtexturehandle.md): A texture handle that can be shared across process address space boundaries.
- [MTLPixelFormat](mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.

# MTLTextureDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that you use to configure new Metal texture instances.

## Declaration

```objectivec
@interface MTLTextureDescriptor : NSObject
```

## Mentioned In

- [Choosing a resource storage mode for Apple GPUs](choosing-a-resource-storage-mode-for-apple-gpus.md)
- [Setting resource storage modes](setting-resource-storage-modes.md)
- [Synchronizing a managed resource in macOS](synchronizing-a-managed-resource-in-macos.md)
- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

To create a new texture, first create an [MTLTextureDescriptor](mtltexturedescriptor.md) instance and set its property values. Then, call either the [newTextureWithDescriptor:](mtldevice/maketexture%28descriptor_%29.md) or [newTextureWithDescriptor:iosurface:plane:](mtldevice/maketexture%28descriptor_iosurface_plane_%29.md) method of an [MTLDevice](mtldevice.md) instance, or the [newTextureWithDescriptor:offset:bytesPerRow:](mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md) method of an [MTLBuffer](mtlbuffer.md) instance.

When you create a texture, Metal copies property values from the descriptor into the new texture. You can reuse an [MTLTextureDescriptor](mtltexturedescriptor.md) instance, modifying its property values as needed, to create more [MTLTexture](mtltexture.md) instances, without affecting any textures you already created.

## Topics

### Creating texture descriptors

- [texture2DDescriptorWithPixelFormat:width:height:mipmapped:](mtltexturedescriptor/texture2ddescriptor%28pixelformat_width_height_mipmapped_%29.md): Creates a texture descriptor object for a 2D texture.
- [textureCubeDescriptorWithPixelFormat:size:mipmapped:](mtltexturedescriptor/texturecubedescriptor%28pixelformat_size_mipmapped_%29.md): Creates a texture descriptor object for a cube texture.
- [textureBufferDescriptorWithPixelFormat:width:resourceOptions:usage:](mtltexturedescriptor/texturebufferdescriptor%28with_width_resourceoptions_usage_%29.md): Creates a texture descriptor object for a texture buffer.

### Specifying texture attributes

- [textureType](mtltexturedescriptor/texturetype.md): The dimension and arrangement of texture image data.
- [pixelFormat](mtltexturedescriptor/pixelformat.md): The size and bit layout of all pixels in the texture.
- [width](mtltexturedescriptor/width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](mtltexturedescriptor/height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](mtltexturedescriptor/depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mtltexturedescriptor/mipmaplevelcount.md): The number of mipmap levels for this texture.
- [sampleCount](mtltexturedescriptor/samplecount.md): The number of samples in each fragment.
- [arrayLength](mtltexturedescriptor/arraylength.md): The number of array elements for this texture.
- [resourceOptions](mtltexturedescriptor/resourceoptions.md): The behavior of a new memory allocation.
- [cpuCacheMode](mtltexturedescriptor/cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](mtltexturedescriptor/storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](mtltexturedescriptor/hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](mtltexturedescriptor/allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](mtltexturedescriptor/usage.md): Options that determine how you can use the texture.
- [swizzle](mtltexturedescriptor/swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.
- [MTLTextureSwizzleChannelsMake](mtltextureswizzlechannelsmake.md): Creates a new swizzle pattern.
- [MTLTextureSwizzle](mtltextureswizzle.md): A set of options to choose from when creating a texture swizzle pattern.
- [MTLTextureType](mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.

### Instance Properties

- [compressionType](mtltexturedescriptor/compressiontype.md)
- [placementSparsePageSize](mtltexturedescriptor/placementsparsepagesize.md): Determines the page size for a placement sparse texture.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Texture basics

- [Understanding color-renderable pixel format sizes](understanding-color-renderable-pixel-format-sizes.md): Know the size limits of color render targets in Apple GPUs based on the target’s pixel format.
- [Optimizing texture data](optimizing-texture-data.md): Optimize a texture’s data to improve GPU or CPU access.
- [MTLTexture](mtltexture.md): A resource that holds formatted image data.
- [MTLTextureCompressionType](mtltexturecompressiontype.md)
- [MTKTextureLoader](../metalkit/mtktextureloader.md): An object that creates textures from existing data in common image formats.
- [MTLSharedTextureHandle](mtlsharedtexturehandle.md): A texture handle that can be shared across process address space boundaries.
- [MTLPixelFormat](mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.
