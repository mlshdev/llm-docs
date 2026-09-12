> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/sparsetilesize(texturetype:pixelformat:samplecount:sparsepagesize:)](https://developer.apple.com/documentation/metal/mtldevice/sparsetilesize(texturetype:pixelformat:samplecount:sparsepagesize:))

# sparseTileSize(textureType:pixelFormat:sampleCount:sparsePageSize:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.

## Declaration

```swift
func sparseTileSize(textureType: MTLTextureType, pixelFormat: MTLPixelFormat, sampleCount: Int, sparsePageSize: MTLSparsePageSize) -> MTLSize
```

## Parameters

- `textureType`: An [MTLTextureType](../mtltexturetype.md) instance.
- `pixelFormat`: An [MTLPixelFormat](../mtlpixelformat.md) instance.
- `sampleCount`: The number of samples for each pixel.
- `sparsePageSize`: An [MTLSparsePageSize](../mtlsparsepagesize.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLSize](../mtlsize.md) instance.

## See Also

### Working with sparse textures

- [sparseTileSize(with:pixelFormat:sampleCount:)](sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytes(sparsePageSize:)](sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparsePixelRegions(\_:toTileRegions:withTileSize:alignmentMode:numRegions:)](convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions(\_:toPixelRegions:withTileSize:numRegions:)](convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](../mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.

# sparseTileSizeWithTextureType:pixelFormat:sampleCount:sparsePageSize: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.

## Declaration

```objectivec
- (MTLSize) sparseTileSizeWithTextureType:(MTLTextureType) textureType pixelFormat:(MTLPixelFormat) pixelFormat sampleCount:(NSUInteger) sampleCount sparsePageSize:(MTLSparsePageSize) sparsePageSize;
```

## Parameters

- `textureType`: An [MTLTextureType](../mtltexturetype.md) instance.
- `pixelFormat`: An [MTLPixelFormat](../mtlpixelformat.md) instance.
- `sampleCount`: The number of samples for each pixel.
- `sparsePageSize`: An [MTLSparsePageSize](../mtlsparsepagesize.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLSize](../mtlsize.md) instance.

## See Also

### Working with sparse textures

- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:](sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytesForSparsePageSize:](sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparsePixelRegions:toTileRegions:withTileSize:alignmentMode:numRegions:](convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions:toPixelRegions:withTileSize:numRegions:](convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](../mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.
