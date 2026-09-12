> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineschedule/periodic(from:by:)](https://developer.apple.com/documentation/swiftui/timelineschedule/periodic(from:by:))

# periodic(from:by:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A schedule for updating a timeline view at regular intervals.

## Declaration

```swift
@export(implementation) static func periodic(from startDate: Date, by interval: TimeInterval) -> PeriodicTimelineSchedule
```

## Parameters

- `startDate`: The date on which to start the sequence.
- `interval`: The time interval between successive sequence entries.

<a id="discussion"></a>

## Discussion

Initialize a [TimelineView](../timelineview.md) with a periodic timeline schedule when you want to schedule timeline view updates periodically with a custom interval:

```swift
TimelineView(.periodic(from: startDate, by: 3.0)) { context in
    Text(context.date.description)
}
```

The timeline view updates its content at the start date, and then again at dates separated in time by the interval amount, which is every three seconds in the example above. For a start date in the past, the view updates immediately, providing as context the date corresponding to the most recent interval boundary. The view then refreshes normally at subsequent interval boundaries. For a start date in the future, the view updates once with the current date, and then begins regular updates at the start date.

The schedule defines the [PeriodicTimelineSchedule.Entries](../periodictimelineschedule/entries.md) structure to return the sequence of dates when the timeline view calls the [entries(from:mode:)](../periodictimelineschedule/entries%28from_mode_%29.md) method.

## See Also

### Getting built-in schedules

- [animation](animation.md): Conforms when `Self` is `AnimationTimelineSchedule`. A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [animation(minimumInterval:paused:)](animation%28minimuminterval_paused_%29.md): Conforms when `Self` is `AnimationTimelineSchedule`. A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [everyMinute](everyminute.md): Conforms when `Self` is `EveryMinuteTimelineSchedule`. A schedule for updating a timeline view at the start of every minute.
- [explicit(\_:)](explicit%28__%29.md): A schedule for updating a timeline view at explicit points in time.
