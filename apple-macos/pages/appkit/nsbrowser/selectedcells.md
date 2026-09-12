> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/selectedcells](https://developer.apple.com/documentation/appkit/nsbrowser/selectedcells)

# selectedCells (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

All cells selected in the rightmost column.

## Declaration

```swift
var selectedCells: [NSCell]? { get }
```

<a id="Discussion"></a>

## Discussion

When the array is empty, there is no selection.

## See Also

### Managing Selection

- [selectedCell(inColumn:)](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectAll(\_:)](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRow(inColumn:)](selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectRow(\_:inColumn:)](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPath](selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.

# selectedCells (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

All cells selected in the rightmost column.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSCell *> * selectedCells;
```

<a id="Discussion"></a>

## Discussion

When the array is empty, there is no selection.

## See Also

### Managing Selection

- [selectedCell](selectedcell.md): The last (rightmost and lowest) selected cell.
- [selectedCellInColumn:](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectAll:](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRowInColumn:](selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectRow:inColumn:](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPath](selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.
