> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/selectedcell](https://developer.apple.com/documentation/appkit/nsmatrix/selectedcell)

# selectedCell

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The most recently selected cell.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSCell * selectedCell;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, no cell is selected. If more than one cell is selected, the value of this property is the cell that is lowest and farthest to the right in the matrix.

## See Also

### Finding Cells

- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [selectedRow](selectedrow.md): The row number of the selected cell.
- [cellAtRow:column:](cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cellWithTag:](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [cells](cells.md): An array containing the cells of the matrix.
