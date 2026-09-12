> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/samplecount](https://developer.apple.com/documentation/metalkit/mtkview/samplecount)

# sampleCount (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The sample count used to generate the [multisampleColorTexture](multisamplecolortexture.md) object.

## Declaration

```swift
var sampleCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Support for different sample count values varies by device object. Call the [supportsTextureSampleCount(\_:)](../../metal/mtldevice/supportstexturesamplecount%28__%29.md) method to determine if the device object supports the sample count you want.

The default value is `1`. When you set a value greater than `1`, the view creates and configures an intermediate set of multisample textures. The pixel format is the same as the one specified for the drawable; see [colorPixelFormat](colorpixelformat.md). When the view creates a render pass descriptor, the render pass uses those intermediate textures as the color render targets, with a store action to resolve these multisample textures into the drawable’s texture ([MTLStoreAction.multisampleResolve](../../metal/mtlstoreaction/multisampleresolve.md)).

## See Also

### Configuring Multisampling

- [multisampleColorAttachmentTextureUsage](multisamplecolorattachmenttextureusage.md): The texture usage characteristics that the view uses when creating multisample textures.

# sampleCount (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The sample count used to generate the [multisampleColorTexture](multisamplecolortexture.md) object.

## Declaration

```objectivec
@property (nonatomic) NSUInteger sampleCount;
```

<a id="Discussion"></a>

## Discussion

Support for different sample count values varies by device object. Call the [supportsTextureSampleCount:](../../metal/mtldevice/supportstexturesamplecount%28__%29.md) method to determine if the device object supports the sample count you want.

The default value is `1`. When you set a value greater than `1`, the view creates and configures an intermediate set of multisample textures. The pixel format is the same as the one specified for the drawable; see [colorPixelFormat](colorpixelformat.md). When the view creates a render pass descriptor, the render pass uses those intermediate textures as the color render targets, with a store action to resolve these multisample textures into the drawable’s texture ([MTLStoreActionMultisampleResolve](../../metal/mtlstoreaction/multisampleresolve.md)).

## See Also

### Configuring Multisampling

- [multisampleColorAttachmentTextureUsage](multisamplecolorattachmenttextureusage.md): The texture usage characteristics that the view uses when creating multisample textures.
