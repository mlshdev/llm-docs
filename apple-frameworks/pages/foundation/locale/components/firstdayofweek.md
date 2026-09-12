> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/components/firstdayofweek](https://developer.apple.com/documentation/foundation/locale/components/firstdayofweek)

# firstDayOfWeek

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The first day of the week as represented by this locale.

## Declaration

```swift
var firstDayOfWeek: Locale.Weekday?
```

<a id="Discussion"></a>

## Discussion

This value is the preferred first day of the week to show in a calendar view. It isn’t necessarily the same as the first day after the weekend; don’t try to determine a first-day-of-week value from weekend information.

Set this property to override the locale’s default first day of week. To request the default first day of week used by the locale, use the [Locale](../../locale.md) property `firstDayOfWeek`.

This property corresponds to the `fw` key of the Unicode BCP 47 extension.

## See Also

### Specifying date and time components

- [calendar](calendar.md): The calendar used by the locale.
- [Calendar.Identifier](../../calendar/identifier-swift.enum.md): An enumeration for the available calendars.
- [Locale.Weekday](../weekday.md): A type that represents weekdays, used for indicating a locale’s first day of the week.
- [hourCycle](hourcycle.md): The hour cycle used by the locale, like one-to-twelve or zero-to-twenty-three.
- [Locale.HourCycle](../hourcycle-swift.enum.md): A type that represents the hour cycle used in a locale, like one-to-twelve or zero-to-twenty-three.
- [timeZone](timezone.md): The time zone used by the locale.
