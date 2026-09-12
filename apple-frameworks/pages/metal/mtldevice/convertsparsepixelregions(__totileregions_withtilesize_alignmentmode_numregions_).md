> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/convertsparsepixelregions(_:totileregions:withtilesize:alignmentmode:numregions:)](https://developer.apple.com/documentation/metal/mtldevice/convertsparsepixelregions(_:totileregions:withtilesize:alignmentmode:numregions:))

# convertSparsePixelRegions(\_:toTileRegions:withTileSize:alignmentMode:numRegions:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Converts a list of sparse pixel regions to tile regions.

## Declaration

```swift
optional func convertSparsePixelRegions(_ pixelRegions: UnsafePointer<MTLRegion>, toTileRegions tileRegions: UnsafeMutablePointer<MTLRegion>, withTileSize tileSize: MTLSize, alignmentMode mode: MTLSparseTextureRegionAlignmentMode, numRegions: Int)
```

## Parameters

- `pixelRegions`: A pointer to a C array of pixel [MTLRegion](../mtlregion.md) instances.
- `tileRegions`: A pointer to a C array of tile [MTLRegion](../mtlregion.md) instances.
- `tileSize`: An [MTLSize](../mtlsize.md) instance that represents a sparse tile’s size, in pixels.
- `mode`: An [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md) instance.
- `numRegions`: The number of regions you want the method to convert.

## Mentioned In

- [Converting between pixel regions and sparse tile regions](../converting-between-pixel-regions-and-sparse-tile-regions.md)

## See Also

### Working with sparse textures

- [sparseTileSize(textureType:pixelFormat:sampleCount:sparsePageSize:)](sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSize(with:pixelFormat:sampleCount:)](sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytes(sparsePageSize:)](sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparseTileRegions(\_:toPixelRegions:withTileSize:numRegions:)](convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](../mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.

# convertSparsePixelRegions:toTileRegions:withTileSize:alignmentMode:numRegions: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Converts a list of sparse pixel regions to tile regions.

## Declaration

```objectivec
- (void) convertSparsePixelRegions:(const MTLRegion[]) pixelRegions toTileRegions:(MTLRegion[]) tileRegions withTileSize:(MTLSize) tileSize alignmentMode:(MTLSparseTextureRegionAlignmentMode) mode numRegions:(NSUInteger) numRegions;
```

## Parameters

- `pixelRegions`: A pointer to a C array of pixel [MTLRegion](../mtlregion.md) instances.
- `tileRegions`: A pointer to a C array of tile [MTLRegion](../mtlregion.md) instances.
- `tileSize`: An [MTLSize](../mtlsize.md) instance that represents a sparse tile’s size, in pixels.
- `mode`: An [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md) instance.
- `numRegions`: The number of regions you want the method to convert.

## Mentioned In

- [Converting between pixel regions and sparse tile regions](../converting-between-pixel-regions-and-sparse-tile-regions.md)

## See Also

### Working with sparse textures

- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:sparsePageSize:](sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:](sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytesForSparsePageSize:](sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparseTileRegions:toPixelRegions:withTileSize:numRegions:](convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparsePageSize](../mtlsparsepagesize.md): The page size options, in kilobytes, for sparse textures.
- [MTLSparseTextureRegionAlignmentMode](../mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.
