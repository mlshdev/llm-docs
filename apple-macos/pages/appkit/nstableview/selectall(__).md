> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/selectall(_:)](https://developer.apple.com/documentation/appkit/nstableview/selectall(_:))

# selectAll(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects all rows or all columns, according to whether rows or columns were most recently selected.

## Declaration

```swift
func selectAll(_ sender: Any?)
```

## Parameters

- `sender`: Typically the object that sent the message.

<a id="Discussion"></a>

## Discussion

If the table allows multiple selection, this action method selects all rows or all columns, according to whether rows or columns were most recently selected. If nothing has been recently selected, this method selects all rows. If this table doesn’t allow multiple selection, this method does nothing.

If the selection does change, this method posts [selectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center.

As a target-action method, [selectAll(\_:)](selectall%28__%29.md) checks with the delegate before changing the selection.

## See Also

### Related Documentation

- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.

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
- [deselectRow(\_:)](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected(\_:)](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

# selectAll: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects all rows or all columns, according to whether rows or columns were most recently selected.

## Declaration

```objectivec
- (void) selectAll:(id) sender;
```

## Parameters

- `sender`: Typically the object that sent the message.

<a id="Discussion"></a>

## Discussion

If the table allows multiple selection, this action method selects all rows or all columns, according to whether rows or columns were most recently selected. If nothing has been recently selected, this method selects all rows. If this table doesn’t allow multiple selection, this method does nothing.

If the selection does change, this method posts [NSTableViewSelectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center.

As a target-action method, [selectAll:](selectall%28__%29.md) checks with the delegate before changing the selection.

## See Also

### Related Documentation

- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [selectColumn:byExtendingSelection:](selectcolumn_byextendingselection_.md): Deprecated. Selects the column at the specified index, optionally extending any existing selection.

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
- [deselectRow:](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected:](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [deselectAll:](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.
