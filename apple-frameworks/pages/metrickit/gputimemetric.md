> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/gputimemetric](https://developer.apple.com/documentation/metrickit/gputimemetric)

# GPUTimeMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures the total GPU time used by the app.

## Declaration

```swift
struct GPUTimeMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.gpuTime(\_:)](metricresult/gputime%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

## Topics

### Measurements

- [value](gputimemetric/value.md): The total amount of GPU time used by the app.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### GPU and display metrics

- [MetalFrameRateMetric](metalframeratemetric.md): A metric that measures Metal frame rate statistics for a specific `CAMetalLayer`.
- [PixelLuminanceMetric](pixelluminancemetric.md): A metric that measures the average luminosity of pixels on an OLED display.
- [AveragePixelLuminance](averagepixelluminance.md): A unit for average pixel luminance measurements.
