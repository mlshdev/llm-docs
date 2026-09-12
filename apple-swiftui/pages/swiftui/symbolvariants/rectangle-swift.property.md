> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symbolvariants/rectangle-swift.property](https://developer.apple.com/documentation/swiftui/symbolvariants/rectangle-swift.property)

# rectangle

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A version of the variant that’s encapsulated in a rectangle.

## Declaration

```swift
var rectangle: SymbolVariants { get }
```

<a id="discussion"></a>

## Discussion

Use this property to modify a variant like [fill](fill-swift.property.md) so that it’s also contained in a rectangle:

```swift
Label("Fill Rectangle", systemImage: "plus")
    .symbolVariant(.fill.rectangle)
```

![A screenshot of a label that shows a plus sign in a filled rectangle](https://developer.apple.com/images/com.apple.SwiftUI/SymbolVariants-rectangle-2@2x.png)

## See Also

### Modifying a variant

- [circle](circle-swift.property.md): A version of the variant that’s encapsulated in a circle.
- [square](square-swift.property.md): A version of the variant that’s encapsulated in a square.
- [fill](fill-swift.property.md): A filled version of the variant.
- [slash](slash-swift.property.md): A slashed version of the variant.
