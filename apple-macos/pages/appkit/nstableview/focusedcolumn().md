> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/focusedcolumn()](https://developer.apple.com/documentation/appkit/nstableview/focusedcolumn())

# focusedColumn() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Returns the currently focused column.

> Use a view-based table view and observe the window’s first responder.

## Declaration

```swift
func focusedColumn() -> Int
```

<a id="return-value"></a>

## Return Value

The index of the column, or -1 if there is no focused column

<a id="Discussion"></a>

## Discussion

The focus interaction will always be on the [selectedRow](selectedrow.md) of the table. If the [selectedRow](selectedrow.md) is a full width cell, then `focusedColumn` will return `1` when focused.

> **Note**

>  This method is not applicable for [NSView](../nsview.md)-based table views. Instead, the view that has focus will be the [firstResponder](../nswindow/firstresponder.md).

## See Also

### Deprecated Methods

- [setFocusedColumn(\_:)](setfocusedcolumn%28__%29.md): Deprecated. Sets the currently focused column to the specified index.
- [shouldFocusCell(\_:atColumn:row:)](shouldfocuscell%28__atcolumn_row_%29.md): Deprecated. Returns whether the fully prepared cell at the specified row and column can be made the focused cell.
- [performClickOnCell(atColumn:row:)](performclickoncell%28atcolumn_row_%29.md): Deprecated. Performs a click action on the cell at the specified row and column.
- [preparedCell(atColumn:row:)](preparedcell%28atcolumn_row_%29.md): Deprecated. Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.

# focusedColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Returns the currently focused column.

> Use a view-based table view and observe the window’s first responder.

## Declaration

```objectivec
- (NSInteger) focusedColumn;
```

<a id="return-value"></a>

## Return Value

The index of the column, or -1 if there is no focused column

<a id="Discussion"></a>

## Discussion

The focus interaction will always be on the [selectedRow](selectedrow.md) of the table. If the [selectedRow](selectedrow.md) is a full width cell, then `focusedColumn` will return `1` when focused.

> **Note**

>  This method is not applicable for [NSView](../nsview.md)-based table views. Instead, the view that has focus will be the [firstResponder](../nswindow/firstresponder.md).

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
- [setFocusedColumn:](setfocusedcolumn%28__%29.md): Deprecated. Sets the currently focused column to the specified index.
- [shouldFocusCell:atColumn:row:](shouldfocuscell%28__atcolumn_row_%29.md): Deprecated. Returns whether the fully prepared cell at the specified row and column can be made the focused cell.
- [performClickOnCellAtColumn:row:](performclickoncell%28atcolumn_row_%29.md): Deprecated. Performs a click action on the cell at the specified row and column.
- [preparedCellAtColumn:row:](preparedcell%28atcolumn_row_%29.md): Deprecated. Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.
- [columnsInRect:](columnsinrect_.md): Deprecated. Returns a range of indexes for the table view’s columns that lie wholly or partially within the horizontal boundaries of the specified rectangle.
