> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolvariants/circle-swift.property](https://developer.apple.com/documentation/swiftui/symbolvariants/circle-swift.property)

# circle

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A version of the variant that’s encapsulated in a circle.

## Declaration

```swift
var circle: SymbolVariants { get }
```

<a id="discussion"></a>

## Discussion

Use this property to modify a variant like [fill](fill-swift.property.md) so that it’s also contained in a circle:

```swift
Label("Fill Circle", systemImage: "bolt")
    .symbolVariant(.fill.circle)
```

![A screenshot of a label that shows a bolt in a filled circle](https://developer.apple.com/images/com.apple.SwiftUI/SymbolVariants-circle-2@2x.png)

## See Also

### Modifying a variant

- [square](square-swift.property.md): A version of the variant that’s encapsulated in a square.
- [rectangle](rectangle-swift.property.md): A version of the variant that’s encapsulated in a rectangle.
- [fill](fill-swift.property.md): A filled version of the variant.
- [slash](slash-swift.property.md): A slashed version of the variant.
