> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquerydescriptor/predicate](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquerydescriptor/predicate)

# predicate

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A predicate that defines the set of data that the query uses to calculate the statistics.

## Declaration

```swift
var predicate: HKSamplePredicate<HKQuantitySample>
```

## See Also

### Accessing Query Properties

- [options](options.md): A list of options that define the type of statistical calculations performed and the way in which HealthKit merges data from multiple sources.
- [anchorDate](anchordate.md): The date that anchors the collection’s time intervals.
- [intervalComponents](intervalcomponents.md): The date components that define the time interval for each statistics object in the collection.
