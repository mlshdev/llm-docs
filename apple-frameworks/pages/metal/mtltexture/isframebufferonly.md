> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/isframebufferonly](https://developer.apple.com/documentation/metal/mtltexture/isframebufferonly)

# isFramebufferOnly (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the texture can only be used as a render target.

## Declaration

```swift
var isFramebufferOnly: Bool { get }
```

<a id="discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false), which indicates the use of the texture is not restricted.

If [true](https://developer.apple.com/documentation/swift/true), neither [replace(region:mipmapLevel:slice:withBytes:bytesPerRow:bytesPerImage:)](replace%28region_mipmaplevel_slice_withbytes_bytesperrow_bytesperimage_%29.md) nor [getBytes(\_:bytesPerRow:bytesPerImage:from:mipmapLevel:slice:)](getbytes%28__bytesperrow_bytesperimage_from_mipmaplevel_slice_%29.md) can be used with this texture. Also, this texture can only be used as an attachment for [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) and cannot be a texture argument for [MTLRenderCommandEncoder](../mtlrendercommandencoder.md), [MTLBlitCommandEncoder](../mtlblitcommandencoder.md), or [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md).

Textures you obtain from a [CAMetalDrawable](../../quartzcore/cametaldrawable.md) instance are only usable as attachments, depending on the value of [framebufferOnly](../../quartzcore/cametallayer/framebufferonly.md) passed to their parent [CAMetalLayer](../../quartzcore/cametallayer.md) instance. These restrictions don’t apply to textures that your app creates directly.

## See Also

### Querying texture attributes

- [textureType](texturetype.md): The dimension and arrangement of the texture image data.
- [pixelFormat](pixelformat.md): The format of pixels in the texture.
- [width](width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mipmaplevelcount.md): The number of mipmap levels in the texture.
- [arrayLength](arraylength.md): The number of slices in the texture array.
- [sampleCount](samplecount.md): The number of samples in each pixel.
- [usage](usage.md): Options that determine how you can use the texture.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.
- [isShareable](isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](../mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](../mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.

# framebufferOnly (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the texture can only be used as a render target.

## Declaration

```objectivec
@property (readonly, getter=isFramebufferOnly) BOOL framebufferOnly;
```

<a id="discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false), which indicates the use of the texture is not restricted.

If [true](https://developer.apple.com/documentation/swift/true), neither [replaceRegion:mipmapLevel:slice:withBytes:bytesPerRow:bytesPerImage:](replace%28region_mipmaplevel_slice_withbytes_bytesperrow_bytesperimage_%29.md) nor [getBytes:bytesPerRow:bytesPerImage:fromRegion:mipmapLevel:slice:](getbytes%28__bytesperrow_bytesperimage_from_mipmaplevel_slice_%29.md) can be used with this texture. Also, this texture can only be used as an attachment for [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) and cannot be a texture argument for [MTLRenderCommandEncoder](../mtlrendercommandencoder.md), [MTLBlitCommandEncoder](../mtlblitcommandencoder.md), or [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md).

Textures you obtain from a [CAMetalDrawable](../../quartzcore/cametaldrawable.md) instance are only usable as attachments, depending on the value of [framebufferOnly](../../quartzcore/cametallayer/framebufferonly.md) passed to their parent [CAMetalLayer](../../quartzcore/cametallayer.md) instance. These restrictions don’t apply to textures that your app creates directly.

## See Also

### Querying texture attributes

- [textureType](texturetype.md): The dimension and arrangement of the texture image data.
- [pixelFormat](pixelformat.md): The format of pixels in the texture.
- [width](width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mipmaplevelcount.md): The number of mipmap levels in the texture.
- [arrayLength](arraylength.md): The number of slices in the texture array.
- [sampleCount](samplecount.md): The number of samples in each pixel.
- [usage](usage.md): Options that determine how you can use the texture.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.
- [shareable](isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](../mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](../mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.
