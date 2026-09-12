> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolvariants/slash-swift.property](https://developer.apple.com/documentation/swiftui/symbolvariants/slash-swift.property)

# slash

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A slashed version of the variant.

## Declaration

```swift
var slash: SymbolVariants { get }
```

<a id="discussion"></a>

## Discussion

Use this property to modify a shape variant like [circle](circle-swift.type.property.md) so that it’s also covered by a slash:

```swift
Label("Circle Slash", systemImage: "flag")
    .symbolVariant(.circle.slash)
```

![A screenshot of a label that shows a flag in a circle with a](https://developer.apple.com/images/com.apple.SwiftUI/SymbolVariants-slash-2@2x.png)

## See Also

### Modifying a variant

- [circle](circle-swift.property.md): A version of the variant that’s encapsulated in a circle.
- [square](square-swift.property.md): A version of the variant that’s encapsulated in a square.
- [rectangle](rectangle-swift.property.md): A version of the variant that’s encapsulated in a rectangle.
- [fill](fill-swift.property.md): A filled version of the variant.
