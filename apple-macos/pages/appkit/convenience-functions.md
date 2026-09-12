> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/convenience-functions](https://developer.apple.com/documentation/appkit/convenience-functions)

# Convenience Functions (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Draw rectangles and other primitive shapes using these convenience functions.

## Topics

### Drawing Rectangles

- [NSEraseRect(\_:)](nseraserect%28__%29.md): Erases the specified rect by filling it with white.
- [NSDrawTiledRects(\_:\_:\_:\_:\_:)](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.
- [NSDrawGroove(\_:\_:)](nsdrawgroove%28____%29.md): Draws a gray-filled rectangle with a groove border.

### Drawing Bezels

- [NSDrawDarkBezel(\_:\_:)](nsdrawdarkbezel%28____%29.md): Draws a dark gray-filled rectangle with a bezel border.
- [NSDrawGrayBezel(\_:\_:)](nsdrawgraybezel%28____%29.md): Draws a gray-filled rectangle with a bezel border.
- [NSDrawLightBezel(\_:\_:)](nsdrawlightbezel%28____%29.md): Draws a white-filled rectangle with a bezel border.
- [NSDrawWhiteBezel(\_:\_:)](nsdrawwhitebezel%28____%29.md): Draws a white-filled rectangle with a bezel border.

### Drawing Backgrounds

- [NSDrawButton(\_:\_:)](nsdrawbutton%28____%29.md): Draws a gray-filled rectangle representing a user-interface button.
- [NSDrawWindowBackground(\_:)](nsdrawwindowbackground%28__%29.md): Draws the window’s default background pattern into the specified rectangle of the currently focused view.

### Drawing Multipart Images

- [NSDrawNinePartImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](nsdrawninepartimage%28__________________________%29.md): Draws a nine-part tiled image.
- [NSDrawThreePartImage(\_:\_:\_:\_:\_:\_:\_:\_:)](nsdrawthreepartimage%28________________%29.md): Draws a three-part tiled image.

### Drawing Focus Rings

- [set()](nsfocusringplacement/set%28%29.md): Specifies how the system draws the focus ring.
- [NSFocusRingPlacement](nsfocusringplacement.md): Constants that indicate how the system draws the focus ring.
- [NSFocusRingType](nsfocusringtype.md): Constants that describe the style of the focus ring.

## See Also

### Shapes and Paths

- [NSBezierPath](nsbezierpath.md): An object that can create paths using PostScript-style commands.

# Convenience Functions (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Draw rectangles and other primitive shapes using these convenience functions.

## Topics

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
- [NSDrawGroove](nsdrawgroove%28____%29.md): Draws a gray-filled rectangle with a groove border.
- [NSHighlightRect](nshighlightrect.md): Deprecated. Highlights the specified rect by filling it with white.

### Drawing Bezels

- [NSDrawDarkBezel](nsdrawdarkbezel%28____%29.md): Draws a dark gray-filled rectangle with a bezel border.
- [NSDrawGrayBezel](nsdrawgraybezel%28____%29.md): Draws a gray-filled rectangle with a bezel border.
- [NSDrawLightBezel](nsdrawlightbezel%28____%29.md): Draws a white-filled rectangle with a bezel border.
- [NSDrawWhiteBezel](nsdrawwhitebezel%28____%29.md): Draws a white-filled rectangle with a bezel border.

### Drawing Backgrounds

- [NSDrawButton](nsdrawbutton%28____%29.md): Draws a gray-filled rectangle representing a user-interface button.
- [NSDrawWindowBackground](nsdrawwindowbackground%28__%29.md): Draws the window’s default background pattern into the specified rectangle of the currently focused view.

### Drawing Multipart Images

- [NSDrawNinePartImage](nsdrawninepartimage%28__________________________%29.md): Draws a nine-part tiled image.
- [NSDrawThreePartImage](nsdrawthreepartimage%28________________%29.md): Draws a three-part tiled image.

### Clipping Rectangles

- [NSRectClip](nsrectclip.md): Modifies the current clipping path by intersecting it with the passed rect.
- [NSRectClipList](nsrectcliplist.md): Modifies the current clipping path by intersecting it with the passed rect.

### Drawing Focus Rings

- [NSSetFocusRingStyle](nsfocusringplacement/set%28%29.md): Specifies how the system draws the focus ring.
- [NSFocusRingPlacement](nsfocusringplacement.md): Constants that indicate how the system draws the focus ring.
- [NSFocusRingType](nsfocusringtype.md): Constants that describe the style of the focus ring.

## See Also

### Shapes and Paths

- [NSBezierPath](nsbezierpath.md): An object that can create paths using PostScript-style commands.
