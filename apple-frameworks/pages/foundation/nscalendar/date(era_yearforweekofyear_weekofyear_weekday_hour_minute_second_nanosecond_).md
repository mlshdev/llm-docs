> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/date(era:yearforweekofyear:weekofyear:weekday:hour:minute:second:nanosecond:)](https://developer.apple.com/documentation/foundation/nscalendar/date(era:yearforweekofyear:weekofyear:weekday:hour:minute:second:nanosecond:))

# date(era:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new date created with the given components base on a week-of-year value.

## Declaration

```swift
func date(era eraValue: Int, yearForWeekOfYear yearValue: Int, weekOfYear weekValue: Int, weekday weekdayValue: Int, hour hourValue: Int, minute minuteValue: Int, second secondValue: Int, nanosecond nanosecondValue: Int) -> Date?
```

## Parameters

- `eraValue`: The value for the era component.
- `yearValue`: The value for the year component.
- `weekValue`: The value for the week-of-year component.
- `weekdayValue`: The value to use as the weekday.
- `hourValue`: The value for the hour component.
- `minuteValue`: The value for the minute component.
- `secondValue`: The value for the second component.
- `nanosecondValue`: The value for the nanosecond component.

<a id="return-value"></a>

## Return Value

A new `NSDate` instance created with the given components based on a week-of-year calculation, or `nil` if the components do not correspond to a valid date.

## See Also

### Calculating Dates

- [date(from:)](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [date(byAdding:to:options:)](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [date(byAdding:value:to:options:)](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [date(bySettingHour:minute:second:of:options:)](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [date(bySettingUnit:value:of:options:)](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [date(era:year:month:day:hour:minute:second:nanosecond:)](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [nextWeekendStart(\_:interval:options:after:)](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.

# dateWithEra:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new date created with the given components base on a week-of-year value.

## Declaration

```objectivec
- (NSDate *) dateWithEra:(NSInteger) eraValue yearForWeekOfYear:(NSInteger) yearValue weekOfYear:(NSInteger) weekValue weekday:(NSInteger) weekdayValue hour:(NSInteger) hourValue minute:(NSInteger) minuteValue second:(NSInteger) secondValue nanosecond:(NSInteger) nanosecondValue;
```

## Parameters

- `eraValue`: The value for the era component.
- `yearValue`: The value for the year component.
- `weekValue`: The value for the week-of-year component.
- `weekdayValue`: The value to use as the weekday.
- `hourValue`: The value for the hour component.
- `minuteValue`: The value for the minute component.
- `secondValue`: The value for the second component.
- `nanosecondValue`: The value for the nanosecond component.

<a id="return-value"></a>

## Return Value

A new `NSDate` instance created with the given components based on a week-of-year calculation, or `nil` if the components do not correspond to a valid date.

## See Also

### Calculating Dates

- [dateFromComponents:](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [dateByAddingComponents:toDate:options:](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [dateByAddingUnit:value:toDate:options:](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [dateBySettingHour:minute:second:ofDate:options:](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [dateBySettingUnit:value:ofDate:options:](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [dateWithEra:year:month:day:hour:minute:second:nanosecond:](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [nextWeekendStartDate:interval:options:afterDate:](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.
