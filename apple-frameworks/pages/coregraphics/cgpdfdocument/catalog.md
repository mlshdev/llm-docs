> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/catalog](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/catalog)

# catalog (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the document catalog of a Core Graphics PDF document.

## Declaration

```swift
var catalog: CGPDFDictionaryRef? { get }
```

<a id="Discussion"></a>

## Discussion

The entries in a PDF document catalog recursively describe the contents of the PDF document. You can access the contents of a PDF document catalog by calling the function [catalog](catalog.md). For information on accessing PDF metadata, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

## See Also

### Examining a PDF Document

- [fileIdentifier](fileidentifier.md): Gets the file identifier for a PDF document.
- [info](info.md): Gets the information dictionary for a PDF document.
- [numberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [getVersion(majorVersion:minorVersion:)](getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.
- [page(at:)](page%28at_%29.md): Returns a page from a Core Graphics PDF document.

# CGPDFDocumentGetCatalog (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the document catalog of a Core Graphics PDF document.

## Declaration

```objectivec
extern CGPDFDictionaryRefCGPDFDocumentGetCatalog(CGPDFDocumentRef document);
```

## Parameters

- `document`: A PDF document.

<a id="return-value"></a>

## Return Value

The document catalog of the specified document.

<a id="Discussion"></a>

## Discussion

The entries in a PDF document catalog recursively describe the contents of the PDF document. You can access the contents of a PDF document catalog by calling the function [CGPDFDocumentGetCatalog](catalog.md). For information on accessing PDF metadata, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

## See Also

### Examining a PDF Document

- [CGPDFDocumentGetID](fileidentifier.md): Gets the file identifier for a PDF document.
- [CGPDFDocumentGetInfo](info.md): Gets the information dictionary for a PDF document.
- [CGPDFDocumentGetNumberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [CGPDFDocumentGetVersion](getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.
- [CGPDFDocumentGetPage](page%28at_%29.md): Returns a page from a Core Graphics PDF document.
