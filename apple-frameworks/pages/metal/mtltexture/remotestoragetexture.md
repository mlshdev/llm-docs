> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/remotestoragetexture](https://developer.apple.com/documentation/metal/mtltexture/remotestoragetexture)

# remoteStorageTexture (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

The texture on another GPU that the texture was created from, if any.

> Not applicable on Apple Silicon

## Declaration

```swift
var remoteStorageTexture: (any MTLTexture)? { get }
```

<a id="discussion"></a>

## Discussion

If the value of this property is non-`nil`, it contains a reference to the [MTLTexture](../mtltexture.md) instance that created this texture. If the texture isn’t a remote view, the value of this property is `nil`.

You can use remote views only as the source for copy commands encoded by an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md).

## See Also

### Creating views of textures on other GPUs

- [makeRemoteTextureView(\_:)](makeremotetextureview%28__%29.md): Deprecated. Creates a remote texture view for another GPU in the same peer group.

# remoteStorageTexture (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

The texture on another GPU that the texture was created from, if any.

> Not applicable on Apple Silicon

## Declaration

```objectivec
@property (readonly, nullable) id<MTLTexture> remoteStorageTexture;
```

<a id="discussion"></a>

## Discussion

If the value of this property is non-`nil`, it contains a reference to the [MTLTexture](../mtltexture.md) instance that created this texture. If the texture isn’t a remote view, the value of this property is `nil`.

You can use remote views only as the source for copy commands encoded by an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md).

## See Also

### Creating views of textures on other GPUs

- [newRemoteTextureViewForDevice:](makeremotetextureview%28__%29.md): Deprecated. Creates a remote texture view for another GPU in the same peer group.
