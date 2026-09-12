> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/deselectrow(_:)](https://developer.apple.com/documentation/appkit/nstableview/deselectrow(_:))

# deselectRow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects the row at the specified index if it’s selected.

## Declaration

```swift
func deselectRow(_ row: Int)
```

## Parameters

- `row`: The index of the row to deselect.

<a id="Discussion"></a>

## Discussion

Deselects the row at `rowIndex` if it’s selected, regardless of whether empty selection is allowed.

If the selection does in fact change, posts [selectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center.

If the indicated row was the last row selected by the user, the row nearest it effectively becomes the last selected row. In case of a tie, priority is given to the row above.

This method doesn’t check with the delegate before changing the selection.

## See Also

### Related Documentation

- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.

### Selecting Columns and Rows

- [selectColumnIndexes(\_:byExtendingSelection:)](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [deselectColumn(\_:)](deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [numberOfSelectedColumns](numberofselectedcolumns.md): The number of selected columns.
- [isColumnSelected(\_:)](iscolumnselected%28__%29.md): Returns a Boolean value that indicates whether the column at the specified index is selected.
- [selectRowIndexes(\_:byExtendingSelection:)](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRow](selectedrow.md): The index of the last selected row (or the last row added to the selection).
- [selectedRowIndexes](selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected(\_:)](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll(\_:)](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

# deselectRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects the row at the specified index if it’s selected.

## Declaration

```objectivec
- (void) deselectRow:(NSInteger) row;
```

## Parameters

- `row`: The index of the row to deselect.

<a id="Discussion"></a>

## Discussion

Deselects the row at `rowIndex` if it’s selected, regardless of whether empty selection is allowed.

If the selection does in fact change, posts [NSTableViewSelectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center.

If the indicated row was the last row selected by the user, the row nearest it effectively becomes the last selected row. In case of a tie, priority is given to the row above.

This method doesn’t check with the delegate before changing the selection.

## See Also

### Related Documentation

- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.

### Selecting Columns and Rows

- [selectColumnIndexes:byExtendingSelection:](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [deselectColumn:](deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [numberOfSelectedColumns](numberofselectedcolumns.md): The number of selected columns.
- [isColumnSelected:](iscolumnselected%28__%29.md): Returns a Boolean value that indicates whether the column at the specified index is selected.
- [selectRowIndexes:byExtendingSelection:](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRow](selectedrow.md): The index of the last selected row (or the last row added to the selection).
- [selectedRowIndexes](selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected:](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll:](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll:](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.
