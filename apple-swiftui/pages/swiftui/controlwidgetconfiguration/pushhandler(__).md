> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlwidgetconfiguration/pushhandler(_:)](https://developer.apple.com/documentation/swiftui/controlwidgetconfiguration/pushhandler(_:))

# pushHandler(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Register a type that can handle push tokens changing for controls of this type.

## Declaration

```swift
@MainActor @preconcurrency func pushHandler(_ pushHandlerType: any ControlPushHandler.Type) -> some ControlWidgetConfiguration

```

## Parameters

- `pushHandlerType`: The type of the object that can handle push tokens you use to update the control with push notifications.

<a id="Overview"></a>

## Overview

Use this to opt your control into using push notifications.

If you have multiple control types, you can choose to use the same push handler type for those control types.

When the push configuration of your controls changes, each handler type will be instantiated and [pushTokensDidChange(controls:)](https://developer.apple.com/documentation/widgetkit/controlpushhandler/pushtokensdidchange%28controls:%29) will be called.
