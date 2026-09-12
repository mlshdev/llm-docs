> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/nextdate(after:matching:value:options:)](https://developer.apple.com/documentation/foundation/nscalendar/nextdate(after:matching:value:options:))

# nextDate(after:matching:value:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next date after a given date matching the given calendar unit value.

## Declaration

```swift
func nextDate(after date: Date, matching unit: NSCalendar.Unit, value: Int, options: NSCalendar.Options = []) -> Date?
```

## Parameters

- `date`: The date for which to perform the calculation.
- `unit`: The component to use. For possible values, see [NSCalendar.Unit](unit.md).
- `value`: The value for the given component.
- `options`: Options for the calculation. For possible values, see [NSCalendar.Options](options.md).

<a id="return-value"></a>

## Return Value

A new `NSDate` object.

## See Also

### Scanning Dates

- [startOfDay(for:)](startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDates(startingAfter:matching:options:using:)](enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDate(after:matching:options:)](nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDate(after:matchingHour:minute:second:options:)](nextdate%28after_matchinghour_minute_second_options_%29.md): Returns the next date after a given date that matches the given hour, minute, and second, component values.
- [NSCalendar.Options](options.md): The options for arithmetic operations involving calendars.
- [NSWrapCalendarComponents](../nswrapcalendarcomponents-api.md): A legacy constant used to control overflow in date calculations.

# nextDateAfterDate:matchingUnit:value:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next date after a given date matching the given calendar unit value.

## Declaration

```objectivec
- (NSDate *) nextDateAfterDate:(NSDate *) date matchingUnit:(NSCalendarUnit) unit value:(NSInteger) value options:(NSCalendarOptions) options;
```

## Parameters

- `date`: The date for which to perform the calculation.
- `unit`: The component to use. For possible values, see [NSCalendarUnit](unit.md).
- `value`: The value for the given component.
- `options`: Options for the calculation. For possible values, see [NSCalendarOptions](options.md).

<a id="return-value"></a>

## Return Value

A new `NSDate` object.

## See Also

### Scanning Dates

- [startOfDayForDate:](startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDatesStartingAfterDate:matchingComponents:options:usingBlock:](enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDateAfterDate:matchingComponents:options:](nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDateAfterDate:matchingHour:minute:second:options:](nextdate%28after_matchinghour_minute_second_options_%29.md): Returns the next date after a given date that matches the given hour, minute, and second, component values.
- [NSCalendarOptions](options.md): The options for arithmetic operations involving calendars.
- [NSWrapCalendarComponents](../nswrapcalendarcomponents-api.md): A legacy constant used to control overflow in date calculations.
