> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertextextures(_:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertextextures(_:range:))

# setVertexTextures(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS 8.0+ · visionOS

Assigns multiple textures to a range of entries in the vertex shader argument table.

## Declaration

```swift
func setVertexTextures(_ textures: [(any MTLTexture)?], range: Range<Int>)
```

## Parameters

- `textures`: An array of [MTLTexture](../mtltexture.md) instances the command assigns to entries in the vertex shader argument table for textures.
- `range`: A span of integers that represent the entries in the vertex shader argument table for textures. Each entry stores a record of the corresponding element in `textures`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setVertexTextures:withRange:](setvertextextures_withrange_.md).

## See Also

### Assigning textures

- [setVertexTexture(\_:index:)](setvertextexture%28__index_%29.md): Assigns a texture to an entry in the vertex shader argument table.
