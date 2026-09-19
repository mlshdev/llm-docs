> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/textureresource/compression/astc(blocksize:quality:)

# astc(blockSize:quality:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** macOS 15.0+

Compresses the imported image with ASTC.

## Declaration

```swift
static func astc(blockSize: TextureResource.Compression.ASTCBlockSize, quality: TextureResource.Compression.ASTCQuality = .fast) -> TextureResource.Compression
```

<a id="discussion"></a>

## Discussion

If the device doesn’t support ASTC pixel formats, RealityKit applies compression as part of the `.reality` file export.

> **Note**

> Remove an unused alpha channel from the source image to get better compression quality.

## See Also

### Specifying the compression settings

- [default](default.md): A texture you can create and export with lossy compression.
- [none](none.md): A texture you can create with no compression.
- [TextureResource.Compression.ASTCBlockSize](astcblocksize.md): The compressed block size.
- [TextureResource.Compression.ASTCQuality](astcquality.md): Selects the level of processing time allocated to achieve compression.
