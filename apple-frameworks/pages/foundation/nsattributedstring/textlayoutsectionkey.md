> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/textlayoutsectionkey](https://developer.apple.com/documentation/foundation/nsattributedstring/textlayoutsectionkey)

# NSAttributedString.TextLayoutSectionKey

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the text layout sections document attribute key.

## Declaration

```swift
struct TextLayoutSectionKey
```

<a id="overview"></a>

## Overview

Use these constants as values for the [textLayoutSections](documentattributekey/textlayoutsections.md) key in the document attributes dictionary.

## Topics

### Getting keys for text layouts

- [orientation](textlayoutsectionkey/orientation.md): The orientation of the text.
- [range](textlayoutsectionkey/range.md): The character range.

### Initializers

- [init(rawValue:)](textlayoutsectionkey/init%28rawvalue_%29.md): Creates a text layout section key with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting document-wide attributes

- [NSAttributedString.DocumentAttributeKey](documentattributekey.md): The attributes you apply to an entire document.
- [NSAttributedString.DocumentReadingOptionKey](documentreadingoptionkey.md): Options for constructing an attributed string from data you read from disk.
- [HTML attributes](../html-attributes.md): Documentwide attributes that provide control over the form of generated HTML.
- [NSAttributedString.DocumentType](documenttype.md): Constants for the document type document attribute key.
- [NSTextScalingType](../../uikit/nstextscalingtype.md): Constants that specify the text scaling.
