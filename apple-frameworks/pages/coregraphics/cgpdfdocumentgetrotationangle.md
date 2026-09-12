> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocumentgetrotationangle](https://developer.apple.com/documentation/coregraphics/cgpdfdocumentgetrotationangle)

# CGPDFDocumentGetRotationAngle

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Returns the rotation angle of a page in a PDF document.

## Declaration

```objectivec
extern int CGPDFDocumentGetRotationAngle(CGPDFDocumentRef document, int page);
```

## Parameters

- `document`: The PDF document to examine.
- `page`: An integer that specifies the number of the page to examine.

<a id="return-value"></a>

## Return Value

The rotation angle of the page, expressed in degrees. If the specified page does not exist, returns `0`.

<a id="Discussion"></a>

## Discussion

The replacement function for this one is [CGPDFPageGetRotationAngle](cgpdfpage/rotationangle.md). For more information see [CGPDFPageRef](cgpdfpage.md).

## See Also

### Getting Page Information

- [CGPDFDocumentGetArtBox](cgpdfdocumentgetartbox.md): Deprecated. Returns the art box of a page in a PDF document.
- [CGPDFDocumentGetBleedBox](cgpdfdocumentgetbleedbox.md): Deprecated. Returns the bleed box of a page in a PDF document.
- [CGPDFDocumentGetCropBox](cgpdfdocumentgetcropbox.md): Deprecated. Returns the crop box of a page in a PDF document.
- [CGPDFDocumentGetMediaBox](cgpdfdocumentgetmediabox.md): Deprecated. Returns the media box of a page in a PDF document.
- [CGPDFDocumentGetTrimBox](cgpdfdocumentgettrimbox.md): Deprecated. Returns the trim box of a page in a PDF document.
