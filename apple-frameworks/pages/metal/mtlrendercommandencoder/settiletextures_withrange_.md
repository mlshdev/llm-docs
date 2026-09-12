> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settiletextures:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settiletextures:withrange:)

# setTileTextures:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Assigns multiple textures to a range of entries in the tile shader argument table.

## Declaration

```objectivec
- (void) setTileTextures:(id<MTLTexture> const[]) textures withRange:(NSRange) range;
```

## Parameters

- `textures`: A pointer to a C array of [MTLTexture](../mtltexture.md) instances the command assigns to entries in the tile shader argument table for textures.
- `range`: A span of integers that represent the entries in the tile shader argument table for textures. Each entry stores a record of the corresponding element in `textures`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

> **Note**

>  The Swift version of this method is [setTileTextures(\_:range:)](settiletextures%28__range_%29.md).

## See Also

### Assigning textures

- [setTileTexture:atIndex:](settiletexture%28__index_%29.md): Assigns a texture to an entry in the tile shader argument table.
