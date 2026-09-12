> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/documentattributes](https://developer.apple.com/documentation/pdfkit/pdfdocument/documentattributes)

# documentAttributes (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A dictionary of document metadata.

## Declaration

```swift
var documentAttributes: [AnyHashable : Any]? { get set }
```

<a id="return-value"></a>

## Return Value

The dictionary of document metadata. The dictionary may be empty, or only some of the keys may have associated values.

<a id="Discussion"></a>

## Discussion

Metadata is optional for PDF documents.

## See Also

### Related Documentation

- [PDFDocumentAttribute](../pdfdocumentattribute.md): A structure that specifies document attributes.

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItem(for:)](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.

# documentAttributes (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A dictionary of document metadata.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary * documentAttributes;
```

<a id="return-value"></a>

## Return Value

The dictionary of document metadata. The dictionary may be empty, or only some of the keys may have associated values.

<a id="Discussion"></a>

## Discussion

Metadata is optional for PDF documents.

## See Also

### Related Documentation

- [PDFDocumentAttribute](../pdfdocumentattribute.md): A structure that specifies document attributes.

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItemForSelection:](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.
