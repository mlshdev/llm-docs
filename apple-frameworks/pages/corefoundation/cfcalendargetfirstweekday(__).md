> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendargetfirstweekday(_:)](https://developer.apple.com/documentation/corefoundation/cfcalendargetfirstweekday(_:))

# CFCalendarGetFirstWeekday(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the index of first weekday for a specified calendar.

## Declaration

```swift
func CFCalendarGetFirstWeekday(_ calendar: CFCalendar!) -> CFIndex
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

The index of the first weekday of the specified calendar.

## See Also

### Getting and Setting Day Information

- [CFCalendarSetFirstWeekday(\_:\_:)](cfcalendarsetfirstweekday%28____%29.md): Sets the first weekday for a calendar.
- [CFCalendarGetMinimumDaysInFirstWeek(\_:)](cfcalendargetminimumdaysinfirstweek%28__%29.md): Returns the minimum number of days in the first week of a specified calendar.
- [CFCalendarSetMinimumDaysInFirstWeek(\_:\_:)](cfcalendarsetminimumdaysinfirstweek%28____%29.md): Sets the minimum number of days in the first week of a specified calendar.

# CFCalendarGetFirstWeekday (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the index of first weekday for a specified calendar.

## Declaration

```objectivec
extern CFIndex CFCalendarGetFirstWeekday(CFCalendarRef calendar);
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

The index of the first weekday of the specified calendar.

## See Also

### Getting and Setting Day Information

- [CFCalendarSetFirstWeekday](cfcalendarsetfirstweekday%28____%29.md): Sets the first weekday for a calendar.
- [CFCalendarGetMinimumDaysInFirstWeek](cfcalendargetminimumdaysinfirstweek%28__%29.md): Returns the minimum number of days in the first week of a specified calendar.
- [CFCalendarSetMinimumDaysInFirstWeek](cfcalendarsetminimumdaysinfirstweek%28____%29.md): Sets the minimum number of days in the first week of a specified calendar.
