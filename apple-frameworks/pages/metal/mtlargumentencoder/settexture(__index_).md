> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/settexture(_:index:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/settexture(_:index:))

# setTexture(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Encodes a reference to a texture into the argument buffer.

## Declaration

```swift
func setTexture(_ texture: (any MTLTexture)?, index: Int)
```

## Parameters

- `texture`: A texture the method encodes.
- `index`: The index of a texture within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding textures

- [setTextures(\_:range:)](settextures%28__range_%29.md): Encodes references to an array of textures into the argument buffer.

# setTexture:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Encodes a reference to a texture into the argument buffer.

## Declaration

```objectivec
- (void) setTexture:(id<MTLTexture>) texture atIndex:(NSUInteger) index;
```

## Parameters

- `texture`: A texture the method encodes.
- `index`: The index of a texture within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding textures

- [setTextures:withRange:](settextures_withrange_.md): Encodes references to an array of textures into the argument buffer.
