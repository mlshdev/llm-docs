> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentattributekey](https://developer.apple.com/documentation/foundation/nsattributedstring/documentattributekey)

# NSAttributedString.DocumentAttributeKey

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The attributes you apply to an entire document.

## Declaration

```swift
struct DocumentAttributeKey
```

<a id="overview"></a>

## Overview

The [NSAttributedString.DocumentAttributeKey](documentattributekey.md) type defines attributes that apply to an entire attributed string, and not to specific ranges of characters. You specify these attributes when writing an attributed string to disk, or reading text from a file on disk. Use these attributes to specify metadata about the overall document, including its author or title, page margin details, font-scaling options for cross-platform interchange, and more.

## Topics

### Getting document type keys

- [documentType](documentattributekey/documenttype.md): The document type.
- [fileType](documentattributekey/filetype.md): The document type for interpreting the document.
- [textEncodingName](documentattributekey/textencodingname.md): The name of the text encoding to use.

### Getting document metadata keys

- [author](documentattributekey/author.md): The author of the document.
- [category](documentattributekey/category.md): The document’s category.
- [characterEncoding](documentattributekey/characterencoding.md): The string encoding for the document.
- [cocoaVersionDocumentAttribute](documentattributekey/cocoaversiondocumentattribute.md): The version of Cocoa that created the file.
- [comment](documentattributekey/comment.md): The document comments.
- [company](documentattributekey/company.md): The company or organization name associated with the document.
- [converted](documentattributekey/converted.md): A value that indicates whether a filter service converted the file.
- [copyright](documentattributekey/copyright.md): The document’s copyright information.
- [creationTime](documentattributekey/creationtime.md): The creation date of the document.
- [editor](documentattributekey/editor.md): The name of person who last edited the document.
- [keywords](documentattributekey/keywords.md): The document keywords.
- [manager](documentattributekey/manager.md): The name of the author’s manager.
- [modificationTime](documentattributekey/modificationtime.md): The modification date of the document.
- [readOnly](documentattributekey/readonly.md): An indication of whether the document is read-only.
- [subject](documentattributekey/subject.md): The subject of the document.
- [title](documentattributekey/title.md): The document title.

### Getting document appearance keys

- [appearance](documentattributekey/appearance.md): The appearance of the document.
- [backgroundColor](documentattributekey/backgroundcolor.md): The background color of the document.
- [bottomMargin](documentattributekey/bottommargin.md): The bottom margin of the document.
- [defaultFontExcluded](documentattributekey/defaultfontexcluded.md)
- [defaultTabInterval](documentattributekey/defaulttabinterval.md): The default tab stop interval for the document.
- [excludedElements](documentattributekey/excludedelements.md): The HTML elements to exclude in generated HTML.
- [hyphenationFactor](documentattributekey/hyphenationfactor.md): The hyphenation factor of the document.
- [leftMargin](documentattributekey/leftmargin.md): The left margin of the document.
- [paperMargin](documentattributekey/papermargin.md): The paper margin of the document.
- [paperSize](documentattributekey/papersize.md): The paper size for the document.
- [prefixSpaces](documentattributekey/prefixspaces.md): The number of spaces for indenting nested HTML elements.
- [rightMargin](documentattributekey/rightmargin.md): The right margin of the document.
- [textLayoutSections](documentattributekey/textlayoutsections.md): The layout orientations for each section.
- [topMargin](documentattributekey/topmargin.md): The top margin of the document.
- [viewMode](documentattributekey/viewmode.md): The view mode.
- [viewSize](documentattributekey/viewsize.md): The view size.
- [viewZoom](documentattributekey/viewzoom.md): The view zoom.

### Getting the font-scaling options

- [sourceTextScaling](documentattributekey/sourcetextscaling.md): The text-scaling mode you used when creating the text.
- [textScaling](documentattributekey/textscaling.md): The text-scaling mode to use when displaying the text.

### Getting the default attributes

- [defaultAttributes](documentattributekey/defaultattributes.md): The default document attributes.

### Initializers

- [init(\_:)](documentattributekey/init%28__%29.md): Creates a document attribute key.
- [init(rawValue:)](documentattributekey/init%28rawvalue_%29.md): Creates a document attribute key with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting document-wide attributes

- [NSAttributedString.DocumentReadingOptionKey](documentreadingoptionkey.md): Options for constructing an attributed string from data you read from disk.
- [HTML attributes](../html-attributes.md): Documentwide attributes that provide control over the form of generated HTML.
- [NSAttributedString.DocumentType](documenttype.md): Constants for the document type document attribute key.
- [NSAttributedString.TextLayoutSectionKey](textlayoutsectionkey.md): Constants for the text layout sections document attribute key.
- [NSTextScalingType](../../uikit/nstextscalingtype.md): Constants that specify the text scaling.
