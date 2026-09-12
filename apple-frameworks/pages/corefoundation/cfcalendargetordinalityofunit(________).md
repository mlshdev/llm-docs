> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendargetordinalityofunit(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfcalendargetordinalityofunit(_:_:_:_:))

# CFCalendarGetOrdinalityOfUnit(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the ordinal number of a calendrical unit within a larger unit at a specified absolute time.

## Declaration

```swift
func CFCalendarGetOrdinalityOfUnit(_ calendar: CFCalendar!, _ smallerUnit: CFCalendarUnit, _ biggerUnit: CFCalendarUnit, _ at: CFAbsoluteTime) -> CFIndex
```

## Parameters

- `calendar`: The calendar to examine.
- `smallerUnit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).
- `biggerUnit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).
- `at`: An absolute time.

<a id="return-value"></a>

## Return Value

The ordinal number of the calendar unit specified by `smallerUnit` within the calendar unit specified by `biggerUnit` at the absolute time `at`. For example, the time 00:45 is in the first hour of the day, and for units Hour and Day respectively, the result would be 1.

<a id="discussion"></a>

## Discussion

If the `biggerUnit` parameter is not logically bigger than the `smallerUnit` parameter in the calendar, or the given combination of units does not make sense (or is a computation which is undefined), the result is `kCFNotFound`.

<a id="Discussion"></a>

## Discussion

The ordinality is in most cases not the same as the decomposed value of the unit. Typically return values are `1` and greater; an exception is the week-in-month calculation, which returns `0` for days before the first week in the month containing the date. Note that some computations can take a relatively long time to perform.

## See Also

### Getting Ranges of Units

- [CFCalendarGetRangeOfUnit(\_:\_:\_:\_:)](cfcalendargetrangeofunit%28________%29.md): Returns the range of values that one unit can take on within a larger unit during which a specific absolute time occurs.
- [CFCalendarGetTimeRangeOfUnit(\_:\_:\_:\_:\_:)](cfcalendargettimerangeofunit%28__________%29.md): Returns by reference the start time and duration of a given calendar unit that contains a given absolute time.
- [CFCalendarGetMaximumRangeOfUnit(\_:\_:)](cfcalendargetmaximumrangeofunit%28____%29.md): Returns the maximum range limits of the values that a specified unit can take on in a given calendar.
- [CFCalendarGetMinimumRangeOfUnit(\_:\_:)](cfcalendargetminimumrangeofunit%28____%29.md): Returns the minimum range limits of the values that a specified unit can take on in a given calendar.

# CFCalendarGetOrdinalityOfUnit (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the ordinal number of a calendrical unit within a larger unit at a specified absolute time.

## Declaration

```objectivec
extern CFIndex CFCalendarGetOrdinalityOfUnit(CFCalendarRef calendar, CFCalendarUnit smallerUnit, CFCalendarUnit biggerUnit, CFAbsoluteTime at);
```

## Parameters

- `calendar`: The calendar to examine.
- `smallerUnit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).
- `biggerUnit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).
- `at`: An absolute time.

<a id="return-value"></a>

## Return Value

The ordinal number of the calendar unit specified by `smallerUnit` within the calendar unit specified by `biggerUnit` at the absolute time `at`. For example, the time 00:45 is in the first hour of the day, and for units Hour and Day respectively, the result would be 1.

<a id="discussion"></a>

## Discussion

If the `biggerUnit` parameter is not logically bigger than the `smallerUnit` parameter in the calendar, or the given combination of units does not make sense (or is a computation which is undefined), the result is `kCFNotFound`.

<a id="Discussion"></a>

## Discussion

The ordinality is in most cases not the same as the decomposed value of the unit. Typically return values are `1` and greater; an exception is the week-in-month calculation, which returns `0` for days before the first week in the month containing the date. Note that some computations can take a relatively long time to perform.

## See Also

### Getting Ranges of Units

- [CFCalendarGetRangeOfUnit](cfcalendargetrangeofunit%28________%29.md): Returns the range of values that one unit can take on within a larger unit during which a specific absolute time occurs.
- [CFCalendarGetTimeRangeOfUnit](cfcalendargettimerangeofunit%28__________%29.md): Returns by reference the start time and duration of a given calendar unit that contains a given absolute time.
- [CFCalendarGetMaximumRangeOfUnit](cfcalendargetmaximumrangeofunit%28____%29.md): Returns the maximum range limits of the values that a specified unit can take on in a given calendar.
- [CFCalendarGetMinimumRangeOfUnit](cfcalendargetminimumrangeofunit%28____%29.md): Returns the minimum range limits of the values that a specified unit can take on in a given calendar.
