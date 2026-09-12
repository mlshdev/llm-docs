> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocumentgetmediabox](https://developer.apple.com/documentation/coregraphics/cgpdfdocumentgetmediabox)

# CGPDFDocumentGetMediaBox

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Returns the media box of a page in a PDF document.

## Declaration

```objectivec
extern CGRect CGPDFDocumentGetMediaBox(CGPDFDocumentRef document, int page);
```

## Parameters

- `document`: The PDF document to examine.
- `page`: An integer that specifies the number of the page to examine.

<a id="return-value"></a>

## Return Value

A rectangle that represents the media box for the specified page, expressed in default PDF user space units (points).

<a id="Discussion"></a>

## Discussion

The replacement function for this one is [CGPDFPageGetBoxRect](cgpdfpage/getboxrect%28__%29.md), which gets the rectangle associated with a type of box (art, media, crop, bleed trim) that represents a content region or page dimensions of a PDF page. For more information see [CGPDFPageRef](cgpdfpage.md).

The media box defines the location and size of the physical medium on which the page is intended to be displayed or printed. For example, if the page size is 8.5 by 11 inches, this function returns the coordinate pairs `(0,0)` and (`612,792)`.

## See Also

### Getting Page Information

- [CGPDFDocumentGetArtBox](cgpdfdocumentgetartbox.md): Deprecated. Returns the art box of a page in a PDF document.
- [CGPDFDocumentGetBleedBox](cgpdfdocumentgetbleedbox.md): Deprecated. Returns the bleed box of a page in a PDF document.
- [CGPDFDocumentGetCropBox](cgpdfdocumentgetcropbox.md): Deprecated. Returns the crop box of a page in a PDF document.
- [CGPDFDocumentGetRotationAngle](cgpdfdocumentgetrotationangle.md): Deprecated. Returns the rotation angle of a page in a PDF document.
- [CGPDFDocumentGetTrimBox](cgpdfdocumentgettrimbox.md): Deprecated. Returns the trim box of a page in a PDF document.
