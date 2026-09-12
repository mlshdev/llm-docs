> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nseraserect(_:)](https://developer.apple.com/documentation/appkit/nseraserect(_:))

# NSEraseRect(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Erases the specified rect by filling it with white.

## Declaration

```swift
func NSEraseRect(_ rect: NSRect)
```

## Parameters

- `rect`: The rectangle (in the current coordinate system) defining the area to erase.

<a id="Discussion"></a>

## Discussion

This function fills the specified rectangle with white. It does not alter the current color.

## See Also

### Drawing Rectangles

- [NSDrawTiledRects(\_:\_:\_:\_:\_:)](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.
- [NSDrawGroove(\_:\_:)](nsdrawgroove%28____%29.md): Draws a gray-filled rectangle with a groove border.

# NSEraseRect (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Erases the specified rect by filling it with white.

## Declaration

```objectivec
extern void NSEraseRect(NSRect rect);
```

## Parameters

- `rect`: The rectangle (in the current coordinate system) defining the area to erase.

<a id="Discussion"></a>

## Discussion

This function fills the specified rectangle with white. It does not alter the current color.

## See Also

### Drawing Rectangles

- [NSFrameRect](nsframerect.md): Draws a bordered rectangle.
- [NSFrameRectWithWidth](nsframerectwithwidth.md): Draws a bordered rectangle.
- [NSFrameRectWithWidthUsingOperation](nsframerectwithwidthusingoperation.md): Draws a bordered rectangle using the specified compositing operation.
- [NSRectFill](nsrectfill.md): Fills the passed rectangle with the current color.
- [NSRectFillList](nsrectfilllist.md): Fills the rectangles in the passed list with the current fill color.
- [NSRectFillListUsingOperation](nsrectfilllistusingoperation.md): Fills the rectangles in a list using the current fill color and specified compositing operation.
- [NSRectFillListWithColors](nsrectfilllistwithcolors.md): Fills the rectangles in the passed list with the passed list of colors.
- [NSRectFillListWithColorsUsingOperation](nsrectfilllistwithcolorsusingoperation.md): Fills the rectangles in a list using the specified colors and compositing operation.
- [NSRectFillListWithGrays](nsrectfilllistwithgrays.md): Fills the rectangles in the passed list with the passed list of grays.
- [NSRectFillUsingOperation](nsrectfillusingoperation.md): Fills a rectangle using the current fill color and the specified compositing operation.
- [NSDrawTiledRects](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.
- [NSDrawGroove](nsdrawgroove%28____%29.md): Draws a gray-filled rectangle with a groove border.
- [NSHighlightRect](nshighlightrect.md): Deprecated. Highlights the specified rect by filling it with white.
