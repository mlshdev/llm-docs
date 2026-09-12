> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/getversion(majorversion:minorversion:)](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/getversion(majorversion:minorversion:))

# getVersion(majorVersion:minorVersion:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the major and minor version numbers of a Core Graphics PDF document.

## Declaration

```swift
func getVersion(majorVersion: UnsafeMutablePointer<Int32>, minorVersion: UnsafeMutablePointer<Int32>)
```

## Parameters

- `majorVersion`: On return, contains the major version number of the document.
- `minorVersion`: On return, contains the minor version number of the document.

<a id="Discussion"></a>

## Discussion

On return, the values of the `majorVersion` and `minorVersion` parameters are set to the major and minor version numbers of the document respectively.

## See Also

### Examining a PDF Document

- [catalog](catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [fileIdentifier](fileidentifier.md): Gets the file identifier for a PDF document.
- [info](info.md): Gets the information dictionary for a PDF document.
- [numberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [page(at:)](page%28at_%29.md): Returns a page from a Core Graphics PDF document.

# CGPDFDocumentGetVersion (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the major and minor version numbers of a Core Graphics PDF document.

## Declaration

```objectivec
extern void CGPDFDocumentGetVersion(CGPDFDocumentRef document, int *majorVersion, int *minorVersion);
```

## Parameters

- `document`: A PDF document.
- `majorVersion`: On return, contains the major version number of the document.
- `minorVersion`: On return, contains the minor version number of the document.

<a id="Discussion"></a>

## Discussion

On return, the values of the `majorVersion` and `minorVersion` parameters are set to the major and minor version numbers of the document respectively.

## See Also

### Examining a PDF Document

- [CGPDFDocumentGetCatalog](catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [CGPDFDocumentGetID](fileidentifier.md): Gets the file identifier for a PDF document.
- [CGPDFDocumentGetInfo](info.md): Gets the information dictionary for a PDF document.
- [CGPDFDocumentGetNumberOfPages](numberofpages.md): Returns the number of pages in a PDF document.
- [CGPDFDocumentGetPage](page%28at_%29.md): Returns a page from a Core Graphics PDF document.
