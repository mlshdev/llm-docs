> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertypngcompressionfilter](https://developer.apple.com/documentation/imageio/kcgimagepropertypngcompressionfilter)

# kCGImagePropertyPNGCompressionFilter (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The PNG filter to apply prior to compression.

## Declaration

```swift
let kCGImagePropertyPNGCompressionFilter: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumber](../corefoundation/cfnumber.md). The number contains a bitwise-OR of one or more filter constants, such as [IMAGEIO_PNG_FILTER_AVG](imageio_png_filter_avg.md) or [IMAGEIO_PNG_FILTER_SUB](imageio_png_filter_sub.md). The value has no effect on formats other than PNG.

## See Also

### Pre-Compression Filters

- [IMAGEIO_PNG_NO_FILTERS](imageio_png_no_filters.md): No PNG filters.
- [IMAGEIO_PNG_FILTER_NONE](imageio_png_filter_none.md): A filter in which each byte is unchanged.
- [IMAGEIO_PNG_FILTER_SUB](imageio_png_filter_sub.md): A filter in which each byte is replaced with the difference between it and the corresponding byte to its left.
- [IMAGEIO_PNG_FILTER_UP](imageio_png_filter_up.md): A filter in which each byte is replaced with the difference between it and the byte above it.
- [IMAGEIO_PNG_FILTER_AVG](imageio_png_filter_avg.md): A filter in which each byte is replaced with the difference between it and the average of the bytes above it and to its left.
- [IMAGEIO_PNG_FILTER_PAETH](imageio_png_filter_paeth.md): A filter in which each byte is replaced with the difference between it and the Paeth predictor of the bytes to its left, above, and upper left.

# kCGImagePropertyPNGCompressionFilter (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The PNG filter to apply prior to compression.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyPNGCompressionFilter;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumberRef](../corefoundation/cfnumber.md). The number contains a bitwise-OR of one or more filter constants, such as [IMAGEIO_PNG_FILTER_AVG](imageio_png_filter_avg.md) or [IMAGEIO_PNG_FILTER_SUB](imageio_png_filter_sub.md). The value has no effect on formats other than PNG.

## See Also

### Pre-Compression Filters

- [IMAGEIO_PNG_NO_FILTERS](imageio_png_no_filters.md): No PNG filters.
- [IMAGEIO_PNG_FILTER_NONE](imageio_png_filter_none.md): A filter in which each byte is unchanged.
- [IMAGEIO_PNG_FILTER_SUB](imageio_png_filter_sub.md): A filter in which each byte is replaced with the difference between it and the corresponding byte to its left.
- [IMAGEIO_PNG_FILTER_UP](imageio_png_filter_up.md): A filter in which each byte is replaced with the difference between it and the byte above it.
- [IMAGEIO_PNG_FILTER_AVG](imageio_png_filter_avg.md): A filter in which each byte is replaced with the difference between it and the average of the bytes above it and to its left.
- [IMAGEIO_PNG_FILTER_PAETH](imageio_png_filter_paeth.md): A filter in which each byte is replaced with the difference between it and the Paeth predictor of the bytes to its left, above, and upper left.
- [IMAGEIO_PNG_ALL_FILTERS](imageio_png_all_filters.md): All PNG filters.
