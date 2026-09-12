> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineview/context/invalidatetimelinecontent()](https://developer.apple.com/documentation/swiftui/timelineview/context/invalidatetimelinecontent())

# invalidateTimelineContent()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · watchOS 8.0+

Resets any pre-rendered views the system has from the timeline.

## Declaration

```swift
func invalidateTimelineContent()
```

<a id="discussion"></a>

## Discussion

When entering Always On Display, the system might pre-render frames. If the content of these frames must change in a way that isn’t reflected by the schedule or the timeline view’s current bindings — for example, because the user changes the title of a future calendar event — call this method to request that the frames be regenerated.
