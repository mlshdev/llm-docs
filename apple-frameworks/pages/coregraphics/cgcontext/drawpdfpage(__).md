> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/drawpdfpage(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/drawpdfpage(_:))

# drawPDFPage(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the content of a PDF page into the current graphics context.

## Declaration

```swift
func drawPDFPage(_ page: CGPDFPage)
```

## Parameters

- `page`: A Core Graphics PDF page.

<a id="Discussion"></a>

## Discussion

This function works in conjunction with the [CGPDFPage](../cgpdfpage.md) type to draw individual PDF pages into a context.

## See Also

### Drawing Images and PDF Content

- [draw(\_:in:byTiling:)](draw%28__in_bytiling_%29.md): Draws an image in the specified area.
- [interpolationQuality](interpolationquality.md): Returns the current level of interpolation quality for a graphics context.
- [CGInterpolationQuality](../cginterpolationquality.md): Levels of interpolation quality for rendering an image.

# CGContextDrawPDFPage (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the content of a PDF page into the current graphics context.

## Declaration

```objectivec
extern void CGContextDrawPDFPage(CGContextRef c, CGPDFPageRef page);
```

## Parameters

- `c`: The graphics context in which to draw the PDF page.
- `page`: A Core Graphics PDF page.

<a id="Discussion"></a>

## Discussion

This function works in conjunction with the [CGPDFPageRef](../cgpdfpage.md) type to draw individual PDF pages into a context.

## See Also

### Drawing Images and PDF Content

- [CGContextDrawTiledImage](../cgcontextdrawtiledimage.md): Repeatedly draws an image, scaled to the provided rectangle, to fill the current clip region.
- [CGContextDrawImage](../cgcontextdrawimage.md): Draws an image into a graphics context.
- [CGContextGetInterpolationQuality](interpolationquality.md): Returns the current level of interpolation quality for a graphics context.
- [CGContextSetInterpolationQuality](../cgcontextsetinterpolationquality.md): Sets the level of interpolation quality for a graphics context.
- [CGInterpolationQuality](../cginterpolationquality.md): Levels of interpolation quality for rendering an image.
