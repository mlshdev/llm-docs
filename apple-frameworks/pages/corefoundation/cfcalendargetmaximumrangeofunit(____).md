> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendargetmaximumrangeofunit(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcalendargetmaximumrangeofunit(_:_:))

# CFCalendarGetMaximumRangeOfUnit(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the maximum range limits of the values that a specified unit can take on in a given calendar.

## Declaration

```swift
func CFCalendarGetMaximumRangeOfUnit(_ calendar: CFCalendar!, _ unit: CFCalendarUnit) -> CFRange
```

## Parameters

- `calendar`: The calendar to examine.
- `unit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).

<a id="return-value"></a>

## Return Value

The maximum range limits of the values that the specified unit can take on in `calendar`. For example, in the Gregorian calendar the maximum ranges for the Day unit is 1-31.

## See Also

### Getting Ranges of Units

- [CFCalendarGetRangeOfUnit(\_:\_:\_:\_:)](cfcalendargetrangeofunit%28________%29.md): Returns the range of values that one unit can take on within a larger unit during which a specific absolute time occurs.
- [CFCalendarGetOrdinalityOfUnit(\_:\_:\_:\_:)](cfcalendargetordinalityofunit%28________%29.md): Returns the ordinal number of a calendrical unit within a larger unit at a specified absolute time.
- [CFCalendarGetTimeRangeOfUnit(\_:\_:\_:\_:\_:)](cfcalendargettimerangeofunit%28__________%29.md): Returns by reference the start time and duration of a given calendar unit that contains a given absolute time.
- [CFCalendarGetMinimumRangeOfUnit(\_:\_:)](cfcalendargetminimumrangeofunit%28____%29.md): Returns the minimum range limits of the values that a specified unit can take on in a given calendar.

# CFCalendarGetMaximumRangeOfUnit (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the maximum range limits of the values that a specified unit can take on in a given calendar.

## Declaration

```objectivec
extern CFRange CFCalendarGetMaximumRangeOfUnit(CFCalendarRef calendar, CFCalendarUnit unit);
```

## Parameters

- `calendar`: The calendar to examine.
- `unit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).

<a id="return-value"></a>

## Return Value

The maximum range limits of the values that the specified unit can take on in `calendar`. For example, in the Gregorian calendar the maximum ranges for the Day unit is 1-31.

## See Also

### Getting Ranges of Units

- [CFCalendarGetRangeOfUnit](cfcalendargetrangeofunit%28________%29.md): Returns the range of values that one unit can take on within a larger unit during which a specific absolute time occurs.
- [CFCalendarGetOrdinalityOfUnit](cfcalendargetordinalityofunit%28________%29.md): Returns the ordinal number of a calendrical unit within a larger unit at a specified absolute time.
- [CFCalendarGetTimeRangeOfUnit](cfcalendargettimerangeofunit%28__________%29.md): Returns by reference the start time and duration of a given calendar unit that contains a given absolute time.
- [CFCalendarGetMinimumRangeOfUnit](cfcalendargetminimumrangeofunit%28____%29.md): Returns the minimum range limits of the values that a specified unit can take on in a given calendar.
