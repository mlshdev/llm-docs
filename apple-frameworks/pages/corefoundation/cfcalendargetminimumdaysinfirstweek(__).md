> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendargetminimumdaysinfirstweek(_:)](https://developer.apple.com/documentation/corefoundation/cfcalendargetminimumdaysinfirstweek(_:))

# CFCalendarGetMinimumDaysInFirstWeek(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the minimum number of days in the first week of a specified calendar.

## Declaration

```swift
func CFCalendarGetMinimumDaysInFirstWeek(_ calendar: CFCalendar!) -> CFIndex
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

The minimum number of days in the first week of `calendar`.

## See Also

### Getting and Setting Day Information

- [CFCalendarGetFirstWeekday(\_:)](cfcalendargetfirstweekday%28__%29.md): Returns the index of first weekday for a specified calendar.
- [CFCalendarSetFirstWeekday(\_:\_:)](cfcalendarsetfirstweekday%28____%29.md): Sets the first weekday for a calendar.
- [CFCalendarSetMinimumDaysInFirstWeek(\_:\_:)](cfcalendarsetminimumdaysinfirstweek%28____%29.md): Sets the minimum number of days in the first week of a specified calendar.

# CFCalendarGetMinimumDaysInFirstWeek (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the minimum number of days in the first week of a specified calendar.

## Declaration

```objectivec
extern CFIndex CFCalendarGetMinimumDaysInFirstWeek(CFCalendarRef calendar);
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

The minimum number of days in the first week of `calendar`.

## See Also

### Getting and Setting Day Information

- [CFCalendarGetFirstWeekday](cfcalendargetfirstweekday%28__%29.md): Returns the index of first weekday for a specified calendar.
- [CFCalendarSetFirstWeekday](cfcalendarsetfirstweekday%28____%29.md): Sets the first weekday for a calendar.
- [CFCalendarSetMinimumDaysInFirstWeek](cfcalendarsetminimumdaysinfirstweek%28____%29.md): Sets the minimum number of days in the first week of a specified calendar.
