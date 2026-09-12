> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolvariants/slash-swift.type.property](https://developer.apple.com/documentation/swiftui/symbolvariants/slash-swift.type.property)

# slash

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A variant that draws a slash through the symbol.

## Declaration

```swift
static let slash: SymbolVariants
```

<a id="discussion"></a>

## Discussion

Use this variant with a call to the [symbolVariant(\_:)](../view/symbolvariant%28__%29.md) modifier to draw symbols with a slash, for those symbols that have such a variant:

```swift
VStack(spacing: 20) {
    HStack(spacing: 20) {
        Image(systemName: "flag")
        Image(systemName: "heart")
        Image(systemName: "bolt")
        Image(systemName: "star")
    }
    HStack(spacing: 20) {
        Image(systemName: "flag")
        Image(systemName: "heart")
        Image(systemName: "bolt")
        Image(systemName: "star")
    }
    .symbolVariant(.slash)
}
```

![A screenshot showing two rows of four symbols each. Both rows contain](https://developer.apple.com/images/com.apple.SwiftUI/SymbolVariants-slash-1@2x.png)

## See Also

### Getting symbol variants

- [none](none.md): No variant for a symbol.
- [circle](circle-swift.type.property.md): A variant that encapsulates the symbol in a circle.
- [square](square-swift.type.property.md): A variant that encapsulates the symbol in a square.
- [rectangle](rectangle-swift.type.property.md): A variant that encapsulates the symbol in a rectangle.
- [fill](fill-swift.type.property.md): A variant that fills the symbol.
