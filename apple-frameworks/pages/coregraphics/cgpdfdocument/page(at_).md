> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/page(at:)](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/page(at:))

# page(at:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a page from a Core Graphics PDF document.

## Declaration

```swift
func page(at pageNumber: Int) -> CGPDFPage?
```

## Parameters

- `pageNumber`: The number of the page requested.

<a id="return-value"></a>

## Return Value

Return the PDF page corresponding to the specified page number, or `NULL` if no such page exists in the document. Pages are numbered starting at 1.

## See Also

### Examining a PDF Document

- [catalog](catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [fileIdentifier](fileidentifier.md): Gets the file identifier for a PDF document.
- [info](info.md): Gets the information dictionary for a PDF document.
- [numberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [getVersion(majorVersion:minorVersion:)](getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.

# CGPDFDocumentGetPage (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a page from a Core Graphics PDF document.

## Declaration

```objectivec
extern CGPDFPageRefCGPDFDocumentGetPage(CGPDFDocumentRef document, size_t pageNumber);
```

## Parameters

- `document`: A PDF document.
- `pageNumber`: The number of the page requested.

<a id="return-value"></a>

## Return Value

Return the PDF page corresponding to the specified page number, or `NULL` if no such page exists in the document. Pages are numbered starting at 1.

## See Also

### Examining a PDF Document

- [CGPDFDocumentGetCatalog](catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [CGPDFDocumentGetID](fileidentifier.md): Gets the file identifier for a PDF document.
- [CGPDFDocumentGetInfo](info.md): Gets the information dictionary for a PDF document.
- [CGPDFDocumentGetNumberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [CGPDFDocumentGetVersion](getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.
