> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolcolorrenderingmode](https://developer.apple.com/documentation/swiftui/symbolcolorrenderingmode)

# SymbolColorRenderingMode

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A method of filling a layer in a symbol image.

## Declaration

```swift
struct SymbolColorRenderingMode
```

## Topics

### Type Properties

- [flat](symbolcolorrenderingmode/flat.md): The symbol image layer should be filled with a solid color.
- [gradient](symbolcolorrenderingmode/gradient.md): The symbol image layer should be filled with an axial gradient.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting symbol rendering modes

- [symbolRenderingMode(\_:)](view/symbolrenderingmode%28__%29.md): Sets the rendering mode for symbol images within this view.
- [symbolRenderingMode](environmentvalues/symbolrenderingmode.md): The current symbol rendering mode, or `nil` denoting that the mode is picked automatically using the current image and foreground style as parameters.
- [SymbolRenderingMode](symbolrenderingmode.md): A symbol rendering mode.
- [SymbolVariableValueMode](symbolvariablevaluemode.md): A method of rendering the variable value of a symbol image.
