> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturedescriptor/usage](https://developer.apple.com/documentation/metal/mtltexturedescriptor/usage)

# usage (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options that determine how you can use the texture.

## Declaration

```swift
var usage: MTLTextureUsage { get set }
```

## Mentioned In

- [Developing Metal apps that run in Simulator](../developing-metal-apps-that-run-in-simulator.md)

<a id="discussion"></a>

## Discussion

The default value for this property is [shaderRead](../mtltextureusage/shaderread.md). If the given texture has multiple uses in your app, you can combine multiple usage options for that texture. After you set a texture’s usage options, you can use it only in the ways that you specified.

Metal can optimize operations for a given texture, based on its intended use. Set explicit usage options for a texture, if you know them in advance, before you use the texture. Only set usage options that correspond to a texture’s intended use.

In iOS devices with GPU family 5, Metal doesn’t apply lossless compression to a given texture if you set any of these options:

- [unknown](../mtltextureusage/unknown.md)
- [shaderWrite](../mtltextureusage/shaderwrite.md)
- [pixelFormatView](../mtltextureusage/pixelformatview.md)

## See Also

### Specifying texture attributes

- [textureType](texturetype.md): The dimension and arrangement of texture image data.
- [pixelFormat](pixelformat.md): The size and bit layout of all pixels in the texture.
- [width](width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mipmaplevelcount.md): The number of mipmap levels for this texture.
- [sampleCount](samplecount.md): The number of samples in each fragment.
- [arrayLength](arraylength.md): The number of array elements for this texture.
- [resourceOptions](resourceoptions.md): The behavior of a new memory allocation.
- [cpuCacheMode](cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [swizzle](swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](../mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.

# usage (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options that determine how you can use the texture.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLTextureUsage usage;
```

## Mentioned In

- [Developing Metal apps that run in Simulator](../developing-metal-apps-that-run-in-simulator.md)

<a id="discussion"></a>

## Discussion

The default value for this property is [MTLTextureUsageShaderRead](../mtltextureusage/shaderread.md). If the given texture has multiple uses in your app, you can combine multiple usage options for that texture. After you set a texture’s usage options, you can use it only in the ways that you specified.

Metal can optimize operations for a given texture, based on its intended use. Set explicit usage options for a texture, if you know them in advance, before you use the texture. Only set usage options that correspond to a texture’s intended use.

In iOS devices with GPU family 5, Metal doesn’t apply lossless compression to a given texture if you set any of these options:

- [MTLTextureUsageUnknown](../mtltextureusage/unknown.md)
- [MTLTextureUsageShaderWrite](../mtltextureusage/shaderwrite.md)
- [MTLTextureUsagePixelFormatView](../mtltextureusage/pixelformatview.md)

## See Also

### Specifying texture attributes

- [textureType](texturetype.md): The dimension and arrangement of texture image data.
- [pixelFormat](pixelformat.md): The size and bit layout of all pixels in the texture.
- [width](width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mipmaplevelcount.md): The number of mipmap levels for this texture.
- [sampleCount](samplecount.md): The number of samples in each fragment.
- [arrayLength](arraylength.md): The number of array elements for this texture.
- [resourceOptions](resourceoptions.md): The behavior of a new memory allocation.
- [cpuCacheMode](cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [swizzle](swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](../mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.
