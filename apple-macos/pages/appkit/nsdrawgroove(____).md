> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawgroove(_:_:)](https://developer.apple.com/documentation/appkit/nsdrawgroove(_:_:))

# NSDrawGroove(\_:\_:) (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Draws a gray-filled rectangle with a groove border.

## Declaration

```swift
func NSDrawGroove(_ rect: NSRect, _ clipRect: NSRect)
```

## Parameters

- `rect`: The bounding rectangle (in the current coordinate system) in which to draw. Only those parts of `aRect` that lie within the `clipRect` are actually drawn.
- `clipRect`: The clipping rectangle to use during drawing.

## See Also

### Drawing Rectangles

- [NSEraseRect(\_:)](nseraserect%28__%29.md): Erases the specified rect by filling it with white.
- [NSDrawTiledRects(\_:\_:\_:\_:\_:)](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.

# NSDrawGroove (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Draws a gray-filled rectangle with a groove border.

## Declaration

```objectivec
extern void NSDrawGroove(NSRect rect, NSRect clipRect);
```

## Parameters

- `rect`: The bounding rectangle (in the current coordinate system) in which to draw. Only those parts of `aRect` that lie within the `clipRect` are actually drawn.
- `clipRect`: The clipping rectangle to use during drawing.

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
- [NSRectFillListWithGrays](nsrectfilllistwithgrays.md): Fills the rectangles in the passed list with the passed list of grays.
- [NSRectFillUsingOperation](nsrectfillusingoperation.md): Fills a rectangle using the current fill color and the specified compositing operation.
- [NSDrawTiledRects](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.
- [NSHighlightRect](nshighlightrect.md): Deprecated. Highlights the specified rect by filling it with white.
