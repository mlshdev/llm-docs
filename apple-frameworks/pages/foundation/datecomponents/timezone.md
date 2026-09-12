> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponents/timezone](https://developer.apple.com/documentation/foundation/datecomponents/timezone)

# timeZone

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A time zone.

## Declaration

```swift
var timeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  This value is interpreted in the context of the calendar in which it is used.

## See Also

### Initializing Date Components

- [init(calendar:timeZone:era:year:month:day:hour:minute:second:nanosecond:weekday:weekdayOrdinal:quarter:weekOfMonth:weekOfYear:yearForWeekOfYear:)](init%28calendar_timezone_era_year_month_day_hour_minute_second_nanosecond_weekday_weekdayordinal_quarter_weekofmonth_weekofyear_yearforweekofyear_%29.md): Initializes a date components value, optionally specifying values for its fields.
- [calendar](calendar.md): The calendar used to interpret the other values in this structure.
