> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfstructureelement/attributes](https://developer.apple.com/documentation/coregraphics/cgpdfstructureelement/attributes)

# CGPDFStructureElement.Attributes

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The accessibility and presentation attributes of a structure element.

## Declaration

```swift
struct Attributes
```

<a id="overview"></a>

## Overview

The underlying tagged-PDF API accepts these attributes only at creation time, so they are supplied as a value when constructing a `CGPDFStructureElement` rather than mutated afterwards.

## Topics

### Initializers

- [init(title:language:alternativeText:expansionText:actualText:)](attributes/init%28title_language_alternativetext_expansiontext_actualtext_%29.md)

### Instance Properties

- [actualText](attributes/actualtext.md): Text that is an exact replacement for the element and its children, used when extracting the document’s contents.
- [alternativeText](attributes/alternativetext.md): An alternate description of the element and its children, typically used for graphical content such as an image.
- [expansionText](attributes/expansiontext.md): The expansion of an abbreviation or acronym.
- [language](attributes/language.md): The natural language of the element’s content, used when it differs from the document’s language.
- [title](attributes/title.md): A human-readable title for the element. Presentational only; it should not be relied upon for accessibility.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
