> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/widgetcontentmargins](https://developer.apple.com/documentation/swiftui/environmentvalues/widgetcontentmargins)

# widgetContentMargins

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 26.0+ · watchOS 10.0+

A property that identifies the content margins of a widget.

## Declaration

```swift
var widgetContentMargins: EdgeInsets { get }
```

<a id="return-value"></a>

## Return Value

Returns the content margins for the current widget presentation context.

<a id="discussion"></a>

## Discussion

The content margins of a widget depend on the context in which it appears. The system applies default content margins. However, if you disable automatic application of default content margins with [contentMarginsDisabled()](../widgetconfiguration/contentmarginsdisabled%28%29.md), the system uses the `widgetContentMargins` property in combination with [padding(\_:)](../view/padding%28__%29.md) to selectively apply default content margins.

## See Also

### Widgets

- [showsWidgetContainerBackground](showswidgetcontainerbackground.md): An environment variable that indicates whether the background of a widget appears.
- [showsWidgetLabel](showswidgetlabel.md): A Boolean value that indicates whether an accessory family widget can display an accessory label.
- [widgetFamily](widgetfamily.md): The template of the widget — small, medium, or large.
- [widgetRenderingMode](widgetrenderingmode.md): The widget’s rendering mode, based on where the system is displaying it.
