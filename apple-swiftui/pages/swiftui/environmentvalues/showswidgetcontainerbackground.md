> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/showswidgetcontainerbackground](https://developer.apple.com/documentation/swiftui/environmentvalues/showswidgetcontainerbackground)

# showsWidgetContainerBackground

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 26.0+ · watchOS 8.0+

An environment variable that indicates whether the background of a widget appears.

## Declaration

```swift
var showsWidgetContainerBackground: Bool { get }
```

<a id="return-value"></a>

## Return Value

`true` if, by default, the background appears in this context; `false` otherwise.

<a id="discussion"></a>

## Discussion

In iOS 16 and earlier, this environment variable is always `true` for system widgets and `false` for accessory widgets. In macOS 13 and earlier, and in watchOS 9 and earlier, it always evaluates to `true`.

If you pass `false` to [containerBackgroundRemovable(\_:)](../widgetconfiguration/containerbackgroundremovable%28__%29.md) to always show the widget background, the system shows the widget background even if `showsWidgetContainerBackground` evaluates to `true`.

## See Also

### Widgets

- [showsWidgetLabel](showswidgetlabel.md): A Boolean value that indicates whether an accessory family widget can display an accessory label.
- [widgetFamily](widgetfamily.md): The template of the widget — small, medium, or large.
- [widgetRenderingMode](widgetrenderingmode.md): The widget’s rendering mode, based on where the system is displaying it.
- [widgetContentMargins](widgetcontentmargins.md): A property that identifies the content margins of a widget.
