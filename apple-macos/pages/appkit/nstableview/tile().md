> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/tile()](https://developer.apple.com/documentation/appkit/nstableview/tile())

# tile() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Properly sizes the table view and its header view and marks it as needing display.

## Declaration

```swift
func tile()
```

<a id="Discussion"></a>

## Discussion

Also resets cursor rectangles for the header view and line scroll amounts for the `NSScrollView` object.

For performance reasons, calling this method is generally not recommended. Instead, the table will call it automatically when necessary.

## See Also

### Related Documentation

- [needsDisplay](../nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.

### Layout Support

- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rect(ofColumn:)](rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rect(ofRow:)](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rows(in:)](rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [columnIndexes(in:)](columnindexes%28in_%29.md): Returns the indexes of the table view’s columns that intersect the specified rectangle.
- [column(at:)](column%28at_%29.md): Returns the index of the column the specified point lies in.
- [row(at:)](row%28at_%29.md): Returns the index of the row the specified point lies in.
- [frameOfCell(atColumn:row:)](frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit()](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged()](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [sizeToFit()](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRows(withIndexesChanged:)](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.

# tile (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Properly sizes the table view and its header view and marks it as needing display.

## Declaration

```objectivec
- (void) tile;
```

<a id="Discussion"></a>

## Discussion

Also resets cursor rectangles for the header view and line scroll amounts for the `NSScrollView` object.

For performance reasons, calling this method is generally not recommended. Instead, the table will call it automatically when necessary.

## See Also

### Related Documentation

- [needsDisplay](../nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.

### Layout Support

- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rectOfColumn:](rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rectOfRow:](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rowsInRect:](rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [columnIndexesInRect:](columnindexes%28in_%29.md): Returns the indexes of the table view’s columns that intersect the specified rectangle.
- [columnAtPoint:](column%28at_%29.md): Returns the index of the column the specified point lies in.
- [rowAtPoint:](row%28at_%29.md): Returns the index of the row the specified point lies in.
- [frameOfCellAtColumn:row:](frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [sizeToFit](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRowsWithIndexesChanged:](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.
