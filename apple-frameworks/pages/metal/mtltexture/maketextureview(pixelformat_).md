> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/maketextureview(pixelformat:)](https://developer.apple.com/documentation/metal/mtltexture/maketextureview(pixelformat:))

# makeTextureView(pixelFormat:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a new view of the texture, reinterpreting its data using a different pixel format.

## Declaration

```swift
func makeTextureView(pixelFormat: MTLPixelFormat) -> (any MTLTexture)?
```

## Parameters

- `pixelFormat`: A new pixel format, which needs to be compatible with the original pixel format.

<a id="return-value"></a>

## Return Value

A new texture object that shares the same storage allocation of the texture.

<a id="discussion"></a>

## Discussion

When you create a texture normally, Metal allocates memory for the textureʼs pixel data. These storage allocations can be quite large. You can reduce memory use and avoid copying texture data by using a *texture view*—a texture object that shares another textureʼs storage allocation, reinterpreting the pixel data in some other format.

Not all pixel formats are compatible with one another. Reinterpretation of image data between pixel formats is supported within the following groups:

- All 8-, 16-, 32-, 64-, and 128-bit color formats are compatible with other formats with the same bit length.
- sRGB and non-sRGB forms of the same compressed format (for example, [MTLPixelFormat.bc1_rgba](../mtlpixelformat/bc1_rgba.md) and [MTLPixelFormat.bc1_rgba_srgb](../mtlpixelformat/bc1_rgba_srgb.md))
- Combined depth-stencil texture formats and the related format used to access the stencil from a shader (for example, [MTLPixelFormat.depth24Unorm_stencil8](../mtlpixelformat/depth24unorm_stencil8.md) and [MTLPixelFormat.x24_stencil8](../mtlpixelformat/x24_stencil8.md))

This method doesn’t change the original texture image data in any way, but it may drastically change how the data is interpreted. For example, given a texture with the [MTLPixelFormat.rg16Uint](../mtlpixelformat/rg16uint.md) pixel format that contains image data for Red `0xFFFE` and Green `0x0001`, this method would reinterpret that data in an [MTLPixelFormat.r32Uint](../mtlpixelformat/r32uint.md) format as Red `0x0001FFFE`.

Some format reinterpretations are supported but may not be useful. For example, this method considers the 32-bit packed color formats [MTLPixelFormat.bgr10a2Unorm](../mtlpixelformat/bgr10a2unorm.md) and [MTLDataType.rg11b10Float](../mtldatatype/rg11b10float.md) to be compatible, but it’s unlikely that the same data can be interpreted by both formats in a meaningful way.

Some format reinterpretations require you to create the source texture with a special usage flag. Set that flag only when necessary, as it can affect performance. For more details, see [pixelFormatView](../mtltextureusage/pixelformatview.md).

## See Also

### Related Documentation

- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parent](parent.md): The parent texture used to create this texture, if any.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.

### Creating textures by reinterpreting existing texture data

- [makeTextureView(pixelFormat:textureType:levels:slices:)](maketextureview%28pixelformat_texturetype_levels_slices_%29.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type and pixel format.
- [makeTextureView(pixelFormat:textureType:levels:slices:swizzle:)](maketextureview%28pixelformat_texturetype_levels_slices_swizzle_%29.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type, pixel format, and swizzle pattern.

# newTextureViewWithPixelFormat: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a new view of the texture, reinterpreting its data using a different pixel format.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureViewWithPixelFormat:(MTLPixelFormat) pixelFormat;
```

## Parameters

- `pixelFormat`: A new pixel format, which needs to be compatible with the original pixel format.

<a id="return-value"></a>

## Return Value

A new texture object that shares the same storage allocation of the texture.

<a id="discussion"></a>

## Discussion

When you create a texture normally, Metal allocates memory for the textureʼs pixel data. These storage allocations can be quite large. You can reduce memory use and avoid copying texture data by using a *texture view*—a texture object that shares another textureʼs storage allocation, reinterpreting the pixel data in some other format.

Not all pixel formats are compatible with one another. Reinterpretation of image data between pixel formats is supported within the following groups:

- All 8-, 16-, 32-, 64-, and 128-bit color formats are compatible with other formats with the same bit length.
- sRGB and non-sRGB forms of the same compressed format (for example, [MTLPixelFormatBC1_RGBA](../mtlpixelformat/bc1_rgba.md) and [MTLPixelFormatBC1_RGBA_sRGB](../mtlpixelformat/bc1_rgba_srgb.md))
- Combined depth-stencil texture formats and the related format used to access the stencil from a shader (for example, [MTLPixelFormatDepth24Unorm_Stencil8](../mtlpixelformat/depth24unorm_stencil8.md) and [MTLPixelFormatX24_Stencil8](../mtlpixelformat/x24_stencil8.md))

This method doesn’t change the original texture image data in any way, but it may drastically change how the data is interpreted. For example, given a texture with the [MTLPixelFormatRG16Uint](../mtlpixelformat/rg16uint.md) pixel format that contains image data for Red `0xFFFE` and Green `0x0001`, this method would reinterpret that data in an [MTLPixelFormatR32Uint](../mtlpixelformat/r32uint.md) format as Red `0x0001FFFE`.

Some format reinterpretations are supported but may not be useful. For example, this method considers the 32-bit packed color formats [MTLPixelFormatBGR10A2Unorm](../mtlpixelformat/bgr10a2unorm.md) and [MTLDataTypeRG11B10Float](../mtldatatype/rg11b10float.md) to be compatible, but it’s unlikely that the same data can be interpreted by both formats in a meaningful way.

Some format reinterpretations require you to create the source texture with a special usage flag. Set that flag only when necessary, as it can affect performance. For more details, see [MTLTextureUsagePixelFormatView](../mtltextureusage/pixelformatview.md).

## See Also

### Related Documentation

- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentTexture](parent.md): The parent texture used to create this texture, if any.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.

### Creating textures by reinterpreting existing texture data

- [newTextureViewWithPixelFormat:textureType:levels:slices:](newtextureviewwithpixelformat_texturetype_levels_slices_.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type and pixel format.
- [newTextureViewWithPixelFormat:textureType:levels:slices:swizzle:](newtextureviewwithpixelformat_texturetype_levels_slices_swizzle_.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type, pixel format, and swizzle pattern.
