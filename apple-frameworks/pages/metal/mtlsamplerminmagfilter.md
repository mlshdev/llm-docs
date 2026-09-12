> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerminmagfilter](https://developer.apple.com/documentation/metal/mtlsamplerminmagfilter)

# MTLSamplerMinMagFilter (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Filtering options for determining which pixel value is returned within a mipmap level.

## Declaration

```swift
enum MTLSamplerMinMagFilter
```

## Topics

### Filter options

- [MTLSamplerMinMagFilter.nearest](mtlsamplerminmagfilter/nearest.md): Select the single pixel nearest to the sample point.
- [MTLSamplerMinMagFilter.linear](mtlsamplerminmagfilter/linear.md): Select two pixels in each dimension and interpolate linearly between them.

### Initializers

- [init(rawValue:)](mtlsamplerminmagfilter/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Declaring filter modes

- [minFilter](mtlsamplerdescriptor/minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [magFilter](mtlsamplerdescriptor/magfilter.md): The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).
- [mipFilter](mtlsamplerdescriptor/mipfilter.md): The filtering option for combining pixels between two mipmap levels.
- [lodMinClamp](mtlsamplerdescriptor/lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](mtlsamplerdescriptor/lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [lodAverage](mtlsamplerdescriptor/lodaverage.md): A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.
- [maxAnisotropy](mtlsamplerdescriptor/maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMipFilter](mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.

# MTLSamplerMinMagFilter (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Filtering options for determining which pixel value is returned within a mipmap level.

## Declaration

```objectivec
enum MTLSamplerMinMagFilter : NSUInteger;
```

## Topics

### Filter options

- [MTLSamplerMinMagFilterNearest](mtlsamplerminmagfilter/nearest.md): Select the single pixel nearest to the sample point.
- [MTLSamplerMinMagFilterLinear](mtlsamplerminmagfilter/linear.md): Select two pixels in each dimension and interpolate linearly between them.

## See Also

### Declaring filter modes

- [minFilter](mtlsamplerdescriptor/minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [magFilter](mtlsamplerdescriptor/magfilter.md): The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).
- [mipFilter](mtlsamplerdescriptor/mipfilter.md): The filtering option for combining pixels between two mipmap levels.
- [lodMinClamp](mtlsamplerdescriptor/lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](mtlsamplerdescriptor/lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [lodAverage](mtlsamplerdescriptor/lodaverage.md): A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.
- [maxAnisotropy](mtlsamplerdescriptor/maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMipFilter](mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.
