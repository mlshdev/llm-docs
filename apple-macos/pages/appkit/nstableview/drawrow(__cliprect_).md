> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/drawrow(_:cliprect:)](https://developer.apple.com/documentation/appkit/nstableview/drawrow(_:cliprect:))

# drawRow(\_:clipRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.

## Declaration

```swift
func drawRow(_ row: Int, clipRect: NSRect)
```

## Parameters

- `row`: The row index.
- `clipRect`: The intersecting rectangle.

<a id="Discussion"></a>

## Discussion

[NSCell](../nscell.md)-based table views can override this method to customize the drawing of the rows.

> **Note**

>  For [NSView](../nsview.md)-based table views, do not subclass or override this method. Instead, row drawing customization should be done by subclassing [NSTableRowView](../nstablerowview.md).

## See Also

### Drawing

- [drawGrid(inClipRect:)](drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.
- [highlightSelection(inClipRect:)](highlightselection%28incliprect_%29.md): Highlights the region of the table view in the specified rectangle.
- [drawBackground(inClipRect:)](drawbackground%28incliprect_%29.md): Draws the background of the table view in the clip rect specified by the rectangle.

# drawRow:clipRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.

## Declaration

```objectivec
- (void) drawRow:(NSInteger) row clipRect:(NSRect) clipRect;
```

## Parameters

- `row`: The row index.
- `clipRect`: The intersecting rectangle.

<a id="Discussion"></a>

## Discussion

[NSCell](../nscell.md)-based table views can override this method to customize the drawing of the rows.

> **Note**

>  For [NSView](../nsview.md)-based table views, do not subclass or override this method. Instead, row drawing customization should be done by subclassing [NSTableRowView](../nstablerowview.md).

## See Also

### Related Documentation

- [columnsInRect:](columnsinrect_.md): Deprecated. Returns a range of indexes for the table view’s columns that lie wholly or partially within the horizontal boundaries of the specified rectangle.

### Drawing

- [drawGridInClipRect:](drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.
- [highlightSelectionInClipRect:](highlightselection%28incliprect_%29.md): Highlights the region of the table view in the specified rectangle.
- [drawBackgroundInClipRect:](drawbackground%28incliprect_%29.md): Draws the background of the table view in the clip rect specified by the rectangle.
