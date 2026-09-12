> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture](https://developer.apple.com/documentation/metal/mtltexture)

# MTLTexture (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A resource that holds formatted image data.

## Declaration

```swift
protocol MTLTexture : MTLResource
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Setting resource storage modes](setting-resource-storage-modes.md)
- [Synchronizing a managed resource in macOS](synchronizing-a-managed-resource-in-macos.md)
- [Choosing a resource storage mode for Apple GPUs](choosing-a-resource-storage-mode-for-apple-gpus.md)
- [Creating a mipmapped texture](creating-a-mipmapped-texture.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)

<a id="overview"></a>

## Overview

Don’t implement this protocol yourself; instead, use one of the following methods to create an [MTLTexture](mtltexture.md) instance:

- Create an [MTLTextureDescriptor](mtltexturedescriptor.md) instance to describe the texture’s properties and then call the [makeTexture(descriptor:)](mtldevice/maketexture%28descriptor_%29.md) method of the [MTLDevice](mtldevice.md) protocol to create the texture.
- To create a texture that uses an existing [IOSurface](../iosurface/iosurface.md) to hold the texture data, create an [MTLTextureDescriptor](mtltexturedescriptor.md) instance to describe the image data in the surface. Call the [makeTexture(descriptor:iosurface:plane:)](mtldevice/maketexture%28descriptor_iosurface_plane_%29.md) method to create the texture.
- To create a texture that reinterprets another texture’s data as if it has a different format, call one of the following texture methods:

  - [makeTextureView(pixelFormat:)](mtltexture/maketextureview%28pixelformat_%29.md)
  - [makeTextureView(pixelFormat:textureType:levels:slices:)](mtltexture/maketextureview%28pixelformat_texturetype_levels_slices_%29.md) (Swift)
  - [newTextureViewWithPixelFormat:textureType:levels:slices:](mtltexture/newtextureviewwithpixelformat_texturetype_levels_slices_.md) (Objective-C)

  You need to choose a pixel format for the new texture compatible with the source texture’s pixel format. The new texture shares the same storage allocation as the source texture. If you make changes to the new texture, the source texture reflects those changes, and vice versa.
- To create a texture that uses an [MTLBuffer](mtlbuffer.md) instance’s contents to hold pixel data, create an [MTLTextureDescriptor](mtltexturedescriptor.md) instance to describe the texture’s properties. Then call the [makeTexture(descriptor:offset:bytesPerRow:)](mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md) method on the buffer instance. The new texture instance shares the storage allocation of the source buffer instance. If you make changes to the texture, the buffer reflects those changes, and vice versa.

After you create an [MTLTexture](mtltexture.md) instance, most of its characteristics, such as its size, type, and pixel format are all immutable. Only the texture’s pixel data is mutable.

To copy pixel data from system memory into the texture, call [replace(region:mipmapLevel:slice:withBytes:bytesPerRow:bytesPerImage:)](mtltexture/replace%28region_mipmaplevel_slice_withbytes_bytesperrow_bytesperimage_%29.md) or [replace(region:mipmapLevel:withBytes:bytesPerRow:)](mtltexture/replace%28region_mipmaplevel_withbytes_bytesperrow_%29.md).

To copy pixel data back to system memory, call [getBytes(\_:bytesPerRow:bytesPerImage:from:mipmapLevel:slice:)](mtltexture/getbytes%28__bytesperrow_bytesperimage_from_mipmaplevel_slice_%29.md) or [getBytes(\_:bytesPerRow:from:mipmapLevel:)](mtltexture/getbytes%28__bytesperrow_from_mipmaplevel_%29.md).

## Topics

### Copying data into a texture image

- [replace(region:mipmapLevel:slice:withBytes:bytesPerRow:bytesPerImage:)](mtltexture/replace%28region_mipmaplevel_slice_withbytes_bytesperrow_bytesperimage_%29.md): Copies pixel data into a section of a texture slice.
- [replace(region:mipmapLevel:withBytes:bytesPerRow:)](mtltexture/replace%28region_mipmaplevel_withbytes_bytesperrow_%29.md): Copies a block of pixels into a section of texture slice 0.

### Copying data from a texture image

- [getBytes(\_:bytesPerRow:bytesPerImage:from:mipmapLevel:slice:)](mtltexture/getbytes%28__bytesperrow_bytesperimage_from_mipmaplevel_slice_%29.md): Copies pixel data from the texture to a buffer in system memory.
- [getBytes(\_:bytesPerRow:from:mipmapLevel:)](mtltexture/getbytes%28__bytesperrow_from_mipmaplevel_%29.md): Copies pixel data from the first slice of the texture to a buffer in system memory.

### Creating textures by reinterpreting existing texture data

- [makeTextureView(pixelFormat:)](mtltexture/maketextureview%28pixelformat_%29.md): Creates a new view of the texture, reinterpreting its data using a different pixel format.
- [makeTextureView(pixelFormat:textureType:levels:slices:)](mtltexture/maketextureview%28pixelformat_texturetype_levels_slices_%29.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type and pixel format.
- [makeTextureView(pixelFormat:textureType:levels:slices:swizzle:)](mtltexture/maketextureview%28pixelformat_texturetype_levels_slices_swizzle_%29.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type, pixel format, and swizzle pattern.

### Querying texture attributes

- [textureType](mtltexture/texturetype.md): The dimension and arrangement of the texture image data.
- [pixelFormat](mtltexture/pixelformat.md): The format of pixels in the texture.
- [width](mtltexture/width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](mtltexture/height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](mtltexture/depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mtltexture/mipmaplevelcount.md): The number of mipmap levels in the texture.
- [arrayLength](mtltexture/arraylength.md): The number of slices in the texture array.
- [sampleCount](mtltexture/samplecount.md): The number of samples in each pixel.
- [isFramebufferOnly](mtltexture/isframebufferonly.md): A Boolean value that indicates whether the texture can only be used as a render target.
- [usage](mtltexture/usage.md): Options that determine how you can use the texture.
- [allowGPUOptimizedContents](mtltexture/allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.
- [isShareable](mtltexture/isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](mtltexture/swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.

### Getting information about the IOSurface the texture was created from

- [iosurface](mtltexture/iosurface.md): A reference to the underlying surface instance for the texture, if applicable.
- [iosurfacePlane](mtltexture/iosurfaceplane.md): The number of a plane within the underlying surface instance for the texture, if applicable.

### Getting information about ancestor resources

- [parent](mtltexture/parent.md): The parent texture used to create this texture, if any.
- [parentRelativeLevel](mtltexture/parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentRelativeSlice](mtltexture/parentrelativeslice.md): The base slice of the parent texture used to create this texture.
- [buffer](mtltexture/buffer.md): The source buffer used to create this texture, if any.
- [bufferOffset](mtltexture/bufferoffset.md): The offset in the source buffer where the texture’s data comes from.
- [bufferBytesPerRow](mtltexture/bufferbytesperrow.md): The number of bytes in each row of the texture’s source buffer.
- [rootResource](mtltexture/rootresource.md): Deprecated. The resource that owns the storage for this texture.

### Creating a shared texture handle

- [makeSharedTextureHandle()](mtltexture/makesharedtexturehandle%28%29.md): Creates a new texture handle from a shareable texture.

### Creating views of textures on other GPUs

- [makeRemoteTextureView(\_:)](mtltexture/makeremotetextureview%28__%29.md): Deprecated. Creates a remote texture view for another GPU in the same peer group.
- [remoteStorageTexture](mtltexture/remotestoragetexture.md): Deprecated. The texture on another GPU that the texture was created from, if any.

### Querying sparse properties

- [isSparse](mtltexture/issparse.md): A Boolean value that indicates whether this is a sparse texture.
- [firstMipmapInTail](mtltexture/firstmipmapintail.md): The index of the first mipmap in the tail.
- [tailSizeInBytes](mtltexture/tailsizeinbytes.md): The size of the sparse texture tail, in bytes.

### Instance Properties

- [compressionType](mtltexture/compressiontype.md)
- [gpuResourceID](mtltexture/gpuresourceid.md)
- [minLOD](mtltexture/minlod.md): The lowest mipmap level of detail for the texture.
- [sparseTextureTier](mtltexture/sparsetexturetier.md)

### Instance Methods

- [newTextureView(with:)](mtltexture/newtextureview%28with_%29.md)

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [MTLResource](mtlresource.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Texture basics

- [Understanding color-renderable pixel format sizes](understanding-color-renderable-pixel-format-sizes.md): Know the size limits of color render targets in Apple GPUs based on the target’s pixel format.
- [Optimizing texture data](optimizing-texture-data.md): Optimize a texture’s data to improve GPU or CPU access.
- [MTLTextureCompressionType](mtltexturecompressiontype.md)
- [MTLTextureDescriptor](mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [MTKTextureLoader](../metalkit/mtktextureloader.md): An object that creates textures from existing data in common image formats.
- [MTLSharedTextureHandle](mtlsharedtexturehandle.md): A texture handle that can be shared across process address space boundaries.
- [MTLPixelFormat](mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.

# MTLTexture (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A resource that holds formatted image data.

## Declaration

```objectivec
@protocol MTLTexture <MTLResource>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Setting resource storage modes](setting-resource-storage-modes.md)
- [Synchronizing a managed resource in macOS](synchronizing-a-managed-resource-in-macos.md)
- [Choosing a resource storage mode for Apple GPUs](choosing-a-resource-storage-mode-for-apple-gpus.md)
- [Creating a mipmapped texture](creating-a-mipmapped-texture.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)

