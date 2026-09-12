> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/fileidentifier](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/fileidentifier)

# fileIdentifier (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the file identifier for a PDF document.

## Declaration

```swift
var fileIdentifier: CGPDFArrayRef? { get }
```

<a id="Discussion"></a>

## Discussion

A PDF file identifier is defined in the PDF specification as an array of two strings, the first of which is a permanent identifier that doesn’t change even when the file is updated. The second string changes each time the file is updated. For more information, see *PDF Reference: Version 1.3 (Second Edition)*, Adobe Systems Incorporated.

## See Also

### Examining a PDF Document

- [catalog](catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [info](info.md): Gets the information dictionary for a PDF document.
- [numberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [getVersion(majorVersion:minorVersion:)](getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.
- [page(at:)](page%28at_%29.md): Returns a page from a Core Graphics PDF document.

# CGPDFDocumentGetID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the file identifier for a PDF document.

## Declaration

```objectivec
extern CGPDFArrayRefCGPDFDocumentGetID(CGPDFDocumentRef document);
```

## Parameters

- `document`: The document whose file identifier you want to obtain.

<a id="return-value"></a>

## Return Value

Returns the file identifier for the document.

<a id="Discussion"></a>

## Discussion

A PDF file identifier is defined in the PDF specification as an array of two strings, the first of which is a permanent identifier that doesn’t change even when the file is updated. The second string changes each time the file is updated. For more information, see *PDF Reference: Version 1.3 (Second Edition)*, Adobe Systems Incorporated.

## See Also

### Examining a PDF Document

- [CGPDFDocumentGetCatalog](catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [CGPDFDocumentGetInfo](info.md): Gets the information dictionary for a PDF document.
- [CGPDFDocumentGetNumberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [CGPDFDocumentGetVersion](getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.
- [CGPDFDocumentGetPage](page%28at_%29.md): Returns a page from a Core Graphics PDF document.
