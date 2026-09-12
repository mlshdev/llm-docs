> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/depthstencilpixelformat](https://developer.apple.com/documentation/metalkit/mtkview/depthstencilpixelformat)

# depthStencilPixelFormat (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The format used to generate the [depthStencilTexture](depthstenciltexture.md) object.

## Declaration

```swift
var depthStencilPixelFormat: MTLPixelFormat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLPixelFormat.invalid](../../metal/mtlpixelformat/invalid.md), which means that the view doesn’t create a depth and stencil texture. If you set it to a different format, the view automatically creates those textures for you and configures them as part of any render passes that the view creates.

## See Also

### Configuring the Render Target Properties

- [depthStencilAttachmentTextureUsage](depthstencilattachmenttextureusage.md): The texture usage characteristics that the view uses when creating the depth and stencil textures.
- [clearDepth](cleardepth.md): The depth value to use to clear the depth target when creating a render pass descriptor.
- [clearStencil](clearstencil.md): The stencil value to use to clear the stencil target when creating a render pass descriptor.

# depthStencilPixelFormat (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The format used to generate the [depthStencilTexture](depthstenciltexture.md) object.

## Declaration

```objectivec
@property (nonatomic) MTLPixelFormat depthStencilPixelFormat;
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLPixelFormatInvalid](../../metal/mtlpixelformat/invalid.md), which means that the view doesn’t create a depth and stencil texture. If you set it to a different format, the view automatically creates those textures for you and configures them as part of any render passes that the view creates.

## See Also

### Configuring the Render Target Properties

- [depthStencilAttachmentTextureUsage](depthstencilattachmenttextureusage.md): The texture usage characteristics that the view uses when creating the depth and stencil textures.
- [clearDepth](cleardepth.md): The depth value to use to clear the depth target when creating a render pass descriptor.
- [clearStencil](clearstencil.md): The stencil value to use to clear the stencil target when creating a render pass descriptor.
