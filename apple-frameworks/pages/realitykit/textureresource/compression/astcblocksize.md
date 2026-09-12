> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/compression/astcblocksize](https://developer.apple.com/documentation/realitykit/textureresource/compression/astcblocksize)

# TextureResource.Compression.ASTCBlockSize

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The compressed block size.

## Declaration

```swift
enum ASTCBlockSize
```

<a id="overview"></a>

## Overview

> **Note**

> RealityKit stores block pixel data in groups of 128 bits. For instance, a `block4x4` bits per pixel is 128/(4\*4) = 8 bit per pixel.

## Topics

### Compression block sizes

- [TextureResource.Compression.ASTCBlockSize.block4x4](astcblocksize/block4x4.md)
- [TextureResource.Compression.ASTCBlockSize.block5x4](astcblocksize/block5x4.md)
- [TextureResource.Compression.ASTCBlockSize.block5x5](astcblocksize/block5x5.md)
- [TextureResource.Compression.ASTCBlockSize.block6x5](astcblocksize/block6x5.md)
- [TextureResource.Compression.ASTCBlockSize.block6x6](astcblocksize/block6x6.md)
- [TextureResource.Compression.ASTCBlockSize.block8x5](astcblocksize/block8x5.md)
- [TextureResource.Compression.ASTCBlockSize.block8x6](astcblocksize/block8x6.md)
- [TextureResource.Compression.ASTCBlockSize.block8x8](astcblocksize/block8x8.md)
- [TextureResource.Compression.ASTCBlockSize.block10x10](astcblocksize/block10x10.md)
- [TextureResource.Compression.ASTCBlockSize.block10x5](astcblocksize/block10x5.md)
- [TextureResource.Compression.ASTCBlockSize.block10x6](astcblocksize/block10x6.md)
- [TextureResource.Compression.ASTCBlockSize.block10x8](astcblocksize/block10x8.md)
- [TextureResource.Compression.ASTCBlockSize.block12x10](astcblocksize/block12x10.md)
- [TextureResource.Compression.ASTCBlockSize.block12x12](astcblocksize/block12x12.md)

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
- [TextureResource.Compression.ASTCQuality](astcquality.md): Selects the level of processing time allocated to achieve compression.
