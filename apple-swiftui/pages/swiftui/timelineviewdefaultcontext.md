> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineviewdefaultcontext](https://developer.apple.com/documentation/swiftui/timelineviewdefaultcontext)

# TimelineViewDefaultContext

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Information passed to a timeline view’s content callback.

## Declaration

```swift
typealias TimelineViewDefaultContext = TimelineView<EveryMinuteTimelineSchedule, Never>.Context
```

<a id="discussion"></a>

## Discussion

The context includes both the date from the schedule that triggered the callback, and a cadence that you can use to customize the appearance of your view. For example, you might choose to display the second hand of an analog clock only when the cadence is [TimelineView.Context.Cadence.seconds](timelineview/context/cadence-swift.enum/seconds.md) or faster.

> **Note**

> This type alias uses a specific concrete instance of [TimelineView.Context](timelineview/context.md) that all timeline views can use. It does this to prevent introducing an unnecessary generic parameter dependency on the context type.

## See Also

### Updating a view on a schedule

- [Updating watchOS apps with timelines](https://developer.apple.com/documentation/watchos-apps/updating-watchos-apps-with-timelines): Seamlessly schedule updates to your user interface, even while it’s inactive.
- [TimelineView](timelineview.md): A view that updates according to a schedule that you provide.
- [TimelineSchedule](timelineschedule.md): A type that provides a sequence of dates for use as a schedule.
