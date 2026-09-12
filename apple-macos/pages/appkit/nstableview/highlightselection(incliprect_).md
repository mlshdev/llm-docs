> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/highlightselection(incliprect:)](https://developer.apple.com/documentation/appkit/nstableview/highlightselection(incliprect:))

# highlightSelection(inClipRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Highlights the region of the table view in the specified rectangle.

## Declaration

```swift
func highlightSelection(inClipRect clipRect: NSRect)
```

## Parameters

- `clipRect`: The rectangle, in the table view view’s coordinate system.

<a id="Discussion"></a>

## Discussion

This method is invoked before [drawRow(\_:clipRect:)](drawrow%28__cliprect_%29.md).

[NSCell](../nscell.md)-based table views can override this method to change the manner in which they highlight selections.

> **Note**

>  This method should not be subclassed or overridden for a view-base table view. Instead, row drawing customization should be done by subclassing [NSTableRowView](../nstablerowview.md).

## See Also

### Drawing

- [drawRow(\_:clipRect:)](drawrow%28__cliprect_%29.md): Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.
- [drawGrid(inClipRect:)](drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.
- [drawBackground(inClipRect:)](drawbackground%28incliprect_%29.md): Draws the background of the table view in the clip rect specified by the rectangle.

# highlightSelectionInClipRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Highlights the region of the table view in the specified rectangle.

## Declaration

```objectivec
- (void) highlightSelectionInClipRect:(NSRect) clipRect;
```

## Parameters

- `clipRect`: The rectangle, in the table view view’s coordinate system.

<a id="Discussion"></a>

## Discussion

This method is invoked before [drawRow:clipRect:](drawrow%28__cliprect_%29.md).

[NSCell](../nscell.md)-based table views can override this method to change the manner in which they highlight selections.

> **Note**

>  This method should not be subclassed or overridden for a view-base table view. Instead, row drawing customization should be done by subclassing [NSTableRowView](../nstablerowview.md).

## See Also

### Drawing

- [drawRow:clipRect:](drawrow%28__cliprect_%29.md): Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.
- [drawGridInClipRect:](drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.
- [drawBackgroundInClipRect:](drawbackground%28incliprect_%29.md): Draws the background of the table view in the clip rect specified by the rectangle.
