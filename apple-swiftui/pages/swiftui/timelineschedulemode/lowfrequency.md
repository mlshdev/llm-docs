> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineschedulemode/lowfrequency](https://developer.apple.com/documentation/swiftui/timelineschedulemode/lowfrequency)

# TimelineScheduleMode.lowFrequency

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that produces schedule updates at a reduced rate.

## Declaration

```swift
case lowFrequency
```

<a id="discussion"></a>

## Discussion

In this mode, the schedule should generate only “major” updates, if possible. For example, a timeline providing updates to a timer might restrict updates to once a minute while in this mode.

## See Also

### Getting timeline schedule modes

- [TimelineScheduleMode.normal](normal.md): A mode that produces schedule updates at the schedule’s natural cadence.
