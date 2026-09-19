> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdplayer/texturelevelinfo

# USDPlayer.TextureLevelInfo

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Byte-layout descriptor for a single mip level within a [USDPlayer.TextureData](texturedata.md).

## Declaration

```swift
struct TextureLevelInfo
```

## Topics

### Instance Properties

- [byteCountPerImage](texturelevelinfo/bytecountperimage.md): Total byte size of this mip level.
- [byteCountPerRow](texturelevelinfo/bytecountperrow.md): Row stride in bytes.
- [dataOffset](texturelevelinfo/dataoffset.md): Byte offset into [data](texturedata/data.md) where this mip level begins.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
