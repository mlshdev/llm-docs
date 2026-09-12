> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/components(_:from:)](https://developer.apple.com/documentation/foundation/nscalendar/components(_:from:))

# components(\_:from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the date components representing a given date.

## Declaration

```swift
func components(_ unitFlags: NSCalendar.Unit, from date: Date) -> DateComponents
```

## Parameters

- `unitFlags`: The components into which to decompose `date`.
- `date`: The date for which to perform the calculation.

<a id="return-value"></a>

## Return Value

An `NSDateComponents` object containing `date` decomposed into the components specified by `unitFlags`. Returns `nil` if `date` falls outside of the defined range of the receiver or if the computation cannot be performed.

<a id="Discussion"></a>

## Discussion

The Weekday ordinality, when requested, refers to the next larger (than Week) of the requested units. Some computations can take a relatively long time.

The following example shows how to use this method to determine the current year, month, and day, using an existing calendar (`gregorian`):

```objc
unsigned unitFlags = NSYearCalendarUnit | NSMonthCalendarUnit |  NSDayCalendarUnit;
NSDate *date = [NSDate date];
NSDateComponents *comps = [gregorian components:unitFlags fromDate:date];
```

## See Also

### Related Documentation

- [date(from:)](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [date(byAdding:to:options:)](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.

### Extracting Components

- [date(\_:matchesComponents:)](date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component(\_:from:)](component%28__from_%29.md): Returns the specified date component from a given date.
- [components(\_:from:to:options:)](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components(\_:from:to:options:)](components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [components(in:from:)](components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra(\_:year:month:day:from:)](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra(\_:yearForWeekOfYear:weekOfYear:weekday:from:)](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour(\_:minute:second:nanosecond:from:)](gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.

# components:fromDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the date components representing a given date.

## Declaration

```objectivec
- (NSDateComponents *) components:(NSCalendarUnit) unitFlags fromDate:(NSDate *) date;
```

## Parameters

- `unitFlags`: The components into which to decompose `date`.
- `date`: The date for which to perform the calculation.

<a id="return-value"></a>

## Return Value

An `NSDateComponents` object containing `date` decomposed into the components specified by `unitFlags`. Returns `nil` if `date` falls outside of the defined range of the receiver or if the computation cannot be performed.

<a id="Discussion"></a>

## Discussion

The Weekday ordinality, when requested, refers to the next larger (than Week) of the requested units. Some computations can take a relatively long time.

The following example shows how to use this method to determine the current year, month, and day, using an existing calendar (`gregorian`):

```objc
unsigned unitFlags = NSYearCalendarUnit | NSMonthCalendarUnit |  NSDayCalendarUnit;
NSDate *date = [NSDate date];
NSDateComponents *comps = [gregorian components:unitFlags fromDate:date];
```

## See Also

### Related Documentation

- [dateFromComponents:](date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [dateByAddingComponents:toDate:options:](date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.

### Extracting Components

- [date:matchesComponents:](date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component:fromDate:](component%28__from_%29.md): Returns the specified date component from a given date.
- [components:fromDate:toDate:options:](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components:fromDateComponents:toDateComponents:options:](components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [componentsInTimeZone:fromDate:](components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra:year:month:day:fromDate:](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra:yearForWeekOfYear:weekOfYear:weekday:fromDate:](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour:minute:second:nanosecond:fromDate:](gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.
