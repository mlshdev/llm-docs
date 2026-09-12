> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/widgetrenderingmode](https://developer.apple.com/documentation/swiftui/environmentvalues/widgetrenderingmode)

# widgetRenderingMode

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 26.0+ · watchOS 9.0+

The widget’s rendering mode, based on where the system is displaying it.

## Declaration

```swift
var widgetRenderingMode: WidgetRenderingMode { get set }
```

<a id="discussion"></a>

## Discussion

You can read the rendering mode from the environment values using this key.

```swift
@Environment(\.widgetRenderingMode) var widgetRenderingMode
```

Then modify the widget’s appearance based on the mode.

```swift
var body: some View {
    ZStack {
       switch renderingMode {
        case .fullColor:
           Text("Full color")
        case .accented:
           ZStack {
               Circle(...)
               VStack {
                   Text("Accented")
                       .widgetAccentable()
                   Text("Normal")
               }
           }
        case .vibrant:
           Text("Full color")
        default:
           ...
        }
    }
}
```

## See Also

### Widgets

- [showsWidgetContainerBackground](showswidgetcontainerbackground.md): An environment variable that indicates whether the background of a widget appears.
- [showsWidgetLabel](showswidgetlabel.md): A Boolean value that indicates whether an accessory family widget can display an accessory label.
- [widgetFamily](widgetfamily.md): The template of the widget — small, medium, or large.
- [widgetContentMargins](widgetcontentmargins.md): A property that identifies the content margins of a widget.
