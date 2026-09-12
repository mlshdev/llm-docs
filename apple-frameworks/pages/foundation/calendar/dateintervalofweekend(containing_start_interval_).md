> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/dateintervalofweekend(containing:start:interval:)](https://developer.apple.com/documentation/foundation/calendar/dateintervalofweekend(containing:start:interval:))

# dateIntervalOfWeekend(containing:start:interval:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Find the range of the weekend around the given date, returned via two by-reference parameters.

## Declaration

```swift
func dateIntervalOfWeekend(containing date: Date, start: inout Date, interval: inout TimeInterval) -> Bool
```

## Parameters

- `date`: The date at which to start the search.
- `start`: When the result is `true`, set

<a id="return-value"></a>

## Return Value

`true` if a date range could be found, and `false` if the date is not in a weekend.

<a id="Discussion"></a>

## Discussion

Note that a given entire day within a calendar is not necessarily all in a weekend or not; weekends can start in the middle of a day in some calendars and locales.

## See Also

### Calculating Intervals

- [dateInterval(of:for:)](dateinterval%28of_for_%29.md): Returns the starting time and duration of a given calendar component that contains a given date.
- [dateInterval(of:start:interval:for:)](dateinterval%28of_start_interval_for_%29.md): Returns, via two inout parameters, the starting time and duration of a given calendar component that contains a given date.
- [dateIntervalOfWeekend(containing:)](dateintervalofweekend%28containing_%29.md): Returns a `DateInterval` of the weekend contained by the given date, or `nil` if the date is not in a weekend.
- [nextWeekend(startingAfter:direction:)](nextweekend%28startingafter_direction_%29.md): Returns a `DateInterval` of the next weekend, which starts strictly after the given date.
- [nextWeekend(startingAfter:start:interval:direction:)](nextweekend%28startingafter_start_interval_direction_%29.md): Returns the range of the next weekend via two inout parameters. The weekend starts strictly after the given date.
- [Calendar.SearchDirection](searchdirection.md): The direction in time to search.
