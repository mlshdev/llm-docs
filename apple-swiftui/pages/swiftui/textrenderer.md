> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textrenderer](https://developer.apple.com/documentation/swiftui/textrenderer)

# TextRenderer

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A value that can replace the default text view rendering behavior.

## Declaration

```swift
protocol TextRenderer : Animatable
```

## Topics

### Instance Properties

- [displayPadding](textrenderer/displaypadding.md): Returns the size of the extra padding added to any drawing layer used to rasterize the text. For example when drawing the text with a shadow this may be used to extend the drawing bounds to avoid clipping the shadow.

### Instance Methods

- [draw(layout:in:)](textrenderer/draw%28layout_in_%29.md): Draws `layout` into `ctx`.
- [sizeThatFits(proposal:text:)](textrenderer/sizethatfits%28proposal_text_%29.md): Returns the size of the text in `proposal`. The provided `text` proxy value may be used to query the sizing behavior of the underlying text layout.

## Relationships

### Inherits From

- [Animatable](animatable.md)

## See Also

### Rendering text

- [Creating visual effects with SwiftUI](creating-visual-effects-with-swiftui.md): Add scroll effects, rich color treatments, custom transitions, and advanced effects using shaders and a text renderer.
- [TextAttribute](textattribute.md): A value that you can attach to text views and that text renderers can query.
- [textRenderer(\_:)](view/textrenderer%28__%29.md): Returns a new view such that any text views within it will use `renderer` to draw themselves.
- [TextProxy](textproxy.md): A proxy for a text view that custom text renderers use.
