> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturedescriptor/resourceoptions](https://developer.apple.com/documentation/metal/mtltexturedescriptor/resourceoptions)

# resourceOptions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The behavior of a new memory allocation.

## Declaration

```swift
var resourceOptions: MTLResourceOptions { get set }
```

<a id="discussion"></a>

## Discussion

This property only has an effect when you are allocating a new texture. If you are creating a texture whose data comes from another [MTLResource](../mtlresource.md) object, this property value is ignored, and the value of the original resource is used instead.

The value of this property aggregates the values of [storageMode](storagemode.md), [cpuCacheMode](cpucachemode.md), and [hazardTrackingMode](hazardtrackingmode.md). If you modify this property, the other properties also change, and vice versa.

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
- [cpuCacheMode](cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](usage.md): Options that determine how you can use the texture.
- [swizzle](swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](../mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.

# resourceOptions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The behavior of a new memory allocation.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLResourceOptions resourceOptions;
```

<a id="discussion"></a>

## Discussion

This property only has an effect when you are allocating a new texture. If you are creating a texture whose data comes from another [MTLResource](../mtlresource.md) object, this property value is ignored, and the value of the original resource is used instead.

The value of this property aggregates the values of [storageMode](storagemode.md), [cpuCacheMode](cpucachemode.md), and [hazardTrackingMode](hazardtrackingmode.md). If you modify this property, the other properties also change, and vice versa.

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
- [cpuCacheMode](cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](usage.md): Options that determine how you can use the texture.
- [swizzle](swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [MTLTextureSwizzleChannels](../mtltextureswizzlechannels.md): A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.
