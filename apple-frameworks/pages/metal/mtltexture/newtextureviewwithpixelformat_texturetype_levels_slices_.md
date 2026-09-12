> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/newtextureviewwithpixelformat:texturetype:levels:slices:](https://developer.apple.com/documentation/metal/mtltexture/newtextureviewwithpixelformat:texturetype:levels:slices:)

# newTextureViewWithPixelFormat:textureType:levels:slices:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new view of the texture, reinterpreting a subset of its data using a different type and pixel format.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureViewWithPixelFormat:(MTLPixelFormat) pixelFormat textureType:(MTLTextureType) textureType levels:(NSRange) levelRange slices:(NSRange) sliceRange;
```

## Parameters

- `pixelFormat`: A new pixel format, which needs to be compatible with the original pixel format.
- `textureType`: A new texture type, which can be cast according to the original texture type as listed in the table below.
- `levelRange`: A new base level range that restricts which mipmap levels are visible in the new texture.
- `sliceRange`: A new base slice range that restricts which array slices are visible in the new texture.

<a id="return-value"></a>

## Return Value

A new texture object that shares the same storage allocation of the calling texture object.

<a id="discussion"></a>

## Discussion

The texture type can be cast between the targets listed in the following table.

| Original texture type | New texture type |
| --- | --- |
| [MTLTextureType1D](../mtltexturetype/type1d.md) | [MTLTextureType1D](../mtltexturetype/type1d.md) |
| [MTLTextureType2D](../mtltexturetype/type2d.md) | [MTLTextureType2D](../mtltexturetype/type2d.md) or [MTLTextureType2DArray](../mtltexturetype/type2darray.md) |
| [MTLTextureType2DArray](../mtltexturetype/type2darray.md), [MTLTextureTypeCube](../mtltexturetype/typecube.md), or [MTLTextureTypeCubeArray](../mtltexturetype/typecubearray.md) | [MTLTextureType2D](../mtltexturetype/type2d.md), [MTLTextureType2DArray](../mtltexturetype/type2darray.md), [MTLTextureTypeCube](../mtltexturetype/typecube.md), or [MTLTextureTypeCubeArray](../mtltexturetype/typecubearray.md) |
| [MTLTextureType3D](../mtltexturetype/type3d.md) | [MTLTextureType3D](../mtltexturetype/type3d.md) |

The `length` value of the `sliceRange` parameter needs to be `6` if the new texture type value is [MTLTextureTypeCube](../mtltexturetype/typecube.md), or a multiple of `6` if the new texture type value is [MTLTextureTypeCubeArray](../mtltexturetype/typecubearray.md).

For more information on pixel format restrictions, see [newTextureViewWithPixelFormat:](maketextureview%28pixelformat_%29.md)

## Default Implementations

### MTLTexture Implementations

- [makeTextureView(pixelFormat:textureType:levels:slices:)](maketextureview%28pixelformat_texturetype_levels_slices_%29.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type and pixel format.

## See Also

### Related Documentation

- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentTexture](parent.md): The parent texture used to create this texture, if any.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.

### Creating textures by reinterpreting existing texture data

- [newTextureViewWithPixelFormat:](maketextureview%28pixelformat_%29.md): Creates a new view of the texture, reinterpreting its data using a different pixel format.
- [newTextureViewWithPixelFormat:textureType:levels:slices:swizzle:](newtextureviewwithpixelformat_texturetype_levels_slices_swizzle_.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type, pixel format, and swizzle pattern.
