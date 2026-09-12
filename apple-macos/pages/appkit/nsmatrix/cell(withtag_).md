> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/cell(withtag:)](https://developer.apple.com/documentation/appkit/nsmatrix/cell(withtag:))

# cell(withTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches the receiver and returns the last cell matching the specified tag.

## Declaration

```swift
func cell(withTag tag: Int) -> NSCell?
```

## Parameters

- `tag`: The tag of the cell to return.

<a id="return-value"></a>

## Return Value

The last (when viewing the matrix as a row-ordered array) [NSCell](../nscell.md) object that has a tag matching `anInt`, or `nil` if no such cell exists

## See Also

### Related Documentation

- [selectCell(withTag:)](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [tag](../nsactioncell/tag.md): Returns the receiver’s tag.

### Finding Cells

- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [selectedRow](selectedrow.md): The row number of the selected cell.
- [cell(atRow:column:)](cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cells](cells.md): An array containing the cells of the matrix.

# cellWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches the receiver and returns the last cell matching the specified tag.

## Declaration

```objectivec
- (NSCell *) cellWithTag:(NSInteger) tag;
```

## Parameters

- `tag`: The tag of the cell to return.

<a id="return-value"></a>

## Return Value

The last (when viewing the matrix as a row-ordered array) [NSCell](../nscell.md) object that has a tag matching `anInt`, or `nil` if no such cell exists

## See Also

### Related Documentation

- [selectCellWithTag:](selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [tag](../nsactioncell/tag.md): Returns the receiver’s tag.

### Finding Cells

- [selectedCell](selectedcell.md): The most recently selected cell.
- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [selectedRow](selectedrow.md): The row number of the selected cell.
- [cellAtRow:column:](cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cells](cells.md): An array containing the cells of the matrix.
