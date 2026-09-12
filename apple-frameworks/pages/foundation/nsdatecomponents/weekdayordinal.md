> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatecomponents/weekdayordinal](https://developer.apple.com/documentation/foundation/nsdatecomponents/weekdayordinal)

# weekdayOrdinal (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The ordinal number of weekdays.

## Declaration

```swift
var weekdayOrdinal: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Weekday ordinal units represent the position of the weekday within the next larger calendar unit, such as the month. For example, *2* is the weekday ordinal unit for the *second* Friday of the month.

This value is interpreted in the context of the calendar with which it is used—see [Calendars, Date Components, and Calendar Units](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/Articles/dtCalendars.html#//apple_ref/doc/uid/TP40003470) in [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i).

## See Also

### Accessing Weeks and Days

- [weekday](weekday.md): The number of the weekdays.
- [weekOfMonth](weekofmonth.md): The week number of the months.
- [weekOfYear](weekofyear.md): The ISO 8601 week date of the year.
- [day](day.md): The number of days.
- [week()](week%28%29.md): Deprecated. Returns the number of weeks.
- [setWeek(\_:)](setweek%28__%29.md): Deprecated. Sets the number of weeks.

# weekdayOrdinal (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The ordinal number of weekdays.

## Declaration

```objectivec
@property NSInteger weekdayOrdinal;
```

<a id="Discussion"></a>

## Discussion

Weekday ordinal units represent the position of the weekday within the next larger calendar unit, such as the month. For example, *2* is the weekday ordinal unit for the *second* Friday of the month.

This value is interpreted in the context of the calendar with which it is used—see [Calendars, Date Components, and Calendar Units](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/Articles/dtCalendars.html#//apple_ref/doc/uid/TP40003470) in [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i).

## See Also

### Accessing Weeks and Days

- [weekday](weekday.md): The number of the weekdays.
- [weekOfMonth](weekofmonth.md): The week number of the months.
- [weekOfYear](weekofyear.md): The ISO 8601 week date of the year.
- [day](day.md): The number of days.
- [week](week%28%29.md): Deprecated. Returns the number of weeks.
- [setWeek:](setweek%28__%29.md): Deprecated. Sets the number of weeks.
