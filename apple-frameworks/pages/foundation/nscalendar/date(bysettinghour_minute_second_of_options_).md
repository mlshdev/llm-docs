> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/date(bysettinghour:minute:second:of:options:)](https://developer.apple.com/documentation/foundation/nscalendar/date(bysettinghour:minute:second:of:options:))

# date(bySettingHour:minute:second:of:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new date calculated with the given time.

## Declaration

```swift
func date(bySettingHour h: Int, minute m: Int, second s: Int, of date: Date, options opts: NSCalendar.Options = []) -> Date?
```

## Parameters

- `h`: The hour value.
- `m`: The minute value.
- `s`: The second value.
- `date`: The date to use to perform the calculation.
- `opts`: Options for the calculation. For possible values, see [NSCalendar.Options](options.md).

<a id="return-value"></a>

## Return Value

A new `NSDate` instance representing the date calculated by setting the given hour, minute, and second, to a given time. If no such time exists for the specified components, the next available date is returned, which may be on a different calendar day.

<a id="Discussion"></a>

## Discussion

You can use this method to calculate a date at a different time of a particular calendar day.

## See Also

### Calculating Dates

- [date(from:)](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [date(byAdding:to:options:)](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [date(byAdding:value:to:options:)](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [date(bySettingUnit:value:of:options:)](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [date(era:year:month:day:hour:minute:second:nanosecond:)](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [date(era:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:)](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStart(\_:interval:options:after:)](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.

# dateBySettingHour:minute:second:ofDate:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new date calculated with the given time.

## Declaration

```objectivec
- (NSDate *) dateBySettingHour:(NSInteger) h minute:(NSInteger) m second:(NSInteger) s ofDate:(NSDate *) date options:(NSCalendarOptions) opts;
```

## Parameters

- `h`: The hour value.
- `m`: The minute value.
- `s`: The second value.
- `date`: The date to use to perform the calculation.
- `opts`: Options for the calculation. For possible values, see [NSCalendarOptions](options.md).

<a id="return-value"></a>

## Return Value

A new `NSDate` instance representing the date calculated by setting the given hour, minute, and second, to a given time. If no such time exists for the specified components, the next available date is returned, which may be on a different calendar day.

<a id="Discussion"></a>

## Discussion

You can use this method to calculate a date at a different time of a particular calendar day.

## See Also

### Calculating Dates

- [dateFromComponents:](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [dateByAddingComponents:toDate:options:](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [dateByAddingUnit:value:toDate:options:](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [dateBySettingUnit:value:ofDate:options:](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [dateWithEra:year:month:day:hour:minute:second:nanosecond:](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [dateWithEra:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStartDate:interval:options:afterDate:](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.
