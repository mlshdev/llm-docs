> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/deselectcolumn(_:)](https://developer.apple.com/documentation/appkit/nstableview/deselectcolumn(_:))

# deselectColumn(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects the column at the specified index if it’s selected.

## Declaration

```swift
func deselectColumn(_ column: Int)
```

## Parameters

- `column`: The index in the [tableColumns](tablecolumns.md) array of the column to deselect.

<a id="Discussion"></a>

## Discussion

Deselects the column at `columnIndex` if it’s selected, regardless of whether empty selection is allowed.

If the selection does in fact change, this method posts [selectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center.

If the indicated column was the last column selected by the user, the column nearest it effectively becomes the last selected column. In case of a tie, priority is given to the column on the left.

This method doesn’t check with the delegate before changing the selection.

## See Also

### Related Documentation

- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.

### Selecting Columns and Rows

- [selectColumnIndexes(\_:byExtendingSelection:)](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [numberOfSelectedColumns](numberofselectedcolumns.md): The number of selected columns.
- [isColumnSelected(\_:)](iscolumnselected%28__%29.md): Returns a Boolean value that indicates whether the column at the specified index is selected.
- [selectRowIndexes(\_:byExtendingSelection:)](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRow](selectedrow.md): The index of the last selected row (or the last row added to the selection).
- [selectedRowIndexes](selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [deselectRow(\_:)](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected(\_:)](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll(\_:)](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

# deselectColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects the column at the specified index if it’s selected.

## Declaration

```objectivec
- (void) deselectColumn:(NSInteger) column;
```

## Parameters

- `column`: The index in the [tableColumns](tablecolumns.md) array of the column to deselect.

<a id="Discussion"></a>

## Discussion

Deselects the column at `columnIndex` if it’s selected, regardless of whether empty selection is allowed.

If the selection does in fact change, this method posts [NSTableViewSelectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center.

If the indicated column was the last column selected by the user, the column nearest it effectively becomes the last selected column. In case of a tie, priority is given to the column on the left.

This method doesn’t check with the delegate before changing the selection.

## See Also

### Related Documentation

- [selectRow:byExtendingSelection:](selectrow_byextendingselection_.md): Deprecated. Selects a row at the specified index, optionally extending any existing selection.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.

### Selecting Columns and Rows

- [selectColumnIndexes:byExtendingSelection:](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [numberOfSelectedColumns](numberofselectedcolumns.md): The number of selected columns.
- [isColumnSelected:](iscolumnselected%28__%29.md): Returns a Boolean value that indicates whether the column at the specified index is selected.
- [selectRowIndexes:byExtendingSelection:](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRow](selectedrow.md): The index of the last selected row (or the last row added to the selection).
- [selectedRowIndexes](selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [deselectRow:](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected:](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll:](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll:](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.
