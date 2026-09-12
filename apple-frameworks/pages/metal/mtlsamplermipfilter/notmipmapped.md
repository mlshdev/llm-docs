> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplermipfilter/notmipmapped](https://developer.apple.com/documentation/metal/mtlsamplermipfilter/notmipmapped)

# MTLSamplerMipFilter.notMipmapped (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The texture is sampled from mipmap level `0`, and other mipmap levels are ignored.

## Declaration

```swift
case notMipmapped
```

## See Also

### Specifying mip filter options

- [MTLSamplerMipFilter.nearest](nearest.md): The nearest mipmap level is selected.
- [MTLSamplerMipFilter.linear](linear.md): If the filter falls between mipmap levels, both levels are sampled and the results are determined by linear interpolation between levels.

# MTLSamplerMipFilterNotMipmapped (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The texture is sampled from mipmap level `0`, and other mipmap levels are ignored.

## Declaration

```objectivec
MTLSamplerMipFilterNotMipmapped
```

## See Also

### Specifying mip filter options

- [MTLSamplerMipFilterNearest](nearest.md): The nearest mipmap level is selected.
- [MTLSamplerMipFilterLinear](linear.md): If the filter falls between mipmap levels, both levels are sampled and the results are determined by linear interpolation between levels.
