> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/range(of:in:for:)](https://developer.apple.com/documentation/foundation/calendar/range(of:in:for:))

# range(of:in:for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of absolute time values that a smaller calendar component (such as a day) can take on in a larger calendar component (such as a month) that includes a specified absolute time.

## Declaration

```swift
func range(of smaller: Calendar.Component, in larger: Calendar.Component, for date: Date) -> Range<Int>?
```

## Parameters

- `smaller`: The smaller calendar component.
- `larger`: The larger calendar component.
- `date`: The absolute time for which the calculation is performed.

<a id="return-value"></a>

## Return Value

The range of absolute time values smaller can take on in larger at the time specified by date. Returns `nil` if larger is not logically bigger than smaller in the calendar, or the given combination of components does not make sense (or is a computation which is undefined).

<a id="Discussion"></a>

## Discussion

You can use this method to calculate, for example, the range the `day` component can take on in the `month` in which `date` lies.

## See Also

### Getting Calendar Information

- [identifier](identifier-swift.property.md): The identifier of the calendar.
- [locale](locale.md): The locale of the calendar.
- [firstWeekday](firstweekday.md): The first day of the week for the calendar.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The number of minimum days in the first week.
- [timeZone](timezone.md): The time zone of the calendar.
- [maximumRange(of:)](maximumrange%28of_%29.md): The maximum range limits of the values that a given component can take on.
- [minimumRange(of:)](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given component can take on.
- [ordinality(of:in:for:)](ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar component (such as a day) within a specified larger calendar component (such as a week).
