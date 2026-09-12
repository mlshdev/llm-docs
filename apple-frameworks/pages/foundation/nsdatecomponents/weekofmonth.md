> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatecomponents/weekofmonth](https://developer.apple.com/documentation/foundation/nsdatecomponents/weekofmonth)

# weekOfMonth (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The week number of the months.

## Declaration

```swift
var weekOfMonth: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This value is interpreted in the context of the calendar with which it is used—see [Calendars, Date Components, and Calendar Units](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/Articles/dtCalendars.html#//apple_ref/doc/uid/TP40003470) in [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i).

## See Also

### Accessing Weeks and Days

- [weekday](weekday.md): The number of the weekdays.
- [weekdayOrdinal](weekdayordinal.md): The ordinal number of weekdays.
- [weekOfYear](weekofyear.md): The ISO 8601 week date of the year.
- [day](day.md): The number of days.
- [week()](week%28%29.md): Deprecated. Returns the number of weeks.
- [setWeek(\_:)](setweek%28__%29.md): Deprecated. Sets the number of weeks.

# weekOfMonth (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The week number of the months.

## Declaration

```objectivec
@property NSInteger weekOfMonth;
```

<a id="Discussion"></a>

## Discussion

This value is interpreted in the context of the calendar with which it is used—see [Calendars, Date Components, and Calendar Units](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/Articles/dtCalendars.html#//apple_ref/doc/uid/TP40003470) in [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i).

## See Also

### Accessing Weeks and Days

- [weekday](weekday.md): The number of the weekdays.
- [weekdayOrdinal](weekdayordinal.md): The ordinal number of weekdays.
- [weekOfYear](weekofyear.md): The ISO 8601 week date of the year.
- [day](day.md): The number of days.
- [week](week%28%29.md): Deprecated. Returns the number of weeks.
- [setWeek:](setweek%28__%29.md): Deprecated. Sets the number of weeks.
