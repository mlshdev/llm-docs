> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/extendedlaunchmetric](https://developer.apple.com/documentation/metrickit/extendedlaunchmetric)

# ExtendedLaunchMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures extended launch task durations.

## Declaration

```swift
struct ExtendedLaunchMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.extendedLaunch(\_:)](metricresult/extendedlaunch%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

The end point of an extended launch is the later of the first rendered frame and the completion of all tasks you track with [trackLaunchTask(id:onTrackingError:\_:)](metricmanager/tracklaunchtask%28id_ontrackingerror___%29-48k2s.md) or [trackLaunchTask(id:onTrackingError:\_:)](metricmanager/tracklaunchtask%28id_ontrackingerror___%29-jnu1.md).

## Topics

### Measurements

- [histogram](extendedlaunchmetric/histogram.md): Histogram of extended launch durations.

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
- [HangTimeMetric](hangtimemetric.md): A metric that measures app hang time.
- [HitchTimeMetric](hitchtimemetric.md): A metric that measures animation hitch time.
