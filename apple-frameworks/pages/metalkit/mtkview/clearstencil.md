> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/clearstencil](https://developer.apple.com/documentation/metalkit/mtkview/clearstencil)

# clearStencil (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The stencil value to use to clear the stencil target when creating a render pass descriptor.

## Declaration

```swift
var clearStencil: UInt32 { get set }
```

<a id="Discussion"></a>

## Discussion

If you specified that you want a stencil texture, the view configures any render passes to use the stencil texture, with a load action of [MTLLoadAction.clear](../../metal/mtlloadaction/clear.md) and the value of this property as the value to clear it to. The default value is `0`.

## See Also

### Configuring the Render Target Properties

- [depthStencilPixelFormat](depthstencilpixelformat.md): The format used to generate the [depthStencilTexture](depthstenciltexture.md) object.
- [depthStencilAttachmentTextureUsage](depthstencilattachmenttextureusage.md): The texture usage characteristics that the view uses when creating the depth and stencil textures.
- [clearDepth](cleardepth.md): The depth value to use to clear the depth target when creating a render pass descriptor.

# clearStencil (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The stencil value to use to clear the stencil target when creating a render pass descriptor.

## Declaration

```objectivec
@property (nonatomic) uint32_t clearStencil;
```

<a id="Discussion"></a>

## Discussion

If you specified that you want a stencil texture, the view configures any render passes to use the stencil texture, with a load action of [MTLLoadActionClear](../../metal/mtlloadaction/clear.md) and the value of this property as the value to clear it to. The default value is `0`.

## See Also

### Configuring the Render Target Properties

- [depthStencilPixelFormat](depthstencilpixelformat.md): The format used to generate the [depthStencilTexture](depthstenciltexture.md) object.
- [depthStencilAttachmentTextureUsage](depthstencilattachmenttextureusage.md): The texture usage characteristics that the view uses when creating the depth and stencil textures.
- [clearDepth](cleardepth.md): The depth value to use to clear the depth target when creating a render pass descriptor.
