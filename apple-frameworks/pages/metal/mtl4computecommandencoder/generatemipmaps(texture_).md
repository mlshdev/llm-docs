> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/generatemipmaps(texture:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/generatemipmaps(texture:))

# generateMipmaps(texture:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that generates mipmaps for a texture instance from the base mipmap level up to the highest mipmap level.

## Declaration

```swift
func generateMipmaps(texture: any MTLTexture)
```

## Parameters

- `texture`: A mipmapped, color-renderable or color-filterable [MTLTexture](../mtltexture.md) instance the command generates mipmaps for.

<a id="discussion"></a>

## Discussion

This method generates mipmaps for a mipmapped texture. The texture you provide needs to have a [mipmapLevelCount](../mtltexture/mipmaplevelcount.md) greater than `1`, and a color-renderable or color-filterable [pixelFormat](../mtltexture/pixelformat.md).

# generateMipmapsForTexture: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that generates mipmaps for a texture instance from the base mipmap level up to the highest mipmap level.

## Declaration

```objectivec
- (void) generateMipmapsForTexture:(id<MTLTexture>) texture;
```

## Parameters

- `texture`: A mipmapped, color-renderable or color-filterable [MTLTexture](../mtltexture.md) instance the command generates mipmaps for.

<a id="discussion"></a>

## Discussion

This method generates mipmaps for a mipmapped texture. The texture you provide needs to have a [mipmapLevelCount](../mtltexture/mipmaplevelcount.md) greater than `1`, and a color-renderable or color-filterable [pixelFormat](../mtltexture/pixelformat.md).
