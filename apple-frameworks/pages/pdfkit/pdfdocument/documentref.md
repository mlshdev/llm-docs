> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/documentref](https://developer.apple.com/documentation/pdfkit/pdfdocument/documentref)

# documentRef (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The `CGPDFDocument` associated with the `PDFDocument` object.

## Declaration

```swift
var documentRef: CGPDFDocument? { get }
```

## See Also

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItem(for:)](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.

# documentRef (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The `CGPDFDocument` associated with the `PDFDocument` object.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CGPDFDocumentRef documentRef;
```

## See Also

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItemForSelection:](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
