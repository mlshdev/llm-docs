> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/timetofirstdrawmetric](https://developer.apple.com/documentation/metrickit/timetofirstdrawmetric)

# TimeToFirstDrawMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures time to first draw durations for app launches.

## Declaration

```swift
struct TimeToFirstDrawMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.timeToFirstDraw(\_:)](metricresult/timetofirstdraw%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

The measurement ends at the first Core Animation commit, which corresponds to the moment the first rendered frame is submitted to the display pipeline.

## Topics

### Measurements

- [histogram](timetofirstdrawmetric/histogram.md): Histogram of time to first draw durations.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Launch and responsiveness metrics

- [OptimizedTimeToFirstDrawMetric](optimizedtimetofirstdrawmetric.md): A metric that measures optimized time to first draw durations for app launches.
- [ApplicationResumeTimeMetric](applicationresumetimemetric.md): A metric that measures app resume time durations.
- [ExtendedLaunchMetric](extendedlaunchmetric.md): A metric that measures extended launch task durations.
- [HangTimeMetric](hangtimemetric.md): A metric that measures app hang time.
- [HitchTimeMetric](hitchtimemetric.md): A metric that measures animation hitch time.
