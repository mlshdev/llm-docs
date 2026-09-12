> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmenttextures:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmenttextures:withrange:)

# setFragmentTextures:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns multiple textures to a range of entries in the fragment shader argument table.

## Declaration

```objectivec
- (void) setFragmentTextures:(id<MTLTexture> const[]) textures withRange:(NSRange) range;
```

## Parameters

- `textures`: A pointer to a C array of [MTLTexture](../mtltexture.md) instances the command assigns to entries in the fragment shader argument table for textures.
- `range`: A span of integers that represent the entries in the fragment shader argument table for textures. Each entry stores a record of the corresponding element in `textures`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

> **Note**

>  The Swift version of this method is [setFragmentTextures(\_:range:)](setfragmenttextures%28__range_%29.md).

## See Also

### Assigning textures

- [setFragmentTexture:atIndex:](setfragmenttexture%28__index_%29.md): Assigns a texture to an entry in the fragment shader argument table.
