> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmpedometerdata/startdate

# startDate (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The start time for the pedometer data.

## Declaration

```swift
var startDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

The `startDate` and [endDate](enddate.md) represent the period of time over which the pedometer data was gathered.

## See Also

### Getting the Dates

- [endDate](enddate.md): The end time for the pedometer data.

# startDate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The start time for the pedometer data.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * startDate;
```

<a id="Discussion"></a>

## Discussion

The `startDate` and [endDate](enddate.md) represent the period of time over which the pedometer data was gathered.

## See Also

### Getting the Dates

- [endDate](enddate.md): The end time for the pedometer data.
