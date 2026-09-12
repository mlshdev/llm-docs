> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineschedule/explicit(_:)](https://developer.apple.com/documentation/swiftui/timelineschedule/explicit(_:))

# explicit(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A schedule for updating a timeline view at explicit points in time.

## Declaration

```swift
@export(implementation) static func explicit<S>(_ dates: S) -> ExplicitTimelineSchedule<S> where Self == ExplicitTimelineSchedule<S>, S : Sequence, S.Element == Date
```

## Parameters

- `dates`: The sequence of dates at which a timeline view updates. Use a monotonically increasing sequence of dates, and ensure that at least one is in the future.

<a id="discussion"></a>

## Discussion

Initialize a [TimelineView](../timelineview.md) with an explicit timeline schedule when you want to schedule view updates at particular points in time:

```swift
let dates = [
    Date(timeIntervalSinceNow: 10), // Update ten seconds from now,
    Date(timeIntervalSinceNow: 12) // and a few seconds later.
]

struct MyView: View {
    var body: some View {
        TimelineView(.explicit(dates)) { context in
            Text(context.date.description)
        }
    }
}
```

The timeline view updates its content on exactly the dates that you specify, until it runs out of dates, after which it stops changing. If the dates you provide are in the past, the timeline view updates exactly once with the last entry. If you only provide dates in the future, the timeline view renders with the current date until the first date arrives. If you provide one or more dates in the past and one or more in the future, the view renders the most recent past date, refreshing normally on all subsequent dates.

## See Also

### Getting built-in schedules

- [animation](animation.md): Conforms when `Self` is `AnimationTimelineSchedule`. A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [animation(minimumInterval:paused:)](animation%28minimuminterval_paused_%29.md): Conforms when `Self` is `AnimationTimelineSchedule`. A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [everyMinute](everyminute.md): Conforms when `Self` is `EveryMinuteTimelineSchedule`. A schedule for updating a timeline view at the start of every minute.
- [periodic(from:by:)](periodic%28from_by_%29.md): Conforms when `Self` is `PeriodicTimelineSchedule`. A schedule for updating a timeline view at regular intervals.
