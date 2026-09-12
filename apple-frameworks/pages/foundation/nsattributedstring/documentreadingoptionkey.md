> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentreadingoptionkey](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey)

# NSAttributedString.DocumentReadingOptionKey

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for constructing an attributed string from data you read from disk.

## Declaration

```swift
struct DocumentReadingOptionKey
```

<a id="overview"></a>

## Overview

The [NSAttributedString.DocumentReadingOptionKey](documentreadingoptionkey.md) type defines attributes to use when creating an attributed string from data in a file. Use these strings with methods such as [init(data:options:documentAttributes:)](init%28data_options_documentattributes_%29.md), [init(HTML:options:documentAttributes:)](init%28html_options_documentattributes_%29.md), [init(URL:options:documentAttributes:)](init%28url_options_documentattributes_%29.md), [read(from:options:documentAttributes:)](../nsmutableattributedstring/read%28from_options_documentattributes_%29-5mbcx.md), and [read(from:options:documentAttributes:)](../nsmutableattributedstring/read%28from_options_documentattributes_%29-54wth.md) to specify expected details. For example, specify the [documentType](documentreadingoptionkey/documenttype.md) attribute to interpret the file data as a specific file format.

## Topics

### Getting the document options

- [baseURL](documentreadingoptionkey/baseurl.md): The base URL for HTML documents.
- [characterEncoding](documentreadingoptionkey/characterencoding.md): The string encoding.
- [defaultAttributes](documentreadingoptionkey/defaultattributes.md): The default attributes to apply to plain files.
- [documentType](documentreadingoptionkey/documenttype.md): The document type.
- [fileType](documentreadingoptionkey/filetype.md): The file type.
- [readAccessURL](documentreadingoptionkey/readaccessurl.md): The local files WebKit can access when loading content.
- [textEncodingName](documentreadingoptionkey/textencodingname.md): The text encoding to use.
- [textSizeMultiplier](documentreadingoptionkey/textsizemultiplier.md): The scale factor for font sizes.
- [timeout](documentreadingoptionkey/timeout.md): The time, in seconds, to wait for a document to finish loading.
- [webPreferences](documentreadingoptionkey/webpreferences.md): A WebPreferences object.
- [webResourceLoadDelegate](documentreadingoptionkey/webresourceloaddelegate.md): An object to serve as the web resource loading delegate.

### Getting the font-scaling options

- [sourceTextScaling](documentreadingoptionkey/sourcetextscaling.md): The text-scaling mode to associate with the document’s content.
- [targetTextScaling](documentreadingoptionkey/targettextscaling.md): The text scaling mode to use after reading the text from disk.

### Initializers

- [init(\_:)](documentreadingoptionkey/init%28__%29.md): Creates a document reading option key with the specified raw value.
- [init(rawValue:)](documentreadingoptionkey/init%28rawvalue_%29.md): Creates a document reading option key with the specified raw value.

### Type Properties

- [textKit1ListMarkerFormatDocumentOption](documentreadingoptionkey/textkit1listmarkerformatdocumentoption.md)

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
- [HTML attributes](../html-attributes.md): Documentwide attributes that provide control over the form of generated HTML.
- [NSAttributedString.DocumentType](documenttype.md): Constants for the document type document attribute key.
- [NSAttributedString.TextLayoutSectionKey](textlayoutsectionkey.md): Constants for the text layout sections document attribute key.
- [NSTextScalingType](../../uikit/nstextscalingtype.md): Constants that specify the text scaling.
