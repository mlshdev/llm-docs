> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendarsettimezone(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcalendarsettimezone(_:_:))

# CFCalendarSetTimeZone(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the time zone for a calendar.

## Declaration

```swift
func CFCalendarSetTimeZone(_ calendar: CFCalendar!, _ tz: CFTimeZone!)
```

## Parameters

- `calendar`: The calendar to modify.
- `tz`: The time zone to set for `calendar`.

## See Also

### Getting and Setting the Time Zone

- [CFCalendarCopyTimeZone(\_:)](cfcalendarcopytimezone%28__%29.md): Returns a time zone object for a specified calendar.

# CFCalendarSetTimeZone (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the time zone for a calendar.

## Declaration

```objectivec
extern void CFCalendarSetTimeZone(CFCalendarRef calendar, CFTimeZoneRef tz);
```

## Parameters

- `calendar`: The calendar to modify.
- `tz`: The time zone to set for `calendar`.

## See Also

### Getting and Setting the Time Zone

- [CFCalendarCopyTimeZone](cfcalendarcopytimezone%28__%29.md): Returns a time zone object for a specified calendar.
