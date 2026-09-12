> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setobjecttexture(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setobjecttexture(_:index:))

# setObjectTexture(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a texture to an entry in the object shader argument table.

## Declaration

```swift
func setObjectTexture(_ texture: (any MTLTexture)?, index: Int)
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance the command assigns to an entry in the object shader argument table for textures.
- `index`: An integer that represents the entry in the object shader argument table for textures that stores a record of `texture`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning textures for object shaders

- [setObjectTextures(\_:range:)](setobjecttextures%28__range_%29.md): Assigns multiple textures to a range of entries in the object shader argument table.

# setObjectTexture:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a texture to an entry in the object shader argument table.

## Declaration

```objectivec
- (void) setObjectTexture:(id<MTLTexture>) texture atIndex:(NSUInteger) index;
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance the command assigns to an entry in the object shader argument table for textures.
- `index`: An integer that represents the entry in the object shader argument table for textures that stores a record of `texture`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning textures for object shaders

- [setObjectTextures:withRange:](setobjecttextures_withrange_.md): Assigns multiple textures to a range of entries in the object shader argument table.
