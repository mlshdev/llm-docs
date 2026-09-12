> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/showswidgetlabel](https://developer.apple.com/documentation/swiftui/environmentvalues/showswidgetlabel)

# showsWidgetLabel

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 26.0+ · watchOS 9.0+

A Boolean value that indicates whether an accessory family widget can display an accessory label.

## Declaration

```swift
var showsWidgetLabel: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Use this value to determine if you can provide additional content, or possibly move some of the widget’s content out of the main view and into the widget label.

```swift

@Environment(\.widgetFamily) var widgetFamily
@Environment(\.showsWidgetLabel) var showsWidgetLabel

var body: some View {
   switch widgetFamily {
   case .accessoryCircular:
       if showsWidgetLabel {
           Image("cat_full")
               .widgetLabel(label: Text("Cats"))
       }
       else {
           VStack {
               Image("cat_small")
               Text("Cats")
           }
       }
   }
}

```

This environment value is most useful when defining the appearance for the [WidgetFamily.accessoryCircular](https://developer.apple.com/documentation/widgetkit/widgetfamily/accessorycircular) widget family, because it’s value can change depending on where the widget appears. For example, if the widget is the top circular complication on the Infograph watch face, the value is `true`. Otherwise it is `false`. The environment variable is always `false` in iOS.

Other families always have the same value, regardless of where the widget appears. For the [WidgetFamily.accessoryCorner](https://developer.apple.com/documentation/widgetkit/widgetfamily/accessorycorner) widget family, the value is always `true`. For other families, it is `false`.

## See Also

### Widgets

- [showsWidgetContainerBackground](showswidgetcontainerbackground.md): An environment variable that indicates whether the background of a widget appears.
- [widgetFamily](widgetfamily.md): The template of the widget — small, medium, or large.
- [widgetRenderingMode](widgetrenderingmode.md): The widget’s rendering mode, based on where the system is displaying it.
- [widgetContentMargins](widgetcontentmargins.md): A property that identifies the content margins of a widget.
