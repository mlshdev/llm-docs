> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/layout/run](https://developer.apple.com/documentation/swiftui/text/layout/run)

# Text.Layout.Run

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A run of placed glyphs in a text layout.

## Declaration

```swift
struct Run
```

## Topics

### Instance Properties

- [characterIndices](run/characterindices.md): The array of character indices corresponding to the glyphs in `self`.
- [layoutDirection](run/layoutdirection.md): The layout direction of the text run.
- [typographicBounds](run/typographicbounds.md): The typographic bounds of the run of glyphs.

### Subscripts

- [subscript(\_:)](run/subscript%28__%29.md): The custom attribute of type `T` associated with the run of glyphs, or nil. If no run contains the custom attribute we also check its attachment’s runs.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
