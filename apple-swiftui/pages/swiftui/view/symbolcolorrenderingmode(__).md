> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/symbolcolorrenderingmode(_:)](https://developer.apple.com/documentation/swiftui/view/symbolcolorrenderingmode(_:))

# symbolColorRenderingMode(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sets the color rendering mode for symbol images.

## Declaration

```swift
@export(implementation) nonisolated func symbolColorRenderingMode(_ mode: SymbolColorRenderingMode?) -> some View

```

## Parameters

- `mode`: The color rendering mode, or nil to use the default mode.

<a id="return-value"></a>

## Return Value

A view that specifies the color rendering mode for symbol images.

## See Also

### Symbol appearance

- [symbolRenderingMode(\_:)](symbolrenderingmode%28__%29.md): Sets the rendering mode for symbol images within this view.
- [symbolVariableValueMode(\_:)](symbolvariablevaluemode%28__%29.md): Sets the variable value mode mode for symbol images within this view.
- [symbolVariant(\_:)](symbolvariant%28__%29.md): Makes symbols within the view show a particular variant.
