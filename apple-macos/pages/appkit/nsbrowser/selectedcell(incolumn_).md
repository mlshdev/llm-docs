> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/selectedcell(incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/selectedcell(incolumn:))

# selectedCell(inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the last (lowest) cell selected in the given column.

## Declaration

```swift
func selectedCell(inColumn column: Int) -> Any?
```

## Parameters

- `column`: The column whose last selected cell is to be returned.

<a id="return-value"></a>

## Return Value

The last (or lowest) selected cell. Returns `nil` if there is no selection.

## See Also

### Related Documentation

- [loadedCell(atRow:column:)](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.

### Managing Selection

- [selectedCells](selectedcells.md): All cells selected in the rightmost column.
- [selectAll(\_:)](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRow(inColumn:)](selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectRow(\_:inColumn:)](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPath](selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.

# selectedCellInColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the last (lowest) cell selected in the given column.

## Declaration

```objectivec
- (id) selectedCellInColumn:(NSInteger) column;
```

## Parameters

- `column`: The column whose last selected cell is to be returned.

<a id="return-value"></a>

## Return Value

The last (or lowest) selected cell. Returns `nil` if there is no selection.

## See Also

### Related Documentation

- [loadedCellAtRow:column:](loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.

### Managing Selection

- [selectedCell](selectedcell.md): The last (rightmost and lowest) selected cell.
- [selectedCells](selectedcells.md): All cells selected in the rightmost column.
- [selectAll:](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRowInColumn:](selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectRow:inColumn:](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPath](selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.
