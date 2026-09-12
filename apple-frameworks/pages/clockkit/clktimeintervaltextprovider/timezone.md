> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimeintervaltextprovider/timezone](https://developer.apple.com/documentation/clockkit/clktimeintervaltextprovider/timezone)

# timeZone (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The time zone used to format time values.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var timeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is `nil`, the text provider uses the time zone currently configured for the user.

## See Also

### Related Documentation

- [init(start:end:timeZone:)](init%28start_end_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.

### Getting the Time Information

- [startDate](startdate.md): Deprecated. The start date for the time interval.
- [endDate](enddate.md): Deprecated. The end date for the time interval.

# timeZone (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The time zone used to format time values.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

If the value is `nil`, the text provider uses the time zone currently configured for the user.

## See Also

### Related Documentation

- [textProviderWithStartDate:endDate:timeZone:](init%28start_end_timezone_%29.md): Deprecated. Creates and returns a text provider with the specified dates and time zone information.

### Getting the Time Information

- [startDate](startdate.md): Deprecated. The start date for the time interval.
- [endDate](enddate.md): Deprecated. The end date for the time interval.
