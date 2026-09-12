> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplermipfilter/nearest](https://developer.apple.com/documentation/metal/mtlsamplermipfilter/nearest)

# MTLSamplerMipFilter.nearest (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The nearest mipmap level is selected.

## Declaration

```swift
case nearest
```

## See Also

### Specifying mip filter options

- [MTLSamplerMipFilter.notMipmapped](notmipmapped.md): The texture is sampled from mipmap level `0`, and other mipmap levels are ignored.
- [MTLSamplerMipFilter.linear](linear.md): If the filter falls between mipmap levels, both levels are sampled and the results are determined by linear interpolation between levels.

# MTLSamplerMipFilterNearest (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The nearest mipmap level is selected.

## Declaration

```objectivec
MTLSamplerMipFilterNearest
```

## See Also

### Specifying mip filter options

- [MTLSamplerMipFilterNotMipmapped](notmipmapped.md): The texture is sampled from mipmap level `0`, and other mipmap levels are ignored.
- [MTLSamplerMipFilterLinear](linear.md): If the filter falls between mipmap levels, both levels are sampled and the results are determined by linear interpolation between levels.
