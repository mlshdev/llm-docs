> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/compression/none](https://developer.apple.com/documentation/realitykit/textureresource/compression/none)

# none

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A texture you can create with no compression.

## Declaration

```swift
static var none: TextureResource.Compression { get }
```

<a id="discussion"></a>

## Discussion

If you export this to a `.reality` file using [write(to:)](../../entity/write%28to_%29.md), the texture remains uncompressed.

## See Also

### Specifying the compression settings

- [default](default.md): A texture you can create and export with lossy compression.
- [astc(blockSize:quality:)](astc%28blocksize_quality_%29.md): Compresses the imported image with ASTC.
- [TextureResource.Compression.ASTCBlockSize](astcblocksize.md): The compressed block size.
- [TextureResource.Compression.ASTCQuality](astcquality.md): Selects the level of processing time allocated to achieve compression.
