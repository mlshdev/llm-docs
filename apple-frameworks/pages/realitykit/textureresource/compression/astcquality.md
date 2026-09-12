> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/compression/astcquality](https://developer.apple.com/documentation/realitykit/textureresource/compression/astcquality)

# TextureResource.Compression.ASTCQuality

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Selects the level of processing time allocated to achieve compression.

## Declaration

```swift
enum ASTCQuality
```

<a id="overview"></a>

## Overview

> **Important**

> Given its processing cost, runtime compression isn’t recommended for interactive apps, as opposed to loading `.reality` files or `.ktx` precompressed textures. Higher quality levels are recommended for pipelines assembling scenes you intend to export to `.reality` files.

## Topics

### Compression qualities

- [TextureResource.Compression.ASTCQuality.exhaustive](astcquality/exhaustive.md): Compresses optimally, achieving minor gains over high-level compression at the cost of much longer processing times.
- [TextureResource.Compression.ASTCQuality.fast](astcquality/fast.md): Compresses as fast as possible.
- [TextureResource.Compression.ASTCQuality.high](astcquality/high.md): Compresses with a focus on quality, reaching close to optimal quality while still spending much less time than exhaustive-level compression.
- [TextureResource.Compression.ASTCQuality.normal](astcquality/normal.md): Compresses with a good balance between quality and processing time.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the compression settings

- [default](default.md): A texture you can create and export with lossy compression.
- [none](none.md): A texture you can create with no compression.
- [astc(blockSize:quality:)](astc%28blocksize_quality_%29.md): Compresses the imported image with ASTC.
- [TextureResource.Compression.ASTCBlockSize](astcblocksize.md): The compressed block size.
