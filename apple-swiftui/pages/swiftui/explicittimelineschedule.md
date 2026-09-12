> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/explicittimelineschedule](https://developer.apple.com/documentation/swiftui/explicittimelineschedule)

# ExplicitTimelineSchedule

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A schedule for updating a timeline view at explicit points in time.

## Declaration

```swift
struct ExplicitTimelineSchedule<Entries> where Entries : Sequence, Entries.Element == Date
```

<a id="overview"></a>

## Overview

You can also use [explicit(\_:)](timelineschedule/explicit%28__%29.md) to construct this schedule.

## Topics

### Creating a schedule

- [init(\_:)](explicittimelineschedule/init%28__%29.md): Creates a schedule composed of an explicit sequence of dates.

### Getting the sequence of dates

- [entries(from:mode:)](explicittimelineschedule/entries%28from_mode_%29.md): Provides the sequence of dates with which you initialized the schedule.

## Relationships

### Conforms To

- [TimelineSchedule](timelineschedule.md)

## See Also

### Supporting types

- [AnimationTimelineSchedule](animationtimelineschedule.md): A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [EveryMinuteTimelineSchedule](everyminutetimelineschedule.md): A schedule for updating a timeline view at the start of every minute.
- [PeriodicTimelineSchedule](periodictimelineschedule.md): A schedule for updating a timeline view at regular intervals.
