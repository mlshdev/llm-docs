> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolrenderingmode/hierarchical](https://developer.apple.com/documentation/swiftui/symbolrenderingmode/hierarchical)

# hierarchical

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that renders symbols as multiple layers, with different opacities applied to the foreground style.

## Declaration

```swift
static let hierarchical: SymbolRenderingMode
```

<a id="discussion"></a>

## Discussion

SwiftUI fills the first layer with the foreground style, and the others the secondary, and tertiary variants of the foreground style. You can specify these styles explicitly using the [foregroundStyle(\_:\_:)](../view/foregroundstyle%28____%29.md) and [foregroundStyle(\_:\_:\_:)](../view/foregroundstyle%28______%29.md) modifiers. If you only specify a primary foreground style, SwiftUI automatically derives the others from that style. For example, you can render a filled exclamation mark triangle with purple as the tint color for the exclamation mark, and lower opacity purple for the triangle:

```swift
Image(systemName: "exclamationmark.triangle.fill")
    .symbolRenderingMode(.hierarchical)
    .foregroundStyle(Color.purple)
```

## See Also

### Getting symbol rendering modes

- [monochrome](monochrome.md): A mode that renders symbols as a single layer filled with the foreground style.
- [multicolor](multicolor.md): A mode that renders symbols as multiple layers with their inherit styles.
- [palette](palette.md): A mode that renders symbols as multiple layers, with different styles applied to the layers.
