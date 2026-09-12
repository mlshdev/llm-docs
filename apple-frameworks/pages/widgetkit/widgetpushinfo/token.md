> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetpushinfo/token](https://developer.apple.com/documentation/widgetkit/widgetpushinfo/token)

# token

**Framework:** WidgetKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A unique push token that may be used to deliver updates for widgets and widget relevances.

## Declaration

```swift
let token: Data
```

<a id="discussion"></a>

## Discussion

This token is valid until told otherwise through the [pushTokenDidChange(\_:widgets:)](../widgetpushhandler/pushtokendidchange%28__widgets_%29.md) method on your push handler.
