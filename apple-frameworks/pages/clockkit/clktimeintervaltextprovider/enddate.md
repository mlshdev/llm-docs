> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimeintervaltextprovider/enddate](https://developer.apple.com/documentation/clockkit/clktimeintervaltextprovider/enddate)

# endDate (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The end date for the time interval.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var endDate: Date { get set }
```

<a id="Discussion"></a>

## Discussion

The date in this property must come chronologically after the date in the [startDate](startdate.md) property. This property must not be `nil`.

## See Also

### Related Documentation

- [init(start:end:timeZone:)](init%28start_end_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.
- [init(start:end:)](init%28start_end_%29.md): Deprecated. Creates and returns a text provider with the specified start and end dates.

### Getting the Time Information

- [startDate](startdate.md): Deprecated. The start date for the time interval.
- [timeZone](timezone.md): Deprecated. The time zone used to format time values.

# endDate (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The end date for the time interval.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain) NSDate * endDate;
```

<a id="Discussion"></a>

## Discussion

The date in this property must come chronologically after the date in the [startDate](startdate.md) property. This property must not be `nil`.

## See Also

### Related Documentation

- [textProviderWithStartDate:endDate:timeZone:](init%28start_end_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.
- [textProviderWithStartDate:endDate:](init%28start_end_%29.md): Deprecated. Creates and returns a text provider with the specified start and end dates.

### Getting the Time Information

- [startDate](startdate.md): Deprecated. The start date for the time interval.
- [timeZone](timezone.md): Deprecated. The time zone used to format time values.
