> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineschedule](https://developer.apple.com/documentation/swiftui/timelineschedule)

# TimelineSchedule

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that provides a sequence of dates for use as a schedule.

## Declaration

```swift
protocol TimelineSchedule
```

<a id="overview"></a>

## Overview

Types that conform to this protocol implement a particular kind of schedule by defining an [entries(from:mode:)](timelineschedule/entries%28from_mode_%29.md) method that returns a sequence of dates. Use a timeline schedule type when you initialize a [TimelineView](timelineview.md). For example, you can create a timeline view that updates every second, starting from some `startDate`, using a periodic schedule returned by [periodic(from:by:)](timelineschedule/periodic%28from_by_%29.md):

```swift
TimelineView(.periodic(from: startDate, by: 1.0)) { context in
    // View content goes here.
}
```

You can also create custom timeline schedules. The timeline view updates its content according to the sequence of dates produced by the schedule.

## Topics

### Getting built-in schedules

- [animation](timelineschedule/animation.md): Conforms when `Self` is `AnimationTimelineSchedule`. A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [animation(minimumInterval:paused:)](timelineschedule/animation%28minimuminterval_paused_%29.md): Conforms when `Self` is `AnimationTimelineSchedule`. A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [everyMinute](timelineschedule/everyminute.md): Conforms when `Self` is `EveryMinuteTimelineSchedule`. A schedule for updating a timeline view at the start of every minute.
- [explicit(\_:)](timelineschedule/explicit%28__%29.md): A schedule for updating a timeline view at explicit points in time.
- [periodic(from:by:)](timelineschedule/periodic%28from_by_%29.md): Conforms when `Self` is `PeriodicTimelineSchedule`. A schedule for updating a timeline view at regular intervals.

### Getting a sequence of dates

- [entries(from:mode:)](timelineschedule/entries%28from_mode_%29.md): Provides a sequence of dates starting around a given date.
- [Entries](timelineschedule/entries.md): The sequence of dates within a schedule.

### Specifying a mode

- [TimelineSchedule.Mode](timelineschedule/mode.md): An alias for the timeline schedule update mode.
- [TimelineScheduleMode](timelineschedulemode.md): A mode of operation for timeline schedule updates.

### Supporting types

- [AnimationTimelineSchedule](animationtimelineschedule.md): A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [EveryMinuteTimelineSchedule](everyminutetimelineschedule.md): A schedule for updating a timeline view at the start of every minute.
- [ExplicitTimelineSchedule](explicittimelineschedule.md): A schedule for updating a timeline view at explicit points in time.
- [PeriodicTimelineSchedule](periodictimelineschedule.md): A schedule for updating a timeline view at regular intervals.

## Relationships

### Conforming Types

- [AnimationTimelineSchedule](animationtimelineschedule.md)
- [EveryMinuteTimelineSchedule](everyminutetimelineschedule.md)
- [ExplicitTimelineSchedule](explicittimelineschedule.md)
- [PeriodicTimelineSchedule](periodictimelineschedule.md)

## See Also

### Updating a view on a schedule

- [Updating watchOS apps with timelines](https://developer.apple.com/documentation/watchos-apps/updating-watchos-apps-with-timelines): Seamlessly schedule updates to your user interface, even while it’s inactive.
- [TimelineView](timelineview.md): A view that updates according to a schedule that you provide.
- [TimelineViewDefaultContext](timelineviewdefaultcontext.md): Information passed to a timeline view’s content callback.
