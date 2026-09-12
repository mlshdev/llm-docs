> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquery/anchordate](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquery/anchordate)

# anchorDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The anchor date for the collection’s time intervals.

## Declaration

```swift
var anchorDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

The date used to anchor the collection’s time intervals.

Use the anchor date to set the start time for your time intervals. For example, if you are using a day interval, you might create a date object with a time of 2:00 a.m. This value sets the start of each day for all of your time intervals.

Technically, the anchor sets the start time for a single time interval. All other time intervals must align with this interval. The time intervals can extend before or after the anchor date. Each time interval has the same length, and there is no gap between adjacent intervals.  Think of time as a number line: The anchor date represents its origin, with the intervals creating tick marks that extend away from the origin in both directions.

## See Also

### Getting Property Data

- [intervalComponents](intervalcomponents.md): The date components that define the time interval for each statistics object in the collection.
- [options](options.md): A list of options that define the type of statistical calculations performed and the way in which data from multiple sources are merged.

# anchorDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The anchor date for the collection’s time intervals.

## Declaration

```objectivec
@property (strong, readonly) NSDate * anchorDate;
```

<a id="Discussion"></a>

## Discussion

The date used to anchor the collection’s time intervals.

Use the anchor date to set the start time for your time intervals. For example, if you are using a day interval, you might create a date object with a time of 2:00 a.m. This value sets the start of each day for all of your time intervals.

Technically, the anchor sets the start time for a single time interval. All other time intervals must align with this interval. The time intervals can extend before or after the anchor date. Each time interval has the same length, and there is no gap between adjacent intervals.  Think of time as a number line: The anchor date represents its origin, with the intervals creating tick marks that extend away from the origin in both directions.

## See Also

### Getting Property Data

- [intervalComponents](intervalcomponents.md): The date components that define the time interval for each statistics object in the collection.
- [options](options.md): A list of options that define the type of statistical calculations performed and the way in which data from multiple sources are merged.
