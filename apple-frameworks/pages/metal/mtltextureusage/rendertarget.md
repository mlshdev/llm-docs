> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureusage/rendertarget](https://developer.apple.com/documentation/metal/mtltextureusage/rendertarget)

# renderTarget (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option for rendering to the texture in a render pass.

## Declaration

```swift
static var renderTarget: MTLTextureUsage { get }
```

## Mentioned In

- [Developing Metal apps that run in Simulator](../developing-metal-apps-that-run-in-simulator.md)
- [Optimizing texture data](../optimizing-texture-data.md)

<a id="discussion"></a>

## Discussion

Set this option if you use the given texture as a color, depth, or stencil render target in any render pass. This option allows you to assign the texture to the [texture](../mtlrenderpassattachmentdescriptor/texture.md) property of an [MTLRenderPassAttachmentDescriptor](../mtlrenderpassattachmentdescriptor.md).

> **Important**

>  Rendering and writing to a texture are different operations, and you don’t need to combine their usage options. Set the [renderTarget](rendertarget.md) option if you render to a given texture, but don’t set the [shaderWrite](shaderwrite.md) option if you don’t write to the texture. The [renderTarget](rendertarget.md) and [shaderWrite](shaderwrite.md) options aren’t equivalent, and setting [renderTarget](rendertarget.md) doesn’t require you to also set [shaderWrite](shaderwrite.md).

## See Also

### Specifying texture usage options

- [unknown](unknown.md): An option for a texture whose usage is unknown.
- [shaderRead](shaderread.md): An option for reading or sampling from the texture in a shader.
- [shaderWrite](shaderwrite.md): An option for writing to the texture in a shader.
- [shaderAtomic](shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [pixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.

# MTLTextureUsageRenderTarget (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option for rendering to the texture in a render pass.

## Declaration

```objectivec
MTLTextureUsageRenderTarget
```

## Mentioned In

- [Developing Metal apps that run in Simulator](../developing-metal-apps-that-run-in-simulator.md)
- [Optimizing texture data](../optimizing-texture-data.md)

<a id="discussion"></a>

## Discussion

Set this option if you use the given texture as a color, depth, or stencil render target in any render pass. This option allows you to assign the texture to the [texture](../mtlrenderpassattachmentdescriptor/texture.md) property of an [MTLRenderPassAttachmentDescriptor](../mtlrenderpassattachmentdescriptor.md).

> **Important**

>  Rendering and writing to a texture are different operations, and you don’t need to combine their usage options. Set the [MTLTextureUsageRenderTarget](rendertarget.md) option if you render to a given texture, but don’t set the [MTLTextureUsageShaderWrite](shaderwrite.md) option if you don’t write to the texture. The [MTLTextureUsageRenderTarget](rendertarget.md) and [MTLTextureUsageShaderWrite](shaderwrite.md) options aren’t equivalent, and setting [MTLTextureUsageRenderTarget](rendertarget.md) doesn’t require you to also set [MTLTextureUsageShaderWrite](shaderwrite.md).

## See Also

### Specifying texture usage options

- [MTLTextureUsageUnknown](unknown.md): An option for a texture whose usage is unknown.
- [MTLTextureUsageShaderRead](shaderread.md): An option for reading or sampling from the texture in a shader.
- [MTLTextureUsageShaderWrite](shaderwrite.md): An option for writing to the texture in a shader.
- [MTLTextureUsageShaderAtomic](shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [MTLTextureUsagePixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.
