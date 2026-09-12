> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolvariants/none](https://developer.apple.com/documentation/swiftui/symbolvariants/none)

# none

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

No variant for a symbol.

## Declaration

```swift
static let none: SymbolVariants
```

<a id="discussion"></a>

## Discussion

Using this variant with the [symbolVariant(\_:)](../view/symbolvariant%28__%29.md) modifier doesn’t have any effect. Instead, to show a symbol that ignores the current variant, directly set the [symbolVariants](../environmentvalues/symbolvariants.md) environment value to `none` using the [environment(\_:\_:)](../view/environment%28____%29.md) modifer:

```swift
HStack {
    Image(systemName: "heart")
    Image(systemName: "heart")
        .environment(\.symbolVariants, .none)
}
.symbolVariant(.fill)
```

![A screenshot of two heart symbols. The first is filled while the](https://developer.apple.com/images/com.apple.SwiftUI/SymbolVariants-none-1@2x.png)

## See Also

### Getting symbol variants

- [circle](circle-swift.type.property.md): A variant that encapsulates the symbol in a circle.
- [square](square-swift.type.property.md): A variant that encapsulates the symbol in a square.
- [rectangle](rectangle-swift.type.property.md): A variant that encapsulates the symbol in a rectangle.
- [fill](fill-swift.type.property.md): A variant that fills the symbol.
- [slash](slash-swift.type.property.md): A variant that draws a slash through the symbol.
