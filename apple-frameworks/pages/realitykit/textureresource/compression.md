> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/compression](https://developer.apple.com/documentation/realitykit/textureresource/compression)

# TextureResource.Compression

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The compression to apply when importing an image as a texture.

## Declaration

```swift
struct Compression
```

<a id="overview"></a>

## Overview

Compression allows varying levels of memory usage gains at the cost of image-quality reduction.

## Topics

### Specifying the compression settings

- [default](compression/default.md): A texture you can create and export with lossy compression.
- [none](compression/none.md): A texture you can create with no compression.
- [astc(blockSize:quality:)](compression/astc%28blocksize_quality_%29.md): Compresses the imported image with ASTC.
- [TextureResource.Compression.ASTCBlockSize](compression/astcblocksize.md): The compressed block size.
- [TextureResource.Compression.ASTCQuality](compression/astcquality.md): Selects the level of processing time allocated to achieve compression.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a texture resource

- [TextureResource.Contents](contents.md): An object that references the pixel data for each mipmap level of a texture.
- [TextureResource.Format](format.md): The pixel format and encoding of a texture.
