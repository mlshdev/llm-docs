> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturedescriptor/cpucachemode](https://developer.apple.com/documentation/metal/mtltexturedescriptor/cpucachemode)

# cpuCacheMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The CPU cache mode used for the CPU mapping of the texture.

## Declaration

```swift
var cpuCacheMode: MTLCPUCacheMode { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLCPUCacheMode.defaultCache](../mtlcpucachemode/defaultcache.md).

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
- [storageMode](storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](usage.md): Options that determine how you can use the texture.
- [swizzle](swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](../mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.

# cpuCacheMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The CPU cache mode used for the CPU mapping of the texture.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLCPUCacheMode cpuCacheMode;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLCPUCacheModeDefaultCache](../mtlcpucachemode/defaultcache.md).

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
- [storageMode](storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](usage.md): Options that determine how you can use the texture.
- [swizzle](swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](../mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.
