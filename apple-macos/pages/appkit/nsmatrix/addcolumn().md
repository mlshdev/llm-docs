> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/addcolumn()](https://developer.apple.com/documentation/appkit/nsmatrix/addcolumn())

# addColumn() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a new column of cells to the right of the last column.

## Declaration

```swift
func addColumn()
```

<a id="Discussion"></a>

## Discussion

This method raises an `NSRangeException` if there are 0 rows or 0 columns. This method creates new cells as needed with [makeCell(atRow:column:)](makecell%28atrow_column_%29.md). Use [renewRows(\_:columns:)](renewrows%28__columns_%29.md) to add new cells to an empty matrix.

If the number of rows or columns in the receiver has been changed with [renewRows(\_:columns:)](renewrows%28__columns_%29.md), new cells are created only if they are needed. This fact allows you to grow and shrink an [NSMatrix](../nsmatrix.md) without repeatedly creating and freeing the cells.

This method redraws the receiver. Your code may need to send [sizeToCells()](sizetocells%28%29.md) after sending this method to resize the receiver to fit the newly added cells.

## See Also

### Related Documentation

- [prototype](prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.
- [cellClass](cellclass.md): The subclass of [NSCell](../nscell.md) that the matrix uses when creating new (empty) cells.

### Laying Out the Cells of the Matrix

- [addColumn(with:)](addcolumn%28with_%29.md): Adds a new column of cells to the right of the last column, using the given cells.
- [addRow()](addrow%28%29.md): Adds a new row of cells below the last row.
- [addRow(with:)](addrow%28with_%29.md): Adds a new row of cells below the last row, using the specified cells.
- [cellFrame(atRow:column:)](cellframe%28atrow_column_%29.md): Returns the frame rectangle of the cell that would be drawn at the specified location.
- [cellSize](cellsize.md): The size of each cell in the matrix.
- [getNumberOfRows(\_:columns:)](getnumberofrows%28__columns_%29.md): Obtains the number of rows and columns in the receiver.
- [insertColumn(\_:)](insertcolumn%28__%29.md): Inserts a new column of cells at the specified location.
- [insertColumn(\_:with:)](insertcolumn%28__with_%29.md): Inserts a new column of cells before the specified column, using the given cells.
- [insertRow(\_:)](insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [insertRow(\_:with:)](insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCell(atRow:column:)](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.
- [putCell(\_:atRow:column:)](putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.

# addColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a new column of cells to the right of the last column.

## Declaration

```objectivec
- (void) addColumn;
```

<a id="Discussion"></a>

## Discussion

This method raises an `NSRangeException` if there are 0 rows or 0 columns. This method creates new cells as needed with [makeCellAtRow:column:](makecell%28atrow_column_%29.md). Use [renewRows:columns:](renewrows%28__columns_%29.md) to add new cells to an empty matrix.

If the number of rows or columns in the receiver has been changed with [renewRows:columns:](renewrows%28__columns_%29.md), new cells are created only if they are needed. This fact allows you to grow and shrink an [NSMatrix](../nsmatrix.md) without repeatedly creating and freeing the cells.

This method redraws the receiver. Your code may need to send [sizeToCells](sizetocells%28%29.md) after sending this method to resize the receiver to fit the newly added cells.

## See Also

### Related Documentation

- [prototype](prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.
- [cellClass](cellclass.md): The subclass of [NSCell](../nscell.md) that the matrix uses when creating new (empty) cells.

### Laying Out the Cells of the Matrix

- [addColumnWithCells:](addcolumn%28with_%29.md): Adds a new column of cells to the right of the last column, using the given cells.
- [addRow](addrow%28%29.md): Adds a new row of cells below the last row.
- [addRowWithCells:](addrow%28with_%29.md): Adds a new row of cells below the last row, using the specified cells.
- [cellFrameAtRow:column:](cellframe%28atrow_column_%29.md): Returns the frame rectangle of the cell that would be drawn at the specified location.
- [cellSize](cellsize.md): The size of each cell in the matrix.
- [getNumberOfRows:columns:](getnumberofrows%28__columns_%29.md): Obtains the number of rows and columns in the receiver.
- [insertColumn:](insertcolumn%28__%29.md): Inserts a new column of cells at the specified location.
- [insertColumn:withCells:](insertcolumn%28__with_%29.md): Inserts a new column of cells before the specified column, using the given cells.
- [insertRow:](insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [insertRow:withCells:](insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCellAtRow:column:](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.
- [putCell:atRow:column:](putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.
