> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendargetrangeofunit(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfcalendargetrangeofunit(_:_:_:_:))

# CFCalendarGetRangeOfUnit(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the range of values that one unit can take on within a larger unit during which a specific absolute time occurs.

## Declaration

```swift
func CFCalendarGetRangeOfUnit(_ calendar: CFCalendar!, _ smallerUnit: CFCalendarUnit, _ biggerUnit: CFCalendarUnit, _ at: CFAbsoluteTime) -> CFRange
```

## Parameters

- `calendar`: The calendar to examine.
- `smallerUnit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).
- `biggerUnit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).
- `at`: An absolute time.

<a id="return-value"></a>

## Return Value

The range of values that the calendar unit specified by `smallerUnit` can take on within the calendar unit specified by `biggerUnit` that includes the absolute time `at`. For example, the range the Day unit can take on in the Month in which the absolute time lies.

<a id="discussion"></a>

## Discussion

If `biggerUnit` is not logically bigger than `smallerUnit` in the calendar, or the given combination of units does not make sense (or is a computation which is undefined), the result is `{kCFNotFound, kCFNotFound`}.

## See Also

### Getting Ranges of Units

- [CFCalendarGetOrdinalityOfUnit(\_:\_:\_:\_:)](cfcalendargetordinalityofunit%28________%29.md): Returns the ordinal number of a calendrical unit within a larger unit at a specified absolute time.
- [CFCalendarGetTimeRangeOfUnit(\_:\_:\_:\_:\_:)](cfcalendargettimerangeofunit%28__________%29.md): Returns by reference the start time and duration of a given calendar unit that contains a given absolute time.
- [CFCalendarGetMaximumRangeOfUnit(\_:\_:)](cfcalendargetmaximumrangeofunit%28____%29.md): Returns the maximum range limits of the values that a specified unit can take on in a given calendar.
- [CFCalendarGetMinimumRangeOfUnit(\_:\_:)](cfcalendargetminimumrangeofunit%28____%29.md): Returns the minimum range limits of the values that a specified unit can take on in a given calendar.

# CFCalendarGetRangeOfUnit (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the range of values that one unit can take on within a larger unit during which a specific absolute time occurs.

## Declaration

```objectivec
extern CFRange CFCalendarGetRangeOfUnit(CFCalendarRef calendar, CFCalendarUnit smallerUnit, CFCalendarUnit biggerUnit, CFAbsoluteTime at);
```

## Parameters

- `calendar`: The calendar to examine.
- `smallerUnit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).
- `biggerUnit`: A calendar unit. For valid values see [CFCalendarUnit](cfcalendarunit.md).
- `at`: An absolute time.

<a id="return-value"></a>

## Return Value

The range of values that the calendar unit specified by `smallerUnit` can take on within the calendar unit specified by `biggerUnit` that includes the absolute time `at`. For example, the range the Day unit can take on in the Month in which the absolute time lies.

<a id="discussion"></a>

## Discussion

If `biggerUnit` is not logically bigger than `smallerUnit` in the calendar, or the given combination of units does not make sense (or is a computation which is undefined), the result is `{kCFNotFound, kCFNotFound`}.

## See Also

### Getting Ranges of Units

- [CFCalendarGetOrdinalityOfUnit](cfcalendargetordinalityofunit%28________%29.md): Returns the ordinal number of a calendrical unit within a larger unit at a specified absolute time.
- [CFCalendarGetTimeRangeOfUnit](cfcalendargettimerangeofunit%28__________%29.md): Returns by reference the start time and duration of a given calendar unit that contains a given absolute time.
- [CFCalendarGetMaximumRangeOfUnit](cfcalendargetmaximumrangeofunit%28____%29.md): Returns the maximum range limits of the values that a specified unit can take on in a given calendar.
- [CFCalendarGetMinimumRangeOfUnit](cfcalendargetminimumrangeofunit%28____%29.md): Returns the minimum range limits of the values that a specified unit can take on in a given calendar.
