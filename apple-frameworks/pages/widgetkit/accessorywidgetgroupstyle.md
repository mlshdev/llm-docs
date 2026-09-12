> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/accessorywidgetgroupstyle](https://developer.apple.com/documentation/widgetkit/accessorywidgetgroupstyle)

# AccessoryWidgetGroupStyle

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** watchOS 11.0+

The style for an [AccessoryWidgetGroup](accessorywidgetgroup.md) view.

## Declaration

```swift
struct AccessoryWidgetGroupStyle
```

<a id="overview"></a>

## Overview

Use the `View/accessoryWidgetGroupStyle(_:)` modifier to set the desired style.

## Topics

### Type Properties

- [automatic](accessorywidgetgroupstyle/automatic.md): The default style that is set to circular.
- [circular](accessorywidgetgroupstyle/circular.md): Masks each content view with a circle.
- [roundedSquare](accessorywidgetgroupstyle/roundedsquare.md): Masks each content view with a rounded square.

## See Also

### Accessory and watchOS widgets

- [Creating accessory widgets and watch complications](creating-accessory-widgets-and-watch-complications.md): Support accessory widgets that appear on the Lock Screen and as complications on Apple Watch.
- [AccessoryWidgetGroup](accessorywidgetgroup.md): A view type that has a label at the top and three content views masked with a circle or rounded square.
- [Migrating ClockKit complications to WidgetKit](converting-a-clockkit-app.md): Leverage WidgetKit’s API to create watchOS complications using SwiftUI.
