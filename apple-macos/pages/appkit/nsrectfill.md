> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrectfill](https://developer.apple.com/documentation/appkit/nsrectfill)

# NSRectFill

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Fills the passed rectangle with the current color.

## Declaration

```objectivec
extern void NSRectFill(NSRect rect);
```

## Parameters

- `rect`: The bounding rectangle (in the current coordinate system) in which to draw.

<a id="Discussion"></a>

## Discussion

Fills `aRect` with the current color using the compositing mode [NSCompositingOperationCopy](nscompositingoperation/copy.md), which fills with the current color by copying the RGBA values. Use [NSRectFillUsingOperation](nsrectfillusingoperation.md) to fill specifying a compositing mode.

For more information, see [NSCompositingOperation](nscompositingoperation.md).

## See Also

### Drawing Rectangles

- [NSFrameRect](nsframerect.md): Draws a bordered rectangle.
- [NSFrameRectWithWidth](nsframerectwithwidth.md): Draws a bordered rectangle.
- [NSFrameRectWithWidthUsingOperation](nsframerectwithwidthusingoperation.md): Draws a bordered rectangle using the specified compositing operation.
- [NSEraseRect](nseraserect%28__%29.md): Erases the specified rect by filling it with white.
- [NSRectFillList](nsrectfilllist.md): Fills the rectangles in the passed list with the current fill color.
- [NSRectFillListUsingOperation](nsrectfilllistusingoperation.md): Fills the rectangles in a list using the current fill color and specified compositing operation.
- [NSRectFillListWithColors](nsrectfilllistwithcolors.md): Fills the rectangles in the passed list with the passed list of colors.
- [NSRectFillListWithColorsUsingOperation](nsrectfilllistwithcolorsusingoperation.md): Fills the rectangles in a list using the specified colors and compositing operation.
- [NSRectFillListWithGrays](nsrectfilllistwithgrays.md): Fills the rectangles in the passed list with the passed list of grays.
- [NSRectFillUsingOperation](nsrectfillusingoperation.md): Fills a rectangle using the current fill color and the specified compositing operation.
- [NSDrawTiledRects](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.
- [NSDrawGroove](nsdrawgroove%28____%29.md): Draws a gray-filled rectangle with a groove border.
- [NSHighlightRect](nshighlightrect.md): Deprecated. Highlights the specified rect by filling it with white.