<a id="overview"></a>

## Overview

Don’t implement this protocol yourself; instead, use one of the following methods to create an [MTLTexture](mtltexture.md) instance:

- Create an [MTLTextureDescriptor](mtltexturedescriptor.md) instance to describe the texture’s properties and then call the [newTextureWithDescriptor:](mtldevice/maketexture%28descriptor_%29.md) method of the [MTLDevice](mtldevice.md) protocol to create the texture.
- To create a texture that uses an existing [IOSurface](../iosurface/iosurface.md) to hold the texture data, create an [MTLTextureDescriptor](mtltexturedescriptor.md) instance to describe the image data in the surface. Call the [newTextureWithDescriptor:iosurface:plane:](mtldevice/maketexture%28descriptor_iosurface_plane_%29.md) method to create the texture.
- To create a texture that reinterprets another texture’s data as if it has a different format, call one of the following texture methods:

  - [newTextureViewWithPixelFormat:](mtltexture/maketextureview%28pixelformat_%29.md)
  - [makeTextureView(pixelFormat:textureType:levels:slices:)](mtltexture/maketextureview%28pixelformat_texturetype_levels_slices_%29.md) (Swift)
  - [newTextureViewWithPixelFormat:textureType:levels:slices:](mtltexture/newtextureviewwithpixelformat_texturetype_levels_slices_.md) (Objective-C)

  You need to choose a pixel format for the new texture compatible with the source texture’s pixel format. The new texture shares the same storage allocation as the source texture. If you make changes to the new texture, the source texture reflects those changes, and vice versa.
