> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetrenderingmode/fullcolor](https://developer.apple.com/documentation/widgetkit/widgetrenderingmode/fullcolor)

# fullColor

**Framework:** WidgetKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 26.0+ · watchOS 9.0+

The system renders the widget in full color.

## Declaration

```swift
static let fullColor: WidgetRenderingMode
```

## Mentioned In

- [Developing a WidgetKit strategy](../developing-a-widgetkit-strategy.md)
- [Preparing widgets for additional platforms, contexts, and appearances](../preparing-widgets-for-additional-contexts-and-appearances.md)
- [Updating your widgets for visionOS](../updating-your-widgets-for-visionos.md)
- [Optimizing your widget for accented rendering mode and Liquid Glass](../optimizing-your-widget-for-accented-rendering-mode-and-liquid-glass.md)

<a id="discussion"></a>

## Discussion

In this mode, the system doesn’t alter or filter the widget’s colors.

The system displays full-color widget-based complications on some watch faces, such as the Infograph face, on the Home Screen or Today View in iOS or iPadOS, and in Notification Center on macOS.

> **Note**

> The Infograph face only uses full-color rendering when the user sets the face to multicolor. If the user selects an accent color, the system uses [accented](accented.md) instead.

## See Also

### Rendering modes

- [accented](accented.md): The system divides the widget’s view hierarchy into an accent group and a default group, applying a different color to each group.
- [vibrant](vibrant.md): The system desaturates the widget, making a monochrome version that it uses to create an adaptive, vibrant effect.
