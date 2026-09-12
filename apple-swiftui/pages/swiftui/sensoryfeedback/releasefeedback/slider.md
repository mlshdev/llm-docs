> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sensoryfeedback/releasefeedback/slider](https://developer.apple.com/documentation/swiftui/sensoryfeedback/releasefeedback/slider)

# slider

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates that a slider’s thumb has been released (touch up).

## Declaration

```swift
static let slider: SensoryFeedback.ReleaseFeedback
```

<a id="discussion"></a>

## Discussion

Slider controls should also play [press(\_:)](../press%28__%29.md) with [slider](../pressfeedback/slider.md).

Only plays feedback on visionOS.
