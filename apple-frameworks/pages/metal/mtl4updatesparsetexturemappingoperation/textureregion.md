> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4updatesparsetexturemappingoperation/textureregion](https://developer.apple.com/documentation/metal/mtl4updatesparsetexturemappingoperation/textureregion)

# textureRegion (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The region in the texture to update, in tiles.

## Declaration

```swift
var textureRegion: MTLRegion
```

<a id="discussion"></a>

## Discussion

When [textureLevel](texturelevel.md) is equal to the texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md), set `origin.y` to `0` and `size.height` to `1`.

# textureRegion (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The region in the texture to update, in tiles.

## Declaration

```objectivec
MTLRegion textureRegion;
```

<a id="discussion"></a>

## Discussion

When [textureLevel](texturelevel.md) is equal to the texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md), set `origin.y` to `0` and `size.height` to `1`.
