> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/accessorywidgetgroupstyle

# AccessoryWidgetGroupStyle

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** watchOS 11.0+

The style for an accessory widget group view.

## Declaration

```swift
struct AccessoryWidgetGroupStyle
```

<a id="Discussion"></a>

## Discussion

Use the [accessoryWidgetGroupStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/accessorywidgetgroupstyle%28_:%29) modifier to set the desired style on an [AccessoryWidgetGroup](accessorywidgetgroup.md).

## Topics

### Getting styles

- [automatic](accessorywidgetgroupstyle/automatic.md): The default style that is set to circular.
- [circular](accessorywidgetgroupstyle/circular.md): Masks each content view with a circle.
- [roundedSquare](accessorywidgetgroupstyle/roundedsquare.md): Masks each content view with a rounded square.

## See Also

### Accessory and watchOS widgets

- [Creating accessory widgets and watch complications](creating-accessory-widgets-and-watch-complications.md): Support accessory widgets that appear on the Lock Screen and as complications on Apple Watch.
- [AccessoryWidgetGroup](accessorywidgetgroup.md): A view type that has a label at the top and three content views masked with a circle or rounded square.
- [Migrating ClockKit complications to WidgetKit](converting-a-clockkit-app.md): Leverage WidgetKit’s API to create watchOS complications using SwiftUI.
- [widgetCurvesContent(\_:)](https://developer.apple.com/documentation/swiftui/view/widgetcurvescontent%28_:%29): Displays the widget’s content along a curve if the context allows it.
- [widgetLabel(\_:)](https://developer.apple.com/documentation/swiftui/view/widgetlabel%28_:%29): Returns a localized text label that displays additional content outside the accessory family widget’s main SwiftUI view.
- [widgetLabel(label:)](https://developer.apple.com/documentation/swiftui/view/widgetlabel%28label:%29): Creates a label for displaying additional content outside an accessory family widget’s main SwiftUI view.
- [showsWidgetLabel](https://developer.apple.com/documentation/swiftui/environmentvalues/showswidgetlabel): A Boolean value that indicates whether an accessory family widget can display an accessory label.
- [accessoryWidgetGroupStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/accessorywidgetgroupstyle%28_:%29): The view modifier that can be applied to `AccessoryWidgetGroup` to specify the shape the three content views will be masked with. The value of `style` is set to `.automatic`, which is `.circular` by default.
