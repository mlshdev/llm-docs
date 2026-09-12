> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticsoptions/duration](https://developer.apple.com/documentation/healthkit/hkstatisticsoptions/duration)

# duration (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An option indicating that the system calculates the total duration covering all the samples.

## Declaration

```swift
static var duration: HKStatisticsOptions { get }
```

## See Also

### Constants

- [separateBySource](separatebysource.md): An option indicating that the system calculates the specified statistics separately for each source.
- [discreteAverage](discreteaverage.md): An option indicating that the system calculates the average quantity for the samples.
- [discreteMin](discretemin.md): An option indicating that the system calculates the minimum quantity for the samples.
- [discreteMax](discretemax.md): An option indicating that the system calculates the maximum quantity for the samples.
- [cumulativeSum](cumulativesum.md): An option indicating that the system calculates the sum of all the quantities for the samples.
- [mostRecent](mostrecent.md): An option indicating that the system returns the most recent quantity from the matching samples.

# HKStatisticsOptionDuration (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An option indicating that the system calculates the total duration covering all the samples.

## Declaration

```objectivec
HKStatisticsOptionDuration
```

## See Also

### Constants

- [HKStatisticsOptionNone](hkstatisticsoptionnone.md): An option indicating that the system will not calculate any statistics values.
- [HKStatisticsOptionSeparateBySource](separatebysource.md): An option indicating that the system calculates the specified statistics separately for each source.
- [HKStatisticsOptionDiscreteAverage](discreteaverage.md): An option indicating that the system calculates the average quantity for the samples.
- [HKStatisticsOptionDiscreteMin](discretemin.md): An option indicating that the system calculates the minimum quantity for the samples.
- [HKStatisticsOptionDiscreteMax](discretemax.md): An option indicating that the system calculates the maximum quantity for the samples.
- [HKStatisticsOptionCumulativeSum](cumulativesum.md): An option indicating that the system calculates the sum of all the quantities for the samples.
- [HKStatisticsOptionMostRecent](mostrecent.md): An option indicating that the system returns the most recent quantity from the matching samples.
