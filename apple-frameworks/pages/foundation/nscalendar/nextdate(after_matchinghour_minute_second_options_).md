> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/nextdate(after:matchinghour:minute:second:options:)](https://developer.apple.com/documentation/foundation/nscalendar/nextdate(after:matchinghour:minute:second:options:))

# nextDate(after:matchingHour:minute:second:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next date after a given date that matches the given hour, minute, and second, component values.

## Declaration

```swift
func nextDate(after date: Date, matchingHour hourValue: Int, minute minuteValue: Int, second secondValue: Int, options: NSCalendar.Options = []) -> Date?
```

## Parameters

- `date`: The date for which to perform the calculation.
- `hourValue`: The value for the hour component.
- `minuteValue`: The value for the minute component.
- `secondValue`: The value for the second component.
- `options`: Options for the calculation. For possible values, see [NSCalendar.Options](options.md).

<a id="return-value"></a>

## Return Value

A new `NSDate` object.

## See Also

### Scanning Dates

- [startOfDay(for:)](startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDates(startingAfter:matching:options:using:)](enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDate(after:matching:options:)](nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDate(after:matching:value:options:)](nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [NSCalendar.Options](options.md): The options for arithmetic operations involving calendars.
- [NSWrapCalendarComponents](../nswrapcalendarcomponents-api.md): A legacy constant used to control overflow in date calculations.

# nextDateAfterDate:matchingHour:minute:second:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next date after a given date that matches the given hour, minute, and second, component values.

## Declaration

```objectivec
- (NSDate *) nextDateAfterDate:(NSDate *) date matchingHour:(NSInteger) hourValue minute:(NSInteger) minuteValue second:(NSInteger) secondValue options:(NSCalendarOptions) options;
```

## Parameters

- `date`: The date for which to perform the calculation.
- `hourValue`: The value for the hour component.
- `minuteValue`: The value for the minute component.
- `secondValue`: The value for the second component.
- `options`: Options for the calculation. For possible values, see [NSCalendarOptions](options.md).

<a id="return-value"></a>

## Return Value

A new `NSDate` object.

## See Also

### Scanning Dates

- [startOfDayForDate:](startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDatesStartingAfterDate:matchingComponents:options:usingBlock:](enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDateAfterDate:matchingComponents:options:](nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDateAfterDate:matchingUnit:value:options:](nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [NSCalendarOptions](options.md): The options for arithmetic operations involving calendars.
- [NSWrapCalendarComponents](../nswrapcalendarcomponents-api.md): A legacy constant used to control overflow in date calculations.
