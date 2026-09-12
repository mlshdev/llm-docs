> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/contents/init(mipmaplevels:)](https://developer.apple.com/documentation/realitykit/textureresource/contents/init(mipmaplevels:))

# init(mipmapLevels:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a texture contents object from an array of mipmaps.

## Declaration

```swift
init(mipmapLevels: [TextureResource.Contents.MipmapLevel])
```

## Parameters

- `mipmapLevels`: Pixel data for each mipmap level, starting with mipmap level `0`. Supply at least one mipmap level.

<a id="discussion"></a>

## Discussion

> **Note**

> Creating 3D textures requires you to build `MipmapLevel` with `mip()` methods that have a `bytesPerImage` parameter.
