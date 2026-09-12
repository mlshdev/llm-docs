> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/scrollcelltovisible(atrow:column:)](https://developer.apple.com/documentation/appkit/nsmatrix/scrollcelltovisible(atrow:column:))

# scrollCellToVisible(atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the receiver so the specified cell is visible.

## Declaration

```swift
func scrollCellToVisible(atRow row: Int, column col: Int)
```

## Parameters

- `row`: The row of the cell to make visible.
- `col`: The column of the cell to make visible.

<a id="Discussion"></a>

## Discussion

This method scrolls if the receiver is in a scrolling view and `row` and `column` represent a valid cell within the receiver.

## See Also

### Related Documentation

- [scrollToVisible(\_:)](../nsview/scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.

### Scrolling Cells in the Matrix

- [isAutoscroll](isautoscroll.md): A Boolean that indicates whether the receiver is automatically scrolled.
- [setScrollable(\_:)](setscrollable%28__%29.md): Specifies whether the cells in the matrix are scrollable.

# scrollCellToVisibleAtRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the receiver so the specified cell is visible.

## Declaration

```objectivec
- (void) scrollCellToVisibleAtRow:(NSInteger) row column:(NSInteger) col;
```

## Parameters

- `row`: The row of the cell to make visible.
- `col`: The column of the cell to make visible.

<a id="Discussion"></a>

## Discussion

This method scrolls if the receiver is in a scrolling view and `row` and `column` represent a valid cell within the receiver.

## See Also

### Related Documentation

- [scrollRectToVisible:](../nsview/scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.

### Scrolling Cells in the Matrix

- [autoscroll](isautoscroll.md): A Boolean that indicates whether the receiver is automatically scrolled.
- [setScrollable:](setscrollable%28__%29.md): Specifies whether the cells in the matrix are scrollable.
