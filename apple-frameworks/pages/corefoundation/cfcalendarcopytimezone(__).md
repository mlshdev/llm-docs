> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendarcopytimezone(_:)](https://developer.apple.com/documentation/corefoundation/cfcalendarcopytimezone(_:))

# CFCalendarCopyTimeZone(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a time zone object for a specified calendar.

## Declaration

```swift
func CFCalendarCopyTimeZone(_ calendar: CFCalendar!) -> CFTimeZone!
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

A copy of the time zone object for the specified calendar. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting and Setting the Time Zone

- [CFCalendarSetTimeZone(\_:\_:)](cfcalendarsettimezone%28____%29.md): Sets the time zone for a calendar.

# CFCalendarCopyTimeZone (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a time zone object for a specified calendar.

## Declaration

```objectivec
extern CFTimeZoneRefCFCalendarCopyTimeZone(CFCalendarRef calendar);
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

A copy of the time zone object for the specified calendar. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting and Setting the Time Zone

- [CFCalendarSetTimeZone](cfcalendarsettimezone%28____%29.md): Sets the time zone for a calendar.
