> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/cell(atrow:column:)](https://developer.apple.com/documentation/appkit/nsmatrix/cell(atrow:column:))

# cell(atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the cell at the specified row and column.

## Declaration

```swift
func cell(atRow row: Int, column col: Int) -> NSCell?
```

## Parameters

- `row`: The number of the row containing the cell to return.
- `col`: The number of the column containing the cell to return.

<a id="return-value"></a>

## Return Value

The [NSCell](../nscell.md) object at the specified row and column location specified, or `nil` if either `row` or `column` is outside the bounds of the receiver.

## See Also

### Related Documentation

- [getRow(\_:column:of:)](getrow%28__column_of_%29.md): Searches the receiver for the specified cell and returns the row and column of the cell

### Finding Cells

- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [selectedRow](selectedrow.md): The row number of the selected cell.
- [cell(withTag:)](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [cells](cells.md): An array containing the cells of the matrix.

# cellAtRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the cell at the specified row and column.

## Declaration

```objectivec
- (NSCell *) cellAtRow:(NSInteger) row column:(NSInteger) col;
```

## Parameters

- `row`: The number of the row containing the cell to return.
- `col`: The number of the column containing the cell to return.

<a id="return-value"></a>

## Return Value

The [NSCell](../nscell.md) object at the specified row and column location specified, or `nil` if either `row` or `column` is outside the bounds of the receiver.

## See Also

### Related Documentation

- [getRow:column:ofCell:](getrow%28__column_of_%29.md): Searches the receiver for the specified cell and returns the row and column of the cell

### Finding Cells

- [selectedCell](selectedcell.md): The most recently selected cell.
- [selectedCells](selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](selectedcolumn.md): The column number of the selected cell.
- [selectedRow](selectedrow.md): The row number of the selected cell.
- [cellWithTag:](cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [cells](cells.md): An array containing the cells of the matrix.
