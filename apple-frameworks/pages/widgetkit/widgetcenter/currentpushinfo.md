> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetcenter/currentpushinfo](https://developer.apple.com/documentation/widgetkit/widgetcenter/currentpushinfo)

# currentPushInfo

**Framework:** WidgetKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Provides the current push information for widget reloads and relevance refreshes.

## Declaration

```swift
var currentPushInfo: WidgetPushInfo? { get async }
```

<a id="discussion"></a>

## Discussion

May be nil if the token has not completed generation, or if no widgets have been configured for push.
