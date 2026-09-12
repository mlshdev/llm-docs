> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/depthstenciltexture](https://developer.apple.com/documentation/metalkit/mtkview/depthstenciltexture)

# depthStencilTexture (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A packed depth and stencil texture associated with the current drawable object’s texture.

## Declaration

```swift
var depthStencilTexture: (any MTLTexture)? { get }
```

<a id="Discussion"></a>

## Discussion

The value of [depthStencilPixelFormat](depthstencilpixelformat.md) determines the format of this texture.

The default value is `nil`. This value is also `nil` if the specified pixel format is [MTLPixelFormat.invalid](../../metal/mtlpixelformat/invalid.md).

## See Also

### Retrieving Render Target Information

- [currentRenderPassDescriptor](currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [currentDrawable](currentdrawable.md): The drawable to use for the current frame.
- [depthStencilStorageMode](depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.
- [multisampleColorTexture](multisamplecolortexture.md): The multisample color sample texture to render into.

# depthStencilTexture (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A packed depth and stencil texture associated with the current drawable object’s texture.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLTexture> depthStencilTexture;
```

<a id="Discussion"></a>

## Discussion

The value of [depthStencilPixelFormat](depthstencilpixelformat.md) determines the format of this texture.

The default value is `nil`. This value is also `nil` if the specified pixel format is [MTLPixelFormatInvalid](../../metal/mtlpixelformat/invalid.md).

## See Also

### Retrieving Render Target Information

- [currentRenderPassDescriptor](currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [currentDrawable](currentdrawable.md): The drawable to use for the current frame.
- [depthStencilStorageMode](depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.
- [multisampleColorTexture](multisamplecolortexture.md): The multisample color sample texture to render into.
