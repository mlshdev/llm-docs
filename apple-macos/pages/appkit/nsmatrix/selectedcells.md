> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/selectedcells](https://developer.apple.com/documentation/appkit/nsmatrix/selectedcells)

# selectedCells (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing all of the matrix’s highlighted cells plus its selected cell.

## Declaration

```swift
var selectedCells: [NSCell] { get }
```

<a id="Discussion"></a>

## Discussion

See the class description for a discussion of the selected cell.

As an alternative to using [setSelectionFrom(\_:to:anchor:highlight:)](setselectionfrom%28__to_anchor_highlight_%29.md) for programmatically making discontiguous selections of cells in a matrix, you could first set the single selected cell and then set subsequent cells to be highlighted; afterwards you can access [selectedCells](selectedcells.md) to obtain the selection of cells.

## See Also

### Related Documentation

- [isHighlighted](../nscell/ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.

### Finding Cells

- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [selectedRow](selectedrow.md): The row number of the selected cell.
- [cell(atRow:column:)](cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cell(withTag:)](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [cells](cells.md): An array containing the cells of the matrix.

# selectedCells (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing all of the matrix’s highlighted cells plus its selected cell.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSCell *> * selectedCells;
```

<a id="Discussion"></a>

## Discussion

See the class description for a discussion of the selected cell.

As an alternative to using [setSelectionFrom:to:anchor:highlight:](setselectionfrom%28__to_anchor_highlight_%29.md) for programmatically making discontiguous selections of cells in a matrix, you could first set the single selected cell and then set subsequent cells to be highlighted; afterwards you can access [selectedCells](selectedcells.md) to obtain the selection of cells.

## See Also

### Related Documentation

- [highlighted](../nscell/ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.
- [selectedCell](selectedcell.md): The most recently selected cell.

### Finding Cells

- [selectedCell](selectedcell.md): The most recently selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [selectedRow](selectedrow.md): The row number of the selected cell.
- [cellAtRow:column:](cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cellWithTag:](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [cells](cells.md): An array containing the cells of the matrix.
