> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/startdate](https://developer.apple.com/documentation/healthkit/hkstatistics/startdate)

# startDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The start of the time period included in these statistics.

## Declaration

```swift
var startDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the start date for the statistics. If you calculated these statistics using a statistics query, this is the earliest start date from all the samples that match the query. If you calculated these statistics using a statistics collection query, this is the start of the time interval for that particular collection of statistics.

## See Also

### Getting Property Data

- [endDate](enddate.md): The end of the time period included in these statistics.
- [quantityType](quantitytype.md): The quantity type of the samples used to calculate these statistics.
- [sources](sources.md): An array containing all the sources contributing to these statistics.

# startDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The start of the time period included in these statistics.

## Declaration

```objectivec
@property (strong, readonly) NSDate * startDate;
```

<a id="Discussion"></a>

## Discussion

This property contains the start date for the statistics. If you calculated these statistics using a statistics query, this is the earliest start date from all the samples that match the query. If you calculated these statistics using a statistics collection query, this is the start of the time interval for that particular collection of statistics.

## See Also

### Getting Property Data

- [endDate](enddate.md): The end of the time period included in these statistics.
- [quantityType](quantitytype.md): The quantity type of the samples used to calculate these statistics.
- [sources](sources.md): An array containing all the sources contributing to these statistics.
