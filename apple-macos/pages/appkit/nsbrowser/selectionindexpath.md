> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/selectionindexpath](https://developer.apple.com/documentation/appkit/nsbrowser/selectionindexpath)

# selectionIndexPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The index path of the item selected in the browser.

## Declaration

```swift
var selectionIndexPath: IndexPath? { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, there is no selection.

## See Also

### Managing Selection

- [selectedCell(inColumn:)](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectedCells](selectedcells.md): All cells selected in the rightmost column.
- [selectAll(\_:)](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRow(inColumn:)](selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectRow(\_:inColumn:)](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.

# selectionIndexPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The index path of the item selected in the browser.

## Declaration

```objectivec
@property (copy, nullable) NSIndexPath * selectionIndexPath;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, there is no selection.

## See Also

### Managing Selection

- [selectedCell](selectedcell.md): The last (rightmost and lowest) selected cell.
- [selectedCellInColumn:](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectedCells](selectedcells.md): All cells selected in the rightmost column.
- [selectAll:](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRowInColumn:](selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectRow:inColumn:](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.
