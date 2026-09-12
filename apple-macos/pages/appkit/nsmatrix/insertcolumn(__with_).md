> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/insertcolumn(_:with:)](https://developer.apple.com/documentation/appkit/nsmatrix/insertcolumn(_:with:))

# insertColumn(\_:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts a new column of cells before the specified column, using the given cells.

## Declaration

```swift
func insertColumn(_ column: Int, with newCells: [NSCell]?)
```

## Parameters

- `column`: The column at which to insert the new cells.
- `newCells`: An array of objects to use to fill the new column, starting with the object at index 0. Each object should be an instance of [NSCell](../nscell.md) or one of its subclasses (usually [NSActionCell](../nsactioncell.md)).

<a id="Discussion"></a>

## Discussion

If `column` is greater than the number of columns in the receiver, enough columns are created to expand the receiver to be `column` columns wide. `newCells` should either be empty or contain a sufficient number of cells to fill each new column. If `newCells` is `nil` or an array with no elements, the call is equivalent to calling [insertColumn(\_:)](insertcolumn%28__%29.md). Extra cells are ignored, unless the matrix is empty. In that case, a matrix is created with one column and enough rows for all the elements of `newCells`.

This method redraws the receiver. Your code may need to send [sizeToCells()](sizetocells%28%29.md) after sending this method to resize the receiver to fit the newly added cells.

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
- [insertRow(\_:)](insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [insertRow(\_:with:)](insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCell(atRow:column:)](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.
- [putCell(\_:atRow:column:)](putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.

# insertColumn:withCells: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts a new column of cells before the specified column, using the given cells.

## Declaration

```objectivec
- (void) insertColumn:(NSInteger) column withCells:(NSArray<NSCell *> *) newCells;
```

## Parameters

- `column`: The column at which to insert the new cells.
- `newCells`: An array of objects to use to fill the new column, starting with the object at index 0. Each object should be an instance of [NSCell](../nscell.md) or one of its subclasses (usually [NSActionCell](../nsactioncell.md)).

<a id="Discussion"></a>

## Discussion

If `column` is greater than the number of columns in the receiver, enough columns are created to expand the receiver to be `column` columns wide. `newCells` should either be empty or contain a sufficient number of cells to fill each new column. If `newCells` is `nil` or an array with no elements, the call is equivalent to calling [insertColumn:](insertcolumn%28__%29.md). Extra cells are ignored, unless the matrix is empty. In that case, a matrix is created with one column and enough rows for all the elements of `newCells`.

This method redraws the receiver. Your code may need to send [sizeToCells](sizetocells%28%29.md) after sending this method to resize the receiver to fit the newly added cells.

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
- [insertRow:](insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [insertRow:withCells:](insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCellAtRow:column:](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.
- [putCell:atRow:column:](putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.
