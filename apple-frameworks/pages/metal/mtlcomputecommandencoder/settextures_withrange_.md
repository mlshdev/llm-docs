> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/settextures:withrange:](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/settextures:withrange:)

# setTextures:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Binds multiple textures to the texture argument table, allowing compute kernels to access their data on the GPU.

## Declaration

```objectivec
- (void) setTextures:(id<MTLTexture> const[]) textures withRange:(NSRange) range;
```

## Parameters

- `textures`: An array of [MTLTexture](../mtltexture.md) instances to bind to the texture argument table.
- `range`: The texture table indices to bind each of the `textures` to, in the order they appear.

<a id="discussion"></a>

## Discussion

> **Important**

>  This method requires that the number of instances in `textures` be the same as the length of `range`.

## See Also

### Binding textures

- [setTexture:atIndex:](settexture%28__index_%29.md): Binds a texture to the texture argument table, allowing compute kernels to access its data on the GPU.
