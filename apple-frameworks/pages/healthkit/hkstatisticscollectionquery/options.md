> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquery/options](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquery/options)

# options (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A list of options that define the type of statistical calculations performed and the way in which data from multiple sources are merged.

## Declaration

```swift
var options: HKStatisticsOptions { get }
```

<a id="Discussion"></a>

## Discussion

For a list of valid options, see [HKStatisticsOptions](../hkstatisticsoptions.md).

## See Also

### Getting Property Data

- [anchorDate](anchordate.md): The anchor date for the collection’s time intervals.
- [intervalComponents](intervalcomponents.md): The date components that define the time interval for each statistics object in the collection.

# options (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A list of options that define the type of statistical calculations performed and the way in which data from multiple sources are merged.

## Declaration

```objectivec
@property (readonly) HKStatisticsOptions options;
```

<a id="Discussion"></a>

## Discussion

For a list of valid options, see [HKStatisticsOptions](../hkstatisticsoptions.md).

## See Also

### Getting Property Data

- [anchorDate](anchordate.md): The anchor date for the collection’s time intervals.
- [intervalComponents](intervalcomponents.md): The date components that define the time interval for each statistics object in the collection.
