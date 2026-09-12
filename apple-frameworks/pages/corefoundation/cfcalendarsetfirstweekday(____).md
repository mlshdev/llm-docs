> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendarsetfirstweekday(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcalendarsetfirstweekday(_:_:))

# CFCalendarSetFirstWeekday(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the first weekday for a calendar.

## Declaration

```swift
func CFCalendarSetFirstWeekday(_ calendar: CFCalendar!, _ wkdy: CFIndex)
```

## Parameters

- `calendar`: The calendar to modify.
- `wkdy`: The index to set for the first weekday of `calendar`.

## See Also

### Getting and Setting Day Information

- [CFCalendarGetFirstWeekday(\_:)](cfcalendargetfirstweekday%28__%29.md): Returns the index of first weekday for a specified calendar.
- [CFCalendarGetMinimumDaysInFirstWeek(\_:)](cfcalendargetminimumdaysinfirstweek%28__%29.md): Returns the minimum number of days in the first week of a specified calendar.
- [CFCalendarSetMinimumDaysInFirstWeek(\_:\_:)](cfcalendarsetminimumdaysinfirstweek%28____%29.md): Sets the minimum number of days in the first week of a specified calendar.

# CFCalendarSetFirstWeekday (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the first weekday for a calendar.

## Declaration

```objectivec
extern void CFCalendarSetFirstWeekday(CFCalendarRef calendar, CFIndex wkdy);
```

## Parameters

- `calendar`: The calendar to modify.
- `wkdy`: The index to set for the first weekday of `calendar`.

## See Also

### Getting and Setting Day Information

- [CFCalendarGetFirstWeekday](cfcalendargetfirstweekday%28__%29.md): Returns the index of first weekday for a specified calendar.
- [CFCalendarGetMinimumDaysInFirstWeek](cfcalendargetminimumdaysinfirstweek%28__%29.md): Returns the minimum number of days in the first week of a specified calendar.
- [CFCalendarSetMinimumDaysInFirstWeek](cfcalendarsetminimumdaysinfirstweek%28____%29.md): Sets the minimum number of days in the first week of a specified calendar.
