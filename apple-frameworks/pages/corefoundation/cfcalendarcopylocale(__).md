> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendarcopylocale(_:)](https://developer.apple.com/documentation/corefoundation/cfcalendarcopylocale(_:))

# CFCalendarCopyLocale(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a locale object for a specified calendar.

## Declaration

```swift
func CFCalendarCopyLocale(_ calendar: CFCalendar!) -> CFLocale!
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

A copy of the locale object for the specified calendar. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting and Setting the Locale

- [CFCalendarSetLocale(\_:\_:)](cfcalendarsetlocale%28____%29.md): Sets the locale for a calendar.

# CFCalendarCopyLocale (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a locale object for a specified calendar.

## Declaration

```objectivec
extern CFLocaleRefCFCalendarCopyLocale(CFCalendarRef calendar);
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

A copy of the locale object for the specified calendar. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting and Setting the Locale

- [CFCalendarSetLocale](cfcalendarsetlocale%28____%29.md): Sets the locale for a calendar.
