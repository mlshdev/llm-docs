> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineschedule/everyminute](https://developer.apple.com/documentation/swiftui/timelineschedule/everyminute)

# everyMinute

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A schedule for updating a timeline view at the start of every minute.

## Declaration

```swift
@export(implementation) static var everyMinute: EveryMinuteTimelineSchedule { get }
```

<a id="discussion"></a>

## Discussion

Initialize a [TimelineView](../timelineview.md) with an every minute timeline schedule when you want to schedule timeline view updates at the start of every minute:

```swift
TimelineView(.everyMinute) { context in
    Text(context.date.description)
}
```

The schedule provides the first date as the beginning of the minute in which you use it to initialize the timeline view. For example, if you create the timeline view at `10:09:38`, the schedule’s first entry is `10:09:00`. In response, the timeline view performs its first update immediately, providing the beginning of the current minute, namely `10:09:00`, as context to its content. Subsequent updates happen at the beginning of each minute that follows.

The schedule defines the [EveryMinuteTimelineSchedule.Entries](../everyminutetimelineschedule/entries.md) structure to return the sequence of dates when the timeline view calls the [entries(from:mode:)](../everyminutetimelineschedule/entries%28from_mode_%29.md) method.

## See Also

### Getting built-in schedules

- [animation](animation.md): Conforms when `Self` is `AnimationTimelineSchedule`. A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [animation(minimumInterval:paused:)](animation%28minimuminterval_paused_%29.md): Conforms when `Self` is `AnimationTimelineSchedule`. A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [explicit(\_:)](explicit%28__%29.md): A schedule for updating a timeline view at explicit points in time.
- [periodic(from:by:)](periodic%28from_by_%29.md): Conforms when `Self` is `PeriodicTimelineSchedule`. A schedule for updating a timeline view at regular intervals.
