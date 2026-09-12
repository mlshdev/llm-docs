> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimeintervalgaugeprovider/enddate](https://developer.apple.com/documentation/clockkit/clktimeintervalgaugeprovider/enddate)

# endDate (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The ending time and date for the gauge’s time interval.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var endDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

The end date is equal to or later than the start date.

## See Also

### Getting Information about the Gauge

- [startDate](startdate.md): Deprecated. The starting time and date for the gauge’s time interval.
- [startFillFraction](startfillfraction.md): Deprecated. The position of the leading edge of the time bar within the specified time interval.
- [endFillFraction](endfillfraction.md): Deprecated. The position of the trailing edge of the time bar within the specified time interval.

# endDate (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The ending time and date for the gauge’s time interval.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * endDate;
```

<a id="Discussion"></a>

## Discussion

The end date is equal to or later than the start date.

## See Also

### Getting Information about the Gauge

- [startDate](startdate.md): Deprecated. The starting time and date for the gauge’s time interval.
- [startFillFraction](startfillfraction.md): Deprecated. The position of the leading edge of the time bar within the specified time interval.
- [endFillFraction](endfillfraction.md): Deprecated. The position of the trailing edge of the time bar within the specified time interval.
