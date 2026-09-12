> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/insertrow(_:)](https://developer.apple.com/documentation/appkit/nsmatrix/insertrow(_:))

# insertRow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts a new row of cells before the specified row.

## Declaration

```swift
func insertRow(_ row: Int)
```

## Parameters

- `row`: The location at which to insert the new row. If this is greater than the number of rows in the receiver, enough rows are created to expand the receiver to be `row` rows high.

<a id="Discussion"></a>

## Discussion

New cells are created if needed with [makeCell(atRow:column:)](makecell%28atrow_column_%29.md). This method redraws the receiver. Your code may need to send [sizeToCells()](sizetocells%28%29.md) after sending this method to resize the receiver to fit the newly added cells.

If the number of rows or columns in the receiver has been changed with [renewRows(\_:columns:)](renewrows%28__columns_%29.md), then new cells are created only if they’re needed. This fact allows you to grow and shrink an [NSMatrix](../nsmatrix.md) without repeatedly creating and freeing the cells.

## See Also

### Laying Out the Cells of the Matrix

- [addColumn()](addcolumn%28%29.md): Adds a new column of cells to the right of the last column.
- [addColumn(with:)](addcolumn%28with_%29.md): Adds a new column of cells to the right of the last column, using the given cells.
- [addRow()](addrow%28%29.md): Adds a new row of cells below the last row.
- [addRow(with:)](addrow%28with_%29.md): Adds a new row of cells below the last row, using the specified cells.
- [cellFrame(atRow:column:)](cellframe%28atrow_column_%29.md): Returns the frame rectangle of the cell that would be drawn at the specified location.
- [cellSize](cellsize.md): The size of each cell in the matrix.
- [getNumberOfRows(\_:columns:)](getnumberofrows%28__columns_%29.md): Obtains the number of rows and columns in the receiver.
- [insertColumn(\_:)](insertcolumn%28__%29.md): Inserts a new column of cells at the specified location.
- [insertColumn(\_:with:)](insertcolumn%28__with_%29.md): Inserts a new column of cells before the specified column, using the given cells.
- [insertRow(\_:with:)](insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCell(atRow:column:)](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.
- [putCell(\_:atRow:column:)](putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.

# insertRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts a new row of cells before the specified row.

## Declaration

```objectivec
- (void) insertRow:(NSInteger) row;
```

## Parameters

- `row`: The location at which to insert the new row. If this is greater than the number of rows in the receiver, enough rows are created to expand the receiver to be `row` rows high.

<a id="Discussion"></a>

## Discussion

New cells are created if needed with [makeCellAtRow:column:](makecell%28atrow_column_%29.md). This method redraws the receiver. Your code may need to send [sizeToCells](sizetocells%28%29.md) after sending this method to resize the receiver to fit the newly added cells.

If the number of rows or columns in the receiver has been changed with [renewRows:columns:](renewrows%28__columns_%29.md), then new cells are created only if they’re needed. This fact allows you to grow and shrink an [NSMatrix](../nsmatrix.md) without repeatedly creating and freeing the cells.

## See Also

### Laying Out the Cells of the Matrix

- [addColumn](addcolumn%28%29.md): Adds a new column of cells to the right of the last column.
- [addColumnWithCells:](addcolumn%28with_%29.md): Adds a new column of cells to the right of the last column, using the given cells.
- [addRow](addrow%28%29.md): Adds a new row of cells below the last row.
- [addRowWithCells:](addrow%28with_%29.md): Adds a new row of cells below the last row, using the specified cells.
- [cellFrameAtRow:column:](cellframe%28atrow_column_%29.md): Returns the frame rectangle of the cell that would be drawn at the specified location.
- [cellSize](cellsize.md): The size of each cell in the matrix.
- [getNumberOfRows:columns:](getnumberofrows%28__columns_%29.md): Obtains the number of rows and columns in the receiver.
- [insertColumn:](insertcolumn%28__%29.md): Inserts a new column of cells at the specified location.
- [insertColumn:withCells:](insertcolumn%28__with_%29.md): Inserts a new column of cells before the specified column, using the given cells.
- [insertRow:withCells:](insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCellAtRow:column:](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.
- [putCell:atRow:column:](putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.
