> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textattribute](https://developer.apple.com/documentation/swiftui/textattribute)

# TextAttribute

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A value that you can attach to text views and that text renderers can query.

## Declaration

```swift
protocol TextAttribute : Hashable
```

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Rendering text

- [Creating visual effects with SwiftUI](creating-visual-effects-with-swiftui.md): Add scroll effects, rich color treatments, custom transitions, and advanced effects using shaders and a text renderer.
- [textRenderer(\_:)](view/textrenderer%28__%29.md): Returns a new view such that any text views within it will use `renderer` to draw themselves.
- [TextRenderer](textrenderer.md): A value that can replace the default text view rendering behavior.
- [TextProxy](textproxy.md): A proxy for a text view that custom text renderers use.
