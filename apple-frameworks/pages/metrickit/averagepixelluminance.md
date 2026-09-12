> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/averagepixelluminance](https://developer.apple.com/documentation/metrickit/averagepixelluminance)

# AveragePixelLuminance

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A unit for average pixel luminance measurements.

## Declaration

```swift
@objc final class AveragePixelLuminance
```

<a id="Discussion"></a>

## Discussion

This is used as the `Dimension` type in [value](pixelluminancemetric/value.md), which has type `AverageStatistics<AveragePixelLuminance>`. The base unit symbol is `"apl"` (average pixel luminance).

## Topics

### Type Methods

- [baseUnit()](averagepixelluminance/baseunit%28%29.md)

## Relationships

### Inherits From

- [Dimension](../foundation/dimension.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### GPU and display metrics

- [GPUTimeMetric](gputimemetric.md): A metric that measures the total GPU time used by the app.
- [MetalFrameRateMetric](metalframeratemetric.md): A metric that measures Metal frame rate statistics for a specific `CAMetalLayer`.
- [PixelLuminanceMetric](pixelluminancemetric.md): A metric that measures the average luminosity of pixels on an OLED display.
