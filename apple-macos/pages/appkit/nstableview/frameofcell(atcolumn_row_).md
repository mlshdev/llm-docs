> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/frameofcell(atcolumn:row:)](https://developer.apple.com/documentation/appkit/nstableview/frameofcell(atcolumn:row:))

# frameOfCell(atColumn:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a rectangle locating the cell that lies at the intersection of the specified column and row.

## Declaration

```swift
func frameOfCell(atColumn column: Int, row: Int) -> NSRect
```

## Parameters

- `column`: The index in the [tableColumns](tablecolumns.md) array of the column containing the cell whose rectangle you want.
- `row`: The index of the row containing the cell whose rectangle you want.

<a id="return-value"></a>

## Return Value

A rectangle locating the cell that lies at the intersection of `columnIndex` and `rowIndex`. This method returns `NSZeroRect` if `columnIndex` or `rowIndex` is greater than the number of columns or rows in the table view.

<a id="Discussion"></a>

## Discussion

You can use this method to update a single cell more efficiently than sending the table view a [reloadData()](reloaddata%28%29.md) message using [reloadData(forRowIndexes:columnIndexes:)](reloaddata%28forrowindexes_columnindexes_%29.md)

The result of this method is used in a [draw(withFrame:in:)](../nscell/draw%28withframe_in_%29.md) message to the table column’s data cell. You can subclass and override this method to customize the frame of a particular cell. However, never return a frame larger than the default implementation returns.

The default frame is computed to have a height equal to the [rect(ofRow:)](rect%28ofrow_%29.md) for `rowIndex`, minus the half [intercellSpacing](intercellspacing.md) height on the top and half on the bottom.  The width of frame is equal to the with of the table column minus half the [intercellSpacing](intercellspacing.md) width on the left, and half on the right.

## See Also

### Layout Support

- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rect(ofColumn:)](rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rect(ofRow:)](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rows(in:)](rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [columnIndexes(in:)](columnindexes%28in_%29.md): Returns the indexes of the table view’s columns that intersect the specified rectangle.
- [column(at:)](column%28at_%29.md): Returns the index of the column the specified point lies in.
- [row(at:)](row%28at_%29.md): Returns the index of the row the specified point lies in.
- [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit()](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged()](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [tile()](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit()](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRows(withIndexesChanged:)](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.

# frameOfCellAtColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a rectangle locating the cell that lies at the intersection of the specified column and row.

## Declaration

```objectivec
- (NSRect) frameOfCellAtColumn:(NSInteger) column row:(NSInteger) row;
```

## Parameters

- `column`: The index in the [tableColumns](tablecolumns.md) array of the column containing the cell whose rectangle you want.
- `row`: The index of the row containing the cell whose rectangle you want.

<a id="return-value"></a>

## Return Value

A rectangle locating the cell that lies at the intersection of `columnIndex` and `rowIndex`. This method returns `NSZeroRect` if `columnIndex` or `rowIndex` is greater than the number of columns or rows in the table view.

<a id="Discussion"></a>

## Discussion

You can use this method to update a single cell more efficiently than sending the table view a [reloadData](reloaddata%28%29.md) message using [reloadDataForRowIndexes:columnIndexes:](reloaddata%28forrowindexes_columnindexes_%29.md)

The result of this method is used in a [drawWithFrame:inView:](../nscell/draw%28withframe_in_%29.md) message to the table column’s data cell. You can subclass and override this method to customize the frame of a particular cell. However, never return a frame larger than the default implementation returns.

The default frame is computed to have a height equal to the [rectOfRow:](rect%28ofrow_%29.md) for `rowIndex`, minus the half [intercellSpacing](intercellspacing.md) height on the top and half on the bottom.  The width of frame is equal to the with of the table column minus half the [intercellSpacing](intercellspacing.md) width on the left, and half on the right.

## See Also

### Layout Support

- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rectOfColumn:](rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rectOfRow:](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rowsInRect:](rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [columnIndexesInRect:](columnindexes%28in_%29.md): Returns the indexes of the table view’s columns that intersect the specified rectangle.
- [columnAtPoint:](column%28at_%29.md): Returns the index of the column the specified point lies in.
- [rowAtPoint:](row%28at_%29.md): Returns the index of the row the specified point lies in.
- [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [tile](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRowsWithIndexesChanged:](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.
