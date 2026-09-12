> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/periodictimelineschedule](https://developer.apple.com/documentation/swiftui/periodictimelineschedule)

# PeriodicTimelineSchedule

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A schedule for updating a timeline view at regular intervals.

## Declaration

```swift
struct PeriodicTimelineSchedule
```

<a id="overview"></a>

## Overview

You can also use [periodic(from:by:)](timelineschedule/periodic%28from_by_%29.md) to construct this schedule.

## Topics

### Creating a schedule

- [init(from:by:)](periodictimelineschedule/init%28from_by_%29.md): Creates a periodic update schedule.

### Getting the sequence of dates

- [entries(from:mode:)](periodictimelineschedule/entries%28from_mode_%29.md): Provides a sequence of periodic dates starting from around a given date.
- [PeriodicTimelineSchedule.Entries](periodictimelineschedule/entries.md): The sequence of dates in periodic schedule.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TimelineSchedule](timelineschedule.md)

## See Also

### Supporting types

- [AnimationTimelineSchedule](animationtimelineschedule.md): A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [EveryMinuteTimelineSchedule](everyminutetimelineschedule.md): A schedule for updating a timeline view at the start of every minute.
- [ExplicitTimelineSchedule](explicittimelineschedule.md): A schedule for updating a timeline view at explicit points in time.
