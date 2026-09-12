> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/outlineroot](https://developer.apple.com/documentation/pdfkit/pdfdocument/outlineroot)

# outlineRoot (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

The document’s root outline to a PDF outline object.

## Declaration

```swift
var outlineRoot: PDFOutline? { get set }
```

## Parameters

- `outline`: The outline to be used as the document’s root outline. Pass `NULL` to strip the outline from a document.

<a id="Discussion"></a>

## Discussion

When a PDF document is saved, the outline tree structure is written out to the destination PDF file.

## See Also

### Related Documentation

- [PDFDocument](../pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItem(for:)](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.

# outlineRoot (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

The document’s root outline to a PDF outline object.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PDFOutline * outlineRoot;
```

## Parameters

- `outline`: The outline to be used as the document’s root outline. Pass `NULL` to strip the outline from a document.

<a id="Discussion"></a>

## Discussion

When a PDF document is saved, the outline tree structure is written out to the destination PDF file.

## See Also

### Related Documentation

- [PDFDocument](../pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItemForSelection:](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.
