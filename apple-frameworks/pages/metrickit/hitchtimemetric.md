> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/hitchtimemetric](https://developer.apple.com/documentation/metrickit/hitchtimemetric)

# HitchTimeMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures animation hitch time.

## Declaration

```swift
struct HitchTimeMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.hitchTime(\_:)](metricresult/hitchtime%28__%29.md) case. It appears in both [intervalEntries](metricreport/intervalentries.md) and [stateEntries](metricreport/stateentries.md) when state reporting is enabled.

The ratio is normalized against total animation duration and incorporates perceptual adjustments, making it the most accurate representation of the hitches users actually experience.

## Topics

### Measurements

- [ratio](hitchtimemetric/ratio.md): Ratio of time the application spent hitching during tracked animations.
- [totalHitchTime](hitchtimemetric/totalhitchtime.md): Total time the application spent hitching during tracked animations.
- [totalAnimationTime](hitchtimemetric/totalanimationtime.md): Total time the application spent animating.

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
- [HangTimeMetric](hangtimemetric.md): A metric that measures app hang time.
