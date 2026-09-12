> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/depthstencilstoragemode](https://developer.apple.com/documentation/metalkit/mtkview/depthstencilstoragemode)

# depthStencilStorageMode (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The storage mode that the packed depth and stencil texture use.

## Declaration

```swift
var depthStencilStorageMode: MTLStorageMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLStorageMode.private](../../metal/mtlstoragemode/private.md).

## See Also

### Retrieving Render Target Information

- [currentRenderPassDescriptor](currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [currentDrawable](currentdrawable.md): The drawable to use for the current frame.
- [depthStencilTexture](depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [multisampleColorTexture](multisamplecolortexture.md): The multisample color sample texture to render into.

# depthStencilStorageMode (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The storage mode that the packed depth and stencil texture use.

## Declaration

```objectivec
@property (nonatomic) MTLStorageMode depthStencilStorageMode;
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLStorageModePrivate](../../metal/mtlstoragemode/private.md).

## See Also

### Retrieving Render Target Information

- [currentRenderPassDescriptor](currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [currentDrawable](currentdrawable.md): The drawable to use for the current frame.
- [depthStencilTexture](depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [multisampleColorTexture](multisamplecolortexture.md): The multisample color sample texture to render into.
