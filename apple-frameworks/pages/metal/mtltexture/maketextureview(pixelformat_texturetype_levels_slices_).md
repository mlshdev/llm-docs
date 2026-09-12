> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/maketextureview(pixelformat:texturetype:levels:slices:)](https://developer.apple.com/documentation/metal/mtltexture/maketextureview(pixelformat:texturetype:levels:slices:))

# makeTextureView(pixelFormat:textureType:levels:slices:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS

Creates a new view of the texture, reinterpreting a subset of its data using a different type and pixel format.

## Declaration

```swift
func makeTextureView(pixelFormat: MTLPixelFormat, textureType: MTLTextureType, levels levelRange: Range<Int>, slices sliceRange: Range<Int>) -> (any MTLTexture)?
```

## Parameters

- `pixelFormat`: A new pixel format, which needs to be compatible with the original pixel format.
- `textureType`: A new texture type, which can be cast according to the original texture type as listed the table below.
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
| [MTLTextureType.type1D](../mtltexturetype/type1d.md) | [MTLTextureType.type1D](../mtltexturetype/type1d.md) |
| [MTLTextureType.type2D](../mtltexturetype/type2d.md) | [MTLTextureType.type2D](../mtltexturetype/type2d.md) or [MTLTextureType.type2DArray](../mtltexturetype/type2darray.md) |
| [MTLTextureType.type2DArray](../mtltexturetype/type2darray.md), [MTLTextureType.typeCube](../mtltexturetype/typecube.md), or [MTLTextureType.typeCubeArray](../mtltexturetype/typecubearray.md) | [MTLTextureType.type2D](../mtltexturetype/type2d.md), [MTLTextureType.type2DArray](../mtltexturetype/type2darray.md), [MTLTextureType.typeCube](../mtltexturetype/typecube.md), or [MTLTextureType.typeCubeArray](../mtltexturetype/typecubearray.md) |
| [MTLTextureType.type3D](../mtltexturetype/type3d.md) | [MTLTextureType.type3D](../mtltexturetype/type3d.md) |

The `length` value of the `sliceRange` parameter needs to be `6` if the new texture type value is [MTLTextureType.typeCube](../mtltexturetype/typecube.md), or a multiple of `6` if the new texture type value is [MTLTextureType.typeCubeArray](../mtltexturetype/typecubearray.md).

For more information on pixel format restrictions, see [makeTextureView(pixelFormat:)](maketextureview%28pixelformat_%29.md)

## See Also

### Related Documentation

- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parent](parent.md): The parent texture used to create this texture, if any.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.

### Creating textures by reinterpreting existing texture data

- [makeTextureView(pixelFormat:)](maketextureview%28pixelformat_%29.md): Creates a new view of the texture, reinterpreting its data using a different pixel format.
- [makeTextureView(pixelFormat:textureType:levels:slices:swizzle:)](maketextureview%28pixelformat_texturetype_levels_slices_swizzle_%29.md): Creates a new view of the texture, reinterpreting a subset of its data using a different type, pixel format, and swizzle pattern.
