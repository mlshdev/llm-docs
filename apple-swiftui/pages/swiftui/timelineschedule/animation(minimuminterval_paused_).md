> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineschedule/animation(minimuminterval:paused:)](https://developer.apple.com/documentation/swiftui/timelineschedule/animation(minimuminterval:paused:))

# animation(minimumInterval:paused:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A pausable schedule of dates updating at a frequency no more quickly than the provided interval.

## Declaration

```swift
@export(implementation) static func animation(minimumInterval: Double? = nil, paused: Bool = false) -> AnimationTimelineSchedule
```

## Parameters

- `minimumInterval`: The minimum interval to update the schedule at. Pass nil to let the system pick an appropriate update interval.
- `paused`: If the schedule should stop generating updates.

## See Also

### Getting built-in schedules

- [animation](animation.md): Conforms when `Self` is `AnimationTimelineSchedule`. A pausable schedule of dates updating at a frequency no more quickly than the provided interval.
- [everyMinute](everyminute.md): Conforms when `Self` is `EveryMinuteTimelineSchedule`. A schedule for updating a timeline view at the start of every minute.
- [explicit(\_:)](explicit%28__%29.md): A schedule for updating a timeline view at explicit points in time.
- [periodic(from:by:)](periodic%28from_by_%29.md): Conforms when `Self` is `PeriodicTimelineSchedule`. A schedule for updating a timeline view at regular intervals.
