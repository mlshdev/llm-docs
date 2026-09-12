> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetpushhandler/pushtokendidchange(_:widgets:)](https://developer.apple.com/documentation/widgetkit/widgetpushhandler/pushtokendidchange(_:widgets:))

# pushTokenDidChange(\_:widgets:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Handle push tokens changing for widgets reloads and relevance refreshes.

## Declaration

```swift
func pushTokenDidChange(_ pushInfo: WidgetPushInfo, widgets: [WidgetInfo])
```

## Parameters

- `pushInfo`: Provides information containing your push token to use.
- `widgets`: Information about widgets that support push updates.

## Mentioned In

- [Updating widgets with WidgetKit push notifications](../updating-widgets-with-widgetkit-push-notifications.md)
