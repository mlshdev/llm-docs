> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/components(in:from:)](https://developer.apple.com/documentation/foundation/nscalendar/components(in:from:))

# components(in:from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).

## Declaration

```swift
func components(in timezone: TimeZone, from date: Date) -> DateComponents
```

## Parameters

- `timezone`: The time zone to use when returning the components. This value overrides the time zone of the receiving `NSCalendar`.
- `date`: The date for which to perform the calculation.

<a id="return-value"></a>

## Return Value

An `NSDateComponents` object containing all the components from the given date, calculated using the given time zone.

<a id="Discussion"></a>

## Discussion

If you want “date information in a given time zone” for the purpose to displaying it, you should use [DateFormatter](../dateformatter.md) to format the date.

## See Also

### Extracting Components

- [date(\_:matchesComponents:)](date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component(\_:from:)](component%28__from_%29.md): Returns the specified date component from a given date.
- [components(\_:from:)](components%28__from_%29.md): Returns the date components representing a given date.
- [components(\_:from:to:options:)](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components(\_:from:to:options:)](components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [getEra(\_:year:month:day:from:)](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra(\_:yearForWeekOfYear:weekOfYear:weekday:from:)](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour(\_:minute:second:nanosecond:from:)](gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.

# componentsInTimeZone:fromDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).

## Declaration

```objectivec
- (NSDateComponents *) componentsInTimeZone:(NSTimeZone *) timezone fromDate:(NSDate *) date;
```

## Parameters

- `timezone`: The time zone to use when returning the components. This value overrides the time zone of the receiving `NSCalendar`.
- `date`: The date for which to perform the calculation.

<a id="return-value"></a>

## Return Value

An `NSDateComponents` object containing all the components from the given date, calculated using the given time zone.

<a id="Discussion"></a>

## Discussion

If you want “date information in a given time zone” for the purpose to displaying it, you should use [NSDateFormatter](../dateformatter.md) to format the date.

## See Also

### Extracting Components

- [date:matchesComponents:](date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component:fromDate:](component%28__from_%29.md): Returns the specified date component from a given date.
- [components:fromDate:](components%28__from_%29.md): Returns the date components representing a given date.
- [components:fromDate:toDate:options:](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components:fromDateComponents:toDateComponents:options:](components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [getEra:year:month:day:fromDate:](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra:yearForWeekOfYear:weekOfYear:weekday:fromDate:](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour:minute:second:nanosecond:fromDate:](gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.
