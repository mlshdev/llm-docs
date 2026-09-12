> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textproxy](https://developer.apple.com/documentation/swiftui/textproxy)

# TextProxy

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A proxy for a text view that custom text renderers use.

## Declaration

```swift
struct TextProxy
```

## Topics

### Instance Methods

- [sizeThatFits(\_:)](textproxy/sizethatfits%28__%29.md): Returns the space needed by the text view, for a proposed size.

## See Also

### Rendering text

- [Creating visual effects with SwiftUI](creating-visual-effects-with-swiftui.md): Add scroll effects, rich color treatments, custom transitions, and advanced effects using shaders and a text renderer.
- [TextAttribute](textattribute.md): A value that you can attach to text views and that text renderers can query.
- [textRenderer(\_:)](view/textrenderer%28__%29.md): Returns a new view such that any text views within it will use `renderer` to draw themselves.
- [TextRenderer](textrenderer.md): A value that can replace the default text view rendering behavior.
