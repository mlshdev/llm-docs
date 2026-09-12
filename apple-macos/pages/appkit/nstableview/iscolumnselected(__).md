> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/iscolumnselected(_:)](https://developer.apple.com/documentation/appkit/nstableview/iscolumnselected(_:))

# isColumnSelected(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the column at the specified index is selected.

## Declaration

```swift
func isColumnSelected(_ column: Int) -> Bool
```

## Parameters

- `column`: The index into the [tableColumns](tablecolumns.md) array that represents the column to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the column at `columnIndex` is selected, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selecting Columns and Rows

- [selectColumnIndexes(\_:byExtendingSelection:)](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [deselectColumn(\_:)](deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [numberOfSelectedColumns](numberofselectedcolumns.md): The number of selected columns.
- [selectRowIndexes(\_:byExtendingSelection:)](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRow](selectedrow.md): The index of the last selected row (or the last row added to the selection).
- [selectedRowIndexes](selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [deselectRow(\_:)](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected(\_:)](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll(\_:)](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

# isColumnSelected: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the column at the specified index is selected.

## Declaration

```objectivec
- (BOOL) isColumnSelected:(NSInteger) column;
```

## Parameters

- `column`: The index into the [tableColumns](tablecolumns.md) array that represents the column to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the column at `columnIndex` is selected, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [selectedColumnEnumerator](selectedcolumnenumerator.md): Deprecated. This method has been deprecated.
- [selectColumn:byExtendingSelection:](selectcolumn_byextendingselection_.md): Deprecated. Selects the column at the specified index, optionally extending any existing selection.

### Selecting Columns and Rows

- [selectColumnIndexes:byExtendingSelection:](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [deselectColumn:](deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [numberOfSelectedColumns](numberofselectedcolumns.md): The number of selected columns.
- [selectRowIndexes:byExtendingSelection:](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRow](selectedrow.md): The index of the last selected row (or the last row added to the selection).
- [selectedRowIndexes](selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [deselectRow:](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected:](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll:](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll:](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.
