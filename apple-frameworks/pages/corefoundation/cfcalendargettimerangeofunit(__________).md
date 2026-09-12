> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendargettimerangeofunit(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfcalendargettimerangeofunit(_:_:_:_:_:))

# CFCalendarGetTimeRangeOfUnit(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference the start time and duration of a given calendar unit that contains a given absolute time.

## Declaration

```swift
func CFCalendarGetTimeRangeOfUnit(_ calendar: CFCalendar!, _ unit: CFCalendarUnit, _ at: CFAbsoluteTime, _ startp: UnsafeMutablePointer<CFAbsoluteTime>!, _ tip: UnsafeMutablePointer<CFTimeInterval>!) -> Bool
```

## Parameters

- `calendar`: The calendar to examine.
- `unit`: A calendar unit (for valid values, see [CFCalendarUnit](cfcalendarunit.md)).
- `at`: An absolute time.
- `startp`: Upon return, contains the beginning of the calendar unit specified by `unit` that contains the time `at`.
- `tip`: Upon return, contains the duration of the calendar unit specified by `unit` that contains the time `at`.

<a id="return-value"></a>

## Return Value

`true` if the values of `startp` and `tip` could be calculated, otherwise `false`.

<a id="Discussion"></a>

## Discussion

The function may fail if, for example, you try to get the range of a `kCFCalendarUnitWeekday` and specify a time (`at`) that is during a weekend.

## See Also

### Getting Ranges of Units

- [CFCalendarGetRangeOfUnit(\_:\_:\_:\_:)](cfcalendargetrangeofunit%28________%29.md): Returns the range of values that one unit can take on within a larger unit during which a specific absolute time occurs.
- [CFCalendarGetOrdinalityOfUnit(\_:\_:\_:\_:)](cfcalendargetordinalityofunit%28________%29.md): Returns the ordinal number of a calendrical unit within a larger unit at a specified absolute time.
- [CFCalendarGetMaximumRangeOfUnit(\_:\_:)](cfcalendargetmaximumrangeofunit%28____%29.md): Returns the maximum range limits of the values that a specified unit can take on in a given calendar.
- [CFCalendarGetMinimumRangeOfUnit(\_:\_:)](cfcalendargetminimumrangeofunit%28____%29.md): Returns the minimum range limits of the values that a specified unit can take on in a given calendar.

# CFCalendarGetTimeRangeOfUnit (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference the start time and duration of a given calendar unit that contains a given absolute time.

## Declaration

```objectivec
extern Boolean CFCalendarGetTimeRangeOfUnit(CFCalendarRef calendar, CFCalendarUnit unit, CFAbsoluteTime at, CFAbsoluteTime *startp, CFTimeInterval *tip);
```

## Parameters

- `calendar`: The calendar to examine.
- `unit`: A calendar unit (for valid values, see [CFCalendarUnit](cfcalendarunit.md)).
- `at`: An absolute time.
- `startp`: Upon return, contains the beginning of the calendar unit specified by `unit` that contains the time `at`.
- `tip`: Upon return, contains the duration of the calendar unit specified by `unit` that contains the time `at`.

<a id="return-value"></a>

## Return Value

`true` if the values of `startp` and `tip` could be calculated, otherwise `false`.

<a id="Discussion"></a>

## Discussion

The function may fail if, for example, you try to get the range of a `kCFCalendarUnitWeekday` and specify a time (`at`) that is during a weekend.

## See Also

### Getting Ranges of Units

- [CFCalendarGetRangeOfUnit](cfcalendargetrangeofunit%28________%29.md): Returns the range of values that one unit can take on within a larger unit during which a specific absolute time occurs.
- [CFCalendarGetOrdinalityOfUnit](cfcalendargetordinalityofunit%28________%29.md): Returns the ordinal number of a calendrical unit within a larger unit at a specified absolute time.
- [CFCalendarGetMaximumRangeOfUnit](cfcalendargetmaximumrangeofunit%28____%29.md): Returns the maximum range limits of the values that a specified unit can take on in a given calendar.
- [CFCalendarGetMinimumRangeOfUnit](cfcalendargetminimumrangeofunit%28____%29.md): Returns the minimum range limits of the values that a specified unit can take on in a given calendar.
