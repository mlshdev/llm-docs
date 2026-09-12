> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/selectrow(_:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/selectrow(_:incolumn:))

# selectRow(\_:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the cell at the specified row and column index.

## Declaration

```swift
func selectRow(_ row: Int, inColumn column: Int)
```

## Parameters

- `row`: The row index of the cell to select.
- `column`: The column index of the cell to select.

## See Also

### Related Documentation

- [loadedCell(atRow:column:)](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.

### Managing Selection

- [selectedCell(inColumn:)](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectedCells](selectedcells.md): All cells selected in the rightmost column.
- [selectAll(\_:)](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRow(inColumn:)](selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectionIndexPath](selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.

# selectRow:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the cell at the specified row and column index.

## Declaration

```objectivec
- (void) selectRow:(NSInteger) row inColumn:(NSInteger) column;
```

## Parameters

- `row`: The row index of the cell to select.
- `column`: The column index of the cell to select.

## See Also

### Related Documentation

- [loadedCellAtRow:column:](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.

### Managing Selection

- [selectedCell](selectedcell.md): The last (rightmost and lowest) selected cell.
- [selectedCellInColumn:](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectedCells](selectedcells.md): All cells selected in the rightmost column.
- [selectAll:](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRowInColumn:](selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectionIndexPath](selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.
