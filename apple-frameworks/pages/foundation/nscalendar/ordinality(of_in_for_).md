> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/ordinality(of:in:for:)](https://developer.apple.com/documentation/foundation/nscalendar/ordinality(of:in:for:))

# ordinality(of:in:for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).

## Declaration

```swift
func ordinality(of smaller: NSCalendar.Unit, in larger: NSCalendar.Unit, for date: Date) -> Int
```

## Parameters

- `smaller`: The smaller calendar unit
- `larger`: The larger calendar unit
- `date`: The absolute time for which the calculation is performed

<a id="return-value"></a>

## Return Value

The ordinal number of `smaller` within `larger` at the time specified by `date`. Returns `NSNotFound` if `larger` is not logically bigger than `smaller` in the calendar, or the given combination of units does not make sense (or is a computation which is undefined).

<a id="Discussion"></a>

## Discussion

The ordinality is in most cases not the same as the decomposed value of the unit. Typically return values are `1` and greater. For example, the time `00:45` is in the first hour of the day, and for units Hour and Day respectively, the result would be `1`. An exception is the week-in-month calculation, which returns `0` for days before the first week in the month containing the date.

Note that some computations can take a relatively long time.

## See Also

### Getting Calendar Information

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](firstweekday.md): The index of the first weekday of the receiver.
- [locale](locale.md): The locale of the receiver.
- [timeZone](timezone.md): The time zone for the calendar.
- [maximumRange(of:)](maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRange(of:)](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The minimum number of days in the first week of the receiver.
- [range(of:in:for:)](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [range(of:start:interval:for:)](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [range(ofWeekendStart:interval:containing:)](range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.
- [NSCalendar.Unit](unit.md): Calendrical units such as year, month, day and hour.

# ordinalityOfUnit:inUnit:forDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).

## Declaration

```objectivec
- (NSUInteger) ordinalityOfUnit:(NSCalendarUnit) smaller inUnit:(NSCalendarUnit) larger forDate:(NSDate *) date;
```

## Parameters

- `smaller`: The smaller calendar unit
- `larger`: The larger calendar unit
- `date`: The absolute time for which the calculation is performed

<a id="return-value"></a>

## Return Value

The ordinal number of `smaller` within `larger` at the time specified by `date`. Returns `NSNotFound` if `larger` is not logically bigger than `smaller` in the calendar, or the given combination of units does not make sense (or is a computation which is undefined).

<a id="Discussion"></a>

## Discussion

The ordinality is in most cases not the same as the decomposed value of the unit. Typically return values are `1` and greater. For example, the time `00:45` is in the first hour of the day, and for units Hour and Day respectively, the result would be `1`. An exception is the week-in-month calculation, which returns `0` for days before the first week in the month containing the date.

Note that some computations can take a relatively long time.

## See Also

### Getting Calendar Information

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](firstweekday.md): The index of the first weekday of the receiver.
- [locale](locale.md): The locale of the receiver.
- [timeZone](timezone.md): The time zone for the calendar.
- [maximumRangeOfUnit:](maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRangeOfUnit:](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The minimum number of days in the first week of the receiver.
- [rangeOfUnit:inUnit:forDate:](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [rangeOfUnit:startDate:interval:forDate:](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [rangeOfWeekendStartDate:interval:containingDate:](range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.
- [NSCalendarUnit](unit.md): Calendrical units such as year, month, day and hour.