- To create a texture that uses an [MTLBuffer](mtlbuffer.md) instance’s contents to hold pixel data, create an [MTLTextureDescriptor](mtltexturedescriptor.md) instance to describe the texture’s properties. Then call the [newTextureWithDescriptor:offset:bytesPerRow:](mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md) method on the buffer instance. The new texture instance shares the storage allocation of the source buffer instance. If you make changes to the texture, the buffer reflects those changes, and vice versa.

After you create an [MTLTexture](mtltexture.md) instance, most of its characteristics, such as its size, type, and pixel format are all immutable. Only the texture’s pixel data is mutable.

To copy pixel data from system memory into the texture, call [replaceRegion:mipmapLevel:slice:withBytes:bytesPerRow:bytesPerImage:](mtltexture/replace%28region_mipmaplevel_slice_withbytes_bytesperrow_bytesperimage_%29.md) or [replaceRegion:mipmapLevel:withBytes:bytesPerRow:](mtltexture/replace%28region_mipmaplevel_withbytes_bytesperrow_%29.md).

To copy pixel data back to system memory, call [getBytes:bytesPerRow:bytesPerImage:fromRegion:mipmapLevel:slice:](mtltexture/getbytes%28__bytesperrow_bytesperimage_from_mipmaplevel_slice_%29.md) or [getBytes:bytesPerRow:fromRegion:mipmapLevel:](mtltexture/getbytes%28__bytesperrow_from_mipmaplevel_%29.md).

## Topics

### Copying data into a texture image

- [replaceRegion:mipmapLevel:slice:withBytes:bytesPerRow:bytesPerImage:](mtltexture/replace%28region_mipmaplevel_slice_withbytes_bytesperrow_bytesperimage_%29.md): Copies pixel data into a section of a texture slice.
- [replaceRegion:mipmapLevel:withBytes:bytesPerRow:](mtltexture/replace%28region_mipmaplevel_withbytes_bytesperrow_%29.md): Copies a block of pixels into a section of texture slice 0.

### Copying data from a texture image

- [getBytes:bytesPerRow:bytesPerImage:fromRegion:mipmapLevel:slice:](mtltexture/getbytes%28__bytesperrow_bytesperimage_from_mipmaplevel_slice_%29.md): Copies pixel data from the texture to a buffer in system memory.
- [getBytes:bytesPerRow:fromRegion:mipmapLevel:](mtltexture/getbytes%28__bytesperrow_from_mipmaplevel_%29.md): Copies pixel data from the first slice of the texture to a buffer in system memory.

