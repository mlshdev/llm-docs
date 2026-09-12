> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/pixelluminancemetric](https://developer.apple.com/documentation/metrickit/pixelluminancemetric)

# PixelLuminanceMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures the average luminosity of pixels on an OLED display.

## Declaration

```swift
struct PixelLuminanceMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.pixelLuminance(\_:)](metricresult/pixelluminance%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

Average pixel luminance (APL) is expressed as a value from 0 to 100 in increments of 1. This metric is only available on devices with OLED displays. On other device types, no value is reported.

## Topics

### Measurements

- [value](pixelluminancemetric/value.md): Average pixel luminance for the application with statistical data.

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

- [GPUTimeMetric](gputimemetric.md): A metric that measures the total GPU time used by the app.
- [MetalFrameRateMetric](metalframeratemetric.md): A metric that measures Metal frame rate statistics for a specific `CAMetalLayer`.
- [AveragePixelLuminance](averagepixelluminance.md): A unit for average pixel luminance measurements.
