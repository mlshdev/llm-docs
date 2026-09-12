> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetlocation](https://developer.apple.com/documentation/widgetkit/widgetlocation)

# WidgetLocation

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · watchOS 26.0+

Values that indicate different widget locations.

## Declaration

```swift
struct WidgetLocation
```

## Mentioned In

- [Preparing widgets for additional platforms, contexts, and appearances](preparing-widgets-for-additional-contexts-and-appearances.md)

## Topics

### Specifying a location style

- [carPlay](widgetlocation/carplay.md): The CarPlay location for a widget.
- [iPhoneWidgetsOnMac](widgetlocation/iphonewidgetsonmac.md): The widget originates from another device and appears on the Mac.
- [homeScreen](widgetlocation/homescreen.md): The widget appears on the Home Screen or in Today View.
- [lockScreen](widgetlocation/lockscreen.md): The widget appears on the Lock Screen.
- [smartStack](widgetlocation/smartstack.md)
- [standBy](widgetlocation/standby.md): The widget appears in StandBy.
- [watchFace](widgetlocation/watchface.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Layout and presentation

- [Supporting additional widget sizes](supporting-additional-widget-sizes.md): Offer widgets in additional contexts by adding support for various widget sizes.
- [Displaying the right widget background](displaying-the-right-widget-background.md): Group your widget’s background views and mark them as removable to ensure your widget appears correctly for each context and platform.
- [Optimizing your widget for accented rendering mode and Liquid Glass](optimizing-your-widget-for-accented-rendering-mode-and-liquid-glass.md): Make your widget feel at home on Apple platforms and Liquid Glass by using accented rendering mode.
- [Adding StandBy and CarPlay support to your widget](adding-standby-and-carplay-support-to-your-widget.md): Ensure that your small system family widget works well in StandBy and CarPlay.
- [WidgetRenderingMode](widgetrenderingmode.md): Constants that indicate the rendering mode for a widget.
- [WidgetAccentedRenderingMode](widgetaccentedrenderingmode.md): Constants that indicate the rendering mode for an `Image` in when displayed in a widget in [accented](widgetrenderingmode/accented.md) mode.
- [AccessoryWidgetBackground](accessorywidgetbackground.md): An adaptive background view that provides a standard appearance based on the the widget’s environment.
