> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/everyminutetimelineschedule](https://developer.apple.com/documentation/swiftui/everyminutetimelineschedule)

# EveryMinuteTimelineSchedule

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A schedule for updating a timeline view at the start of every minute.

## Declaration

```swift
struct EveryMinuteTimelineSchedule
```

<a id="overview"></a>

## Overview

You can also use [everyMinute](timelineschedule/everyminute.md) to construct this schedule.

## Topics

### Creating a schedule

- [init()](everyminutetimelineschedule/init%28%29.md): Creates a per-minute update schedule.

### Getting the sequence of dates

- [entries(from:mode:)](everyminutetimelineschedule/entries%28from_mode_%29.md): Provides a sequence of per-minute dates starting from a given date.
- [EveryMinuteTimelineSchedule.Entries](everyminutetimelineschedule/entries.md): The sequence of dates in an every minute schedule.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TimelineSchedule](timelineschedule.md)

## See Also

### Supporting types

- [AnimationTimelineSchedule](animationtimelineschedule.md): A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [ExplicitTimelineSchedule](explicittimelineschedule.md): A schedule for updating a timeline view at explicit points in time.
- [PeriodicTimelineSchedule](periodictimelineschedule.md): A schedule for updating a timeline view at regular intervals.
