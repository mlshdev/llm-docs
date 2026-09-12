> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/multisamplecolorattachmenttextureusage](https://developer.apple.com/documentation/metalkit/mtkview/multisamplecolorattachmenttextureusage)

# multisampleColorAttachmentTextureUsage (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The texture usage characteristics that the view uses when creating multisample textures.

## Declaration

```swift
var multisampleColorAttachmentTextureUsage: MTLTextureUsage { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [renderTarget](../../metal/mtltextureusage/rendertarget.md).

## See Also

### Configuring Multisampling

- [sampleCount](samplecount.md): The sample count used to generate the [multisampleColorTexture](multisamplecolortexture.md) object.

# multisampleColorAttachmentTextureUsage (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The texture usage characteristics that the view uses when creating multisample textures.

## Declaration

```objectivec
@property (nonatomic) MTLTextureUsage multisampleColorAttachmentTextureUsage;
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLTextureUsageRenderTarget](../../metal/mtltextureusage/rendertarget.md).

## See Also

### Configuring Multisampling

- [sampleCount](samplecount.md): The sample count used to generate the [multisampleColorTexture](multisamplecolortexture.md) object.
