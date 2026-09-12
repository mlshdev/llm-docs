> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfpage/pagenumber](https://developer.apple.com/documentation/coregraphics/cgpdfpage/pagenumber)

# pageNumber (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the page number of the specified PDF page.

## Declaration

```swift
var pageNumber: Int { get }
```

## See Also

### Getting Page Information

- [getBoxRect(\_:)](getboxrect%28__%29.md): Returns the rectangle that represents a type of box for a content region or page dimensions of a PDF page.
- [dictionary](dictionary.md): Returns the dictionary of a PDF page.
- [document](document.md): Returns the document for a page.
- [rotationAngle](rotationangle.md): Returns the rotation angle of a PDF page, in degrees.
- [getDrawingTransform(\_:rect:rotate:preserveAspectRatio:)](getdrawingtransform%28__rect_rotate_preserveaspectratio_%29.md): Returns the affine transform that maps a box to a given rectangle on a PDF page.

# CGPDFPageGetPageNumber (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the page number of the specified PDF page.

## Declaration

```objectivec
extern size_t CGPDFPageGetPageNumber(CGPDFPageRef page);
```

## Parameters

- `page`: A PDF page.

<a id="return-value"></a>

## Return Value

Returns the page number of the specified page.

## See Also

### Getting Page Information

- [CGPDFPageGetBoxRect](getboxrect%28__%29.md): Returns the rectangle that represents a type of box for a content region or page dimensions of a PDF page.
- [CGPDFPageGetDictionary](dictionary.md): Returns the dictionary of a PDF page.
- [CGPDFPageGetDocument](document.md): Returns the document for a page.
- [CGPDFPageGetRotationAngle](rotationangle.md): Returns the rotation angle of a PDF page, in degrees.
- [CGPDFPageGetDrawingTransform](getdrawingtransform%28__rect_rotate_preserveaspectratio_%29.md): Returns the affine transform that maps a box to a given rectangle on a PDF page.
