> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfcalendarsetlocale(_:_:)

# CFCalendarSetLocale(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the locale for a calendar.

## Declaration

```swift
func CFCalendarSetLocale(_ calendar: CFCalendar!, _ locale: CFLocale!)
```

## Parameters

- `calendar`: The calendar to modify.
- `locale`: The locale to set for `calendar`.

## See Also

### Getting and Setting the Locale

- [CFCalendarCopyLocale(\_:)](cfcalendarcopylocale%28__%29.md): Returns a locale object for a specified calendar.

# CFCalendarSetLocale (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the locale for a calendar.

## Declaration

```objectivec
extern void CFCalendarSetLocale(CFCalendarRef calendar, CFLocaleRef locale);
```

## Parameters

- `calendar`: The calendar to modify.
- `locale`: The locale to set for `calendar`.

## See Also

### Getting and Setting the Locale

- [CFCalendarCopyLocale](cfcalendarcopylocale%28__%29.md): Returns a locale object for a specified calendar.
