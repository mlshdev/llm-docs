> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetaccentedrenderingmode](https://developer.apple.com/documentation/widgetkit/widgetaccentedrenderingmode)

# WidgetAccentedRenderingMode

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 26.0+ · watchOS 11.0+

Constants that indicate the rendering mode for an `Image` in when displayed in a widget in [accented](widgetrenderingmode/accented.md) mode.

## Declaration

```swift
struct WidgetAccentedRenderingMode
```

## Mentioned In

- [Optimizing your widget for accented rendering mode and Liquid Glass](optimizing-your-widget-for-accented-rendering-mode-and-liquid-glass.md)

## Topics

### Type Properties

- [accented](widgetaccentedrenderingmode/accented.md): Specifies that the `Image` should be included as part of the accented widget group.
- [accentedDesaturated](widgetaccentedrenderingmode/accenteddesaturated.md): Maps the luminance of the `Image` in to the alpha channel, replacing color channels with the color applied to the accent group.
- [desaturated](widgetaccentedrenderingmode/desaturated.md): Maps the luminance of the `Image` in to the alpha channel, replacing color channels with the color applied to the default group.
- [fullColor](widgetaccentedrenderingmode/fullcolor.md): Specifies that the `Image` should be rendered at full color with no other color modifications. Only applies to iOS.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Layout and presentation

- [Supporting additional widget sizes](supporting-additional-widget-sizes.md): Offer widgets in additional contexts by adding support for various widget sizes.
- [Displaying the right widget background](displaying-the-right-widget-background.md): Group your widget’s background views and mark them as removable to ensure your widget appears correctly for each context and platform.
- [Optimizing your widget for accented rendering mode and Liquid Glass](optimizing-your-widget-for-accented-rendering-mode-and-liquid-glass.md): Make your widget feel at home on Apple platforms and Liquid Glass by using accented rendering mode.
- [Adding StandBy and CarPlay support to your widget](adding-standby-and-carplay-support-to-your-widget.md): Ensure that your small system family widget works well in StandBy and CarPlay.
- [WidgetRenderingMode](widgetrenderingmode.md): Constants that indicate the rendering mode for a widget.
- [AccessoryWidgetBackground](accessorywidgetbackground.md): An adaptive background view that provides a standard appearance based on the the widget’s environment.
- [WidgetLocation](widgetlocation.md): Values that indicate different widget locations.
