> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticsquerydescriptor/init(predicate:options:)](https://developer.apple.com/documentation/healthkit/hkstatisticsquerydescriptor/init(predicate:options:))

# init(predicate:options:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Creates a statistics query descriptor.

## Declaration

```swift
init(predicate: HKSamplePredicate<HKQuantitySample>, options: HKStatisticsOptions)
```

## Parameters

- `predicate`: A predicate that defines the set of data that the query uses to calculate the statistics.
- `options`: A list of options that define the type of statistical calculations performed and the way in which HealthKit merges data from multiple sources. For a list of valid options, see [HKStatisticsOptions](../hkstatisticsoptions.md).
