> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animationtimelineschedule](https://developer.apple.com/documentation/swiftui/animationtimelineschedule)

# AnimationTimelineSchedule

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A pausable schedule of dates updating at a frequency no more quickly than the provided interval.

## Declaration

```swift
struct AnimationTimelineSchedule
```

<a id="overview"></a>

## Overview

You can also use [animation(minimumInterval:paused:)](timelineschedule/animation%28minimuminterval_paused_%29.md) to construct this schedule.

## Topics

### Creating a schedule

- [init(minimumInterval:paused:)](animationtimelineschedule/init%28minimuminterval_paused_%29.md): Create a pausable schedule of dates updating at a frequency no more quickly than the provided interval.

### Getting the sequence of dates

- [entries(from:mode:)](animationtimelineschedule/entries%28from_mode_%29.md): Returns entries at the frequency of the animation schedule.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TimelineSchedule](timelineschedule.md)

## See Also

### Supporting types

- [EveryMinuteTimelineSchedule](everyminutetimelineschedule.md): A schedule for updating a timeline view at the start of every minute.
- [ExplicitTimelineSchedule](explicittimelineschedule.md): A schedule for updating a timeline view at explicit points in time.
- [PeriodicTimelineSchedule](periodictimelineschedule.md): A schedule for updating a timeline view at regular intervals.
