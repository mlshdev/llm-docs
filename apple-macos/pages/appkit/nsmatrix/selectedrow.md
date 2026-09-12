> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/selectedrow](https://developer.apple.com/documentation/appkit/nsmatrix/selectedrow)

# selectedRow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The row number of the selected cell.

## Declaration

```swift
var selectedRow: Int { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `–1`, no cells are selected. If cells in multiple rows are selected, the value of this property is the number of the last row containing a selected cell.

## See Also

### Finding Cells

- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [cell(atRow:column:)](cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cell(withTag:)](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [cells](cells.md): An array containing the cells of the matrix.

# selectedRow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The row number of the selected cell.

## Declaration

```objectivec
@property (readonly) NSInteger selectedRow;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `–1`, no cells are selected. If cells in multiple rows are selected, the value of this property is the number of the last row containing a selected cell.

## See Also

### Finding Cells

- [selectedCell](selectedcell.md): The most recently selected cell.
- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [cellAtRow:column:](cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cellWithTag:](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [cells](cells.md): An array containing the cells of the matrix.
