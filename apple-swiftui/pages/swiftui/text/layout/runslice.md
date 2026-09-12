> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/layout/runslice](https://developer.apple.com/documentation/swiftui/text/layout/runslice)

# Text.Layout.RunSlice

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A slice of a run of placed glyphs in a text layout.

## Declaration

```swift
struct RunSlice
```

## Topics

### Initializers

- [init(run:indices:)](runslice/init%28run_indices_%29.md)

### Instance Properties

- [characterIndices](runslice/characterindices.md): The array of character indices corresponding to the glyphs in `self`.
- [run](runslice/run.md)
- [typographicBounds](runslice/typographicbounds.md): The typographic bounds of the partial run of glyphs.

### Subscripts

- [subscript(\_:)](runslice/subscript%28__%29.md): The custom attribute of type `T` associated with the run of glyphs, or nil.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
