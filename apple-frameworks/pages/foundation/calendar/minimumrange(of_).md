> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/minimumrange(of:)](https://developer.apple.com/documentation/foundation/calendar/minimumrange(of:))

# minimumRange(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the minimum range limits of the values that a given component can take on.

## Declaration

```swift
func minimumRange(of component: Calendar.Component) -> Range<Int>?
```

## Parameters

- `component`: A component to calculate a range for.

<a id="return-value"></a>

## Return Value

The range, or nil if it could not be calculated.

<a id="Discussion"></a>

## Discussion

As an example, in the Gregorian calendar the minimum range of values for the Day component is 1-28.

## See Also

### Getting Calendar Information

- [identifier](identifier-swift.property.md): The identifier of the calendar.
- [locale](locale.md): The locale of the calendar.
- [firstWeekday](firstweekday.md): The first day of the week for the calendar.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The number of minimum days in the first week.
- [timeZone](timezone.md): The time zone of the calendar.
- [maximumRange(of:)](maximumrange%28of_%29.md): The maximum range limits of the values that a given component can take on.
- [ordinality(of:in:for:)](ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar component (such as a day) within a specified larger calendar component (such as a week).
- [range(of:in:for:)](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar component (such as a day) can take on in a larger calendar component (such as a month) that includes a specified absolute time.
