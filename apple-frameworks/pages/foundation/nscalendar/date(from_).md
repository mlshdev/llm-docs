> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/date(from:)](https://developer.apple.com/documentation/foundation/nscalendar/date(from:))

# date(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date representing the absolute time calculated from given components.

## Declaration

```swift
func date(from comps: DateComponents) -> Date?
```

## Parameters

- `comps`: The components from which to calculate the returned date.

<a id="return-value"></a>

## Return Value

A new `NSDate` object representing the absolute time calculated from `comps`. Returns `nil` if the receiver cannot convert the components given in `comps` into an `NSDate` object.

<a id="Discussion"></a>

## Discussion

When there are insufficient components provided to completely specify an absolute time, a calendar uses default values of its choice. When there is inconsistent information, a calendar may ignore some of the components parameters or the method may return `nil`. Unnecessary components are ignored (for example, Day takes precedence over Weekday and Weekday ordinals).

The following example shows how to use this method to create a date object to represent 14:10:00 on 6 January 1965, for a given calendar (`gregorian`).

```objc
NSDateComponents *comps = [[NSDateComponents alloc] init];
[comps setYear:1965];
[comps setMonth:1];
[comps setDay:6];
[comps setHour:14];
[comps setMinute:10];
[comps setSecond:0];
NSDate *date = [gregorian dateFromComponents:comps];
[comps release];
```

Note that some computations can take a relatively long time to perform.

## See Also

### Related Documentation

- [components(\_:from:)](components%28__from_%29.md): Returns the date components representing a given date.

### Calculating Dates

- [date(byAdding:to:options:)](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [date(byAdding:value:to:options:)](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [date(bySettingHour:minute:second:of:options:)](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [date(bySettingUnit:value:of:options:)](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [date(era:year:month:day:hour:minute:second:nanosecond:)](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [date(era:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:)](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStart(\_:interval:options:after:)](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.

# dateFromComponents: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date representing the absolute time calculated from given components.

## Declaration

```objectivec
- (NSDate *) dateFromComponents:(NSDateComponents *) comps;
```

## Parameters

- `comps`: The components from which to calculate the returned date.

<a id="return-value"></a>

## Return Value

A new `NSDate` object representing the absolute time calculated from `comps`. Returns `nil` if the receiver cannot convert the components given in `comps` into an `NSDate` object.

<a id="Discussion"></a>

## Discussion

When there are insufficient components provided to completely specify an absolute time, a calendar uses default values of its choice. When there is inconsistent information, a calendar may ignore some of the components parameters or the method may return `nil`. Unnecessary components are ignored (for example, Day takes precedence over Weekday and Weekday ordinals).

The following example shows how to use this method to create a date object to represent 14:10:00 on 6 January 1965, for a given calendar (`gregorian`).

```objc
NSDateComponents *comps = [[NSDateComponents alloc] init];
[comps setYear:1965];
[comps setMonth:1];
[comps setDay:6];
[comps setHour:14];
[comps setMinute:10];
[comps setSecond:0];
NSDate *date = [gregorian dateFromComponents:comps];
[comps release];
```

Note that some computations can take a relatively long time to perform.

## See Also

### Related Documentation

- [components:fromDate:](components%28__from_%29.md): Returns the date components representing a given date.

### Calculating Dates

- [dateByAddingComponents:toDate:options:](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [dateByAddingUnit:value:toDate:options:](date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [dateBySettingHour:minute:second:ofDate:options:](date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [dateBySettingUnit:value:ofDate:options:](date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [dateWithEra:year:month:day:hour:minute:second:nanosecond:](date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [dateWithEra:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:](date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStartDate:interval:options:afterDate:](nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.
