> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/makecell(atrow:column:)](https://developer.apple.com/documentation/appkit/nsmatrix/makecell(atrow:column:))

# makeCell(atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new cell at the location specified by the given row and column in the receiver.

## Declaration

```swift
func makeCell(atRow row: Int, column col: Int) -> NSCell
```

## Parameters

- `row`: The row in which to create the new cell.
- `col`: The column in which to create the new cell.

<a id="return-value"></a>

## Return Value

The newly created cell.

<a id="Discussion"></a>

## Discussion

If the receiver has a prototype cell, it’s copied to create the new cell. If not, and if the receiver has a cell class set, it allocates and initializes (with `init`) an instance of that class. If the receiver hasn’t had either a prototype cell or a cell class set, [NSMatrix](../nsmatrix.md) creates an [NSActionCell](../nsactioncell.md).

Your code should never invoke this method directly; it’s used by [addRow()](addrow%28%29.md) and other methods when a cell must be created. It may be overridden to provide more specific initialization of cells.

## See Also

### Related Documentation

- [prototype](prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.
- [cellClass](cellclass.md): The subclass of [NSCell](../nscell.md) that the matrix uses when creating new (empty) cells.

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
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.
- [putCell(\_:atRow:column:)](putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.

# makeCellAtRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new cell at the location specified by the given row and column in the receiver.

## Declaration

```objectivec
- (NSCell *) makeCellAtRow:(NSInteger) row column:(NSInteger) col;
```

## Parameters

- `row`: The row in which to create the new cell.
- `col`: The column in which to create the new cell.

<a id="return-value"></a>

## Return Value

The newly created cell.

<a id="Discussion"></a>

## Discussion

If the receiver has a prototype cell, it’s copied to create the new cell. If not, and if the receiver has a cell class set, it allocates and initializes (with `init`) an instance of that class. If the receiver hasn’t had either a prototype cell or a cell class set, [NSMatrix](../nsmatrix.md) creates an [NSActionCell](../nsactioncell.md).

Your code should never invoke this method directly; it’s used by [addRow](addrow%28%29.md) and other methods when a cell must be created. It may be overridden to provide more specific initialization of cells.

## See Also

### Related Documentation

- [prototype](prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.
- [cellClass](cellclass.md): The subclass of [NSCell](../nscell.md) that the matrix uses when creating new (empty) cells.

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
- [numberOfColumns](numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](numberofrows.md): The number of rows in the matrix.
- [putCell:atRow:column:](putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.
