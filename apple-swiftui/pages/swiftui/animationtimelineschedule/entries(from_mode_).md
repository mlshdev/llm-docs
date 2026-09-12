> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animationtimelineschedule/entries(from:mode:)](https://developer.apple.com/documentation/swiftui/animationtimelineschedule/entries(from:mode:))

# entries(from:mode:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns entries at the frequency of the animation schedule.

## Declaration

```swift
func entries(from start: Date, mode: TimelineScheduleMode) -> AnimationTimelineSchedule.Entries
```

<a id="discussion"></a>

## Discussion

When in `.lowFrequency` mode, return no entries, effectively pausing the animation.
