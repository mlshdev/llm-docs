> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/renewrows(_:columns:)](https://developer.apple.com/documentation/appkit/nsmatrix/renewrows(_:columns:))

# renewRows(\_:columns:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the number of rows and columns in the receiver.

## Declaration

```swift
func renewRows(_ newRows: Int, columns newCols: Int)
```

## Parameters

- `newRows`: The new number of rows in the matrix.
- `newCols`: The new number of columns in the matrix.

<a id="Discussion"></a>

## Discussion

This method uses the same cells as before, creating new cells only if the new size is larger; it never frees cells. It doesn’t redisplay the receiver. Your code should normally send [sizeToCells()](sizetocells%28%29.md) after invoking this method to resize the receiver so it fits the changed cell arrangement. This method deselects all cells in the receiver.

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
- [insertRow(\_:)](insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [insertRow(\_:with:)](insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCell(atRow:column:)](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.

# renewRows:columns: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the number of rows and columns in the receiver.

## Declaration

```objectivec
- (void) renewRows:(NSInteger) newRows columns:(NSInteger) newCols;
```

## Parameters

- `newRows`: The new number of rows in the matrix.
- `newCols`: The new number of columns in the matrix.

<a id="Discussion"></a>

## Discussion

This method uses the same cells as before, creating new cells only if the new size is larger; it never frees cells. It doesn’t redisplay the receiver. Your code should normally send [sizeToCells](sizetocells%28%29.md) after invoking this method to resize the receiver so it fits the changed cell arrangement. This method deselects all cells in the receiver.

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
- [insertRow:](insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [insertRow:withCells:](insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCellAtRow:column:](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.
