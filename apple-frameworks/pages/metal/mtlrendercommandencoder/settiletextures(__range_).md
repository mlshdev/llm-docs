> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settiletextures(_:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settiletextures(_:range:))

# setTileTextures(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS

Assigns multiple textures to a range of entries in the tile shader argument table.

## Declaration

```swift
func setTileTextures(_ textures: [(any MTLTexture)?], range: Range<Int>)
```

## Parameters

- `textures`: An array of [MTLTexture](../mtltexture.md) instances the command assigns to entries in the tile shader argument table for textures.
- `range`: A span of integers that represent the entries in the tile shader argument table for textures. Each entry stores a record of the corresponding element in `textures`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setTileTextures:withRange:](settiletextures_withrange_.md).

## See Also

### Assigning textures

- [setTileTexture(\_:index:)](settiletexture%28__index_%29.md): Assigns a texture to an entry in the tile shader argument table.
