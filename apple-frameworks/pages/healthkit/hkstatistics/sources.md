> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/sources](https://developer.apple.com/documentation/healthkit/hkstatistics/sources)

# sources (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing all the sources contributing to these statistics.

## Declaration

```swift
var sources: [HKSource]? { get }
```

<a id="Discussion"></a>

## Discussion

If the [separateBySource](../hkstatisticsoptions/separatebysource.md) option was specified, this property holds an array of all the sources included in the calculations. If the [separateBySource](../hkstatisticsoptions/separatebysource.md) option was not specified, the property contains `nil`.

## See Also

### Getting Property Data

- [startDate](startdate.md): The start of the time period included in these statistics.
- [endDate](enddate.md): The end of the time period included in these statistics.
- [quantityType](quantitytype.md): The quantity type of the samples used to calculate these statistics.

# sources (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing all the sources contributing to these statistics.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSArray<HKSource *> * sources;
```

<a id="Discussion"></a>

## Discussion

If the [HKStatisticsOptionSeparateBySource](../hkstatisticsoptions/separatebysource.md) option was specified, this property holds an array of all the sources included in the calculations. If the [HKStatisticsOptionSeparateBySource](../hkstatisticsoptions/separatebysource.md) option was not specified, the property contains `nil`.

## See Also

### Getting Property Data

- [startDate](startdate.md): The start of the time period included in these statistics.
- [endDate](enddate.md): The end of the time period included in these statistics.
- [quantityType](quantitytype.md): The quantity type of the samples used to calculate these statistics.
