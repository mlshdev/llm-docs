> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetrenderingmode/vibrant](https://developer.apple.com/documentation/widgetkit/widgetrenderingmode/vibrant)

# vibrant

**Framework:** WidgetKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 26.0+ · watchOS 9.0+

The system desaturates the widget, making a monochrome version that it uses to create an adaptive, vibrant effect.

## Declaration

```swift
static let vibrant: WidgetRenderingMode
```

## Mentioned In

- [Developing a WidgetKit strategy](../developing-a-widgetkit-strategy.md)
- [Preparing widgets for additional platforms, contexts, and appearances](../preparing-widgets-for-additional-contexts-and-appearances.md)
- [Displaying the right widget background](../displaying-the-right-widget-background.md)

<a id="discussion"></a>

## Discussion

The system displays vibrant widgets on the Lock Screen on iPhone.

## See Also

### Rendering modes

- [fullColor](fullcolor.md): The system renders the widget in full color.
- [accented](accented.md): The system divides the widget’s view hierarchy into an accent group and a default group, applying a different color to each group.
