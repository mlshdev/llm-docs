> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/symbolrenderingmode(_:)](https://developer.apple.com/documentation/swiftui/view/symbolrenderingmode(_:))

# symbolRenderingMode(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the rendering mode for symbol images within this view.

## Declaration

```swift
nonisolated func symbolRenderingMode(_ mode: SymbolRenderingMode?) -> some View

```

## Parameters

- `mode`: The symbol rendering mode to use.

<a id="return-value"></a>

## Return Value

A view that uses the rendering mode you supply.

## See Also

### Setting symbol rendering modes

- [symbolRenderingMode](../environmentvalues/symbolrenderingmode.md): The current symbol rendering mode, or `nil` denoting that the mode is picked automatically using the current image and foreground style as parameters.
- [SymbolRenderingMode](../symbolrenderingmode.md): A symbol rendering mode.
- [SymbolColorRenderingMode](../symbolcolorrenderingmode.md): A method of filling a layer in a symbol image.
- [SymbolVariableValueMode](../symbolvariablevaluemode.md): A method of rendering the variable value of a symbol image.
