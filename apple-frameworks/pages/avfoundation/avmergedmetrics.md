> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmergedmetrics](https://developer.apple.com/documentation/avfoundation/avmergedmetrics)

# AVMergedMetrics

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An asynchronous stream of metric information from different publishers.

## Declaration

```swift
struct AVMergedMetrics<MetricEvent1, MetricEvent2, each MetricEventPack> where MetricEvent1 : AVMetricEvent, MetricEvent2 : AVMetricEvent, repeat each MetricEventPack : AVMetricEvent
```

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Metrics

- [AVMetrics](avmetrics.md): An asynchronous stream of metric information.
- [AVVideoPerformanceMetrics](avvideoperformancemetrics.md): An object that provides metrics related to video playback quality.
- [AVMetricEventStreamPublisher](avmetriceventstreampublisher.md): A type for objects that publish metric events to the event stream.
- [AVMetricEvent](avmetricevent.md): A base class that represents a metric event.
- [AVMetricErrorEvent](avmetricerrorevent.md): An object that represents a metric event when an error occurs.
- [Metric event types](metric-event-types.md)
