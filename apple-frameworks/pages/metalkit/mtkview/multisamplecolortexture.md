> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/multisamplecolortexture](https://developer.apple.com/documentation/metalkit/mtkview/multisamplecolortexture)

# multisampleColorTexture (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The multisample color sample texture to render into.

## Declaration

```swift
var multisampleColorTexture: (any MTLTexture)? { get }
```

<a id="Discussion"></a>

## Discussion

The format of this texture is determined by the value of the [colorPixelFormat](colorpixelformat.md) and [sampleCount](samplecount.md) properties.

The default value is `nil`. This value is also `nil` if the specified pixel format is [MTLPixelFormat.invalid](../../metal/mtlpixelformat/invalid.md), or if [sampleCount](samplecount.md) is less than or equal to 1.

## See Also

### Retrieving Render Target Information

- [currentRenderPassDescriptor](currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [currentDrawable](currentdrawable.md): The drawable to use for the current frame.
- [depthStencilTexture](depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [depthStencilStorageMode](depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.

# multisampleColorTexture (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The multisample color sample texture to render into.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLTexture> multisampleColorTexture;
```

<a id="Discussion"></a>

## Discussion

The format of this texture is determined by the value of the [colorPixelFormat](colorpixelformat.md) and [sampleCount](samplecount.md) properties.

The default value is `nil`. This value is also `nil` if the specified pixel format is [MTLPixelFormatInvalid](../../metal/mtlpixelformat/invalid.md), or if [sampleCount](samplecount.md) is less than or equal to 1.

## See Also

### Retrieving Render Target Information

- [currentRenderPassDescriptor](currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [currentDrawable](currentdrawable.md): The drawable to use for the current frame.
- [depthStencilTexture](depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [depthStencilStorageMode](depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.
