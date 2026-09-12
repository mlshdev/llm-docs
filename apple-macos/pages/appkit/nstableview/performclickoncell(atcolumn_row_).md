> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/performclickoncell(atcolumn:row:)](https://developer.apple.com/documentation/appkit/nstableview/performclickoncell(atcolumn:row:))

# performClickOnCell(atColumn:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.10)

Performs a click action on the cell at the specified row and column.

> Use a view-based table view and use the view to handle user interactions.

## Declaration

```swift
func performClickOnCell(atColumn column: Int, row: Int)
```

## Parameters

- `column`: The column of the cell.
- `row`: The row of the cell.

<a id="Discussion"></a>

## Discussion

Acquires the [NSTableView](../nstableview.md), copies it, invokes [performClick(\_:)](../nscell/performclick%28__%29.md) or [performClick(withFrame:in:)](../nspopupbuttoncell/performclick%28withframe_in_%29.md) (if the cell is an [NSPopUpButtonCell](../nspopupbuttoncell.md)), and then updates the data source, if required. This method does not do any checks to see if the cell is enabled.

> **Note**

>  This method is only available to [NSCell](../nscell.md)-based table views.

## See Also

### Deprecated Methods

- [focusedColumn()](focusedcolumn%28%29.md): Deprecated. Returns the currently focused column.
- [setFocusedColumn(\_:)](setfocusedcolumn%28__%29.md): Deprecated. Sets the currently focused column to the specified index.
- [shouldFocusCell(\_:atColumn:row:)](shouldfocuscell%28__atcolumn_row_%29.md): Deprecated. Returns whether the fully prepared cell at the specified row and column can be made the focused cell.
- [preparedCell(atColumn:row:)](preparedcell%28atcolumn_row_%29.md): Deprecated. Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.

# performClickOnCellAtColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.10)

Performs a click action on the cell at the specified row and column.

> Use a view-based table view and use the view to handle user interactions.

## Declaration

```objectivec
- (void) performClickOnCellAtColumn:(NSInteger) column row:(NSInteger) row;
```

## Parameters

- `column`: The column of the cell.
- `row`: The row of the cell.

<a id="Discussion"></a>

## Discussion

Acquires the [NSTableView](../nstableview.md), copies it, invokes [performClick:](../nscell/performclick%28__%29.md) or [performClickWithFrame:inView:](../nspopupbuttoncell/performclick%28withframe_in_%29.md) (if the cell is an [NSPopUpButtonCell](../nspopupbuttoncell.md)), and then updates the data source, if required. This method does not do any checks to see if the cell is enabled.

> **Note**

>  This method is only available to [NSCell](../nscell.md)-based table views.

## See Also

### Deprecated Methods

- [dragImageForRows:event:dragImageOffset:](dragimageforrows_event_dragimageoffset_.md): Deprecated. Computes and returns an image to use for dragging.
- [setAutoresizesAllColumnsToFit:](setautoresizesallcolumnstofit_.md): Deprecated. Controls whether the table view proportionally resizes its columns to fit when its superview’s frame changes.
- [autoresizesAllColumnsToFit](autoresizesallcolumnstofit.md): Deprecated. Returns a Boolean value that indicates if the table view proportionally resizes its columns to fit when its superview’s frame changes.
- [selectColumn:byExtendingSelection:](selectcolumn_byextendingselection_.md): Deprecated. Selects the column at the specified index, optionally extending any existing selection.
- [selectRow:byExtendingSelection:](selectrow_byextendingselection_.md): Deprecated. Selects a row at the specified index, optionally extending any existing selection.
- [tableView:writeRows:toPasteboard:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/tableview:writerows:topasteboard:): Deprecated. Writes the specified rows to the specified pasteboard.
- [setDrawsGrid:](setdrawsgrid_.md): Deprecated. Sets whether the table view draws a grid.
- [drawsGrid](drawsgrid.md): Deprecated. Returns a Boolean value that indicates whether the table view draws a grid.
- [selectedColumnEnumerator](selectedcolumnenumerator.md): Deprecated. This method has been deprecated.
- [selectedRowEnumerator](selectedrowenumerator.md): Deprecated. This method has been deprecated.
- [focusedColumn](focusedcolumn%28%29.md): Deprecated. Returns the currently focused column.
- [setFocusedColumn:](setfocusedcolumn%28__%29.md): Deprecated. Sets the currently focused column to the specified index.
- [shouldFocusCell:atColumn:row:](shouldfocuscell%28__atcolumn_row_%29.md): Deprecated. Returns whether the fully prepared cell at the specified row and column can be made the focused cell.
- [preparedCellAtColumn:row:](preparedcell%28atcolumn_row_%29.md): Deprecated. Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.
- [columnsInRect:](columnsinrect_.md): Deprecated. Returns a range of indexes for the table view’s columns that lie wholly or partially within the horizontal boundaries of the specified rectangle.
