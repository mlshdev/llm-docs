> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/cleardepth](https://developer.apple.com/documentation/metalkit/mtkview/cleardepth)

# clearDepth (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The depth value to use to clear the depth target when creating a render pass descriptor.

## Declaration

```swift
var clearDepth: Double { get set }
```

<a id="Discussion"></a>

## Discussion

If you specified that you want a depth texture, the view configures any render passes to use the depth texture, with a load action of [MTLLoadAction.clear](../../metal/mtlloadaction/clear.md) and the value of this property as the value to clear it to. The default value is `1.0`.

## See Also

### Configuring the Render Target Properties

- [depthStencilPixelFormat](depthstencilpixelformat.md): The format used to generate the [depthStencilTexture](depthstenciltexture.md) object.
- [depthStencilAttachmentTextureUsage](depthstencilattachmenttextureusage.md): The texture usage characteristics that the view uses when creating the depth and stencil textures.
- [clearStencil](clearstencil.md): The stencil value to use to clear the stencil target when creating a render pass descriptor.

# clearDepth (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The depth value to use to clear the depth target when creating a render pass descriptor.

## Declaration

```objectivec
@property (nonatomic) double clearDepth;
```

<a id="Discussion"></a>

## Discussion

If you specified that you want a depth texture, the view configures any render passes to use the depth texture, with a load action of [MTLLoadActionClear](../../metal/mtlloadaction/clear.md) and the value of this property as the value to clear it to. The default value is `1.0`.

## See Also

### Configuring the Render Target Properties

- [depthStencilPixelFormat](depthstencilpixelformat.md): The format used to generate the [depthStencilTexture](depthstenciltexture.md) object.
- [depthStencilAttachmentTextureUsage](depthstencilattachmenttextureusage.md): The texture usage characteristics that the view uses when creating the depth and stencil textures.
- [clearStencil](clearstencil.md): The stencil value to use to clear the stencil target when creating a render pass descriptor.
