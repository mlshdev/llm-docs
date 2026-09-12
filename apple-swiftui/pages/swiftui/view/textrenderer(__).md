> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/textrenderer(_:)](https://developer.apple.com/documentation/swiftui/view/textrenderer(_:))

# textRenderer(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a new view such that any text views within it will use `renderer` to draw themselves.

## Declaration

```swift
@export(implementation) nonisolated func textRenderer<T>(_ renderer: T) -> some View where T : TextRenderer

```

## Parameters

- `renderer`: The renderer value.

<a id="return-value"></a>

## Return Value

A new view that will use `renderer` to draw its text views.

## See Also

### Rendering text

- [Creating visual effects with SwiftUI](../creating-visual-effects-with-swiftui.md): Add scroll effects, rich color treatments, custom transitions, and advanced effects using shaders and a text renderer.
- [TextAttribute](../textattribute.md): A value that you can attach to text views and that text renderers can query.
- [TextRenderer](../textrenderer.md): A value that can replace the default text view rendering behavior.
- [TextProxy](../textproxy.md): A proxy for a text view that custom text renderers use.
