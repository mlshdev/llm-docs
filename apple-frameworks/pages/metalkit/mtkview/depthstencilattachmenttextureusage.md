> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/depthstencilattachmenttextureusage](https://developer.apple.com/documentation/metalkit/mtkview/depthstencilattachmenttextureusage)

# depthStencilAttachmentTextureUsage (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The texture usage characteristics that the view uses when creating the depth and stencil textures.

## Declaration

```swift
var depthStencilAttachmentTextureUsage: MTLTextureUsage { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [renderTarget](../../metal/mtltextureusage/rendertarget.md).

## See Also

### Configuring the Render Target Properties

- [depthStencilPixelFormat](depthstencilpixelformat.md): The format used to generate the [depthStencilTexture](depthstenciltexture.md) object.
- [clearDepth](cleardepth.md): The depth value to use to clear the depth target when creating a render pass descriptor.
- [clearStencil](clearstencil.md): The stencil value to use to clear the stencil target when creating a render pass descriptor.

# depthStencilAttachmentTextureUsage (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The texture usage characteristics that the view uses when creating the depth and stencil textures.

## Declaration

```objectivec
@property (nonatomic) MTLTextureUsage depthStencilAttachmentTextureUsage;
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLTextureUsageRenderTarget](../../metal/mtltextureusage/rendertarget.md).

## See Also

### Configuring the Render Target Properties

- [depthStencilPixelFormat](depthstencilpixelformat.md): The format used to generate the [depthStencilTexture](depthstenciltexture.md) object.
- [clearDepth](cleardepth.md): The depth value to use to clear the depth target when creating a render pass descriptor.
- [clearStencil](clearstencil.md): The stencil value to use to clear the stencil target when creating a render pass descriptor.
