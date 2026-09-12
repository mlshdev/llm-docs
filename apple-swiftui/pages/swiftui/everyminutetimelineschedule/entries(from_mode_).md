> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/everyminutetimelineschedule/entries(from:mode:)](https://developer.apple.com/documentation/swiftui/everyminutetimelineschedule/entries(from:mode:))

# entries(from:mode:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Provides a sequence of per-minute dates starting from a given date.

## Declaration

```swift
func entries(from startDate: Date, mode: TimelineScheduleMode) -> EveryMinuteTimelineSchedule.Entries
```

## Parameters

- `startDate`: The date from which the sequence begins.
- `mode`: The mode for the update schedule.

<a id="return-value"></a>

## Return Value

A sequence of per-minute dates in ascending order.

<a id="discussion"></a>

## Discussion

A [TimelineView](../timelineview.md) that you create with an every minute schedule calls this method to ask the schedule when to update its content. The method returns a sequence of per-minute dates in increasing order, from earliest to latest, that represents when the timeline view updates.

For a `startDate` that’s exactly minute-aligned, the schedule’s sequence of dates starts at that time. Otherwise, it starts at the beginning of the specified minute. For example, for start dates of both `10:09:32` and `10:09:00`, the first entry in the sequence is `10:09:00`.

## See Also

### Getting the sequence of dates

- [EveryMinuteTimelineSchedule.Entries](entries.md): The sequence of dates in an every minute schedule.
