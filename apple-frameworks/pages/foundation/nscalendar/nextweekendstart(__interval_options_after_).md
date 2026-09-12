> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/nextweekendstart(_:interval:options:after:)](https://developer.apple.com/documentation/foundation/nscalendar/nextweekendstart(_:interval:options:after:))

# nextWeekendStart(\_:interval:options:after:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference the starting date and time interval range of the next weekend period after a given date.

## Declaration

```swift
func nextWeekendStart(_ datep: AutoreleasingUnsafeMutablePointer<NSDate?>?, interval tip: UnsafeMutablePointer<TimeInterval>?, options: NSCalendar.Options = [], after date: Date) -> Bool
```

## Parameters

- `datep`: Upon return, contains the starting date of the next weekend period.
- `tip`: Upon return, contains the time interval of the next weekend period.
- `options`: Options for the calculation. If you specify a backward search option ([searchBackwards](options/searchbackwards.md)), the starting date and time interval range of the preceding weekend period will be returned by reference instead.
- `date`: The date for which to perform the calculation.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the calendar and locale do not have the concept of a weekend, otherwise [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

Note that a particular calendar day may not necessarily fall entirely within a weekend period, as weekends can start in the middle of a day in some calendars and locales.

## See Also

### Calculating Dates

- [date(from:)](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [date(byAdding:to:options:)](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [date(byAdding:value:to:options:)](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [date(bySettingHour:minute:second:of:options:)](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [date(bySettingUnit:value:of:options:)](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [date(era:year:month:day:hour:minute:second:nanosecond:)](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [date(era:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:)](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.

# nextWeekendStartDate:interval:options:afterDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference the starting date and time interval range of the next weekend period after a given date.

## Declaration

```objectivec
- (BOOL) nextWeekendStartDate:(NSDate **) datep interval:(NSTimeInterval *) tip options:(NSCalendarOptions) options afterDate:(NSDate *) date;
```

## Parameters

- `datep`: Upon return, contains the starting date of the next weekend period.
- `tip`: Upon return, contains the time interval of the next weekend period.
- `options`: Options for the calculation. If you specify a backward search option ([NSCalendarSearchBackwards](options/searchbackwards.md)), the starting date and time interval range of the preceding weekend period will be returned by reference instead.
- `date`: The date for which to perform the calculation.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the calendar and locale do not have the concept of a weekend, otherwise [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

Note that a particular calendar day may not necessarily fall entirely within a weekend period, as weekends can start in the middle of a day in some calendars and locales.

## See Also

### Calculating Dates

- [dateFromComponents:](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [dateByAddingComponents:toDate:options:](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [dateByAddingUnit:value:toDate:options:](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [dateBySettingHour:minute:second:ofDate:options:](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [dateBySettingUnit:value:ofDate:options:](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [dateWithEra:year:month:day:hour:minute:second:nanosecond:](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [dateWithEra:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
