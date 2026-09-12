> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/sparsetilesize(with:pixelformat:samplecount:)](https://developer.apple.com/documentation/metal/mtldevice/sparsetilesize(with:pixelformat:samplecount:))

# sparseTileSize(with:pixelFormat:sampleCount:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the dimensions of a sparse tile for a texture.

## Declaration

```swift
func sparseTileSize(with textureType: MTLTextureType, pixelFormat: MTLPixelFormat, sampleCount: Int) -> MTLSize
```

## Parameters

- `textureType`: An [MTLTextureType](../mtltexturetype.md) instance.
- `pixelFormat`: An [MTLPixelFormat](../mtlpixelformat.md) instance.
- `sampleCount`: The number of samples for each pixel.

<a id="return-value"></a>

## Return Value

A new [MTLSize](../mtlsize.md) instance.

## Mentioned In

- [Converting between pixel regions and sparse tile regions](../converting-between-pixel-regions-and-sparse-tile-regions.md)

<a id="discussion"></a>

## Discussion

The size of a sparse tile, in bytes, is the same for all sparse textures on a GPU device object. Because the size of pixels may vary, the actual dimensions of a sparse tile vary based on the texture and the pixel format. Use this method to get the dimensions of the tile for a particular format. Use these dimensions when converting regions from pixel-based units to sparse tile units and vice versa.

## See Also

### Working with sparse textures

- [sparseTileSize(textureType:pixelFormat:sampleCount:sparsePageSize:)](sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSizeInBytes(sparsePageSize:)](sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparsePixelRegions(\_:toTileRegions:withTileSize:alignmentMode:numRegions:)](convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions(\_:toPixelRegions:withTileSize:numRegions:)](convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](../mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.

# sparseTileSizeWithTextureType:pixelFormat:sampleCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the dimensions of a sparse tile for a texture.

## Declaration

```objectivec
- (MTLSize) sparseTileSizeWithTextureType:(MTLTextureType) textureType pixelFormat:(MTLPixelFormat) pixelFormat sampleCount:(NSUInteger) sampleCount;
```

## Parameters

- `textureType`: An [MTLTextureType](../mtltexturetype.md) instance.
- `pixelFormat`: An [MTLPixelFormat](../mtlpixelformat.md) instance.
- `sampleCount`: The number of samples for each pixel.

<a id="return-value"></a>

## Return Value

A new [MTLSize](../mtlsize.md) instance.

## Mentioned In

- [Converting between pixel regions and sparse tile regions](../converting-between-pixel-regions-and-sparse-tile-regions.md)

<a id="discussion"></a>

## Discussion

The size of a sparse tile, in bytes, is the same for all sparse textures on a GPU device object. Because the size of pixels may vary, the actual dimensions of a sparse tile vary based on the texture and the pixel format. Use this method to get the dimensions of the tile for a particular format. Use these dimensions when converting regions from pixel-based units to sparse tile units and vice versa.

## See Also

### Working with sparse textures

- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:sparsePageSize:](sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSizeInBytesForSparsePageSize:](sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparsePixelRegions:toTileRegions:withTileSize:alignmentMode:numRegions:](convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions:toPixelRegions:withTileSize:numRegions:](convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](../mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.
