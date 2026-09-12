> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/imageio_png_filter_sub](https://developer.apple.com/documentation/imageio/imageio_png_filter_sub)

# IMAGEIO_PNG_FILTER_SUB (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A filter in which each byte is replaced with the difference between it and the corresponding byte to its left.

## Declaration

```swift
var IMAGEIO_PNG_FILTER_SUB: Int32 { get }
```

## See Also

### Pre-Compression Filters

- [kCGImagePropertyPNGCompressionFilter](kcgimagepropertypngcompressionfilter.md): The PNG filter to apply prior to compression.
- [IMAGEIO_PNG_NO_FILTERS](imageio_png_no_filters.md): No PNG filters.
- [IMAGEIO_PNG_FILTER_NONE](imageio_png_filter_none.md): A filter in which each byte is unchanged.
- [IMAGEIO_PNG_FILTER_UP](imageio_png_filter_up.md): A filter in which each byte is replaced with the difference between it and the byte above it.
- [IMAGEIO_PNG_FILTER_AVG](imageio_png_filter_avg.md): A filter in which each byte is replaced with the difference between it and the average of the bytes above it and to its left.
- [IMAGEIO_PNG_FILTER_PAETH](imageio_png_filter_paeth.md): A filter in which each byte is replaced with the difference between it and the Paeth predictor of the bytes to its left, above, and upper left.

# IMAGEIO_PNG_FILTER_SUB (Objective-C)

**Framework:** Image I/O  
**Kind:** Macro  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A filter in which each byte is replaced with the difference between it and the corresponding byte to its left.

## Declaration

```objectivec
#define IMAGEIO_PNG_FILTER_SUB
```

## See Also

### Pre-Compression Filters

- [kCGImagePropertyPNGCompressionFilter](kcgimagepropertypngcompressionfilter.md): The PNG filter to apply prior to compression.
- [IMAGEIO_PNG_NO_FILTERS](imageio_png_no_filters.md): No PNG filters.
- [IMAGEIO_PNG_FILTER_NONE](imageio_png_filter_none.md): A filter in which each byte is unchanged.
- [IMAGEIO_PNG_FILTER_UP](imageio_png_filter_up.md): A filter in which each byte is replaced with the difference between it and the byte above it.
- [IMAGEIO_PNG_FILTER_AVG](imageio_png_filter_avg.md): A filter in which each byte is replaced with the difference between it and the average of the bytes above it and to its left.
- [IMAGEIO_PNG_FILTER_PAETH](imageio_png_filter_paeth.md): A filter in which each byte is replaced with the difference between it and the Paeth predictor of the bytes to its left, above, and upper left.
- [IMAGEIO_PNG_ALL_FILTERS](imageio_png_all_filters.md): All PNG filters.
