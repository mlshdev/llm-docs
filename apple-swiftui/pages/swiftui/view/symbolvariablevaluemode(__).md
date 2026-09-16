> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/symbolvariablevaluemode(_:)

# symbolVariableValueMode(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sets the variable value mode mode for symbol images within this view.

## Declaration

```swift
@export(implementation) nonisolated func symbolVariableValueMode(_ mode: SymbolVariableValueMode?) -> some View

```

## Parameters

- `mode`: The symbol variable value mode to use.

<a id="return-value"></a>

## Return Value

A view that uses the symbol variable value mode you supply.

## See Also

### Symbol appearance

- [symbolRenderingMode(\_:)](symbolrenderingmode%28__%29.md): Sets the rendering mode for symbol images within this view.
- [symbolColorRenderingMode(\_:)](symbolcolorrenderingmode%28__%29.md): Sets the color rendering mode for symbol images.
- [symbolVariant(\_:)](symbolvariant%28__%29.md): Makes symbols within the view show a particular variant.
