> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmetrics/chronologicalmerge(with:_:)

# chronologicalMerge(with:\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func chronologicalMerge<OtherSecondMetric, each MetricEventPack>(with secondMetric: AVMetrics<OtherSecondMetric>, _ metrics: repeat AVMetrics<each MetricEventPack>) -> AVMergedMetrics<MetricEvent, OtherSecondMetric, repeat each MetricEventPack> where OtherSecondMetric : AVMetricEvent, repeat each MetricEventPack : AVMetricEvent
```
