> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/paletteselectioneffect/automatic](https://developer.apple.com/documentation/swiftui/paletteselectioneffect/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Applies the system’s default effect when selected.

## Declaration

```swift
static let automatic: PaletteSelectionEffect
```

<a id="discussion"></a>

## Discussion

When using un-tinted SF Symbols or template images, the current tint color is applied to the selected items’ image. If the provided SF Symbols have custom tints, a stroke is drawn around selected items.

## See Also

### Getting palette selection effects

- [custom](custom.md): Does not apply any system effect when selected.
- [symbolVariant(\_:)](symbolvariant%28__%29.md): Applies the specified symbol variant when selected.
