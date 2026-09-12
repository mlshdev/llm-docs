> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/preparedcell(atcolumn:row:)](https://developer.apple.com/documentation/appkit/nstableview/preparedcell(atcolumn:row:))

# preparedCell(atColumn:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.

> Use a view-based table view and the [view(atColumn:row:makeIfNecessary:)](view%28atcolumn_row_makeifnecessary_%29.md) method.

## Declaration

```swift
func preparedCell(atColumn column: Int, row: Int) -> NSCell?
```

## Parameters

- `column`: The index in the [tableColumns](tablecolumns.md) array for which to return the appropriate cell.
- `row`: The row index for which to return the appropriate cell.

<a id="return-value"></a>

## Return Value

New [NSCell](../nscell.md) subclass instance to use for the specified `row` and `column`. The value for the cell is correctly set, and the delegate method [tableView(\_:willDisplayCell:for:row:)](../nstableviewdelegate/tableview%28__willdisplaycell_for_row_%29.md) will have been called.

<a id="Discussion"></a>

## Discussion

You can override this method to do any additional cell set up that is required, or invoke it to retrieve a cell that has its contents configured for the specified `column` and `row`.

> **Note**

>  This method is only available to [NSCell](../nscell.md)-based table views.

## See Also

### Deprecated Methods

- [focusedColumn()](focusedcolumn%28%29.md): Deprecated. Returns the currently focused column.
- [setFocusedColumn(\_:)](setfocusedcolumn%28__%29.md): Deprecated. Sets the currently focused column to the specified index.
- [shouldFocusCell(\_:atColumn:row:)](shouldfocuscell%28__atcolumn_row_%29.md): Deprecated. Returns whether the fully prepared cell at the specified row and column can be made the focused cell.
- [performClickOnCell(atColumn:row:)](performclickoncell%28atcolumn_row_%29.md): Deprecated. Performs a click action on the cell at the specified row and column.

# preparedCellAtColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.

> Use a view-based table view and the [viewAtColumn:row:makeIfNecessary:](view%28atcolumn_row_makeifnecessary_%29.md) method.

## Declaration

```objectivec
- (NSCell *) preparedCellAtColumn:(NSInteger) column row:(NSInteger) row;
```

## Parameters

- `column`: The index in the [tableColumns](tablecolumns.md) array for which to return the appropriate cell.
- `row`: The row index for which to return the appropriate cell.

<a id="return-value"></a>

## Return Value

New [NSCell](../nscell.md) subclass instance to use for the specified `row` and `column`. The value for the cell is correctly set, and the delegate method [tableView:willDisplayCell:forTableColumn:row:](../nstableviewdelegate/tableview%28__willdisplaycell_for_row_%29.md) will have been called.

<a id="Discussion"></a>

## Discussion

You can override this method to do any additional cell set up that is required, or invoke it to retrieve a cell that has its contents configured for the specified `column` and `row`.

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
- [performClickOnCellAtColumn:row:](performclickoncell%28atcolumn_row_%29.md): Deprecated. Performs a click action on the cell at the specified row and column.
- [columnsInRect:](columnsinrect_.md): Deprecated. Returns a range of indexes for the table view’s columns that lie wholly or partially within the horizontal boundaries of the specified rectangle.
