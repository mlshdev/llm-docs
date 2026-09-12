> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocumentgettrimbox](https://developer.apple.com/documentation/coregraphics/cgpdfdocumentgettrimbox)

# CGPDFDocumentGetTrimBox

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Returns the trim box of a page in a PDF document.

## Declaration

```objectivec
extern CGRect CGPDFDocumentGetTrimBox(CGPDFDocumentRef document, int page);
```

## Parameters

- `document`: The PDF document to examine.
- `page`: A value specifying the number of the page to examine.

<a id="return-value"></a>

## Return Value

Returns a rectangle that represents the trim box for the specified page, expressed in default PDF user space units (points).

<a id="Discussion"></a>

## Discussion

The replacement function for this one is [CGPDFPageGetBoxRect](cgpdfpage/getboxrect%28__%29.md), which gets the rectangle associated with a type of box (art, media, crop, bleed trim) that represents a content region or page dimensions of a PDF page. For more information see [CGPDFPageRef](cgpdfpage.md).

The trim box defines the intended dimensions of the finished page after trimming. It may be smaller than the media box, to allow for production-related content such as printing instructions, cut marks, or color bars. The default value is the page’s crop box.

## See Also

### Getting Page Information

- [CGPDFDocumentGetArtBox](cgpdfdocumentgetartbox.md): Deprecated. Returns the art box of a page in a PDF document.
- [CGPDFDocumentGetBleedBox](cgpdfdocumentgetbleedbox.md): Deprecated. Returns the bleed box of a page in a PDF document.
- [CGPDFDocumentGetCropBox](cgpdfdocumentgetcropbox.md): Deprecated. Returns the crop box of a page in a PDF document.
- [CGPDFDocumentGetMediaBox](cgpdfdocumentgetmediabox.md): Deprecated. Returns the media box of a page in a PDF document.
- [CGPDFDocumentGetRotationAngle](cgpdfdocumentgetrotationangle.md): Deprecated. Returns the rotation angle of a page in a PDF document.
