> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureusage/shaderatomic](https://developer.apple.com/documentation/metal/mtltextureusage/shaderatomic)

# shaderAtomic (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An option that enables atomic memory operations on texture elements in shader code.

## Declaration

```swift
static var shaderAtomic: MTLTextureUsage { get }
```

<a id="discussion"></a>

## Discussion

Shaders can run atomic memory operations on textures with specific element type and pixel format combinations:

| Shader element type | Pixel format |
| --- | --- |
| `int` | [MTLPixelFormat.r32Sint](../mtlpixelformat/r32sint.md) |
| `uint` | [MTLPixelFormat.r32Uint](../mtlpixelformat/r32uint.md) |
| `ulong` | [MTLPixelFormat.rg32Uint](../mtlpixelformat/rg32uint.md) |

> **Note**

>  Applying this usage option to a texture disables lossless compression.

## See Also

### Specifying texture usage options

- [unknown](unknown.md): An option for a texture whose usage is unknown.
- [shaderRead](shaderread.md): An option for reading or sampling from the texture in a shader.
- [shaderWrite](shaderwrite.md): An option for writing to the texture in a shader.
- [renderTarget](rendertarget.md): An option for rendering to the texture in a render pass.
- [pixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.

# MTLTextureUsageShaderAtomic (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An option that enables atomic memory operations on texture elements in shader code.

## Declaration

```objectivec
MTLTextureUsageShaderAtomic
```

<a id="discussion"></a>

## Discussion

Shaders can run atomic memory operations on textures with specific element type and pixel format combinations:

| Shader element type | Pixel format |
| --- | --- |
| `int` | [MTLPixelFormatR32Sint](../mtlpixelformat/r32sint.md) |
| `uint` | [MTLPixelFormatR32Uint](../mtlpixelformat/r32uint.md) |
| `ulong` | [MTLPixelFormatRG32Uint](../mtlpixelformat/rg32uint.md) |

> **Note**

>  Applying this usage option to a texture disables lossless compression.

## See Also

### Specifying texture usage options

- [MTLTextureUsageUnknown](unknown.md): An option for a texture whose usage is unknown.
- [MTLTextureUsageShaderRead](shaderread.md): An option for reading or sampling from the texture in a shader.
- [MTLTextureUsageShaderWrite](shaderwrite.md): An option for writing to the texture in a shader.
- [MTLTextureUsageRenderTarget](rendertarget.md): An option for rendering to the texture in a render pass.
- [MTLTextureUsagePixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.
