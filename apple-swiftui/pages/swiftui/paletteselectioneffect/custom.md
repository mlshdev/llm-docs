> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/paletteselectioneffect/custom

# custom

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Does not apply any system effect when selected.

## Declaration

```swift
static let custom: PaletteSelectionEffect
```

<a id="discussion"></a>

## Discussion

> **Note**

> Make sure to manually implement a way to indicate selection when using this case. For example, you could dynamically resolve the item’s image based on the selection state.

## See Also

### Getting palette selection effects

- [automatic](automatic.md): Applies the system’s default effect when selected.
- [symbolVariant(\_:)](symbolvariant%28__%29.md): Applies the specified symbol variant when selected.
