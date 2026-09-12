> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/range(ofweekendstart:interval:containing:)](https://developer.apple.com/documentation/foundation/nscalendar/range(ofweekendstart:interval:containing:))

# range(ofWeekendStart:interval:containing:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.

## Declaration

```swift
func range(ofWeekendStart datep: AutoreleasingUnsafeMutablePointer<NSDate?>?, interval tip: UnsafeMutablePointer<TimeInterval>?, containing date: Date) -> Bool
```

## Parameters

- `datep`: Upon return, contains the starting date of the next weekend period.
- `tip`: Upon return, contains the time interval of the next weekend period.
- `date`: The date to use to perform the calculation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the given date falls within a weekend period, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Note that a particular calendar day may not necessarily fall entirely within a weekend period, as weekends can start in the middle of a day in some calendars and locales.

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
- [range(of:in:for:)](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [range(of:start:interval:for:)](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [NSCalendar.Unit](unit.md): Calendrical units such as year, month, day and hour.

# rangeOfWeekendStartDate:interval:containingDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.

## Declaration

```objectivec
- (BOOL) rangeOfWeekendStartDate:(NSDate **) datep interval:(NSTimeInterval *) tip containingDate:(NSDate *) date;
```

## Parameters

- `datep`: Upon return, contains the starting date of the next weekend period.
- `tip`: Upon return, contains the time interval of the next weekend period.
- `date`: The date to use to perform the calculation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the given date falls within a weekend period, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Note that a particular calendar day may not necessarily fall entirely within a weekend period, as weekends can start in the middle of a day in some calendars and locales.

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
- [rangeOfUnit:inUnit:forDate:](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [rangeOfUnit:startDate:interval:forDate:](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [NSCalendarUnit](unit.md): Calendrical units such as year, month, day and hour.
