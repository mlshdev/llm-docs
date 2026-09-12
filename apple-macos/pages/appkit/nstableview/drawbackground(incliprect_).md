> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/drawbackground(incliprect:)](https://developer.apple.com/documentation/appkit/nstableview/drawbackground(incliprect:))

# drawBackground(inClipRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the background of the table view in the clip rect specified by the rectangle.

## Declaration

```swift
func drawBackground(inClipRect clipRect: NSRect)
```

## Parameters

- `clipRect`: The rectangle, in the table view’s coordinate system.

## See Also

### Drawing

- [drawRow(\_:clipRect:)](drawrow%28__cliprect_%29.md): Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.
- [drawGrid(inClipRect:)](drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.
- [highlightSelection(inClipRect:)](highlightselection%28incliprect_%29.md): Highlights the region of the table view in the specified rectangle.

# drawBackgroundInClipRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the background of the table view in the clip rect specified by the rectangle.

## Declaration

```objectivec
- (void) drawBackgroundInClipRect:(NSRect) clipRect;
```

## Parameters

- `clipRect`: The rectangle, in the table view’s coordinate system.

## See Also

### Drawing

- [drawRow:clipRect:](drawrow%28__cliprect_%29.md): Draws the cells for the row at `rowIndex` in the columns that intersect `clipRect`.
- [drawGridInClipRect:](drawgrid%28incliprect_%29.md): Draws the grid lines within the supplied rectangle.
- [highlightSelectionInClipRect:](highlightselection%28incliprect_%29.md): Highlights the region of the table view in the specified rectangle.