### Creating textures by reinterpreting existing texture data

- [newTextureViewWithPixelFormat:](mtltexture/maketextureview%28pixelformat_%29.md): Creates a new view of the texture, reinterpreting its data using a different pixel format.
- [newTextureViewWithPixelFormat:textureType:levels:slices:](mtltexture/newtextureviewwithpixelformat_texturetype_levels_slices_.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type and pixel format.
- [newTextureViewWithPixelFormat:textureType:levels:slices:swizzle:](mtltexture/newtextureviewwithpixelformat_texturetype_levels_slices_swizzle_.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type, pixel format, and swizzle pattern.

### Querying texture attributes

- [textureType](mtltexture/texturetype.md): The dimension and arrangement of the texture image data.
- [pixelFormat](mtltexture/pixelformat.md): The format of pixels in the texture.
- [width](mtltexture/width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](mtltexture/height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](mtltexture/depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mtltexture/mipmaplevelcount.md): The number of mipmap levels in the texture.
- [arrayLength](mtltexture/arraylength.md): The number of slices in the texture array.
- [sampleCount](mtltexture/samplecount.md): The number of samples in each pixel.
- [framebufferOnly](mtltexture/isframebufferonly.md): A Boolean value that indicates whether the texture can only be used as a render target.
- [usage](mtltexture/usage.md): Options that determine how you can use the texture.
- [allowGPUOptimizedContents](mtltexture/allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.
- [shareable](mtltexture/isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](mtltexture/swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.

### Getting information about the IOSurface the texture was created from

- [iosurface](mtltexture/iosurface.md): A reference to the underlying surface instance for the texture, if applicable.
- [iosurfacePlane](mtltexture/iosurfaceplane.md): The number of a plane within the underlying surface instance for the texture, if applicable.

### Getting information about ancestor resources

- [parentTexture](mtltexture/parent.md): The parent texture used to create this texture, if any.
- [parentRelativeLevel](mtltexture/parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentRelativeSlice](mtltexture/parentrelativeslice.md): The base slice of the parent texture used to create this texture.
- [buffer](mtltexture/buffer.md): The source buffer used to create this texture, if any.
- [bufferOffset](mtltexture/bufferoffset.md): The offset in the source buffer where the texture’s data comes from.
- [bufferBytesPerRow](mtltexture/bufferbytesperrow.md): The number of bytes in each row of the texture’s source buffer.
- [rootResource](mtltexture/rootresource.md): Deprecated. The resource that owns the storage for this texture.

### Creating a shared texture handle

- [newSharedTextureHandle](mtltexture/makesharedtexturehandle%28%29.md): Creates a new texture handle from a shareable texture.

### Creating views of textures on other GPUs

- [newRemoteTextureViewForDevice:](mtltexture/makeremotetextureview%28__%29.md): Deprecated. Creates a remote texture view for another GPU in the same peer group.
- [remoteStorageTexture](mtltexture/remotestoragetexture.md): Deprecated. The texture on another GPU that the texture was created from, if any.

### Querying sparse properties

- [isSparse](mtltexture/issparse.md): A Boolean value that indicates whether this is a sparse texture.
- [firstMipmapInTail](mtltexture/firstmipmapintail.md): The index of the first mipmap in the tail.
- [tailSizeInBytes](mtltexture/tailsizeinbytes.md): The size of the sparse texture tail, in bytes.

### Instance Properties

- [compressionType](mtltexture/compressiontype.md)
- [gpuResourceID](mtltexture/gpuresourceid.md)
- [minLOD](mtltexture/minlod.md): The lowest mipmap level of detail for the texture.
- [sparseTextureTier](mtltexture/sparsetexturetier.md)

### Instance Methods

- [newTextureViewWithDescriptor:](mtltexture/newtextureview%28with_%29.md)

## Relationships

### Inherits From

- [MTLResource](mtlresource.md)

## See Also

### Texture basics

- [Understanding color-renderable pixel format sizes](understanding-color-renderable-pixel-format-sizes.md): Know the size limits of color render targets in Apple GPUs based on the target’s pixel format.
- [Optimizing texture data](optimizing-texture-data.md): Optimize a texture’s data to improve GPU or CPU access.
- [MTLTextureCompressionType](mtltexturecompressiontype.md)
- [MTLTextureDescriptor](mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [MTKTextureLoader](../metalkit/mtktextureloader.md): An object that creates textures from existing data in common image formats.
- [MTLSharedTextureHandle](mtlsharedtexturehandle.md): A texture handle that can be shared across process address space boundaries.
- [MTLPixelFormat](mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.
