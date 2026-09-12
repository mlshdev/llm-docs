> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureusage/shaderread](https://developer.apple.com/documentation/metal/mtltextureusage/shaderread)

# shaderRead (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option for reading or sampling from the texture in a shader.

## Declaration

```swift
static var shaderRead: MTLTextureUsage { get }
```

<a id="discussion"></a>

## Discussion

Set this option if you access the given texture with a `read()` or `sample()` function in any shader. This option enables the `access::read` and `access::sample` attributes for the texture. For more information about texture functions and access attributes, see [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364).

If the texture is a read-write texture that you also access with a `write()` function in the same shader, set the [shaderWrite](shaderwrite.md) option to enable the `access::read_write` attribute.

## See Also

### Specifying texture usage options

- [unknown](unknown.md): An option for a texture whose usage is unknown.
- [shaderWrite](shaderwrite.md): An option for writing to the texture in a shader.
- [shaderAtomic](shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [renderTarget](rendertarget.md): An option for rendering to the texture in a render pass.
- [pixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.

# MTLTextureUsageShaderRead (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option for reading or sampling from the texture in a shader.

## Declaration

```objectivec
MTLTextureUsageShaderRead
```

<a id="discussion"></a>

## Discussion

Set this option if you access the given texture with a `read()` or `sample()` function in any shader. This option enables the `access::read` and `access::sample` attributes for the texture. For more information about texture functions and access attributes, see [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364).

If the texture is a read-write texture that you also access with a `write()` function in the same shader, set the [MTLTextureUsageShaderWrite](shaderwrite.md) option to enable the `access::read_write` attribute.

## See Also

### Specifying texture usage options

- [MTLTextureUsageUnknown](unknown.md): An option for a texture whose usage is unknown.
- [MTLTextureUsageShaderWrite](shaderwrite.md): An option for writing to the texture in a shader.
- [MTLTextureUsageShaderAtomic](shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [MTLTextureUsageRenderTarget](rendertarget.md): An option for rendering to the texture in a render pass.
- [MTLTextureUsagePixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.
