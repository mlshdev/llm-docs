> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsparsepagesize](https://developer.apple.com/documentation/metal/mtlsparsepagesize)

# MTLSparsePageSize (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The page size options, in kilobytes, for sparse textures.

## Declaration

```swift
enum MTLSparsePageSize
```

## Topics

### Sparse texture page sizes

- [MTLSparsePageSize.size16](mtlsparsepagesize/size16.md): Represents a sparse texture’s page size of 16 kilobytes.
- [MTLSparsePageSize.size64](mtlsparsepagesize/size64.md): Represents a sparse texture’s page size of 64 kilobytes.
- [MTLSparsePageSize.size256](mtlsparsepagesize/size256.md): Represents a sparse texture’s page size of 256 kilobytes.

### Initializers

- [init(rawValue:)](mtlsparsepagesize/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with sparse textures

- [sparseTileSize(textureType:pixelFormat:sampleCount:sparsePageSize:)](mtldevice/sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSize(with:pixelFormat:sampleCount:)](mtldevice/sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytes(sparsePageSize:)](mtldevice/sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](mtldevice/sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparsePixelRegions(\_:toTileRegions:withTileSize:alignmentMode:numRegions:)](mtldevice/convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions(\_:toPixelRegions:withTileSize:numRegions:)](mtldevice/convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparseTextureRegionAlignmentMode](mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.

# MTLSparsePageSize (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The page size options, in kilobytes, for sparse textures.

## Declaration

```objectivec
enum MTLSparsePageSize : NSInteger;
```

## Topics

### Sparse texture page sizes

- [MTLSparsePageSize16](mtlsparsepagesize/size16.md): Represents a sparse texture’s page size of 16 kilobytes.
- [MTLSparsePageSize64](mtlsparsepagesize/size64.md): Represents a sparse texture’s page size of 64 kilobytes.
- [MTLSparsePageSize256](mtlsparsepagesize/size256.md): Represents a sparse texture’s page size of 256 kilobytes.

## See Also

### Working with sparse textures

- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:sparsePageSize:](mtldevice/sparsetilesize%28texturetype_pixelformat_samplecount_sparsepagesize_%29.md): Returns the dimensions of a sparse tile for a texture that has a specific sparse page size.
- [sparseTileSizeWithTextureType:pixelFormat:sampleCount:](mtldevice/sparsetilesize%28with_pixelformat_samplecount_%29.md): Returns the dimensions of a sparse tile for a texture.
- [sparseTileSizeInBytesForSparsePageSize:](mtldevice/sparsetilesizeinbytes%28sparsepagesize_%29.md): Returns the size, in bytes, of a sparse tile the GPU device creates with a specific page size.
- [sparseTileSizeInBytes](mtldevice/sparsetilesizeinbytes.md): Returns the size, in bytes, of a sparse tile the GPU device creates using a default page size.
- [convertSparsePixelRegions:toTileRegions:withTileSize:alignmentMode:numRegions:](mtldevice/convertsparsepixelregions%28__totileregions_withtilesize_alignmentmode_numregions_%29.md): Converts a list of sparse pixel regions to tile regions.
- [convertSparseTileRegions:toPixelRegions:withTileSize:numRegions:](mtldevice/convertsparsetileregions%28__topixelregions_withtilesize_numregions_%29.md): Converts a list of sparse tile regions to pixel regions.
- [MTLSparseTextureRegionAlignmentMode](mtlsparsetextureregionalignmentmode.md): Options used when converting between a pixel-based region within a texture to a tile-based region.
