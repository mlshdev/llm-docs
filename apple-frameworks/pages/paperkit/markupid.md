> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markupid

# MarkupID

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An opaque ID for markup elements.

## Declaration

```swift
struct MarkupID<Element>
```

## Topics

### Creating an ID

- [init()](markupid/init%28%29.md): Creates a new unique ID.

### Converting IDs

- [MarkupOrderedSet.ElementID](markuporderedset/elementid.md): The markup ID types supported in a markup ordered set.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data model

- [PaperMarkup](papermarkup.md): The data model object for storing markup data created from a `PaperViewController`.
- [MarkupOrderedSet](markuporderedset.md): An ordered set of markup elements.
