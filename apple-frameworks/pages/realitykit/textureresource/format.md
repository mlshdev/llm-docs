> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/format](https://developer.apple.com/documentation/realitykit/textureresource/format)

# TextureResource.Format

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The pixel format and encoding of a texture.

## Declaration

```swift
struct Format
```

<a id="overview"></a>

## Overview

The texture’s format controls the sampling and conversions (if any) to use when rendering with that texture.

## Topics

### Creating the format

- [color(\_:pixelFormat:)](format/color%28__pixelformat_%29.md): Indicates that a texture contains color data to interpret in a specific color space.
- [normal(\_:pixelFormat:)](format/normal%28__pixelformat_%29.md): Indicates that a texture is a normal map.
- [raw(pixelFormat:)](format/raw%28pixelformat_%29.md): Indicates a texture for unmodified use by a shader.

### Defining the format profile

- [TextureResource.Format.ColorSpace](format/colorspace.md): A profile that specifies the interpretation of pixel values as a color.
- [TextureResource.Format.NormalEncoding](format/normalencoding.md): A profile that specifies the interpretation of pixel values as a normal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a texture resource

- [TextureResource.Contents](contents.md): An object that references the pixel data for each mipmap level of a texture.
- [TextureResource.Compression](compression.md): The compression to apply when importing an image as a texture.
