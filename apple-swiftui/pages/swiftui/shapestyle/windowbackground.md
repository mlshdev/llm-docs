> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/windowbackground](https://developer.apple.com/documentation/swiftui/shapestyle/windowbackground)

# windowBackground

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

A style appropriate for elements that should match the background of their containing window.

## Declaration

```swift
@export(implementation) static var windowBackground: WindowBackgroundShapeStyle { get }
```

<a id="discussion"></a>

## Discussion

On macOS, this has a unique appearance compared to the default `ShapeStyle.background`. It matches the default background of a window: a wallpaper-tinted light gray in the light appearance and a wallpaper-tinted dark gray in the dark appearance.

On visionOS, the default glass window background can only be created using `glassBackgroundEffect`.

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Semantic styles

- [foreground](foreground.md): Conforms when `Self` is `ForegroundStyle`. The foreground style in the current context.
- [background](background.md): Conforms when `Self` is `BackgroundStyle`. The background style in the current context.
- [selection](selection.md): Conforms when `Self` is `SelectionShapeStyle`. A style used to visually indicate selection following platform conventional colors and behaviors.
- [separator](separator.md): Conforms when `Self` is `SeparatorShapeStyle`. A style appropriate for foreground separator or border lines.
- [tint](tint.md): Conforms when `Self` is `TintShapeStyle`. A style that reflects the current tint color.
- [placeholder](placeholder.md): Conforms when `Self` is `PlaceholderTextShapeStyle`. A style appropriate for placeholder text.
- [link](link.md): Conforms when `Self` is `LinkShapeStyle`. A style appropriate for links.
- [fill](fill.md): Conforms when `Self` is `FillShapeStyle`. An overlay fill style for filling shapes.
