> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/magfilter](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/magfilter)

# magFilter (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).

## Declaration

```swift
var magFilter: MTLSamplerMinMagFilter { get set }
```

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

The default value is [MTLSamplerMinMagFilter.nearest](../mtlsamplerminmagfilter/nearest.md).

## See Also

### Declaring filter modes

- [minFilter](minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [mipFilter](mipfilter.md): The filtering option for combining pixels between two mipmap levels.
- [lodMinClamp](lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [lodAverage](lodaverage.md): A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.
- [maxAnisotropy](maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMinMagFilter](../mtlsamplerminmagfilter.md): Filtering options for determining which pixel value is returned within a mipmap level.
- [MTLSamplerMipFilter](../mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.

# magFilter (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).

## Declaration

```objectivec
@property (nonatomic) MTLSamplerMinMagFilter magFilter;
```

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

The default value is [MTLSamplerMinMagFilterNearest](../mtlsamplerminmagfilter/nearest.md).

## See Also

### Declaring filter modes

- [minFilter](minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [mipFilter](mipfilter.md): The filtering option for combining pixels between two mipmap levels.
- [lodMinClamp](lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [lodAverage](lodaverage.md): A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.
- [maxAnisotropy](maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMinMagFilter](../mtlsamplerminmagfilter.md): Filtering options for determining which pixel value is returned within a mipmap level.
- [MTLSamplerMipFilter](../mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.
