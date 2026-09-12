> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/selectedrow(incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/selectedrow(incolumn:))

# selectedRow(inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the row index of the selected cell in the specified column.

## Declaration

```swift
func selectedRow(inColumn column: Int) -> Int
```

## Parameters

- `column`: The column index specifying the column for which to return the selected row.

<a id="return-value"></a>

## Return Value

The row index of the selected cell in the specified column. Returns `-1` if there is no selection.

## See Also

### Related Documentation

- [loadedCell(atRow:column:)](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.

### Managing Selection

- [selectedCell(inColumn:)](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectedCells](selectedcells.md): All cells selected in the rightmost column.
- [selectAll(\_:)](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectRow(\_:inColumn:)](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPath](selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.

# selectedRowInColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the row index of the selected cell in the specified column.

## Declaration

```objectivec
- (NSInteger) selectedRowInColumn:(NSInteger) column;
```

## Parameters

- `column`: The column index specifying the column for which to return the selected row.

<a id="return-value"></a>

## Return Value

The row index of the selected cell in the specified column. Returns `-1` if there is no selection.

## See Also

### Related Documentation

- [loadedCellAtRow:column:](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.

### Managing Selection

- [selectedCell](selectedcell.md): The last (rightmost and lowest) selected cell.
- [selectedCellInColumn:](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectedCells](selectedcells.md): All cells selected in the rightmost column.
- [selectAll:](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectRow:inColumn:](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPath](selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.
