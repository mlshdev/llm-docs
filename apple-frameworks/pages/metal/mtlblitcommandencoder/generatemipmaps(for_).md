> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/generatemipmaps(for:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/generatemipmaps(for:))

# generateMipmaps(for:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a command that generates mipmaps for a texture from the base mipmap level up to the highest mipmap level.

## Declaration

```swift
func generateMipmaps(for texture: any MTLTexture)
```

## Parameters

- `texture`: A texture instance the command generates mipmaps for that has:

  - A [mipmapLevelCount](../mtltexture/mipmaplevelcount.md) property that’s greater than `1`
  - A [pixelFormat](../mtltexture/pixelformat.md) that’s color-renderable and color-filterable

## Mentioned In

- [Generating mipmap data](../generating-mipmap-data.md)

<a id="discussion"></a>

## Discussion

The command generates with scaled images for all levels up to the highest mipmap level.

> **Note**

>  The image filtering that GPU drivers use to generate the mipmaps may vary by the feature families ([MTLGPUFamily](../mtlgpufamily.md)) it supports.

# generateMipmapsForTexture: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a command that generates mipmaps for a texture from the base mipmap level up to the highest mipmap level.

## Declaration

```objectivec
- (void) generateMipmapsForTexture:(id<MTLTexture>) texture;
```

## Parameters

- `texture`: A texture instance the command generates mipmaps for that has:

  - A [mipmapLevelCount](../mtltexture/mipmaplevelcount.md) property that’s greater than `1`
  - A [pixelFormat](../mtltexture/pixelformat.md) that’s color-renderable and color-filterable

## Mentioned In

- [Generating mipmap data](../generating-mipmap-data.md)

<a id="discussion"></a>

## Discussion

The command generates with scaled images for all levels up to the highest mipmap level.

> **Note**

>  The image filtering that GPU drivers use to generate the mipmaps may vary by the feature families ([MTLGPUFamily](../mtlgpufamily.md)) it supports.
