> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setmeshtexture(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setmeshtexture(_:index:))

# setMeshTexture(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a texture to an entry in the mesh shader argument table.

## Declaration

```swift
func setMeshTexture(_ texture: (any MTLTexture)?, index: Int)
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance the command assigns to an entry in the mesh shader argument table for textures.
- `index`: An integer that represents the entry in the mesh shader argument table for textures that stores a record of `texture`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning textures for mesh shaders

- [setMeshTextures(\_:range:)](setmeshtextures%28__range_%29.md): Assigns multiple textures to a range of entries in the mesh shader argument table.

# setMeshTexture:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a texture to an entry in the mesh shader argument table.

## Declaration

```objectivec
- (void) setMeshTexture:(id<MTLTexture>) texture atIndex:(NSUInteger) index;
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance the command assigns to an entry in the mesh shader argument table for textures.
- `index`: An integer that represents the entry in the mesh shader argument table for textures that stores a record of `texture`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning textures for mesh shaders

- [setMeshTextures:withRange:](setmeshtextures_withrange_.md): Assigns multiple textures to a range of entries in the mesh shader argument table.
