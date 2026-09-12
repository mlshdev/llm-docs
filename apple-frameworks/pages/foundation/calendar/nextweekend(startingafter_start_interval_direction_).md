> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/nextweekend(startingafter:start:interval:direction:)](https://developer.apple.com/documentation/foundation/calendar/nextweekend(startingafter:start:interval:direction:))

# nextWeekend(startingAfter:start:interval:direction:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of the next weekend via two inout parameters. The weekend starts strictly after the given date.

## Declaration

```swift
func nextWeekend(startingAfter date: Date, start: inout Date, interval: inout TimeInterval, direction: Calendar.SearchDirection = .forward) -> Bool
```

## Parameters

- `date`: The date at which to begin the search.
- `start`: Upon return, the starting time of the calendar component that contains the date.
- `interval`: Upon return, the duration of the calendar component that contains the date.
- `direction`: Which direction in time to search. The default value is `.forward`.

<a id="return-value"></a>

## Return Value

`false` if the calendar and locale do not have the concept of a weekend, otherwise `true`.

<a id="Discussion"></a>

## Discussion

If `direction` is `.backward`, then finds the previous weekend range strictly before the given date.

Note that a given entire day within a calendar is not necessarily all in a weekend or not; weekends can start in the middle of a day in some calendars and locales.

## See Also

### Calculating Intervals

- [dateInterval(of:for:)](dateinterval%28of_for_%29.md): Returns the starting time and duration of a given calendar component that contains a given date.
- [dateInterval(of:start:interval:for:)](dateinterval%28of_start_interval_for_%29.md): Returns, via two inout parameters, the starting time and duration of a given calendar component that contains a given date.
- [dateIntervalOfWeekend(containing:)](dateintervalofweekend%28containing_%29.md): Returns a `DateInterval` of the weekend contained by the given date, or `nil` if the date is not in a weekend.
- [dateIntervalOfWeekend(containing:start:interval:)](dateintervalofweekend%28containing_start_interval_%29.md): Find the range of the weekend around the given date, returned via two by-reference parameters.
- [nextWeekend(startingAfter:direction:)](nextweekend%28startingafter_direction_%29.md): Returns a `DateInterval` of the next weekend, which starts strictly after the given date.
- [Calendar.SearchDirection](searchdirection.md): The direction in time to search.
