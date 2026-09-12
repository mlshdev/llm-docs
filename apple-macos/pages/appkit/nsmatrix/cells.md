> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/cells](https://developer.apple.com/documentation/appkit/nsmatrix/cells)

# cells (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the cells of the matrix.

## Declaration

```swift
var cells: [NSCell] { get }
```

<a id="Discussion"></a>

## Discussion

The cells in the array are row-ordered; that is, the first row of cells appears first in the array, followed by the second row, and so forth.

## See Also

### Finding Cells

- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [selectedRow](selectedrow.md): The row number of the selected cell.
- [cell(atRow:column:)](cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cell(withTag:)](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.

# cells (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the cells of the matrix.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSCell *> * cells;
```

<a id="Discussion"></a>

## Discussion

The cells in the array are row-ordered; that is, the first row of cells appears first in the array, followed by the second row, and so forth.

## See Also

### Finding Cells

- [selectedCell](selectedcell.md): The most recently selected cell.
- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [selectedRow](selectedrow.md): The row number of the selected cell.
- [cellAtRow:column:](cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cellWithTag:](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
