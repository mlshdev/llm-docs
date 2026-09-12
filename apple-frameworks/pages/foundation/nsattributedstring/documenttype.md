> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documenttype](https://developer.apple.com/documentation/foundation/nsattributedstring/documenttype)

# NSAttributedString.DocumentType

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the document type document attribute key.

## Declaration

```swift
struct DocumentType
```

<a id="overview"></a>

## Overview

Use these constants as values for the [documentType](documentattributekey/documenttype.md) key in the document attributes dictionary.

## Topics

### Getting keys for document types

- [docFormat](documenttype/docformat.md): Microsoft Word document.
- [html](documenttype/html.md): Hypertext markup language (HTML) document.
- [macSimpleText](documenttype/macsimpletext.md): Macintosh SimpleText document.
- [officeOpenXML](documenttype/officeopenxml.md): ECMA Office Open XML text document format.
- [openDocument](documenttype/opendocument.md): OASIS Open Document text document format.
- [plain](documenttype/plain.md): Plain text document.
- [rtf](documenttype/rtf.md): Rich text format document.
- [rtfd](documenttype/rtfd.md): Rich text format with attachments document.
- [webArchive](documenttype/webarchive.md): WebKit WebArchive document.
- [wordML](documenttype/wordml.md): Microsoft Word XML (WordML schema) document.

### Initializers

- [init(\_:)](documenttype/init%28__%29.md): Creates a document type.
- [init(rawValue:)](documenttype/init%28rawvalue_%29.md): Creates a document type with the specified raw value.

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
- [NSAttributedString.TextLayoutSectionKey](textlayoutsectionkey.md): Constants for the text layout sections document attribute key.
- [NSTextScalingType](../../uikit/nstextscalingtype.md): Constants that specify the text scaling.
