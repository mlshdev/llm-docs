> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkstatisticsquerydescriptor/predicate

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
