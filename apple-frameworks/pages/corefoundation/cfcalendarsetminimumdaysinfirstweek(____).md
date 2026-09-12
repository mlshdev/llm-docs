> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendarsetminimumdaysinfirstweek(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcalendarsetminimumdaysinfirstweek(_:_:))

# CFCalendarSetMinimumDaysInFirstWeek(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the minimum number of days in the first week of a specified calendar.

## Declaration

```swift
func CFCalendarSetMinimumDaysInFirstWeek(_ calendar: CFCalendar!, _ mwd: CFIndex)
```

## Parameters

- `calendar`: The calendar to modify.
- `mwd`: The number to set as the minimum number of days in the first week of `calendar`.

## See Also

### Getting and Setting Day Information

- [CFCalendarGetFirstWeekday(\_:)](cfcalendargetfirstweekday%28__%29.md): Returns the index of first weekday for a specified calendar.
- [CFCalendarSetFirstWeekday(\_:\_:)](cfcalendarsetfirstweekday%28____%29.md): Sets the first weekday for a calendar.
- [CFCalendarGetMinimumDaysInFirstWeek(\_:)](cfcalendargetminimumdaysinfirstweek%28__%29.md): Returns the minimum number of days in the first week of a specified calendar.

# CFCalendarSetMinimumDaysInFirstWeek (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the minimum number of days in the first week of a specified calendar.

## Declaration

```objectivec
extern void CFCalendarSetMinimumDaysInFirstWeek(CFCalendarRef calendar, CFIndex mwd);
```

## Parameters

- `calendar`: The calendar to modify.
- `mwd`: The number to set as the minimum number of days in the first week of `calendar`.

## See Also

### Getting and Setting Day Information

- [CFCalendarGetFirstWeekday](cfcalendargetfirstweekday%28__%29.md): Returns the index of first weekday for a specified calendar.
- [CFCalendarSetFirstWeekday](cfcalendarsetfirstweekday%28____%29.md): Sets the first weekday for a calendar.
- [CFCalendarGetMinimumDaysInFirstWeek](cfcalendargetminimumdaysinfirstweek%28__%29.md): Returns the minimum number of days in the first week of a specified calendar.
