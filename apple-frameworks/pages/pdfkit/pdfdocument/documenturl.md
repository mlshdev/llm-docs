> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/documenturl](https://developer.apple.com/documentation/pdfkit/pdfdocument/documenturl)

# documentURL (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The URL for the document.

## Declaration

```swift
var documentURL: URL? { get }
```

<a id="return-value"></a>

## Return Value

The URL for the document; may return `NULL` if the document was created from an `NSData` object.

## See Also

### Accessing Document Information

- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItem(for:)](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.

# documentURL (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The URL for the document.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * documentURL;
```

<a id="return-value"></a>

## Return Value

The URL for the document; may return `NULL` if the document was created from an `NSData` object.

## See Also

### Accessing Document Information

- [majorVersion](majorversion.md): The major version of the document.
- [minorVersion](minorversion.md): The minor version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItemForSelection:](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.
