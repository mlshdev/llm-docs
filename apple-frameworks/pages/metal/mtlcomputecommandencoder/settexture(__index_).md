> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/settexture(_:index:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/settexture(_:index:))

# setTexture(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Binds a texture to the texture argument table, allowing compute kernels to access its data on the GPU.

## Declaration

```swift
func setTexture(_ texture: (any MTLTexture)?, index: Int)
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance to bind to the texture argument table.
- `index`: The index the texture binds to in the texture argument table.

## See Also

### Binding textures

- [setTextures(\_:range:)](settextures%28__range_%29.md): Binds multiple textures to the texture argument table, allowing compute functions to access their data on the GPU.

# setTexture:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Binds a texture to the texture argument table, allowing compute kernels to access its data on the GPU.

## Declaration

```objectivec
- (void) setTexture:(id<MTLTexture>) texture atIndex:(NSUInteger) index;
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance to bind to the texture argument table.
- `index`: The index the texture binds to in the texture argument table.

## See Also

### Binding textures

- [setTextures:withRange:](settextures_withrange_.md): Binds multiple textures to the texture argument table, allowing compute kernels to access their data on the GPU.
