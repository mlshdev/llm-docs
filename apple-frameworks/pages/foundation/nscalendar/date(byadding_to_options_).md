> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/date(byadding:to:options:)](https://developer.apple.com/documentation/foundation/nscalendar/date(byadding:to:options:))

# date(byAdding:to:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date representing the absolute time calculated by adding given components to a given date.

## Declaration

```swift
func date(byAdding comps: DateComponents, to date: Date, options opts: NSCalendar.Options = []) -> Date?
```

## Parameters

- `comps`: The components to add to `date`.
- `date`: The date to which `comps` are added.
- `opts`: Options for the calculation. See [NSCalendar.Options](options.md) for possible values.

  If you specify no options, overflow in a unit carries into the higher units (as in typical addition).

<a id="return-value"></a>

## Return Value

A new `NSDate` object representing the absolute time calculated by adding to `date` the calendrical components specified by `comps` using the options specified by `opts`. Returns `nil` if `date` falls outside the defined range of the receiver or if the computation cannot be performed.

<a id="Discussion"></a>

## Discussion

Some operations can be ambiguous, and the behavior of the computation is calendar-specific, but generally components are added in the order specified.

The following example shows how to add 2 months and 3 days to the current date and time using an existing calendar (`gregorian`):

```objc
NSDate *currentDate = [NSDate date];
NSDateComponents *comps = [[NSDateComponents alloc] init];
[comps setMonth:2];
[comps setDay:3];
NSDate *date = [gregorian dateByAddingComponents:comps toDate:currentDate options:0];
[comps release];
```

Note that some computations can take a relatively long time.

## See Also

### Related Documentation

- [components(\_:from:to:options:)](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.

### Calculating Dates

- [date(from:)](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [date(byAdding:value:to:options:)](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [date(bySettingHour:minute:second:of:options:)](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [date(bySettingUnit:value:of:options:)](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [date(era:year:month:day:hour:minute:second:nanosecond:)](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [date(era:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:)](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStart(\_:interval:options:after:)](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.

# dateByAddingComponents:toDate:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date representing the absolute time calculated by adding given components to a given date.

## Declaration

```objectivec
- (NSDate *) dateByAddingComponents:(NSDateComponents *) comps toDate:(NSDate *) date options:(NSCalendarOptions) opts;
```

## Parameters

- `comps`: The components to add to `date`.
- `date`: The date to which `comps` are added.
- `opts`: Options for the calculation. See [NSCalendarOptions](options.md) for possible values.

  If you specify no options, overflow in a unit carries into the higher units (as in typical addition).

<a id="return-value"></a>

## Return Value

A new `NSDate` object representing the absolute time calculated by adding to `date` the calendrical components specified by `comps` using the options specified by `opts`. Returns `nil` if `date` falls outside the defined range of the receiver or if the computation cannot be performed.

<a id="Discussion"></a>

## Discussion

Some operations can be ambiguous, and the behavior of the computation is calendar-specific, but generally components are added in the order specified.

The following example shows how to add 2 months and 3 days to the current date and time using an existing calendar (`gregorian`):

```objc
NSDate *currentDate = [NSDate date];
NSDateComponents *comps = [[NSDateComponents alloc] init];
[comps setMonth:2];
[comps setDay:3];
NSDate *date = [gregorian dateByAddingComponents:comps toDate:currentDate options:0];
[comps release];
```

Note that some computations can take a relatively long time.

## See Also

### Related Documentation

- [components:fromDate:toDate:options:](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.

### Calculating Dates

- [dateFromComponents:](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [dateByAddingUnit:value:toDate:options:](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [dateBySettingHour:minute:second:ofDate:options:](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [dateBySettingUnit:value:ofDate:options:](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [dateWithEra:year:month:day:hour:minute:second:nanosecond:](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [dateWithEra:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStartDate:interval:options:afterDate:](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.
