> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/isdate(_:equalto:tounitgranularity:)](https://developer.apple.com/documentation/foundation/nscalendar/isdate(_:equalto:tounitgranularity:))

# isDate(\_:equalTo:toUnitGranularity:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether two dates are equal to a given unit of granularity.

## Declaration

```swift
func isDate(_ date1: Date, equalTo date2: Date, toUnitGranularity unit: NSCalendar.Unit) -> Bool
```

## Parameters

- `date1`: The first date to compare.
- `date2`: The second date to compare.
- `unit`: The smallest unit that must, along with all larger units, be equal in the given dates. For possible values, see [NSCalendar.Unit](unit.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if both dates have equal date component for all units greater than or equal to the given unit, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Dates

- [compare(\_:to:toUnitGranularity:)](compare%28__to_tounitgranularity_%29.md): Indicates the ordering of two given dates based on their components down to a given unit granularity.
- [isDate(\_:inSameDayAs:)](isdate%28__insamedayas_%29.md): Indicates whether two dates are in the same day.
- [isDateInToday(\_:)](isdateintoday%28__%29.md): Indicates whether the given date is in “today.”
- [isDateInTomorrow(\_:)](isdateintomorrow%28__%29.md): Indicates whether the given date is in “tomorrow.”
- [isDateInWeekend(\_:)](isdateinweekend%28__%29.md): Indicates whether a given date falls within a weekend period, as defined by the calendar and the calendar’s locale.
- [isDateInYesterday(\_:)](isdateinyesterday%28__%29.md): Indicates whether the given date is in “yesterday.”

# isDate:equalToDate:toUnitGranularity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether two dates are equal to a given unit of granularity.

## Declaration

```objectivec
- (BOOL) isDate:(NSDate *) date1 equalToDate:(NSDate *) date2 toUnitGranularity:(NSCalendarUnit) unit;
```

## Parameters

- `date1`: The first date to compare.
- `date2`: The second date to compare.
- `unit`: The smallest unit that must, along with all larger units, be equal in the given dates. For possible values, see [NSCalendarUnit](unit.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if both dates have equal date component for all units greater than or equal to the given unit, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Dates

- [compareDate:toDate:toUnitGranularity:](compare%28__to_tounitgranularity_%29.md): Indicates the ordering of two given dates based on their components down to a given unit granularity.
- [isDate:inSameDayAsDate:](isdate%28__insamedayas_%29.md): Indicates whether two dates are in the same day.
- [isDateInToday:](isdateintoday%28__%29.md): Indicates whether the given date is in “today.”
- [isDateInTomorrow:](isdateintomorrow%28__%29.md): Indicates whether the given date is in “tomorrow.”
- [isDateInWeekend:](isdateinweekend%28__%29.md): Indicates whether a given date falls within a weekend period, as defined by the calendar and the calendar’s locale.
- [isDateInYesterday:](isdateinyesterday%28__%29.md): Indicates whether the given date is in “yesterday.”
