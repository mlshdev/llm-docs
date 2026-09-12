> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/foreground](https://developer.apple.com/documentation/swiftui/shapestyle/foreground)

# foreground

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The foreground style in the current context.

## Declaration

```swift
@export(implementation) static var foreground: ForegroundStyle { get }
```

<a id="discussion"></a>

## Discussion

Access this value to get the style SwiftUI uses for foreground elements, like text, symbols, and shapes, in the current context. Use the [foregroundStyle(\_:)](../view/foregroundstyle%28__%29.md) modifier to set a new foreground style for a given view and its child views.

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Semantic styles

- [background](background.md): Conforms when `Self` is `BackgroundStyle`. The background style in the current context.
- [selection](selection.md): Conforms when `Self` is `SelectionShapeStyle`. A style used to visually indicate selection following platform conventional colors and behaviors.
- [separator](separator.md): Conforms when `Self` is `SeparatorShapeStyle`. A style appropriate for foreground separator or border lines.
- [tint](tint.md): Conforms when `Self` is `TintShapeStyle`. A style that reflects the current tint color.
- [placeholder](placeholder.md): Conforms when `Self` is `PlaceholderTextShapeStyle`. A style appropriate for placeholder text.
- [link](link.md): Conforms when `Self` is `LinkShapeStyle`. A style appropriate for links.
- [fill](fill.md): Conforms when `Self` is `FillShapeStyle`. An overlay fill style for filling shapes.
- [windowBackground](windowbackground.md): Conforms when `Self` is `WindowBackgroundShapeStyle`. A style appropriate for elements that should match the background of their containing window.
