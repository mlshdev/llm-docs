> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquerydescriptor/anchordate](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquerydescriptor/anchordate)

# anchorDate

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

The date that anchors the collection’s time intervals.

## Declaration

```swift
var anchorDate: Date
```

<a id="Discussion"></a>

## Discussion

Use this parameter to set the start time for your time intervals. For example, if you’re using a day interval, you might create a date object with a time of 2:00 a.m. This value sets the start of the day for each of your time intervals.

Technically, the anchor sets the start time for a single time interval. All other time intervals must align with this interval. The time intervals can extend before or after the anchor date. Each time interval has the same length, and there’s no gap between adjacent intervals. Think of time as a number line: The anchor date represents its origin, and the intervals create tick marks that extend away from the origin in both directions.

## See Also

### Accessing Query Properties

- [predicate](predicate.md): A predicate that defines the set of data that the query uses to calculate the statistics.
- [options](options.md): A list of options that define the type of statistical calculations performed and the way in which HealthKit merges data from multiple sources.
- [intervalComponents](intervalcomponents.md): The date components that define the time interval for each statistics object in the collection.
