> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureusage](https://developer.apple.com/documentation/metal/mtltextureusage)

# MTLTextureUsage (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An enumeration for the various options that determine how you can use a texture.

## Declaration

```swift
struct MTLTextureUsage
```

## Mentioned In

- [Optimizing texture data](optimizing-texture-data.md)

<a id="overview"></a>

## Overview

If a texture has multiple uses in your app, you can combine multiple usage options for that texture. After you set the texture’s usage options, you can use it only in the ways that you specified.

Metal can optimize operations for a given texture, based on its intended use. Set explicit usage options for a texture, if you know them in advance, before you use the texture. Only set usage options that correspond to a texture’s intended use.

In iOS devices with GPU family 5, Metal doesn’t apply lossless compression to a given texture if you set any of these options:

- [unknown](mtltextureusage/unknown.md)
- [shaderWrite](mtltextureusage/shaderwrite.md)
- [pixelFormatView](mtltextureusage/pixelformatview.md)

## Topics

### Specifying texture usage options

- [unknown](mtltextureusage/unknown.md): An option for a texture whose usage is unknown.
- [shaderRead](mtltextureusage/shaderread.md): An option for reading or sampling from the texture in a shader.
- [shaderWrite](mtltextureusage/shaderwrite.md): An option for writing to the texture in a shader.
- [shaderAtomic](mtltextureusage/shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [renderTarget](mtltextureusage/rendertarget.md): An option for rendering to the texture in a render pass.
- [pixelFormatView](mtltextureusage/pixelformatview.md): An option to create texture views with a different component layout.

### Creating texture usage options

- [init(rawValue:)](mtltextureusage/init%28rawvalue_%29.md): Creates new, empty usage options.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Querying texture attributes

- [textureType](mtltexture/texturetype.md): The dimension and arrangement of the texture image data.
- [pixelFormat](mtltexture/pixelformat.md): The format of pixels in the texture.
- [width](mtltexture/width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](mtltexture/height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](mtltexture/depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mtltexture/mipmaplevelcount.md): The number of mipmap levels in the texture.
- [arrayLength](mtltexture/arraylength.md): The number of slices in the texture array.
- [sampleCount](mtltexture/samplecount.md): The number of samples in each pixel.
- [isFramebufferOnly](mtltexture/isframebufferonly.md): A Boolean value that indicates whether the texture can only be used as a render target.
- [usage](mtltexture/usage.md): Options that determine how you can use the texture.
- [allowGPUOptimizedContents](mtltexture/allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.
- [isShareable](mtltexture/isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](mtltexture/swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.

# MTLTextureUsage (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An enumeration for the various options that determine how you can use a texture.

## Declaration

```objectivec
enum MTLTextureUsage : NSUInteger;
```

## Mentioned In

- [Optimizing texture data](optimizing-texture-data.md)

<a id="overview"></a>

## Overview

If a texture has multiple uses in your app, you can combine multiple usage options for that texture. After you set the texture’s usage options, you can use it only in the ways that you specified.

Metal can optimize operations for a given texture, based on its intended use. Set explicit usage options for a texture, if you know them in advance, before you use the texture. Only set usage options that correspond to a texture’s intended use.

In iOS devices with GPU family 5, Metal doesn’t apply lossless compression to a given texture if you set any of these options:

- [MTLTextureUsageUnknown](mtltextureusage/unknown.md)
- [MTLTextureUsageShaderWrite](mtltextureusage/shaderwrite.md)
- [MTLTextureUsagePixelFormatView](mtltextureusage/pixelformatview.md)

## Topics

### Specifying texture usage options

- [MTLTextureUsageUnknown](mtltextureusage/unknown.md): An option for a texture whose usage is unknown.
- [MTLTextureUsageShaderRead](mtltextureusage/shaderread.md): An option for reading or sampling from the texture in a shader.
- [MTLTextureUsageShaderWrite](mtltextureusage/shaderwrite.md): An option for writing to the texture in a shader.
- [MTLTextureUsageShaderAtomic](mtltextureusage/shaderatomic.md): An option that enables atomic memory operations on texture elements in shader code.
- [MTLTextureUsageRenderTarget](mtltextureusage/rendertarget.md): An option for rendering to the texture in a render pass.
- [MTLTextureUsagePixelFormatView](mtltextureusage/pixelformatview.md): An option to create texture views with a different component layout.

## See Also

### Querying texture attributes

- [textureType](mtltexture/texturetype.md): The dimension and arrangement of the texture image data.
- [pixelFormat](mtltexture/pixelformat.md): The format of pixels in the texture.
- [width](mtltexture/width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](mtltexture/height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](mtltexture/depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mtltexture/mipmaplevelcount.md): The number of mipmap levels in the texture.
- [arrayLength](mtltexture/arraylength.md): The number of slices in the texture array.
- [sampleCount](mtltexture/samplecount.md): The number of samples in each pixel.
- [framebufferOnly](mtltexture/isframebufferonly.md): A Boolean value that indicates whether the texture can only be used as a render target.
- [usage](mtltexture/usage.md): Options that determine how you can use the texture.
- [allowGPUOptimizedContents](mtltexture/allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.
- [shareable](mtltexture/isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](mtltexture/swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
