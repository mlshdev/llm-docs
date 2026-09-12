> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/calendar](https://developer.apple.com/documentation/foundation/date/formatstyle/calendar)

# calendar

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The calendar to use when formatting the date.

## Declaration

```swift
var calendar: Calendar
```

<a id="Discussion"></a>

## Discussion

Defaults to [autoupdatingCurrent](../../nscalendar/autoupdatingcurrent.md). If you set this property to `nil`, the formatter resets to using `autoupdatingCurrent`.

## See Also

### Modifying a Date Format Style

- [locale(\_:)](locale%28__%29.md): Modifies the date format style to use the specified locale.
- [timeZone](timezone.md): The time zone to use when formatting the date and time components.
- [capitalizationContext](capitalizationcontext.md): The capitalization context to use when formatting the date.
- [locale](locale.md): The locale to use when formatting the date and time components.
