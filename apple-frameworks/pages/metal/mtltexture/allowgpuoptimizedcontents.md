> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/allowgpuoptimizedcontents](https://developer.apple.com/documentation/metal/mtltexture/allowgpuoptimizedcontents)

# allowGPUOptimizedContents (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.

## Declaration

```swift
var allowGPUOptimizedContents: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value is set when the texture is created and never changes.

If the value is `true`, Metal is allowed to adjust the texture’s contents to improve GPU performance. For a shared or managed texture, this optimization can cause slower performance when accessing the texture from the CPU. If the value is `false`, CPU reads and writes may be improved at the cost of some GPU performance.

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
- [isFramebufferOnly](isframebufferonly.md): A Boolean value that indicates whether the texture can only be used as a render target.
- [usage](usage.md): Options that determine how you can use the texture.
- [isShareable](isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](../mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](../mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.

# allowGPUOptimizedContents (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.

## Declaration

```objectivec
@property (readonly) BOOL allowGPUOptimizedContents;
```

<a id="discussion"></a>

## Discussion

The value is set when the texture is created and never changes.

If the value is `true`, Metal is allowed to adjust the texture’s contents to improve GPU performance. For a shared or managed texture, this optimization can cause slower performance when accessing the texture from the CPU. If the value is `false`, CPU reads and writes may be improved at the cost of some GPU performance.

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
- [framebufferOnly](isframebufferonly.md): A Boolean value that indicates whether the texture can only be used as a render target.
- [usage](usage.md): Options that determine how you can use the texture.
- [shareable](isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](../mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](../mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.
