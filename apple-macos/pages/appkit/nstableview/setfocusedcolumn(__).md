> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/setfocusedcolumn(_:)](https://developer.apple.com/documentation/appkit/nstableview/setfocusedcolumn(_:))

# setFocusedColumn(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.10)

Sets the currently focused column to the specified index.

> Use a view-based table view and make a particular view the first responder to focus it.

## Declaration

```swift
func setFocusedColumn(_ focusedColumn: Int)
```

## Parameters

- `focusedColumn`: The index of the column to focus, or -1 if there should be no focused column.

<a id="Discussion"></a>

## Discussion

This method will redisplay the previously focused column and (if required) the new `focusedColumn`.

The focused column has a focus ring drawn around the [selectedRow](selectedrow.md) that intersects with `focusedColumn`.

You should not override this method.

> **Note**

>  This method is not applicable for [NSView](../nsview.md)-based table views.

## See Also

### Deprecated Methods

- [focusedColumn()](focusedcolumn%28%29.md): Deprecated. Returns the currently focused column.
- [shouldFocusCell(\_:atColumn:row:)](shouldfocuscell%28__atcolumn_row_%29.md): Deprecated. Returns whether the fully prepared cell at the specified row and column can be made the focused cell.
- [performClickOnCell(atColumn:row:)](performclickoncell%28atcolumn_row_%29.md): Deprecated. Performs a click action on the cell at the specified row and column.
- [preparedCell(atColumn:row:)](preparedcell%28atcolumn_row_%29.md): Deprecated. Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.

# setFocusedColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.10)

Sets the currently focused column to the specified index.

> Use a view-based table view and make a particular view the first responder to focus it.

## Declaration

```objectivec
- (void) setFocusedColumn:(NSInteger) focusedColumn;
```

## Parameters

- `focusedColumn`: The index of the column to focus, or -1 if there should be no focused column.

<a id="Discussion"></a>

## Discussion

This method will redisplay the previously focused column and (if required) the new `focusedColumn`.

The focused column has a focus ring drawn around the [selectedRow](selectedrow.md) that intersects with `focusedColumn`.

You should not override this method.

> **Note**

>  This method is not applicable for [NSView](../nsview.md)-based table views.

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
- [shouldFocusCell:atColumn:row:](shouldfocuscell%28__atcolumn_row_%29.md): Deprecated. Returns whether the fully prepared cell at the specified row and column can be made the focused cell.
- [performClickOnCellAtColumn:row:](performclickoncell%28atcolumn_row_%29.md): Deprecated. Performs a click action on the cell at the specified row and column.
- [preparedCellAtColumn:row:](preparedcell%28atcolumn_row_%29.md): Deprecated. Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.
- [columnsInRect:](columnsinrect_.md): Deprecated. Returns a range of indexes for the table view’s columns that lie wholly or partially within the horizontal boundaries of the specified rectangle.
