> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documenttype/html](https://developer.apple.com/documentation/foundation/nsattributedstring/documenttype/html)

# html

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Hypertext markup language (HTML) document.

## Declaration

```swift
static let html: NSAttributedString.DocumentType
```

<a id="discussion"></a>

## Discussion

> **Note**

>  Apple discourages using this document type with the synchronous `initWithHTML:` initializers, which parse HTML in-process. Use the WebKit-based [loadFromHTML(request:options:completionHandler:)](../loadfromhtml%28request_options_completionhandler_%29.md) family of methods instead, which parse HTML out-of-process for improved security, stability, and code isolation.

## See Also

### Getting keys for document types

- [docFormat](docformat.md): Microsoft Word document.
- [macSimpleText](macsimpletext.md): Macintosh SimpleText document.
- [officeOpenXML](officeopenxml.md): ECMA Office Open XML text document format.
- [openDocument](opendocument.md): OASIS Open Document text document format.
- [plain](plain.md): Plain text document.
- [rtf](rtf.md): Rich text format document.
- [rtfd](rtfd.md): Rich text format with attachments document.
- [webArchive](webarchive.md): WebKit WebArchive document.
- [wordML](wordml.md): Microsoft Word XML (WordML schema) document.
