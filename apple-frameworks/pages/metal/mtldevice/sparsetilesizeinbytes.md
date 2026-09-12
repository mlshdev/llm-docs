> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/sparsetilesizeinbytes](https://developer.apple.com/documentation/metal/mtldevice/sparsetilesizeinbytes)

# sparseTileSizeInBytes (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.

## Declaration

```swift
var sparseTileSizeInBytes: Int { get }
```

## Mentioned In

- [Creating sparse heaps and sparse textures](../creating-sparse-heaps-and-sparse-textures.md)

## See Also

### Working with sparse textures

- [sparseTileSize(textureType:pixelFormat:sampleCount:sparsePageSize:)](sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSize(with:pixelFormat:sampleCount:)](sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytes(sparsePageSize:)](sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [convertSparsePixelRegions(\_:toTileRegions:withTileSize:alignmentMode:numRegions:)](convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions(\_:toPixelRegions:withTileSize:numRegions:)](convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](../mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.

# sparseTileSizeInBytes (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.

## Declaration

```objectivec
@property (readonly) NSUInteger sparseTileSizeInBytes;
```

## Mentioned In

- [Creating sparse heaps and sparse textures](../creating-sparse-heaps-and-sparse-textures.md)

## See Also

### Working with sparse textures

- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:sparsePageSize:](sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:](sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytesForSparsePageSize:](sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [convertSparsePixelRegions:toTileRegions:withTileSize:alignmentMode:numRegions:](convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions:toPixelRegions:withTileSize:numRegions:](convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](../mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.
