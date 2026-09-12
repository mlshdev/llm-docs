> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrectfilllistusingoperation](https://developer.apple.com/documentation/appkit/nsrectfilllistusingoperation)

# NSRectFillListUsingOperation

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Fills the rectangles in a list using the current fill color and specified compositing operation.

## Declaration

```objectivec
extern void NSRectFillListUsingOperation(const NSRect *rects, NSInteger count, NSCompositingOperation op);
```

## Parameters

- `rects`: A pointer to an array of [NSRect](https://developer.apple.com/documentation/foundation/nsrect) structures representing the rectangles to fill.
- `count`: The number of rectangles in the `rects` parameter.
- `op`: The compositing operation to use when filling the rectangles.

<a id="Discussion"></a>

## Discussion

Fills a list of `count` rectangles with the current fill color, using the compositing operation `op`. For example, specifying [NSCompositeSourceOver](nscompositesourceover.md) will blend with what’s already been drawn.

For more information, see [NSCompositingOperation](nscompositingoperation.md).

## See Also

### Drawing Rectangles

- [NSFrameRect](nsframerect.md): Draws a bordered rectangle.
- [NSFrameRectWithWidth](nsframerectwithwidth.md): Draws a bordered rectangle.
- [NSFrameRectWithWidthUsingOperation](nsframerectwithwidthusingoperation.md): Draws a bordered rectangle using the specified compositing operation.
- [NSEraseRect](nseraserect%28__%29.md): Erases the specified rect by filling it with white.
- [NSRectFill](nsrectfill.md): Fills the passed rectangle with the current color.
- [NSRectFillList](nsrectfilllist.md): Fills the rectangles in the passed list with the current fill color.
- [NSRectFillListWithColors](nsrectfilllistwithcolors.md): Fills the rectangles in the passed list with the passed list of colors.
- [NSRectFillListWithColorsUsingOperation](nsrectfilllistwithcolorsusingoperation.md): Fills the rectangles in a list using the specified colors and compositing operation.
- [NSRectFillListWithGrays](nsrectfilllistwithgrays.md): Fills the rectangles in the passed list with the passed list of grays.
- [NSRectFillUsingOperation](nsrectfillusingoperation.md): Fills a rectangle using the current fill color and the specified compositing operation.
- [NSDrawTiledRects](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.
- [NSDrawGroove](nsdrawgroove%28____%29.md): Draws a gray-filled rectangle with a groove border.
- [NSHighlightRect](nshighlightrect.md): Deprecated. Highlights the specified rect by filling it with white.
