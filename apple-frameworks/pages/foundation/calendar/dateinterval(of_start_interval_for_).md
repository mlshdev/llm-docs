> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/dateinterval(of:start:interval:for:)](https://developer.apple.com/documentation/foundation/calendar/dateinterval(of:start:interval:for:))

# dateInterval(of:start:interval:for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns, via two inout parameters, the starting time and duration of a given calendar component that contains a given date.

## Declaration

```swift
func dateInterval(of component: Calendar.Component, start: inout Date, interval: inout TimeInterval, for date: Date) -> Bool
```

## Parameters

- `component`: A calendar component.
- `start`: Upon return, the starting time of the calendar component that contains the date.
- `interval`: Upon return, the duration of the calendar component that contains the date.
- `date`: The specified date.

<a id="return-value"></a>

## Return Value

`true` if the starting time and duration of a component could be calculated; otherwise, `false`.

## See Also

### Calculating Intervals

- [dateInterval(of:for:)](dateinterval%28of_for_%29.md): Returns the starting time and duration of a given calendar component that contains a given date.
- [dateIntervalOfWeekend(containing:)](dateintervalofweekend%28containing_%29.md): Returns a `DateInterval` of the weekend contained by the given date, or `nil` if the date is not in a weekend.
- [dateIntervalOfWeekend(containing:start:interval:)](dateintervalofweekend%28containing_start_interval_%29.md): Find the range of the weekend around the given date, returned via two by-reference parameters.
- [nextWeekend(startingAfter:direction:)](nextweekend%28startingafter_direction_%29.md): Returns a `DateInterval` of the next weekend, which starts strictly after the given date.
- [nextWeekend(startingAfter:start:interval:direction:)](nextweekend%28startingafter_start_interval_direction_%29.md): Returns the range of the next weekend via two inout parameters. The weekend starts strictly after the given date.
- [Calendar.SearchDirection](searchdirection.md): The direction in time to search.
