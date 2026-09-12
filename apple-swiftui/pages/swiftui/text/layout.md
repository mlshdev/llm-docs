> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/layout](https://developer.apple.com/documentation/swiftui/text/layout)

# Text.Layout

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A value describing the layout and custom attributes of a tree of `Text` views.

## Declaration

```swift
struct Layout
```

## Topics

### Structures

- [Text.Layout.CharacterIndex](layout/characterindex.md): The index of a character in the source text. An opaque type, this is intended to be used to determine relative locations of elements in the layout, rather than how they map to the source strings.
- [Text.Layout.DrawingOptions](layout/drawingoptions.md): Option flags used when drawing `Text.Layout` lines or runs into a graphics context.
- [Text.Layout.Line](layout/line.md): A single line in a text layout: a collection of runs of placed glyphs.
- [Text.Layout.Run](layout/run.md): A run of placed glyphs in a text layout.
- [Text.Layout.RunSlice](layout/runslice.md): A slice of a run of placed glyphs in a text layout.
- [Text.Layout.TypographicBounds](layout/typographicbounds.md): The typographic bounds of an element in a text layout.

### Instance Properties

- [isTruncated](layout/istruncated.md): Indicates if this text is truncated.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
