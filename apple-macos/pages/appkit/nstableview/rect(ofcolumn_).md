> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/rect(ofcolumn:)](https://developer.apple.com/documentation/appkit/nstableview/rect(ofcolumn:))

# rect(ofColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle containing the column at the specified index.

## Declaration

```swift
func rect(ofColumn column: Int) -> NSRect
```

## Parameters

- `column`: The index in the [tableColumns](tablecolumns.md) array of a column in the table view.

<a id="return-value"></a>

## Return Value

The rectangle containing the column at `columnIndex`. Returns `NSZeroRect` if `columnIndex` lies outside the range of valid column indexes for the table view.

<a id="Discussion"></a>

## Discussion

You can use this method to update a single column more efficiently than sending the table view a [reloadData()](reloaddata%28%29.md) message.

```objc
[aTableView setNeedsDisplayInRect:[aTableView rectOfColumn:column]];
```

## See Also

### Related Documentation

- [headerRect(ofColumn:)](../nstableheaderview/headerrect%28ofcolumn_%29.md): Returns the rectangle containing the header tile for the column at `columnIndex`.

### Layout Support

- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rect(ofRow:)](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rows(in:)](rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [columnIndexes(in:)](columnindexes%28in_%29.md): Returns the indexes of the table view’s columns that intersect the specified rectangle.
- [column(at:)](column%28at_%29.md): Returns the index of the column the specified point lies in.
- [row(at:)](row%28at_%29.md): Returns the index of the row the specified point lies in.
- [frameOfCell(atColumn:row:)](frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit()](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged()](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [tile()](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit()](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRows(withIndexesChanged:)](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.

# rectOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle containing the column at the specified index.

## Declaration

```objectivec
- (NSRect) rectOfColumn:(NSInteger) column;
```

## Parameters

- `column`: The index in the [tableColumns](tablecolumns.md) array of a column in the table view.

<a id="return-value"></a>

## Return Value

The rectangle containing the column at `columnIndex`. Returns `NSZeroRect` if `columnIndex` lies outside the range of valid column indexes for the table view.

<a id="Discussion"></a>

## Discussion

You can use this method to update a single column more efficiently than sending the table view a [reloadData](reloaddata%28%29.md) message.

```objc
[aTableView setNeedsDisplayInRect:[aTableView rectOfColumn:column]];
```

## See Also

### Related Documentation

- [headerRectOfColumn:](../nstableheaderview/headerrect%28ofcolumn_%29.md): Returns the rectangle containing the header tile for the column at `columnIndex`.

### Layout Support

- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rectOfRow:](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rowsInRect:](rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [columnIndexesInRect:](columnindexes%28in_%29.md): Returns the indexes of the table view’s columns that intersect the specified rectangle.
- [columnAtPoint:](column%28at_%29.md): Returns the index of the column the specified point lies in.
- [rowAtPoint:](row%28at_%29.md): Returns the index of the row the specified point lies in.
- [frameOfCellAtColumn:row:](frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [tile](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRowsWithIndexesChanged:](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.
