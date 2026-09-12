> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sensoryfeedback/pressfeedback/toggle](https://developer.apple.com/documentation/swiftui/sensoryfeedback/pressfeedback/toggle)

# toggle

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates that a toggle has been pressed (touch down).

## Declaration

```swift
static let toggle: SensoryFeedback.PressFeedback
```

<a id="discussion"></a>

## Discussion

Toggle controls should also play [selection(\_:)](../selection%28__%29.md) with [on](../selectionfeedback/on.md) and [off](../selectionfeedback/off.md).

Only plays feedback on visionOS.
