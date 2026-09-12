> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/searchdirection](https://developer.apple.com/documentation/foundation/calendar/searchdirection)

# Calendar.SearchDirection

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The direction in time to search.

## Declaration

```swift
enum SearchDirection
```

## Topics

### Enumeration Cases

- [Calendar.SearchDirection.backward](searchdirection/backward.md): Search for a date earlier in time than the start date.
- [Calendar.SearchDirection.forward](searchdirection/forward.md): Search for a date later in time than the start date.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Calculating Intervals

- [dateInterval(of:for:)](dateinterval%28of_for_%29.md): Returns the starting time and duration of a given calendar component that contains a given date.
- [dateInterval(of:start:interval:for:)](dateinterval%28of_start_interval_for_%29.md): Returns, via two inout parameters, the starting time and duration of a given calendar component that contains a given date.
- [dateIntervalOfWeekend(containing:)](dateintervalofweekend%28containing_%29.md): Returns a `DateInterval` of the weekend contained by the given date, or `nil` if the date is not in a weekend.
- [dateIntervalOfWeekend(containing:start:interval:)](dateintervalofweekend%28containing_start_interval_%29.md): Find the range of the weekend around the given date, returned via two by-reference parameters.
- [nextWeekend(startingAfter:direction:)](nextweekend%28startingafter_direction_%29.md): Returns a `DateInterval` of the next weekend, which starts strictly after the given date.
- [nextWeekend(startingAfter:start:interval:direction:)](nextweekend%28startingafter_start_interval_direction_%29.md): Returns the range of the next weekend via two inout parameters. The weekend starts strictly after the given date.
