> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/components/calendar](https://developer.apple.com/documentation/foundation/locale/components/calendar)

# calendar

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The calendar used by the locale.

## Declaration

```swift
var calendar: Calendar.Identifier?
```

<a id="Discussion"></a>

## Discussion

Set this property to override the locale’s default calendar. To request the default calendar used by the locale, use the [Locale](../../locale.md) property [calendar](../calendar.md).

This property corresponds to the `ca` key of the Unicode BCP 47 extension.

## See Also

### Specifying date and time components

- [Calendar.Identifier](../../calendar/identifier-swift.enum.md): An enumeration for the available calendars.
- [firstDayOfWeek](firstdayofweek.md): The first day of the week as represented by this locale.
- [Locale.Weekday](../weekday.md): A type that represents weekdays, used for indicating a locale’s first day of the week.
- [hourCycle](hourcycle.md): The hour cycle used by the locale, like one-to-twelve or zero-to-twenty-three.
- [Locale.HourCycle](../hourcycle-swift.enum.md): A type that represents the hour cycle used in a locale, like one-to-twelve or zero-to-twenty-three.
- [timeZone](timezone.md): The time zone used by the locale.
