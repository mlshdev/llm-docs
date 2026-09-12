> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/minimumdaysinfirstweek](https://developer.apple.com/documentation/foundation/nscalendar/minimumdaysinfirstweek)

# minimumDaysInFirstWeek (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum number of days in the first week of the receiver.

## Declaration

```swift
var minimumDaysInFirstWeek: Int { get set }
```

## See Also

### Getting Calendar Information

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](firstweekday.md): The index of the first weekday of the receiver.
- [locale](locale.md): The locale of the receiver.
- [timeZone](timezone.md): The time zone for the calendar.
- [maximumRange(of:)](maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRange(of:)](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [ordinality(of:in:for:)](ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).
- [range(of:in:for:)](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [range(of:start:interval:for:)](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [range(ofWeekendStart:interval:containing:)](range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.
- [NSCalendar.Unit](unit.md): Calendrical units such as year, month, day and hour.

# minimumDaysInFirstWeek (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum number of days in the first week of the receiver.

## Declaration

```objectivec
@property NSUInteger minimumDaysInFirstWeek;
```

## See Also

### Getting Calendar Information

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](firstweekday.md): The index of the first weekday of the receiver.
- [locale](locale.md): The locale of the receiver.
- [timeZone](timezone.md): The time zone for the calendar.
- [maximumRangeOfUnit:](maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRangeOfUnit:](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [ordinalityOfUnit:inUnit:forDate:](ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).
- [rangeOfUnit:inUnit:forDate:](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [rangeOfUnit:startDate:interval:forDate:](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [rangeOfWeekendStartDate:interval:containingDate:](range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.
- [NSCalendarUnit](unit.md): Calendrical units such as year, month, day and hour.
