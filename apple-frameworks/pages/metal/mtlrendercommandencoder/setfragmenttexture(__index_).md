> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmenttexture(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmenttexture(_:index:))

# setFragmentTexture(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a texture to an entry in the fragment shader argument table.

## Declaration

```swift
func setFragmentTexture(_ texture: (any MTLTexture)?, index: Int)
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance the command assigns to an entry in the fragment shader argument table for textures.
- `index`: An integer that represents the entry in the fragment shader argument table for textures that stores a record of `texture`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning textures

- [setFragmentTextures(\_:range:)](setfragmenttextures%28__range_%29.md): Assigns multiple textures to a range of entries in the fragment shader argument table.

# setFragmentTexture:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a texture to an entry in the fragment shader argument table.

## Declaration

```objectivec
- (void) setFragmentTexture:(id<MTLTexture>) texture atIndex:(NSUInteger) index;
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance the command assigns to an entry in the fragment shader argument table for textures.
- `index`: An integer that represents the entry in the fragment shader argument table for textures that stores a record of `texture`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning textures

- [setFragmentTextures:withRange:](setfragmenttextures_withrange_.md): Assigns multiple textures to a range of entries in the fragment shader argument table.
