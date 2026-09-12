> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolvariablevaluemode](https://developer.apple.com/documentation/swiftui/symbolvariablevaluemode)

# SymbolVariableValueMode

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A method of rendering the variable value of a symbol image.

## Declaration

```swift
struct SymbolVariableValueMode
```

## Topics

### Type Properties

- [color](symbolvariablevaluemode/color.md): The “color” variable value mode. Sets the opacity of each variable layer to either on or off depending on how its threshold compared to the current value.
- [draw](symbolvariablevaluemode/draw.md): The “draw” variable value mode. Changes the drawn length of each variable layer to either based on how its range relates to the current value.

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
- [SymbolColorRenderingMode](symbolcolorrenderingmode.md): A method of filling a layer in a symbol image.
