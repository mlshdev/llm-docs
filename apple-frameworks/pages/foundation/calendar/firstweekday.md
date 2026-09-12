> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/firstweekday](https://developer.apple.com/documentation/foundation/calendar/firstweekday)

# firstWeekday

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The first day of the week for the calendar.

## Declaration

```swift
var firstWeekday: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of [firstWeekday](firstweekday.md) varies by calendar and locale. Your app can reset this value.

The weekday units are one-based. For Gregorian and ISO 8601 calendars, `1` is Sunday.

## See Also

### Getting Calendar Information

- [identifier](identifier-swift.property.md): The identifier of the calendar.
- [locale](locale.md): The locale of the calendar.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The number of minimum days in the first week.
- [timeZone](timezone.md): The time zone of the calendar.
- [maximumRange(of:)](maximumrange%28of_%29.md): The maximum range limits of the values that a given component can take on.
- [minimumRange(of:)](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given component can take on.
- [ordinality(of:in:for:)](ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar component (such as a day) within a specified larger calendar component (such as a week).
- [range(of:in:for:)](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar component (such as a day) can take on in a larger calendar component (such as a month) that includes a specified absolute time.
