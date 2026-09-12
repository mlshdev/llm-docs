> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocumentgetcropbox](https://developer.apple.com/documentation/coregraphics/cgpdfdocumentgetcropbox)

# CGPDFDocumentGetCropBox

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Returns the crop box of a page in a PDF document.

## Declaration

```objectivec
extern CGRect CGPDFDocumentGetCropBox(CGPDFDocumentRef document, int page);
```

## Parameters

- `document`: The PDF document to examine.
- `page`: An integer that specifies the number of the page to examine.

<a id="return-value"></a>

## Return Value

A rectangle that represents the crop box for the specified page, expressed in default PDF user space units (points).

<a id="Discussion"></a>

## Discussion

The replacement function for this one is [CGPDFPageGetBoxRect](cgpdfpage/getboxrect%28__%29.md), which gets the rectangle associated with a type of box (art, media, crop, bleed trim) that represents a content region or page dimensions of a PDF page. For more information see [CGPDFPageRef](cgpdfpage.md).

The crop box defines the region to which the contents of the page are to be clipped (or cropped) when displayed or printed. Unlike the other boxes, the crop box has no defined meaning in terms of physical page geometry or intended use—it merely suggests where the page should be clipped.

## See Also

### Getting Page Information

- [CGPDFDocumentGetArtBox](cgpdfdocumentgetartbox.md): Deprecated. Returns the art box of a page in a PDF document.
- [CGPDFDocumentGetBleedBox](cgpdfdocumentgetbleedbox.md): Deprecated. Returns the bleed box of a page in a PDF document.
- [CGPDFDocumentGetMediaBox](cgpdfdocumentgetmediabox.md): Deprecated. Returns the media box of a page in a PDF document.
- [CGPDFDocumentGetRotationAngle](cgpdfdocumentgetrotationangle.md): Deprecated. Returns the rotation angle of a page in a PDF document.
- [CGPDFDocumentGetTrimBox](cgpdfdocumentgettrimbox.md): Deprecated. Returns the trim box of a page in a PDF document.
