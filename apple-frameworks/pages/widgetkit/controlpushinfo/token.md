> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlpushinfo/token](https://developer.apple.com/documentation/widgetkit/controlpushinfo/token)

# token

**Framework:** WidgetKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A unique push token that may be used to deliver updates for this control.

## Declaration

```swift
let token: Data
```

<a id="discussion"></a>

## Discussion

This token is valid until told otherwise through the [pushTokensDidChange(controls:)](../controlpushhandler/pushtokensdidchange%28controls_%29.md) method on your push handler.
