> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settiletexture(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settiletexture(_:index:))

# setTileTexture(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Assigns a texture to an entry in the tile shader argument table.

## Declaration

```swift
func setTileTexture(_ texture: (any MTLTexture)?, index: Int)
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance the command assigns to an entry in the tile shader argument table for textures.
- `index`: An integer that represents the entry in the tile shader argument table for textures that stores a record of `texture`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning textures

- [setTileTextures(\_:range:)](settiletextures%28__range_%29.md): Assigns multiple textures to a range of entries in the tile shader argument table.

# setTileTexture:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Assigns a texture to an entry in the tile shader argument table.

## Declaration

```objectivec
- (void) setTileTexture:(id<MTLTexture>) texture atIndex:(NSUInteger) index;
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance the command assigns to an entry in the tile shader argument table for textures.
- `index`: An integer that represents the entry in the tile shader argument table for textures that stores a record of `texture`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning textures

- [setTileTextures:withRange:](settiletextures_withrange_.md): Assigns multiple textures to a range of entries in the tile shader argument table.
