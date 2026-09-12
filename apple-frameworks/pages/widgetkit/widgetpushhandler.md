> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetpushhandler](https://developer.apple.com/documentation/widgetkit/widgetpushhandler)

# WidgetPushHandler

**Framework:** WidgetKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type that can receive push information about widget refreshes and relevance refreshes.

## Declaration

```swift
protocol WidgetPushHandler
```

## Mentioned In

- [Updating widgets with WidgetKit push notifications](updating-widgets-with-widgetkit-push-notifications.md)

<a id="overview"></a>

## Overview

Register a type conforming to this protocol to receive push information using the [pushHandler(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/pushhandler%28_:%29) modifier on your widgets’ configurations.

## Topics

### Initializers

- [init()](widgetpushhandler/init%28%29.md): Creates a push handler.

### Instance Methods

- [pushTokenDidChange(\_:widgets:)](widgetpushhandler/pushtokendidchange%28__widgets_%29.md): Handle push tokens changing for widgets reloads and relevance refreshes.

## See Also

### Push notification updates

- [Updating widgets with WidgetKit push notifications](updating-widgets-with-widgetkit-push-notifications.md): Use WidgetKit to receive push tokens and reload your widgets with remote push notifications.
- [WidgetPushInfo](widgetpushinfo.md): A structure that contains information about the push token for updating widgets and widget relevances.
