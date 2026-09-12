> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolrenderingmode/palette](https://developer.apple.com/documentation/swiftui/symbolrenderingmode/palette)

# palette

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that renders symbols as multiple layers, with different styles applied to the layers.

## Declaration

```swift
static let palette: SymbolRenderingMode
```

<a id="discussion"></a>

## Discussion

In this mode SwiftUI maps each successively defined layer in the image to the next of the primary, secondary, and tertiary variants of the foreground style. You can specify these styles explicitly using the [foregroundStyle(\_:\_:)](../view/foregroundstyle%28____%29.md) and [foregroundStyle(\_:\_:\_:)](../view/foregroundstyle%28______%29.md) modifiers. If you only specify a primary foreground style, SwiftUI automatically derives the others from that style. For example, you can render a filled exclamation mark triangle with yellow as the tint color for the exclamation mark, and fill the triangle with cyan:

```swift
Image(systemName: "exclamationmark.triangle.fill")
    .symbolRenderingMode(.palette)
    .foregroundStyle(Color.yellow, Color.cyan)
```

You can also omit the symbol rendering mode, as specifying multiple foreground styles implies switching to palette rendering mode:

```swift
Image(systemName: "exclamationmark.triangle.fill")
    .foregroundStyle(Color.yellow, Color.cyan)
```

## See Also

### Getting symbol rendering modes

- [hierarchical](hierarchical.md): A mode that renders symbols as multiple layers, with different opacities applied to the foreground style.
- [monochrome](monochrome.md): A mode that renders symbols as a single layer filled with the foreground style.
- [multicolor](multicolor.md): A mode that renders symbols as multiple layers with their inherit styles.
