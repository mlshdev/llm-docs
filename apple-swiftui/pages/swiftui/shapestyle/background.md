> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/background](https://developer.apple.com/documentation/swiftui/shapestyle/background)

# background

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The background style in the current context.

## Declaration

```swift
@export(implementation) static var background: BackgroundStyle { get }
```

<a id="discussion"></a>

## Discussion

Access this value to get the style SwiftUI uses for the background in the current context. The specific color that SwiftUI renders depends on factors like the platform and whether the user has turned on Dark Mode.

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Semantic styles

- [foreground](foreground.md): Conforms when `Self` is `ForegroundStyle`. The foreground style in the current context.
- [selection](selection.md): Conforms when `Self` is `SelectionShapeStyle`. A style used to visually indicate selection following platform conventional colors and behaviors.
- [separator](separator.md): Conforms when `Self` is `SeparatorShapeStyle`. A style appropriate for foreground separator or border lines.
- [tint](tint.md): Conforms when `Self` is `TintShapeStyle`. A style that reflects the current tint color.
- [placeholder](placeholder.md): Conforms when `Self` is `PlaceholderTextShapeStyle`. A style appropriate for placeholder text.
- [link](link.md): Conforms when `Self` is `LinkShapeStyle`. A style appropriate for links.
- [fill](fill.md): Conforms when `Self` is `FillShapeStyle`. An overlay fill style for filling shapes.
- [windowBackground](windowbackground.md): Conforms when `Self` is `WindowBackgroundShapeStyle`. A style appropriate for elements that should match the background of their containing window.
