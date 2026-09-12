> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/quantitytype](https://developer.apple.com/documentation/healthkit/hkstatistics/quantitytype)

# quantityType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The quantity type of the samples used to calculate these statistics.

## Declaration

```swift
var quantityType: HKQuantityType { get }
```

<a id="Discussion"></a>

## Discussion

The quantity type from the statistics query used to generate these statistics.

## See Also

### Getting Property Data

- [startDate](startdate.md): The start of the time period included in these statistics.
- [endDate](enddate.md): The end of the time period included in these statistics.
- [sources](sources.md): An array containing all the sources contributing to these statistics.

# quantityType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The quantity type of the samples used to calculate these statistics.

## Declaration

```objectivec
@property (strong, readonly) HKQuantityType * quantityType;
```

<a id="Discussion"></a>

## Discussion

The quantity type from the statistics query used to generate these statistics.

## See Also

### Getting Property Data

- [startDate](startdate.md): The start of the time period included in these statistics.
- [endDate](enddate.md): The end of the time period included in these statistics.
- [sources](sources.md): An array containing all the sources contributing to these statistics.
