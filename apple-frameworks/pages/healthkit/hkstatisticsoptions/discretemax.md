> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticsoptions/discretemax](https://developer.apple.com/documentation/healthkit/hkstatisticsoptions/discretemax)

# discreteMax (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An option indicating that the system calculates the maximum quantity for the samples.

## Declaration

```swift
static var discreteMax: HKStatisticsOptions { get }
```

## See Also

### Constants

- [separateBySource](separatebysource.md): An option indicating that the system calculates the specified statistics separately for each source.
- [discreteAverage](discreteaverage.md): An option indicating that the system calculates the average quantity for the samples.
- [discreteMin](discretemin.md): An option indicating that the system calculates the minimum quantity for the samples.
- [cumulativeSum](cumulativesum.md): An option indicating that the system calculates the sum of all the quantities for the samples.
- [mostRecent](mostrecent.md): An option indicating that the system returns the most recent quantity from the matching samples.
- [duration](duration.md): An option indicating that the system calculates the total duration covering all the samples.

# HKStatisticsOptionDiscreteMax (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An option indicating that the system calculates the maximum quantity for the samples.

## Declaration

```objectivec
HKStatisticsOptionDiscreteMax
```

## See Also

### Constants

- [HKStatisticsOptionNone](hkstatisticsoptionnone.md): An option indicating that the system will not calculate any statistics values.
- [HKStatisticsOptionSeparateBySource](separatebysource.md): An option indicating that the system calculates the specified statistics separately for each source.
- [HKStatisticsOptionDiscreteAverage](discreteaverage.md): An option indicating that the system calculates the average quantity for the samples.
- [HKStatisticsOptionDiscreteMin](discretemin.md): An option indicating that the system calculates the minimum quantity for the samples.
- [HKStatisticsOptionCumulativeSum](cumulativesum.md): An option indicating that the system calculates the sum of all the quantities for the samples.
- [HKStatisticsOptionMostRecent](mostrecent.md): An option indicating that the system returns the most recent quantity from the matching samples.
- [HKStatisticsOptionDuration](duration.md): An option indicating that the system calculates the total duration covering all the samples.
