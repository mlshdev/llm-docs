> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsattributedstringdocumenttype](https://developer.apple.com/documentation/uikit/nsattributedstringdocumenttype)

# NSAttributedStringDocumentType

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the document type document attribute key.

## Declaration

```objectivec
typedef NSString * NSAttributedStringDocumentType;
```

<a id="Discussion"></a>

## Discussion

Use these constants as values for the [NSDocumentTypeDocumentAttribute](nsdocumenttypedocumentattribute.md) key in the document attributes dictionary.

## Topics

### Getting keys for document types

- [NSDocFormatTextDocumentType](https://developer.apple.com/documentation/appkit/nsdocformattextdocumenttype): Microsoft Word document.
- [NSHTMLTextDocumentType](nshtmltextdocumenttype.md): Hypertext markup language (HTML) document.
- [NSMacSimpleTextDocumentType](https://developer.apple.com/documentation/appkit/nsmacsimpletextdocumenttype): Macintosh SimpleText document.
- [NSOfficeOpenXMLTextDocumentType](https://developer.apple.com/documentation/appkit/nsofficeopenxmltextdocumenttype): ECMA Office Open XML text document format.
- [NSOpenDocumentTextDocumentType](https://developer.apple.com/documentation/appkit/nsopendocumenttextdocumenttype): OASIS Open Document text document format.
- [NSPlainTextDocumentType](nsplaintextdocumenttype.md): A plain text document.
- [NSRTFTextDocumentType](nsrtftextdocumenttype.md): A rich text format document.
- [NSRTFDTextDocumentType](nsrtfdtextdocumenttype.md): A rich text format document with attachments.
- [NSWebArchiveTextDocumentType](https://developer.apple.com/documentation/appkit/nswebarchivetextdocumenttype): WebKit WebArchive document.
- [NSWordMLTextDocumentType](https://developer.apple.com/documentation/appkit/nswordmltextdocumenttype): Microsoft Word XML (WordML schema) document.

## See Also

### Getting document-wide attributes

- [NSAttributedStringDocumentAttributeKey](nsattributedstringdocumentattributekey.md): The attributes you apply to an entire document.
- [Document reading option keys](document-reading-option-keys.md): Keys for constructing an attributed string from data on disk.
- [NSTextLayoutSectionKey](nstextlayoutsectionkey.md): Constants for the text layout sections document attribute key.
- [NSTextScalingType](nstextscalingtype.md): Constants that specify the text scaling.
