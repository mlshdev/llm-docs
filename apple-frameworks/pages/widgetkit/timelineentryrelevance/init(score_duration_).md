> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timelineentryrelevance/init(score:duration:)](https://developer.apple.com/documentation/widgetkit/timelineentryrelevance/init(score:duration:))

# init(score:duration:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Creates an object that represents the importance of a widget and the length of time for WidgetKit to consider it for rotation to the top of the stack.

## Declaration

```swift
init(score: Float, duration: TimeInterval = 0.0)
```

## Parameters

- `score`: A value on a scale of your choosing, indicating the importance of an entry compared to other entries in the same timeline.
- `duration`: The number of seconds following an entry’s date that WidgetKit may rotate the widget to the top of the stack.
