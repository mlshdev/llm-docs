> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/unicodescalarview](https://developer.apple.com/documentation/foundation/attributedstring/unicodescalarview)

# AttributedString.UnicodeScalarView

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A view into the underlying storage of the attributed string, as Unicode scalars.

## Declaration

```swift
struct UnicodeScalarView
```

## Topics

### Default Implementations

- [Collection Implementations](unicodescalarview/collection-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RangeReplaceableCollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Accessing Views into the Attributed String

- [characters](characters.md): The characters of the attributed string, as a view into the underlying string.
- [AttributedString.CharacterView](characterview.md): A view into the underlying storage of the attributed string, as Unicode characters.
- [unicodeScalars](unicodescalars.md): The Unicode scalars of the attributed string, as a view into the underlying string.
- [runs](runs-swift.property.md): The attributed runs of the attributed string, as a view into the underlying string.
- [AttributedString.Runs](runs-swift.struct.md): An iterable view into segments of the attributed string, each of which indicates where a run of identical attributes begins or ends.
