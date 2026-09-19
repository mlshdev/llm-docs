> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquerydescriptor/intervalcomponents

# intervalComponents

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

The date components that define the time interval for each statistics object in the collection.

## Declaration

```swift
var intervalComponents: DateComponents
```

## See Also

### Accessing Query Properties

- [predicate](predicate.md): A predicate that defines the set of data that the query uses to calculate the statistics.
- [options](options.md): A list of options that define the type of statistical calculations performed and the way in which HealthKit merges data from multiple sources.
- [anchorDate](anchordate.md): The date that anchors the collection’s time intervals.
