> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/recurrencerule/weeks](https://developer.apple.com/documentation/foundation/calendar/recurrencerule/weeks)

# weeks

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

On which weeks of the year the event should occur.

## Declaration

```swift
var weeks: [Int]
```

<a id="discussion"></a>

## Discussion

- 1 is the first week of the year. `calendar.minimumDaysInFirstWeek` defines which week is considered first.
- Negative values refer to weeks if counting backwards from the last week of the year. -1 is the last week of the year. This field is unused when `frequency` is other than `.yearly`.
