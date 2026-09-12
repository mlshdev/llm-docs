> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/selectedcell](https://developer.apple.com/documentation/appkit/nsbrowser/selectedcell)

# selectedCell

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The last (rightmost and lowest) selected cell.

## Declaration

```objectivec
@property (strong, readonly, nullable) id selectedCell;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, there is no selection.

## See Also

### Managing Selection

- [selectedCellInColumn:](selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectedCells](selectedcells.md): All cells selected in the rightmost column.
- [selectAll:](selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRowInColumn:](selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectRow:inColumn:](selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPath](selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](selectionindexpaths.md): An array containing the index paths of all items selected in the browser.
