> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/tint](https://developer.apple.com/documentation/swiftui/shapestyle/tint)

# tint

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style that reflects the current tint color.

## Declaration

```swift
@export(implementation) static var tint: TintShapeStyle { get }
```

<a id="discussion"></a>

## Discussion

You can set the tint color with the `tint(_:)` modifier. If no explicit tint is set, the tint is derived from the app’s accent color.

## See Also

### Semantic styles

- [foreground](foreground.md): Conforms when `Self` is `ForegroundStyle`. The foreground style in the current context.
- [background](background.md): Conforms when `Self` is `BackgroundStyle`. The background style in the current context.
- [selection](selection.md): Conforms when `Self` is `SelectionShapeStyle`. A style used to visually indicate selection following platform conventional colors and behaviors.
- [separator](separator.md): Conforms when `Self` is `SeparatorShapeStyle`. A style appropriate for foreground separator or border lines.
- [placeholder](placeholder.md): Conforms when `Self` is `PlaceholderTextShapeStyle`. A style appropriate for placeholder text.
- [link](link.md): Conforms when `Self` is `LinkShapeStyle`. A style appropriate for links.
- [fill](fill.md): Conforms when `Self` is `FillShapeStyle`. An overlay fill style for filling shapes.
- [windowBackground](windowbackground.md): Conforms when `Self` is `WindowBackgroundShapeStyle`. A style appropriate for elements that should match the background of their containing window.
