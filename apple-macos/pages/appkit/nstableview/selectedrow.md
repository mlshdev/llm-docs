> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/selectedrow](https://developer.apple.com/documentation/appkit/nstableview/selectedrow)

# selectedRow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the last selected row (or the last row added to the selection).

## Declaration

```swift
var selectedRow: Int { get }
```

<a id="Discussion"></a>

## Discussion

When multiple rows are selected, this property contains only the index of the last one in the selection. If no row is selected, the value of this property is `-1`.

## See Also

### Selecting Columns and Rows

- [selectColumnIndexes(\_:byExtendingSelection:)](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [deselectColumn(\_:)](deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [numberOfSelectedColumns](numberofselectedcolumns.md): The number of selected columns.
- [isColumnSelected(\_:)](iscolumnselected%28__%29.md): Returns a Boolean value that indicates whether the column at the specified index is selected.
- [selectRowIndexes(\_:byExtendingSelection:)](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRowIndexes](selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [deselectRow(\_:)](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected(\_:)](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll(\_:)](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

# selectedRow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the last selected row (or the last row added to the selection).

## Declaration

```objectivec
@property (readonly) NSInteger selectedRow;
```

<a id="Discussion"></a>

## Discussion

When multiple rows are selected, this property contains only the index of the last one in the selection. If no row is selected, the value of this property is `-1`.

## See Also

### Related Documentation

- [selectRow:byExtendingSelection:](selectrow_byextendingselection_.md): Deprecated. Selects a row at the specified index, optionally extending any existing selection.
- [selectedRowEnumerator](selectedrowenumerator.md): Deprecated. This method has been deprecated.

### Selecting Columns and Rows

- [selectColumnIndexes:byExtendingSelection:](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectedColumn](selectedcolumn.md): The index of the last selected column (or the last column added to the selection).
- [selectedColumnIndexes](selectedcolumnindexes.md): An index set containing the indexes of the selected columns.
- [deselectColumn:](deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [numberOfSelectedColumns](numberofselectedcolumns.md): The number of selected columns.
- [isColumnSelected:](iscolumnselected%28__%29.md): Returns a Boolean value that indicates whether the column at the specified index is selected.
- [selectRowIndexes:byExtendingSelection:](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.
- [selectedRowIndexes](selectedrowindexes.md): An index set containing the indexes of the selected rows.
- [deselectRow:](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [numberOfSelectedRows](numberofselectedrows.md): The number of selected rows.
- [isRowSelected:](isrowselected%28__%29.md): Returns a Boolean value that indicates whether the row at the specified index is selected.
- [selectAll:](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll:](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.
