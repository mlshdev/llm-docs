> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/mipfilter](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/mipfilter)

# mipFilter (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The filtering option for combining pixels between two mipmap levels.

## Declaration

```swift
var mipFilter: MTLSamplerMipFilter { get set }
```

## Mentioned In

- [Adding mipmap filtering to samplers](../adding-mipmap-filtering-to-samplers.md)

<a id="discussion"></a>

## Discussion

The default value is [MTLSamplerMipFilter.notMipmapped](../mtlsamplermipfilter/notmipmapped.md).

## See Also

### Declaring filter modes

- [minFilter](minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [magFilter](magfilter.md): The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).
- [lodMinClamp](lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [lodAverage](lodaverage.md): A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.
- [maxAnisotropy](maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMinMagFilter](../mtlsamplerminmagfilter.md): Filtering options for determining which pixel value is returned within a mipmap level.
- [MTLSamplerMipFilter](../mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.

# mipFilter (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The filtering option for combining pixels between two mipmap levels.

## Declaration

```objectivec
@property (nonatomic) MTLSamplerMipFilter mipFilter;
```

## Mentioned In

- [Adding mipmap filtering to samplers](../adding-mipmap-filtering-to-samplers.md)

<a id="discussion"></a>

## Discussion

The default value is [MTLSamplerMipFilterNotMipmapped](../mtlsamplermipfilter/notmipmapped.md).

## See Also

### Declaring filter modes

- [minFilter](minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [magFilter](magfilter.md): The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).
- [lodMinClamp](lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [lodAverage](lodaverage.md): A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.
- [maxAnisotropy](maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMinMagFilter](../mtlsamplerminmagfilter.md): Filtering options for determining which pixel value is returned within a mipmap level.
- [MTLSamplerMipFilter](../mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.
