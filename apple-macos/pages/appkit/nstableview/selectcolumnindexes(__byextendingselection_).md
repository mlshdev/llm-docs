> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/selectcolumnindexes(_:byextendingselection:)](https://developer.apple.com/documentation/appkit/nstableview/selectcolumnindexes(_:byextendingselection:))

# selectColumnIndexes(\_:byExtendingSelection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the column selection using `indexes` possibly extending the selection.

## Declaration

```swift
func selectColumnIndexes(_ indexes: IndexSet, byExtendingSelection extend: Bool)
```

## Parameters

- `indexes`: The column indexes to select.
- `extend`: [true](https://developer.apple.com/documentation/swift/true) if the selection should be extended, [false](https://developer.apple.com/documentation/swift/false) if the current selection should be changed.

<a id="Discussion"></a>

## Discussion

Replaces the deprecated [selectColumn:byExtendingSelection:](selectcolumn_byextendingselection_.md) method.

## See Also

### Selecting Columns and Rows

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
- [selectAll(\_:)](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

# selectColumnIndexes:byExtendingSelection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the column selection using `indexes` possibly extending the selection.

## Declaration

```objectivec
- (void) selectColumnIndexes:(NSIndexSet *) indexes byExtendingSelection:(BOOL) extend;
```

## Parameters

- `indexes`: The column indexes to select.
- `extend`: [true](https://developer.apple.com/documentation/swift/true) if the selection should be extended, [false](https://developer.apple.com/documentation/swift/false) if the current selection should be changed.

<a id="Discussion"></a>

## Discussion

Replaces the deprecated [selectColumn:byExtendingSelection:](selectcolumn_byextendingselection_.md) method.

## See Also

### Selecting Columns and Rows

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
- [selectAll:](selectall%28__%29.md): Selects all rows or all columns, according to whether rows or columns were most recently selected.
- [deselectAll:](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.
