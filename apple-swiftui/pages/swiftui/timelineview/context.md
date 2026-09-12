> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineview/context](https://developer.apple.com/documentation/swiftui/timelineview/context)

# TimelineView.Context

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Information passed to a timeline view’s content callback.

## Declaration

```swift
struct Context
```

<a id="overview"></a>

## Overview

The context includes both the [date](context/date.md) from the schedule that triggered the callback, and a [cadence](context/cadence-swift.property.md) that you can use to customize the appearance of your view. For example, you might choose to display the second hand of an analog clock only when the cadence is [TimelineView.Context.Cadence.seconds](context/cadence-swift.enum/seconds.md) or faster.

## Topics

### Getting the date

- [date](context/date.md): The date from the schedule that triggered the current view update.

### Getting the cadence

- [cadence](context/cadence-swift.property.md): The rate at which the timeline updates the view.
- [TimelineView.Context.Cadence](context/cadence-swift.enum.md): A rate at which timeline views can receive updates.

### Invalidating the context

- [invalidateTimelineContent()](context/invalidatetimelinecontent%28%29.md): Conforms when `Schedule` conforms to `TimelineSchedule`. Resets any pre-rendered views the system has from the timeline.

## See Also

### Creating a timeline

- [init(\_:content:)](init%28__content_%29-1mlmj.md): Conforms when `Schedule` conforms to `TimelineSchedule` and `Content` conforms to `View`. Creates a new timeline view that uses the given schedule.
