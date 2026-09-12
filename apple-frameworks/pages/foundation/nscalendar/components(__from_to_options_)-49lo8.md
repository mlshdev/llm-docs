> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/components(_:from:to:options:)-49lo8](https://developer.apple.com/documentation/foundation/nscalendar/components(_:from:to:options:)-49lo8)

# components(\_:from:to:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the difference between start and end dates given as date components.

## Declaration

```swift
func components(_ unitFlags: NSCalendar.Unit, from startingDateComp: DateComponents, to resultDateComp: DateComponents, options: NSCalendar.Options = []) -> DateComponents
```

## Parameters

- `unitFlags`: Specifies the components for the returned `NSDateComponents` object.
- `startingDateComp`: The start date for the calculation as an `NSDateComponents` object.
- `resultDateComp`: The end date for the calculation as an `NSDateComponents` object.
- `options`: The `options` parameter is currently unused.

<a id="return-value"></a>

## Return Value

An `NSDateComponents` object whose components are specified by `unitFlags` and calculated from the difference between the `startingDateComp` and `resultDateComp` using the options specified by `options`. Returns `nil` if either date falls outside the defined range of the receiver or if the computation cannot be performed.

<a id="Discussion"></a>

## Discussion

If an `NSDateComponents` object does not specify a value for a calendar unit required to determine an absolute date, the base value of that unit is assumed. For example, given an `NSDateComponents` object with only a `year` and a `month` specified, the resulting `NSDate` object would be constructed using a `day` value of `1` and `hour`, `minute`, `second` and `nanosecond` values of `0`. Passing an `NSDateComponents` argument with an unspecified `era` or `year` value is not advised.

If an `NSDateComponents` object’s `timeZone` property is set, the time zone property value will be used in the calculation. If an `NSDateComponents` object’s `calendar` property is set, the calendar property value will be used instead of the receiving calendar. If both an `NSDateComponents` object’s `timeZone` and `calendar` properties are set, the time zone property value overrides the time zone of the calendar property value.

## See Also

### Extracting Components

- [date(\_:matchesComponents:)](date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component(\_:from:)](component%28__from_%29.md): Returns the specified date component from a given date.
- [components(\_:from:)](components%28__from_%29.md): Returns the date components representing a given date.
- [components(\_:from:to:options:)](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components(in:from:)](components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra(\_:year:month:day:from:)](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra(\_:yearForWeekOfYear:weekOfYear:weekday:from:)](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour(\_:minute:second:nanosecond:from:)](gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.

# components:fromDateComponents:toDateComponents:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the difference between start and end dates given as date components.

## Declaration

```objectivec
- (NSDateComponents *) components:(NSCalendarUnit) unitFlags fromDateComponents:(NSDateComponents *) startingDateComp toDateComponents:(NSDateComponents *) resultDateComp options:(NSCalendarOptions) options;
```

## Parameters

- `unitFlags`: Specifies the components for the returned `NSDateComponents` object.
- `startingDateComp`: The start date for the calculation as an `NSDateComponents` object.
- `resultDateComp`: The end date for the calculation as an `NSDateComponents` object.
- `options`: The `options` parameter is currently unused.

<a id="return-value"></a>

## Return Value

An `NSDateComponents` object whose components are specified by `unitFlags` and calculated from the difference between the `startingDateComp` and `resultDateComp` using the options specified by `options`. Returns `nil` if either date falls outside the defined range of the receiver or if the computation cannot be performed.

<a id="Discussion"></a>

## Discussion

If an `NSDateComponents` object does not specify a value for a calendar unit required to determine an absolute date, the base value of that unit is assumed. For example, given an `NSDateComponents` object with only a `year` and a `month` specified, the resulting `NSDate` object would be constructed using a `day` value of `1` and `hour`, `minute`, `second` and `nanosecond` values of `0`. Passing an `NSDateComponents` argument with an unspecified `era` or `year` value is not advised.

If an `NSDateComponents` object’s `timeZone` property is set, the time zone property value will be used in the calculation. If an `NSDateComponents` object’s `calendar` property is set, the calendar property value will be used instead of the receiving calendar. If both an `NSDateComponents` object’s `timeZone` and `calendar` properties are set, the time zone property value overrides the time zone of the calendar property value.

## See Also

### Extracting Components

- [date:matchesComponents:](date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component:fromDate:](component%28__from_%29.md): Returns the specified date component from a given date.
- [components:fromDate:](components%28__from_%29.md): Returns the date components representing a given date.
- [components:fromDate:toDate:options:](components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [componentsInTimeZone:fromDate:](components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra:year:month:day:fromDate:](getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra:yearForWeekOfYear:weekOfYear:weekday:fromDate:](getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour:minute:second:nanosecond:fromDate:](gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.
