> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/contents](https://developer.apple.com/documentation/realitykit/textureresource/contents)

# TextureResource.Contents

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

An object that references the pixel data for each mipmap level of a texture.

## Declaration

```swift
struct Contents
```

<a id="overview"></a>

## Overview

Mipmaps are progressively smaller versions of the same texture image. Each level is half the size of the previous level, with a minimum size of 1 pixel in each dimension.

## Topics

### Creating the content

- [init(mipmapLevels:)](contents/init%28mipmaplevels_%29.md): Creates a texture contents object from an array of mipmaps.

### Defining the content

- [TextureResource.Contents.MipmapLevel](contents/mipmaplevel.md): An object that references the pixel data for a single mipmap of a texture.
- [TextureResource.Contents.Slice](contents/slice.md): An object that references the pixel data for a single slice of a mipmap.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a texture resource

- [TextureResource.Format](format.md): The pixel format and encoding of a texture.
- [TextureResource.Compression](compression.md): The compression to apply when importing an image as a texture.
