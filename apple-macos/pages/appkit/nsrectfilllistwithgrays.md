> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrectfilllistwithgrays](https://developer.apple.com/documentation/appkit/nsrectfilllistwithgrays)

# NSRectFillListWithGrays

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Fills the rectangles in the passed list with the passed list of grays.

## Declaration

```objectivec
extern void NSRectFillListWithGrays(const NSRect *rects, const CGFloat *grays, NSInteger num);
```

## Parameters

- `rects`: A pointer to an array of [NSRect](https://developer.apple.com/documentation/foundation/nsrect) structures representing the rectangles to fill.
- `grays`: A pointer to an array of floating-point values in the range 0.0 to 1.0, where 0.0 represents absolute black and 1.0 represents absolute white and numbers in between are varying levels of gray. Values outside this range are clamped to 0.0 or 1.0.
- `num`: The number of rectangles in the `rects` parameter.

<a id="Discussion"></a>

## Discussion

Takes a list of `num` rectangles and a matching list of gray values. The first rectangle is filled with the first gray, the second rectangle with the second gray, and so on. There must be an equal number of rectangles and gray values. The rectangles are composited using the [NSCompositeCopy](nscompositecopy.md) operator and the order in which the rectangles are filled cannot be guaranteed; therefore, overlapping rectangles may not draw as expected. This function alters the current color of the current graphics state, setting it unpredictably to one of the values passed in `grays`.

For more information, see [NSCompositingOperation](nscompositingoperation.md).

## See Also

### Drawing Rectangles

- [NSFrameRect](nsframerect.md): Draws a bordered rectangle.
- [NSFrameRectWithWidth](nsframerectwithwidth.md): Draws a bordered rectangle.
- [NSFrameRectWithWidthUsingOperation](nsframerectwithwidthusingoperation.md): Draws a bordered rectangle using the specified compositing operation.
- [NSEraseRect](nseraserect%28__%29.md): Erases the specified rect by filling it with white.
- [NSRectFill](nsrectfill.md): Fills the passed rectangle with the current color.
- [NSRectFillList](nsrectfilllist.md): Fills the rectangles in the passed list with the current fill color.
- [NSRectFillListUsingOperation](nsrectfilllistusingoperation.md): Fills the rectangles in a list using the current fill color and specified compositing operation.
- [NSRectFillListWithColors](nsrectfilllistwithcolors.md): Fills the rectangles in the passed list with the passed list of colors.
- [NSRectFillListWithColorsUsingOperation](nsrectfilllistwithcolorsusingoperation.md): Fills the rectangles in a list using the specified colors and compositing operation.
- [NSRectFillUsingOperation](nsrectfillusingoperation.md): Fills a rectangle using the current fill color and the specified compositing operation.
- [NSDrawTiledRects](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.
- [NSDrawGroove](nsdrawgroove%28____%29.md): Draws a gray-filled rectangle with a groove border.
- [NSHighlightRect](nshighlightrect.md): Deprecated. Highlights the specified rect by filling it with white.
