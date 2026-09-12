> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metalframeratemetric](https://developer.apple.com/documentation/metrickit/metalframeratemetric)

# MetalFrameRateMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures Metal frame rate statistics for a specific `CAMetalLayer`.

## Declaration

```swift
struct MetalFrameRateMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.metalFrameRate(\_:)](metricresult/metalframerate%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

Each `MetalFrameRateMetric` corresponds to a single `CAMetalLayer`, identified by [layerName](metalframeratemetric/layername.md). When your app has multiple Metal layers, the report may include multiple instances of this metric case, one for each layer.

## Topics

### Frame rate

- [framesPerSecond](metalframeratemetric/framespersecond.md): The frame rate associated with this `CAMetalLayer`
- [frameCount](metalframeratemetric/framecount.md): The total Metal drawable count
- [activeDrawingDuration](metalframeratemetric/activedrawingduration.md): The duration of time spent actively producing new frames

### Layer

- [layerName](metalframeratemetric/layername.md): The `CAMetalLayer` name this metric corresponds to

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
- [PixelLuminanceMetric](pixelluminancemetric.md): A metric that measures the average luminosity of pixels on an OLED display.
- [AveragePixelLuminance](averagepixelluminance.md): A unit for average pixel luminance measurements.
