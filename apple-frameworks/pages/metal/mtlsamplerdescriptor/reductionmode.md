> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/reductionmode](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/reductionmode)

# reductionMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the reduction mode for filtering contributing samples.

## Declaration

```swift
var reductionMode: MTLSamplerReductionMode { get set }
```

<a id="discussion"></a>

## Discussion

The property’s default value is `MTLSamplerReductionModeWeightedAverage`. The sampler ignores this property if any of the following property values are equal to a specific value:

- The sampler’s [mipFilter](mipfilter.md) property is equal to `MTLSamplerMipFilterNotMipmapped`.
- The sampler’s [mipFilter](mipfilter.md) property is equal to `MTLSamplerMipFilterNearest`.
- The sampler’s [minFilter](minfilter.md) property is equal to `MTLSamplerMinMagFilterNearest`.
- The sampler’s [magFilter](magfilter.md) property is equal to `MTLSamplerMinMagFilterNearest`.

# reductionMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the reduction mode for filtering contributing samples.

## Declaration

```objectivec
@property (nonatomic) MTLSamplerReductionMode reductionMode;
```

<a id="discussion"></a>

## Discussion

The property’s default value is `MTLSamplerReductionModeWeightedAverage`. The sampler ignores this property if any of the following property values are equal to a specific value:

- The sampler’s [mipFilter](mipfilter.md) property is equal to `MTLSamplerMipFilterNotMipmapped`.
- The sampler’s [mipFilter](mipfilter.md) property is equal to `MTLSamplerMipFilterNearest`.
- The sampler’s [minFilter](minfilter.md) property is equal to `MTLSamplerMinMagFilterNearest`.
- The sampler’s [magFilter](magfilter.md) property is equal to `MTLSamplerMinMagFilterNearest`.
