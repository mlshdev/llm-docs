> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/drawgrid(incliprect:)](https://developer.apple.com/documentation/appkit/nstableview/drawgrid(incliprect:))

# drawGrid(inClipRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the grid lines within the supplied rectangle.

## Declaration

```swift
func drawGrid(inClipRect clipRect: NSRect)
```

## Parameters

- `clipRect`: The rectangle in the table view’s coordinate system.

<a id="Discussion"></a>

## Discussion

Draws the grid lines within `clipRect`, using the grid color set with [gridColor](gridcolor.md).

Subclasses can override this method to draw grid lines other than the standard ones. This method draws a grid regardless of whether the table view is set to draw one automatically.

## See Also

### Related Documentation

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [gridColor](gridcolor.md): The color used to draw grid lines.

### Drawing

- [drawRow(\_:clipRect:)](drawrow%28__cliprect_%29.md): Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.
- [highlightSelection(inClipRect:)](highlightselection%28incliprect_%29.md): Highlights the region of the table view in the specified rectangle.
- [drawBackground(inClipRect:)](drawbackground%28incliprect_%29.md): Draws the background of the table view in the clip rect specified by the rectangle.

# drawGridInClipRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the grid lines within the supplied rectangle.

## Declaration

```objectivec
- (void) drawGridInClipRect:(NSRect) clipRect;
```

## Parameters

- `clipRect`: The rectangle in the table view’s coordinate system.

<a id="Discussion"></a>

## Discussion

Draws the grid lines within `clipRect`, using the grid color set with [gridColor](gridcolor.md).

Subclasses can override this method to draw grid lines other than the standard ones. This method draws a grid regardless of whether the table view is set to draw one automatically.

## See Also

### Related Documentation

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [gridColor](gridcolor.md): The color used to draw grid lines.

### Drawing

- [drawRow:clipRect:](drawrow%28__cliprect_%29.md): Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.
- [highlightSelectionInClipRect:](highlightselection%28incliprect_%29.md): Highlights the region of the table view in the specified rectangle.
- [drawBackgroundInClipRect:](drawbackground%28incliprect_%29.md): Draws the background of the table view in the clip rect specified by the rectangle.
