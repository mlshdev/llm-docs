> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfpage/getboxrect(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfpage/getboxrect(_:))

# getBoxRect(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the rectangle that represents a type of box for a content region or page dimensions of a PDF page.

## Declaration

```swift
func getBoxRect(_ box: CGPDFBox) -> CGRect
```

## Parameters

- `box`: A constant that specifies the type of box. For possible values, see [CGPDFBox](../cgpdfbox.md).

<a id="return-value"></a>

## Return Value

Returns the rectangle associated with the type of box specified by the `box` parameter in the specified page.

<a id="Discussion"></a>

## Discussion

Returns the rectangle associated with the specified box in the specified page. This is the value of the corresponding entry (such as `/MediaBox`, `/ArtBox`, and so on) in the page’s dictionary.

## See Also

### Getting Page Information

- [dictionary](dictionary.md): Returns the dictionary of a PDF page.
- [document](document.md): Returns the document for a page.
- [pageNumber](pagenumber.md): Returns the page number of the specified PDF page.
- [rotationAngle](rotationangle.md): Returns the rotation angle of a PDF page, in degrees.
- [getDrawingTransform(\_:rect:rotate:preserveAspectRatio:)](getdrawingtransform%28__rect_rotate_preserveaspectratio_%29.md): Returns the affine transform that maps a box to a given rectangle on a PDF page.

# CGPDFPageGetBoxRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the rectangle that represents a type of box for a content region or page dimensions of a PDF page.

## Declaration

```objectivec
extern CGRect CGPDFPageGetBoxRect(CGPDFPageRef page, CGPDFBox box);
```

## Parameters

- `page`: A PDF page.
- `box`: A constant that specifies the type of box. For possible values, see [CGPDFBox](../cgpdfbox.md).

<a id="return-value"></a>

## Return Value

Returns the rectangle associated with the type of box specified by the `box` parameter in the specified page.

<a id="Discussion"></a>

## Discussion

Returns the rectangle associated with the specified box in the specified page. This is the value of the corresponding entry (such as `/MediaBox`, `/ArtBox`, and so on) in the page’s dictionary.

## See Also

### Getting Page Information

- [CGPDFPageGetDictionary](dictionary.md): Returns the dictionary of a PDF page.
- [CGPDFPageGetDocument](document.md): Returns the document for a page.
- [CGPDFPageGetPageNumber](pagenumber.md): Returns the page number of the specified PDF page.
- [CGPDFPageGetRotationAngle](rotationangle.md): Returns the rotation angle of a PDF page, in degrees.
- [CGPDFPageGetDrawingTransform](getdrawingtransform%28__rect_rotate_preserveaspectratio_%29.md): Returns the affine transform that maps a box to a given rectangle on a PDF page.
