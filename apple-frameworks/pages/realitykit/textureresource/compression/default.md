> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/compression/default](https://developer.apple.com/documentation/realitykit/textureresource/compression/default)

# default

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A texture you can create and export with lossy compression.

## Declaration

```swift
static var `default`: TextureResource.Compression { get }
```

<a id="discussion"></a>

## Discussion

The selected compression preserves perceptual texture details (no aggressive compression).

## See Also

### Specifying the compression settings

- [none](none.md): A texture you can create with no compression.
- [astc(blockSize:quality:)](astc%28blocksize_quality_%29.md): Compresses the imported image with ASTC.
- [TextureResource.Compression.ASTCBlockSize](astcblocksize.md): The compressed block size.
- [TextureResource.Compression.ASTCQuality](astcquality.md): Selects the level of processing time allocated to achieve compression.
