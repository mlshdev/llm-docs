> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/date(byadding:value:to:options:)](https://developer.apple.com/documentation/foundation/nscalendar/date(byadding:value:to:options:))

# date(byAdding:value:to:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date representing the absolute time calculated by adding the value of a given component to a given date.

## Declaration

```swift
func date(byAdding unit: NSCalendar.Unit, value: Int, to date: Date, options: NSCalendar.Options = []) -> Date?
```

## Parameters

- `unit`: The unit to use for the calculation. For possible values, see [NSCalendar.Unit](unit.md).
- `value`: The value for the given unit.
- `date`: The date to use to perform the calculation.
- `options`: Options for the calculation. See [NSCalendar.Options](options.md) for possible values.

  If you specify a “wrap” option ([wrapComponents](options/wrapcomponents.md)), the specified components are incremented and wrap around to zero/one on overflow, but do not cause higher units to be incremented. When the wrap option is false, overflow in a unit carries into the higher units, as in typical addition.

<a id="return-value"></a>

## Return Value

A new `NSDate` object representing the absolute time calculated by adding to `date` the `value` of the given calendrical `unit` using the options specified by `options`. Returns `nil` if `date` falls outside the defined range of the receiver or if the computation cannot be performed.

## See Also

### Calculating Dates

- [date(from:)](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [date(byAdding:to:options:)](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [date(bySettingHour:minute:second:of:options:)](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [date(bySettingUnit:value:of:options:)](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [date(era:year:month:day:hour:minute:second:nanosecond:)](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [date(era:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:)](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStart(\_:interval:options:after:)](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.

# dateByAddingUnit:value:toDate:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date representing the absolute time calculated by adding the value of a given component to a given date.

## Declaration

```objectivec
- (NSDate *) dateByAddingUnit:(NSCalendarUnit) unit value:(NSInteger) value toDate:(NSDate *) date options:(NSCalendarOptions) options;
```

## Parameters

- `unit`: The unit to use for the calculation. For possible values, see [NSCalendarUnit](unit.md).
- `value`: The value for the given unit.
- `date`: The date to use to perform the calculation.
- `options`: Options for the calculation. See [NSCalendarOptions](options.md) for possible values.

  If you specify a “wrap” option ([NSCalendarWrapComponents](options/wrapcomponents.md)), the specified components are incremented and wrap around to zero/one on overflow, but do not cause higher units to be incremented. When the wrap option is false, overflow in a unit carries into the higher units, as in typical addition.

<a id="return-value"></a>

## Return Value

A new `NSDate` object representing the absolute time calculated by adding to `date` the `value` of the given calendrical `unit` using the options specified by `options`. Returns `nil` if `date` falls outside the defined range of the receiver or if the computation cannot be performed.

## See Also

### Calculating Dates

- [dateFromComponents:](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [dateByAddingComponents:toDate:options:](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [dateBySettingHour:minute:second:ofDate:options:](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [dateBySettingUnit:value:ofDate:options:](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [dateWithEra:year:month:day:hour:minute:second:nanosecond:](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [dateWithEra:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStartDate:interval:options:afterDate:](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.
