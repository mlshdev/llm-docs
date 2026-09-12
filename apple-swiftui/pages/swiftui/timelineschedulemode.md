> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineschedulemode](https://developer.apple.com/documentation/swiftui/timelineschedulemode)

# TimelineScheduleMode

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode of operation for timeline schedule updates.

## Declaration

```swift
enum TimelineScheduleMode
```

<a id="overview"></a>

## Overview

A [TimelineView](timelineview.md) provides a mode when calling its schedule’s [entries(from:mode:)](timelineschedule/entries%28from_mode_%29.md) method. The view chooses a mode based on the state of the system. For example, a watchOS view might request a lower frequency of updates, using the [TimelineScheduleMode.lowFrequency](timelineschedulemode/lowfrequency.md) mode, when the user lowers their wrist.

## Topics

### Getting timeline schedule modes

- [TimelineScheduleMode.normal](timelineschedulemode/normal.md): A mode that produces schedule updates at the schedule’s natural cadence.
- [TimelineScheduleMode.lowFrequency](timelineschedulemode/lowfrequency.md): A mode that produces schedule updates at a reduced rate.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying a mode

- [TimelineSchedule.Mode](timelineschedule/mode.md): An alias for the timeline schedule update mode.
