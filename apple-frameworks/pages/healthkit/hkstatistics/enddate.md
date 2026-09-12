> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/enddate](https://developer.apple.com/documentation/healthkit/hkstatistics/enddate)

# endDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The end of the time period included in these statistics.

## Declaration

```swift
var endDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the end date for the statistics. If you calculated these statistics using a statistics query, this is the latest end date from all the samples that match the query. If you calculated these statistics using a statistics collection query, this is the end of the time interval for that particular collection of statistics.

## See Also

### Getting Property Data

- [startDate](startdate.md): The start of the time period included in these statistics.
- [quantityType](quantitytype.md): The quantity type of the samples used to calculate these statistics.
- [sources](sources.md): An array containing all the sources contributing to these statistics.

# endDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The end of the time period included in these statistics.

## Declaration

```objectivec
@property (strong, readonly) NSDate * endDate;
```

<a id="Discussion"></a>

## Discussion

This property contains the end date for the statistics. If you calculated these statistics using a statistics query, this is the latest end date from all the samples that match the query. If you calculated these statistics using a statistics collection query, this is the end of the time interval for that particular collection of statistics.

## See Also

### Getting Property Data

- [startDate](startdate.md): The start of the time period included in these statistics.
- [quantityType](quantitytype.md): The quantity type of the samples used to calculate these statistics.
- [sources](sources.md): An array containing all the sources contributing to these statistics.
