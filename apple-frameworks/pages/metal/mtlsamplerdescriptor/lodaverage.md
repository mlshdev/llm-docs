> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/lodaverage](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/lodaverage)

# lodAverage (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.

## Declaration

```swift
var lodAverage: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), an average LOD may be used across four fragment shader threads. If this value is [false](https://developer.apple.com/documentation/swift/false), no averaging is performed and each thread accesses its own LOD.

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  This optional Boolean value is used as a performance optimization hint and it is ignored on some GPUs. Enabling LOD averaging may provide a performance benefit for shaders that sample from explicit per-fragment mipmap levels, or apply per-fragment LOD bias, at the potential cost of reduced texture sample quality.

## See Also

### Declaring filter modes

- [minFilter](minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [magFilter](magfilter.md): The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).
- [mipFilter](mipfilter.md): The filtering option for combining pixels between two mipmap levels.
- [lodMinClamp](lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [maxAnisotropy](maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMinMagFilter](../mtlsamplerminmagfilter.md): Filtering options for determining which pixel value is returned within a mipmap level.
- [MTLSamplerMipFilter](../mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.

# lodAverage (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.

## Declaration

```objectivec
@property (nonatomic) BOOL lodAverage;
```

<a id="discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), an average LOD may be used across four fragment shader threads. If this value is [false](https://developer.apple.com/documentation/swift/false), no averaging is performed and each thread accesses its own LOD.

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  This optional Boolean value is used as a performance optimization hint and it is ignored on some GPUs. Enabling LOD averaging may provide a performance benefit for shaders that sample from explicit per-fragment mipmap levels, or apply per-fragment LOD bias, at the potential cost of reduced texture sample quality.

## See Also

### Declaring filter modes

- [minFilter](minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [magFilter](magfilter.md): The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).
- [mipFilter](mipfilter.md): The filtering option for combining pixels between two mipmap levels.
- [lodMinClamp](lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [maxAnisotropy](maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMinMagFilter](../mtlsamplerminmagfilter.md): Filtering options for determining which pixel value is returned within a mipmap level.
- [MTLSamplerMipFilter](../mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.
