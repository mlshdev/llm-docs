> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureusage/shaderwrite](https://developer.apple.com/documentation/metal/mtltextureusage/shaderwrite)

# shaderWrite (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option for writing to the texture in a shader.

## Declaration

```swift
static var shaderWrite: MTLTextureUsage { get }
```

## Mentioned In

- [Optimizing texture data](../optimizing-texture-data.md)

<a id="discussion"></a>

## Discussion

Set this option if you access the given texture with a `write()` function in any shader. This option enables the `access::write` attribute for the texture. For more information about texture functions and access attributes, see [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364).

If the texture is a read-write texture that you also access with a `read()` function in the same shader, set the [shaderRead](shaderread.md) option to enable the `access::read_write` attribute.

In iOS devices with GPU family 5, Metal doesn’t apply lossless compression to the given texture if you set this option.

> **Important**

>  Rendering and writing to a texture are different operations, and you don’t need to combine their usage options. Set the [renderTarget](rendertarget.md) option if you render to a given texture, but don’t set the [shaderWrite](shaderwrite.md) option if you don’t write to the texture. The [renderTarget](rendertarget.md) and [shaderWrite](shaderwrite.md) options aren’t equivalent, and setting [renderTarget](rendertarget.md) doesn’t require you to also set [shaderWrite](shaderwrite.md).

## See Also

### Specifying texture usage options

- [unknown](unknown.md): An option for a texture whose usage is unknown.
- [shaderRead](shaderread.md): An option for reading or sampling from the texture in a shader.
- [shaderAtomic](shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [renderTarget](rendertarget.md): An option for rendering to the texture in a render pass.
- [pixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.

# MTLTextureUsageShaderWrite (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option for writing to the texture in a shader.

## Declaration

```objectivec
MTLTextureUsageShaderWrite
```

## Mentioned In

- [Optimizing texture data](../optimizing-texture-data.md)

<a id="discussion"></a>

## Discussion

Set this option if you access the given texture with a `write()` function in any shader. This option enables the `access::write` attribute for the texture. For more information about texture functions and access attributes, see [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364).

If the texture is a read-write texture that you also access with a `read()` function in the same shader, set the [MTLTextureUsageShaderRead](shaderread.md) option to enable the `access::read_write` attribute.

In iOS devices with GPU family 5, Metal doesn’t apply lossless compression to the given texture if you set this option.

> **Important**

>  Rendering and writing to a texture are different operations, and you don’t need to combine their usage options. Set the [MTLTextureUsageRenderTarget](rendertarget.md) option if you render to a given texture, but don’t set the [MTLTextureUsageShaderWrite](shaderwrite.md) option if you don’t write to the texture. The [MTLTextureUsageRenderTarget](rendertarget.md) and [MTLTextureUsageShaderWrite](shaderwrite.md) options aren’t equivalent, and setting [MTLTextureUsageRenderTarget](rendertarget.md) doesn’t require you to also set [MTLTextureUsageShaderWrite](shaderwrite.md).

## See Also

### Specifying texture usage options

- [MTLTextureUsageUnknown](unknown.md): An option for a texture whose usage is unknown.
- [MTLTextureUsageShaderRead](shaderread.md): An option for reading or sampling from the texture in a shader.
- [MTLTextureUsageShaderAtomic](shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [MTLTextureUsageRenderTarget](rendertarget.md): An option for rendering to the texture in a render pass.
- [MTLTextureUsagePixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.
