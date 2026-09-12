> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/optimizedtimetofirstdrawmetric](https://developer.apple.com/documentation/metrickit/optimizedtimetofirstdrawmetric)

# OptimizedTimeToFirstDrawMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures optimized time to first draw durations for app launches.

## Declaration

```swift
struct OptimizedTimeToFirstDrawMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.optimizedTimeToFirstDraw(\_:)](metricresult/optimizedtimetofirstdraw%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

Optimized time to first draw reflects the actual user-perceived launch time when the system applies prefetching optimizations. The system may start the app in the background before the user taps its icon, so this metric can be shorter than [TimeToFirstDrawMetric](timetofirstdrawmetric.md).

## Topics

### Measurements

- [histogram](optimizedtimetofirstdrawmetric/histogram.md): Histogram of optimized time to first draw durations.

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
- [ApplicationResumeTimeMetric](applicationresumetimemetric.md): A metric that measures app resume time durations.
- [ExtendedLaunchMetric](extendedlaunchmetric.md): A metric that measures extended launch task durations.
- [HangTimeMetric](hangtimemetric.md): A metric that measures app hang time.
- [HitchTimeMetric](hitchtimemetric.md): A metric that measures animation hitch time.
