> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetpushinfo](https://developer.apple.com/documentation/widgetkit/widgetpushinfo)

# WidgetPushInfo

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A structure that contains information about the push token for updating widgets and widget relevances.

## Declaration

```swift
struct WidgetPushInfo
```

## Mentioned In

- [Updating widgets with WidgetKit push notifications](updating-widgets-with-widgetkit-push-notifications.md)

## Topics

### Instance Properties

- [token](widgetpushinfo/token.md): A unique push token that may be used to deliver updates for widgets and widget relevances.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Push notification updates

- [Updating widgets with WidgetKit push notifications](updating-widgets-with-widgetkit-push-notifications.md): Use WidgetKit to receive push tokens and reload your widgets with remote push notifications.
- [WidgetPushHandler](widgetpushhandler.md): A type that can receive push information about widget refreshes and relevance refreshes.
