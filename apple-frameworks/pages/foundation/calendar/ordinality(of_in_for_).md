> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/ordinality(of:in:for:)](https://developer.apple.com/documentation/foundation/calendar/ordinality(of:in:for:))

# ordinality(of:in:for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns, for a given absolute time, the ordinal number of a smaller calendar component (such as a day) within a specified larger calendar component (such as a week).

## Declaration

```swift
func ordinality(of smaller: Calendar.Component, in larger: Calendar.Component, for date: Date) -> Int?
```

## Parameters

- `smaller`: The smaller calendar component.
- `larger`: The larger calendar component.
- `date`: The absolute time for which the calculation is performed.

<a id="return-value"></a>

## Return Value

The ordinal number of smaller within larger at the time specified by date. Returns `nil` if larger is not logically bigger than smaller in the calendar, or the given combination of components does not make sense (or is a computation which is undefined).

<a id="Discussion"></a>

## Discussion

The ordinality is in most cases not the same as the decomposed value of the component. Typically return values are 1 and greater. For example, the time 00:45 is in the first hour of the day, and for components `hour` and `day` respectively, the result would be 1. An exception is the week-in-month calculation, which returns 0 for days before the first week in the month containing the date.

> **Note**

>  Some computations can take a relatively long time.

## See Also

### Getting Calendar Information

- [identifier](identifier-swift.property.md): The identifier of the calendar.
- [locale](locale.md): The locale of the calendar.
- [firstWeekday](firstweekday.md): The first day of the week for the calendar.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The number of minimum days in the first week.
- [timeZone](timezone.md): The time zone of the calendar.
- [maximumRange(of:)](maximumrange%28of_%29.md): The maximum range limits of the values that a given component can take on.
- [minimumRange(of:)](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given component can take on.
- [range(of:in:for:)](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar component (such as a day) can take on in a larger calendar component (such as a month) that includes a specified absolute time.
