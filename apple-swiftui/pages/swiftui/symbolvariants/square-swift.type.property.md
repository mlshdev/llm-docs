> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolvariants/square-swift.type.property](https://developer.apple.com/documentation/swiftui/symbolvariants/square-swift.type.property)

# square

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A variant that encapsulates the symbol in a square.

## Declaration

```swift
static let square: SymbolVariants
```

<a id="discussion"></a>

## Discussion

Use this variant with a call to the [symbolVariant(\_:)](../view/symbolvariant%28__%29.md) modifier to draw symbols in a square, for those symbols that have a square variant:

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
    .symbolVariant(.square)
}
```

![A screenshot showing two rows of four symbols each. Both rows contain](https://developer.apple.com/images/com.apple.SwiftUI/SymbolVariants-square-1@2x.png)

## See Also

### Getting symbol variants

- [none](none.md): No variant for a symbol.
- [circle](circle-swift.type.property.md): A variant that encapsulates the symbol in a circle.
- [rectangle](rectangle-swift.type.property.md): A variant that encapsulates the symbol in a rectangle.
- [fill](fill-swift.type.property.md): A variant that fills the symbol.
- [slash](slash-swift.type.property.md): A variant that draws a slash through the symbol.
