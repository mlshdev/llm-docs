> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/hangtimemetric](https://developer.apple.com/documentation/metrickit/hangtimemetric)

# HangTimeMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures app hang time.

## Declaration

```swift
struct HangTimeMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.hangTime(\_:)](metricresult/hangtime%28__%29.md) case. It appears in both [intervalEntries](metricreport/intervalentries.md) and [stateEntries](metricreport/stateentries.md) when state reporting is enabled.

Hang durations that exceed 9 seconds of wall clock time are reported in the histogram’s final bucket.

## Topics

### Measurements

- [histogram](hangtimemetric/histogram.md): Histogram of application hang time durations.

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

- [TimeToFirstDrawMetric](timetofirstdrawmetric.md): A metric that measures time to first draw durations for app launches.
- [OptimizedTimeToFirstDrawMetric](optimizedtimetofirstdrawmetric.md): A metric that measures optimized time to first draw durations for app launches.
- [ApplicationResumeTimeMetric](applicationresumetimemetric.md): A metric that measures app resume time durations.
- [ExtendedLaunchMetric](extendedlaunchmetric.md): A metric that measures extended launch task durations.
- [HitchTimeMetric](hitchtimemetric.md): A metric that measures animation hitch time.
