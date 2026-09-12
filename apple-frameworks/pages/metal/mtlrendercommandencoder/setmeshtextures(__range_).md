> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setmeshtextures(_:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setmeshtextures(_:range:))

# setMeshTextures(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

Assigns multiple textures to a range of entries in the mesh shader argument table.

## Declaration

```swift
func setMeshTextures(_ textures: [(any MTLTexture)?], range: Range<Int>)
```

## Parameters

- `textures`: An array of [MTLTexture](../mtltexture.md) instances the command assigns to entries in the mesh shader argument table for textures.
- `range`: A span of integers that represent the entries in the mesh shader argument table for textures. Each entry stores a record of the corresponding element in `textures`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setMeshTextures:withRange:](setmeshtextures_withrange_.md).

## See Also

### Assigning textures for mesh shaders

- [setMeshTexture(\_:index:)](setmeshtexture%28__index_%29.md): Assigns a texture to an entry in the mesh shader argument table.
