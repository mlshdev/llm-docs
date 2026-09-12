> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/date(_:matchescomponents:)](https://developer.apple.com/documentation/foundation/nscalendar/date(_:matchescomponents:))

# date(\_:matchesComponents:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether a given date matches all of the given date components.

## Declaration

```swift
func date(_ date: Date, matchesComponents components: DateComponents) -> Bool
```

## Parameters

- `date`: The date for which to perform the calculation.
- `components`: The date components to match.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the given date matches the given components, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is useful for determining whether dates calculated by methods like  [nextDate(after:matching:value:options:)](nextdate%28after_matching_value_options_%29.md) or [enumerateDates(startingAfter:matching:options:using:)](enumeratedates%28startingafter_matching_options_using_%29.md) are exact, or required an adjustment due to a nonexistent time.

## See Also

### Related Documentation

- [nextDate(after:matching:value:options:)](nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [enumerateDates(startingAfter:matching:options:using:)](enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.

### Extracting Components

- [component(\_:from:)](component%28__from_%29.md): Returns the specified date component from a given date.
- [components(\_:from:)](components%28__from_%29.md): Returns the date components representing a given date.
- [components(\_:from:to:options:)](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components(\_:from:to:options:)](components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [components(in:from:)](components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra(\_:year:month:day:from:)](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra(\_:yearForWeekOfYear:weekOfYear:weekday:from:)](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour(\_:minute:second:nanosecond:from:)](gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.

# date:matchesComponents: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether a given date matches all of the given date components.

## Declaration

```objectivec
- (BOOL) date:(NSDate *) date matchesComponents:(NSDateComponents *) components;
```

## Parameters

- `date`: The date for which to perform the calculation.
- `components`: The date components to match.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the given date matches the given components, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is useful for determining whether dates calculated by methods like  [nextDateAfterDate:matchingUnit:value:options:](nextdate%28after_matching_value_options_%29.md) or [enumerateDatesStartingAfterDate:matchingComponents:options:usingBlock:](enumeratedates%28startingafter_matching_options_using_%29.md) are exact, or required an adjustment due to a nonexistent time.

## See Also

### Related Documentation

- [nextDateAfterDate:matchingUnit:value:options:](nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [enumerateDatesStartingAfterDate:matchingComponents:options:usingBlock:](enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.

### Extracting Components

- [component:fromDate:](component%28__from_%29.md): Returns the specified date component from a given date.
- [components:fromDate:](components%28__from_%29.md): Returns the date components representing a given date.
- [components:fromDate:toDate:options:](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components:fromDateComponents:toDateComponents:options:](components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [componentsInTimeZone:fromDate:](components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra:year:month:day:fromDate:](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra:yearForWeekOfYear:weekOfYear:weekday:fromDate:](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour:minute:second:nanosecond:fromDate:](gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.
