> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/isdateinyesterday(_:)](https://developer.apple.com/documentation/foundation/nscalendar/isdateinyesterday(_:))

# isDateInYesterday(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the given date is in “yesterday.”

## Declaration

```swift
func isDateInYesterday(_ date: Date) -> Bool
```

## Parameters

- `date`: The date for which to perform the calculation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the given date is in “yesterday,” otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Dates

- [compare(\_:to:toUnitGranularity:)](compare%28__to_tounitgranularity_%29.md): Indicates the ordering of two given dates based on their components down to a given unit granularity.
- [isDate(\_:equalTo:toUnitGranularity:)](isdate%28__equalto_tounitgranularity_%29.md): Indicates whether two dates are equal to a given unit of granularity.
- [isDate(\_:inSameDayAs:)](isdate%28__insamedayas_%29.md): Indicates whether two dates are in the same day.
- [isDateInToday(\_:)](isdateintoday%28__%29.md): Indicates whether the given date is in “today.”
- [isDateInTomorrow(\_:)](isdateintomorrow%28__%29.md): Indicates whether the given date is in “tomorrow.”
- [isDateInWeekend(\_:)](isdateinweekend%28__%29.md): Indicates whether a given date falls within a weekend period, as defined by the calendar and the calendar’s locale.

# isDateInYesterday: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the given date is in “yesterday.”

## Declaration

```objectivec
- (BOOL) isDateInYesterday:(NSDate *) date;
```

## Parameters

- `date`: The date for which to perform the calculation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the given date is in “yesterday,” otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Dates

- [compareDate:toDate:toUnitGranularity:](compare%28__to_tounitgranularity_%29.md): Indicates the ordering of two given dates based on their components down to a given unit granularity.
- [isDate:equalToDate:toUnitGranularity:](isdate%28__equalto_tounitgranularity_%29.md): Indicates whether two dates are equal to a given unit of granularity.
- [isDate:inSameDayAsDate:](isdate%28__insamedayas_%29.md): Indicates whether two dates are in the same day.
- [isDateInToday:](isdateintoday%28__%29.md): Indicates whether the given date is in “today.”
- [isDateInTomorrow:](isdateintomorrow%28__%29.md): Indicates whether the given date is in “tomorrow.”
- [isDateInWeekend:](isdateinweekend%28__%29.md): Indicates whether a given date falls within a weekend period, as defined by the calendar and the calendar’s locale.
