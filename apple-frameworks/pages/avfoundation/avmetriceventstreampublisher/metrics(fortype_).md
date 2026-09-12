> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetriceventstreampublisher/metrics(fortype:)](https://developer.apple.com/documentation/avfoundation/avmetriceventstreampublisher/metrics(fortype:))

# metrics(forType:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func metrics<MetricEvent>(forType metricType: MetricEvent.Type) -> AVMetrics<MetricEvent> where MetricEvent : AVMetricEvent
```

## See Also

### Getting the metrics

- [allMetrics()](allmetrics%28%29.md)
