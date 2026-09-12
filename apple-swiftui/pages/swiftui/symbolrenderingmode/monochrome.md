> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolrenderingmode/monochrome](https://developer.apple.com/documentation/swiftui/symbolrenderingmode/monochrome)

# monochrome

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that renders symbols as a single layer filled with the foreground style.

## Declaration

```swift
static let monochrome: SymbolRenderingMode
```

<a id="discussion"></a>

## Discussion

For example, you can render a filled exclamation mark triangle in purple:

```swift
Image(systemName: "exclamationmark.triangle.fill")
    .symbolRenderingMode(.monochrome)
    .foregroundStyle(Color.purple)
```

## See Also

### Getting symbol rendering modes

- [hierarchical](hierarchical.md): A mode that renders symbols as multiple layers, with different opacities applied to the foreground style.
- [multicolor](multicolor.md): A mode that renders symbols as multiple layers with their inherit styles.
- [palette](palette.md): A mode that renders symbols as multiple layers, with different styles applied to the layers.
