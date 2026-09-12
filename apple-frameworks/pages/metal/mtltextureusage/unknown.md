> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureusage/unknown](https://developer.apple.com/documentation/metal/mtltextureusage/unknown)

# unknown (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option for a texture whose usage is unknown.

## Declaration

```swift
static var unknown: MTLTextureUsage { get }
```

## Mentioned In

- [Optimizing texture data](../optimizing-texture-data.md)

<a id="discussion"></a>

## Discussion

Set this option if you’re not sure how your app uses the given texture, but you want to be able to use it in many ways. This might be the case if you have multiple code paths and it’s unclear how your app specifically uses the texture at runtime.

This is the most flexible usage option for a texture, but it incurs a significant performance cost. Metal can’t optimize operations for the texture if you don’t set specific usage options.

In iOS devices with GPU family 5, Metal doesn’t apply lossless compression to the given texture if you set this option.

## See Also

### Specifying texture usage options

- [shaderRead](shaderread.md): An option for reading or sampling from the texture in a shader.
- [shaderWrite](shaderwrite.md): An option for writing to the texture in a shader.
- [shaderAtomic](shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [renderTarget](rendertarget.md): An option for rendering to the texture in a render pass.
- [pixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.

# MTLTextureUsageUnknown (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option for a texture whose usage is unknown.

## Declaration

```objectivec
MTLTextureUsageUnknown
```

## Mentioned In

- [Optimizing texture data](../optimizing-texture-data.md)

<a id="discussion"></a>

## Discussion

Set this option if you’re not sure how your app uses the given texture, but you want to be able to use it in many ways. This might be the case if you have multiple code paths and it’s unclear how your app specifically uses the texture at runtime.

This is the most flexible usage option for a texture, but it incurs a significant performance cost. Metal can’t optimize operations for the texture if you don’t set specific usage options.

In iOS devices with GPU family 5, Metal doesn’t apply lossless compression to the given texture if you set this option.

## See Also

### Specifying texture usage options

- [MTLTextureUsageShaderRead](shaderread.md): An option for reading or sampling from the texture in a shader.
- [MTLTextureUsageShaderWrite](shaderwrite.md): An option for writing to the texture in a shader.
- [MTLTextureUsageShaderAtomic](shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [MTLTextureUsageRenderTarget](rendertarget.md): An option for rendering to the texture in a render pass.
- [MTLTextureUsagePixelFormatView](pixelformatview.md): An option to create texture views with a different component layout.
