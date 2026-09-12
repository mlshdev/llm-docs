> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlpushhandler](https://developer.apple.com/documentation/widgetkit/controlpushhandler)

# ControlPushHandler

**Framework:** WidgetKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A type that can receive push information about user-configured controls.

## Declaration

```swift
protocol ControlPushHandler
```

<a id="overview"></a>

## Overview

Register a type conforming to this protocol to receive push information using the [pushHandler(\_:)](https://developer.apple.com/documentation/swiftui/controlwidgetconfiguration/pushhandler%28_:%29) modifier on your controls’ configurations.

## Topics

### Initializers

- [init()](controlpushhandler/init%28%29.md): Creates a push handler.

### Instance Methods

- [pushTokensDidChange(controls:)](controlpushhandler/pushtokensdidchange%28controls_%29.md): Handle push tokens changing for configured controls.

## See Also

### Updates

- [Updating controls locally and remotely](updating-controls-locally-and-remotely.md): Update and reload controls from your app or using push notifications.
- [ControlPushInfo](controlpushinfo.md): A structure that contains information about the push token of a user-configured control.
