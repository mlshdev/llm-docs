> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/dateintervalofweekend(containing:)](https://developer.apple.com/documentation/foundation/calendar/dateintervalofweekend(containing:))

# dateIntervalOfWeekend(containing:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a `DateInterval` of the weekend contained by the given date, or `nil` if the date is not in a weekend.

## Declaration

```swift
func dateIntervalOfWeekend(containing date: Date) -> DateInterval?
```

## Parameters

- `date`: The date contained in the weekend.

<a id="return-value"></a>

## Return Value

A `DateInterval`, or `nil` if the date is not in a weekend.

## See Also

### Calculating Intervals

- [dateInterval(of:for:)](dateinterval%28of_for_%29.md): Returns the starting time and duration of a given calendar component that contains a given date.
- [dateInterval(of:start:interval:for:)](dateinterval%28of_start_interval_for_%29.md): Returns, via two inout parameters, the starting time and duration of a given calendar component that contains a given date.
- [dateIntervalOfWeekend(containing:start:interval:)](dateintervalofweekend%28containing_start_interval_%29.md): Find the range of the weekend around the given date, returned via two by-reference parameters.
- [nextWeekend(startingAfter:direction:)](nextweekend%28startingafter_direction_%29.md): Returns a `DateInterval` of the next weekend, which starts strictly after the given date.
- [nextWeekend(startingAfter:start:interval:direction:)](nextweekend%28startingafter_start_interval_direction_%29.md): Returns the range of the next weekend via two inout parameters. The weekend starts strictly after the given date.
- [Calendar.SearchDirection](searchdirection.md): The direction in time to search.
