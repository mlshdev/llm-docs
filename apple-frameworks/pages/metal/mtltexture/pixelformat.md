> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/pixelformat](https://developer.apple.com/documentation/metal/mtltexture/pixelformat)

# pixelFormat (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The format of pixels in the texture.

## Declaration

```swift
var pixelFormat: MTLPixelFormat { get }
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

## See Also

### Querying texture attributes

- [textureType](texturetype.md): The dimension and arrangement of the texture image data.
- [width](width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mipmaplevelcount.md): The number of mipmap levels in the texture.
- [arrayLength](arraylength.md): The number of slices in the texture array.
- [sampleCount](samplecount.md): The number of samples in each pixel.
- [isFramebufferOnly](isframebufferonly.md): A Boolean value that indicates whether the texture can only be used as a render target.
- [usage](usage.md): Options that determine how you can use the texture.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.
- [isShareable](isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](../mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](../mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.

# pixelFormat (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The format of pixels in the texture.

## Declaration

```objectivec
@property (readonly) MTLPixelFormat pixelFormat;
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

## See Also

### Querying texture attributes

- [textureType](texturetype.md): The dimension and arrangement of the texture image data.
- [width](width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mipmaplevelcount.md): The number of mipmap levels in the texture.
- [arrayLength](arraylength.md): The number of slices in the texture array.
- [sampleCount](samplecount.md): The number of samples in each pixel.
- [framebufferOnly](isframebufferonly.md): A Boolean value that indicates whether the texture can only be used as a render target.
- [usage](usage.md): Options that determine how you can use the texture.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the contents of the texture to improve GPU performance.
- [shareable](isshareable.md): A Boolean indicating whether this texture can be shared with other processes.
- [swizzle](swizzle.md): The pattern that the GPU applies to pixels when you read or sample pixels from the texture.
- [MTLTextureType](../mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [MTLTextureUsage](../mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.
