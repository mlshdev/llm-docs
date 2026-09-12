> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/minorversion](https://developer.apple.com/documentation/pdfkit/pdfdocument/minorversion)

# minorVersion (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The minor version of the document.

## Declaration

```swift
var minorVersion: Int { get }
```

<a id="return-value"></a>

## Return Value

The minor version of the document.

## See Also

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItem(for:)](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.

# minorVersion (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The minor version of the document.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger minorVersion;
```

<a id="return-value"></a>

## Return Value

The minor version of the document.

## See Also

### Accessing Document Information

- [documentURL](documenturl.md): The URL for the document.
- [majorVersion](majorversion.md): The major version of the document.
- [string](string.md): A string representing the textual content for the entire document.
- [outlineItemForSelection:](outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](documentattributes.md): A dictionary of document metadata.
- [documentRef](documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.
