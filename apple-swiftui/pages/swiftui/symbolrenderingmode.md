> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolrenderingmode](https://developer.apple.com/documentation/swiftui/symbolrenderingmode)

# SymbolRenderingMode

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A symbol rendering mode.

## Declaration

```swift
struct SymbolRenderingMode
```

## Topics

### Getting symbol rendering modes

- [hierarchical](symbolrenderingmode/hierarchical.md): A mode that renders symbols as multiple layers, with different opacities applied to the foreground style.
- [monochrome](symbolrenderingmode/monochrome.md): A mode that renders symbols as a single layer filled with the foreground style.
- [multicolor](symbolrenderingmode/multicolor.md): A mode that renders symbols as multiple layers with their inherit styles.
- [palette](symbolrenderingmode/palette.md): A mode that renders symbols as multiple layers, with different styles applied to the layers.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting symbol rendering modes

- [symbolRenderingMode(\_:)](view/symbolrenderingmode%28__%29.md): Sets the rendering mode for symbol images within this view.
- [symbolRenderingMode](environmentvalues/symbolrenderingmode.md): The current symbol rendering mode, or `nil` denoting that the mode is picked automatically using the current image and foreground style as parameters.
- [SymbolColorRenderingMode](symbolcolorrenderingmode.md): A method of filling a layer in a symbol image.
- [SymbolVariableValueMode](symbolvariablevaluemode.md): A method of rendering the variable value of a symbol image.
