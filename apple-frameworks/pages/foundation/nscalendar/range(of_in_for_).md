> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/range(of:in:for:)](https://developer.apple.com/documentation/foundation/nscalendar/range(of:in:for:))

# range(of:in:for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.

## Declaration

```swift
func range(of smaller: NSCalendar.Unit, in larger: NSCalendar.Unit, for date: Date) -> NSRange
```

## Parameters

- `smaller`: The smaller calendar unit.
- `larger`: The larger calendar unit.
- `date`: The absolute time for which the calculation is performed.

<a id="return-value"></a>

## Return Value

The range of absolute time values `smaller` can take on in `larger` at the time specified by `date`. Returns `{NSNotFound, NSNotFound`} if `larger` is not logically bigger than `smaller` in the calendar, or the given combination of units does not make sense (or is a computation which is undefined).

<a id="Discussion"></a>

## Discussion

You can use this method to calculate, for example, the range the Day unit can take on in the Month in which `date` lies.

## See Also

### Getting Calendar Information

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](firstweekday.md): The index of the first weekday of the receiver.
- [locale](locale.md): The locale of the receiver.
- [timeZone](timezone.md): The time zone for the calendar.
- [maximumRange(of:)](maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRange(of:)](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The minimum number of days in the first week of the receiver.
- [ordinality(of:in:for:)](ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).
- [range(of:start:interval:for:)](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [range(ofWeekendStart:interval:containing:)](range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.
- [NSCalendar.Unit](unit.md): Calendrical units such as year, month, day and hour.

# rangeOfUnit:inUnit:forDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.

## Declaration

```objectivec
- (NSRange) rangeOfUnit:(NSCalendarUnit) smaller inUnit:(NSCalendarUnit) larger forDate:(NSDate *) date;
```

## Parameters

- `smaller`: The smaller calendar unit.
- `larger`: The larger calendar unit.
- `date`: The absolute time for which the calculation is performed.

<a id="return-value"></a>

## Return Value

The range of absolute time values `smaller` can take on in `larger` at the time specified by `date`. Returns `{NSNotFound, NSNotFound`} if `larger` is not logically bigger than `smaller` in the calendar, or the given combination of units does not make sense (or is a computation which is undefined).

<a id="Discussion"></a>

## Discussion

You can use this method to calculate, for example, the range the Day unit can take on in the Month in which `date` lies.

## See Also

### Getting Calendar Information

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](firstweekday.md): The index of the first weekday of the receiver.
- [locale](locale.md): The locale of the receiver.
- [timeZone](timezone.md): The time zone for the calendar.
- [maximumRangeOfUnit:](maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRangeOfUnit:](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The minimum number of days in the first week of the receiver.
- [ordinalityOfUnit:inUnit:forDate:](ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).
- [rangeOfUnit:startDate:interval:forDate:](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [rangeOfWeekendStartDate:interval:containingDate:](range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.
- [NSCalendarUnit](unit.md): Calendrical units such as year, month, day and hour.
