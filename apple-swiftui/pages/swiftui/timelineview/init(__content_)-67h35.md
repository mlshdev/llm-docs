> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineview/init(_:content:)-67h35](https://developer.apple.com/documentation/swiftui/timelineview/init(_:content:)-67h35)

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new timeline view that uses the given schedule.

> Use [init(\_:content:)](init%28__content_%29-1mlmj.md) instead. The replacement initializer’s `context` closure takes a [TimelineViewDefaultContext](../timelineviewdefaultcontext.md) as its input rather than a [TimelineView.Context](context.md) to prevent introducing an unnecessary generic parameter dependency on the context type.

## Declaration

```swift
nonisolated init(_ schedule: Schedule, @ContentBuilder content: @escaping (TimelineView<Schedule, Content>.Context) -> Content)
```

## Parameters

- `schedule`: A schedule that produces a sequence of dates that indicate the instances when the view should update. Use a type that conforms to [TimelineSchedule](../timelineschedule.md), like [everyMinute](../timelineschedule/everyminute.md), or a custom timeline schedule that you define.
- `content`: A closure that generates view content at the moments indicated by the schedule. The closure takes an input of type [TimelineView.Context](context.md) that includes the date from the schedule that prompted the update, as well as a [TimelineView.Context.Cadence](context/cadence-swift.enum.md) value that the view can use to customize its appearance.
