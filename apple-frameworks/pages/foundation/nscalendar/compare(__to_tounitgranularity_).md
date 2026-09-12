> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/compare(_:to:tounitgranularity:)](https://developer.apple.com/documentation/foundation/nscalendar/compare(_:to:tounitgranularity:))

# compare(\_:to:toUnitGranularity:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates the ordering of two given dates based on their components down to a given unit granularity.

## Declaration

```swift
func compare(_ date1: Date, to date2: Date, toUnitGranularity unit: NSCalendar.Unit) -> ComparisonResult
```

## Parameters

- `date1`: The first date to compare.
- `date2`: The second date to compare.
- `unit`: The smallest unit that must, along with all larger units, be equal for the given dates to be considered the same. For possible values, see [NSCalendar.Unit](unit.md).

<a id="return-value"></a>

## Return Value

`NSOrderedSame` if the dates are the same down to the given granularity, otherwise `NSOrderedAscending` or `NSOrderedDescending`.

## See Also

### Comparing Dates

- [isDate(\_:equalTo:toUnitGranularity:)](isdate%28__equalto_tounitgranularity_%29.md): Indicates whether two dates are equal to a given unit of granularity.
- [isDate(\_:inSameDayAs:)](isdate%28__insamedayas_%29.md): Indicates whether two dates are in the same day.
- [isDateInToday(\_:)](isdateintoday%28__%29.md): Indicates whether the given date is in “today.”
- [isDateInTomorrow(\_:)](isdateintomorrow%28__%29.md): Indicates whether the given date is in “tomorrow.”
- [isDateInWeekend(\_:)](isdateinweekend%28__%29.md): Indicates whether a given date falls within a weekend period, as defined by the calendar and the calendar’s locale.
- [isDateInYesterday(\_:)](isdateinyesterday%28__%29.md): Indicates whether the given date is in “yesterday.”

# compareDate:toDate:toUnitGranularity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates the ordering of two given dates based on their components down to a given unit granularity.

## Declaration

```objectivec
- (NSComparisonResult) compareDate:(NSDate *) date1 toDate:(NSDate *) date2 toUnitGranularity:(NSCalendarUnit) unit;
```

## Parameters

- `date1`: The first date to compare.
- `date2`: The second date to compare.
- `unit`: The smallest unit that must, along with all larger units, be equal for the given dates to be considered the same. For possible values, see [NSCalendarUnit](unit.md).

<a id="return-value"></a>

## Return Value

`NSOrderedSame` if the dates are the same down to the given granularity, otherwise `NSOrderedAscending` or `NSOrderedDescending`.

## See Also

### Comparing Dates

- [isDate:equalToDate:toUnitGranularity:](isdate%28__equalto_tounitgranularity_%29.md): Indicates whether two dates are equal to a given unit of granularity.
- [isDate:inSameDayAsDate:](isdate%28__insamedayas_%29.md): Indicates whether two dates are in the same day.
- [isDateInToday:](isdateintoday%28__%29.md): Indicates whether the given date is in “today.”
- [isDateInTomorrow:](isdateintomorrow%28__%29.md): Indicates whether the given date is in “tomorrow.”
- [isDateInWeekend:](isdateinweekend%28__%29.md): Indicates whether a given date falls within a weekend period, as defined by the calendar and the calendar’s locale.
- [isDateInYesterday:](isdateinyesterday%28__%29.md): Indicates whether the given date is in “yesterday.”
