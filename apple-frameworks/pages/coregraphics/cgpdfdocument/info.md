> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/info](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/info)

# info (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the information dictionary for a PDF document.

## Declaration

```swift
var info: CGPDFDictionaryRef? { get }
```

## See Also

### Examining a PDF Document

- [catalog](catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [fileIdentifier](fileidentifier.md): Gets the file identifier for a PDF document.
- [numberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [getVersion(majorVersion:minorVersion:)](getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.
- [page(at:)](page%28at_%29.md): Returns a page from a Core Graphics PDF document.

# CGPDFDocumentGetInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the information dictionary for a PDF document.

## Declaration

```objectivec
extern CGPDFDictionaryRefCGPDFDocumentGetInfo(CGPDFDocumentRef document);
```

## Parameters

- `document`: The document whose dictionary you want to obtain.

<a id="return-value"></a>

## Return Value

The information dictionary for the document.

## See Also

### Examining a PDF Document

- [CGPDFDocumentGetCatalog](catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [CGPDFDocumentGetID](fileidentifier.md): Gets the file identifier for a PDF document.
- [CGPDFDocumentGetNumberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [CGPDFDocumentGetVersion](getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.
- [CGPDFDocumentGetPage](page%28at_%29.md): Returns a page from a Core Graphics PDF document.
