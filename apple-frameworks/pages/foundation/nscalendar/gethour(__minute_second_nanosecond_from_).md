> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/gethour(_:minute:second:nanosecond:from:)](https://developer.apple.com/documentation/foundation/nscalendar/gethour(_:minute:second:nanosecond:from:))

# getHour(\_:minute:second:nanosecond:from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference the hour, minute, second, and nanosecond component values for a given date.

## Declaration

```swift
func getHour(_ hourValuePointer: UnsafeMutablePointer<Int>?, minute minuteValuePointer: UnsafeMutablePointer<Int>?, second secondValuePointer: UnsafeMutablePointer<Int>?, nanosecond nanosecondValuePointer: UnsafeMutablePointer<Int>?, from date: Date)
```

## Parameters

- `hourValuePointer`: Upon return, contains the hour of the given date.
- `minuteValuePointer`: Upon return, contains the minute of the given date.
- `secondValuePointer`: Upon return, contains the second of the given date.
- `nanosecondValuePointer`: Upon return, contains the nanosecond of the given date.
- `date`: The date for which to perform the calculation.

<a id="Discussion"></a>

## Discussion

Pass `NULL` to ignore any individual component parameter.

This is a convenience method for getting the time components of a given date using [components(\_:from:)](components%28__from_%29.md)

## See Also

### Extracting Components

- [date(\_:matchesComponents:)](date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component(\_:from:)](component%28__from_%29.md): Returns the specified date component from a given date.
- [components(\_:from:)](components%28__from_%29.md): Returns the date components representing a given date.
- [components(\_:from:to:options:)](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components(\_:from:to:options:)](components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [components(in:from:)](components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra(\_:year:month:day:from:)](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra(\_:yearForWeekOfYear:weekOfYear:weekday:from:)](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.

# getHour:minute:second:nanosecond:fromDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference the hour, minute, second, and nanosecond component values for a given date.

## Declaration

```objectivec
- (void) getHour:(NSInteger *) hourValuePointer minute:(NSInteger *) minuteValuePointer second:(NSInteger *) secondValuePointer nanosecond:(NSInteger *) nanosecondValuePointer fromDate:(NSDate *) date;
```

## Parameters

- `hourValuePointer`: Upon return, contains the hour of the given date.
- `minuteValuePointer`: Upon return, contains the minute of the given date.
- `secondValuePointer`: Upon return, contains the second of the given date.
- `nanosecondValuePointer`: Upon return, contains the nanosecond of the given date.
- `date`: The date for which to perform the calculation.

<a id="Discussion"></a>

## Discussion

Pass `NULL` to ignore any individual component parameter.

This is a convenience method for getting the time components of a given date using [components:fromDate:](components%28__from_%29.md)

## See Also

### Extracting Components

- [date:matchesComponents:](date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component:fromDate:](component%28__from_%29.md): Returns the specified date component from a given date.
- [components:fromDate:](components%28__from_%29.md): Returns the date components representing a given date.
- [components:fromDate:toDate:options:](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components:fromDateComponents:toDateComponents:options:](components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [componentsInTimeZone:fromDate:](components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra:year:month:day:fromDate:](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra:yearForWeekOfYear:weekOfYear:weekday:fromDate:](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
