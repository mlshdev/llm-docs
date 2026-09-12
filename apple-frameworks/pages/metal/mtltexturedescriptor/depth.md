> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturedescriptor/depth](https://developer.apple.com/documentation/metal/mtltexturedescriptor/depth)

# depth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The depth of the texture image for the base level mipmap, in pixels.

## Declaration

```swift
var depth: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1`. The value needs to be greater than or equal to `1`. For 1D, 2D, and cube textures, the value needs to be `1`.

## See Also

### Specifying texture attributes

- [textureType](texturetype.md): The dimension and arrangement of texture image data.
- [pixelFormat](pixelformat.md): The size and bit layout of all pixels in the texture.
- [width](width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](height.md): The height of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mipmaplevelcount.md): The number of mipmap levels for this texture.
- [sampleCount](samplecount.md): The number of samples in each fragment.
- [arrayLength](arraylength.md): The number of array elements for this texture.
- [resourceOptions](resourceoptions.md): The behavior of a new memory allocation.
- [cpuCacheMode](cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](usage.md): Options that determine how you can use the texture.
- [swizzle](swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](../mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.

# depth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The depth of the texture image for the base level mipmap, in pixels.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger depth;
```

<a id="discussion"></a>

## Discussion

The default value is `1`. The value needs to be greater than or equal to `1`. For 1D, 2D, and cube textures, the value needs to be `1`.

## See Also

### Specifying texture attributes

- [textureType](texturetype.md): The dimension and arrangement of texture image data.
- [pixelFormat](pixelformat.md): The size and bit layout of all pixels in the texture.
- [width](width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](height.md): The height of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mipmaplevelcount.md): The number of mipmap levels for this texture.
- [sampleCount](samplecount.md): The number of samples in each fragment.
- [arrayLength](arraylength.md): The number of array elements for this texture.
- [resourceOptions](resourceoptions.md): The behavior of a new memory allocation.
- [cpuCacheMode](cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](usage.md): Options that determine how you can use the texture.
- [swizzle](swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](../mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.
