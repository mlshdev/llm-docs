> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatecomponents/weekday](https://developer.apple.com/documentation/foundation/nsdatecomponents/weekday)

# weekday (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of the weekdays.

## Declaration

```swift
var weekday: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Weekday units are the numbers 1 through *n*, where *n* is the number of days in the week. For example, in the Gregorian calendar, *n* is 7 and Sunday is represented by 1.

This value is interpreted in the context of the calendar with which it is used—see [Calendars, Date Components, and Calendar Units](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/Articles/dtCalendars.html#//apple_ref/doc/uid/TP40003470) in [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i).

## See Also

### Accessing Weeks and Days

- [weekdayOrdinal](weekdayordinal.md): The ordinal number of weekdays.
- [weekOfMonth](weekofmonth.md): The week number of the months.
- [weekOfYear](weekofyear.md): The ISO 8601 week date of the year.
- [day](day.md): The number of days.
- [week()](week%28%29.md): Deprecated. Returns the number of weeks.
- [setWeek(\_:)](setweek%28__%29.md): Deprecated. Sets the number of weeks.

# weekday (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of the weekdays.

## Declaration

```objectivec
@property NSInteger weekday;
```

<a id="Discussion"></a>

## Discussion

Weekday units are the numbers 1 through *n*, where *n* is the number of days in the week. For example, in the Gregorian calendar, *n* is 7 and Sunday is represented by 1.

This value is interpreted in the context of the calendar with which it is used—see [Calendars, Date Components, and Calendar Units](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/Articles/dtCalendars.html#//apple_ref/doc/uid/TP40003470) in [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i).

## See Also

### Accessing Weeks and Days

- [weekdayOrdinal](weekdayordinal.md): The ordinal number of weekdays.
- [weekOfMonth](weekofmonth.md): The week number of the months.
- [weekOfYear](weekofyear.md): The ISO 8601 week date of the year.
- [day](day.md): The number of days.
- [week](week%28%29.md): Deprecated. Returns the number of weeks.
- [setWeek:](setweek%28__%29.md): Deprecated. Sets the number of weeks.
