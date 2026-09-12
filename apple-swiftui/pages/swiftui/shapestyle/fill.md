> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/fill](https://developer.apple.com/documentation/swiftui/shapestyle/fill)

# fill

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An overlay fill style for filling shapes.

## Declaration

```swift
@export(implementation) static var fill: FillShapeStyle { get }
```

<a id="discussion"></a>

## Discussion

This shape style is appropriate for items situated on top of an existing background color. It incorporates transparency to allow the background color to show through.

Use the primary version of this style to fill thin or small shapes, such as the track of a slider on iOS. Use the secondary version of this style to fill medium-size shapes, such as the background of a switch on iOS. Use the tertiary version of this style to fill large shapes, such as input fields, search bars, or buttons on iOS. Use the quaternary version of this style to fill large areas that contain complex content, such as an expanded table cell on iOS.

## See Also

### Semantic styles

- [foreground](foreground.md): Conforms when `Self` is `ForegroundStyle`. The foreground style in the current context.
- [background](background.md): Conforms when `Self` is `BackgroundStyle`. The background style in the current context.
- [selection](selection.md): Conforms when `Self` is `SelectionShapeStyle`. A style used to visually indicate selection following platform conventional colors and behaviors.
- [separator](separator.md): Conforms when `Self` is `SeparatorShapeStyle`. A style appropriate for foreground separator or border lines.
- [tint](tint.md): Conforms when `Self` is `TintShapeStyle`. A style that reflects the current tint color.
- [placeholder](placeholder.md): Conforms when `Self` is `PlaceholderTextShapeStyle`. A style appropriate for placeholder text.
- [link](link.md): Conforms when `Self` is `LinkShapeStyle`. A style appropriate for links.
- [windowBackground](windowbackground.md): Conforms when `Self` is `WindowBackgroundShapeStyle`. A style appropriate for elements that should match the background of their containing window.
