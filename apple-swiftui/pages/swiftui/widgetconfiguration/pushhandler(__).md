> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetconfiguration/pushhandler(_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/pushhandler(_:))

# pushHandler(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Register a type that can handle push tokens changing for widgets.

## Declaration

```swift
@MainActor @preconcurrency func pushHandler(_ pushHandlerType: any WidgetPushHandler.Type) -> some WidgetConfiguration

```

## Parameters

- `pushHandlerType`: The type of the object that can handle push tokens you use to update the widget with push notifications.

<a id="Overview"></a>

## Overview

Use this to opt this widget into supporting updates via push notifications.

If you have multiple widget configurations, you can choose to use the same push handler type for those widget configurations.

When the push configuration of your widgets changes, each unique handler type will be instantiated and [pushTokenDidChange(\_:widgets:)](https://developer.apple.com/documentation/widgetkit/widgetpushhandler/pushtokendidchange%28_:widgets:%29) will be called.
