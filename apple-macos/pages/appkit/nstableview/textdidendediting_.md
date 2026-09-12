> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/textdidendediting:](https://developer.apple.com/documentation/appkit/nstableview/textdidendediting:)

# textDidEndEditing:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Updates the data source based on the newly edited value and selects another cell for editing if possible according to the character that ended editing (Return, Tab, Backtab).

> Use a view-based table view with an [NSTextField](../nstextfield.md) object instead.

## Declaration

```objectivec
- (void) textDidEndEditing:(NSNotification *) notification;
```

## Parameters

- `notification`: The notification posted by the field editor.

<a id="Discussion"></a>

## Discussion

See the [NSText](../nstext.md) class specification for more information on this text delegate method.

> **Note**

>  This method is only applicable to [NSCell](../nscell.md)-based table views.

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
- [preparedCellAtColumn:row:](preparedcell%28atcolumn_row_%29.md): Deprecated. Returns the fully prepared cell that the table view will use for drawing or processing of the specified row and column.
