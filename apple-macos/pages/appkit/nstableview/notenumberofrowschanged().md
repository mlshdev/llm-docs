> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/notenumberofrowschanged()](https://developer.apple.com/documentation/appkit/nstableview/notenumberofrowschanged())

# noteNumberOfRowsChanged() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the table view that the number of records in its data source has changed.

## Declaration

```swift
func noteNumberOfRowsChanged()
```

<a id="Discussion"></a>

## Discussion

This method allows the table view to update the scrollers in its scroll view without actually reloading data into the table view. It’s useful for a data source that continually receives data in the background over a period of time, in which case the table view can remain responsive to the user while the data is received.

See the [NSTableViewDataSource](../nstableviewdatasource.md) protocol specification for information on the messages an `NSTableView` object sends to its data source.

> **Note**

>  When using [NSView](../nsview.md)-based table views this method should be avoided. The table will query the data source for the new number of rows, and properly insert (or remove) rows at the end of the table as necessary with an animation.
>
> When using [NSCell](../nscell.md)-based table views this method tells the table that there may be more (or less) rows available and to reload state based on that information.
>
> This method does not work for [NSOutlineView](../nsoutlineview.md), and should not be called.

## See Also

### Related Documentation

- [reloadData()](reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.
- [numberOfRows(in:)](../nstableviewdatasource/numberofrows%28in_%29.md): Returns the number of records managed for `aTableView` by the data source object.

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
- [tile()](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit()](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRows(withIndexesChanged:)](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.

# noteNumberOfRowsChanged (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the table view that the number of records in its data source has changed.

## Declaration

```objectivec
- (void) noteNumberOfRowsChanged;
```

<a id="Discussion"></a>

## Discussion

This method allows the table view to update the scrollers in its scroll view without actually reloading data into the table view. It’s useful for a data source that continually receives data in the background over a period of time, in which case the table view can remain responsive to the user while the data is received.

See the [NSTableViewDataSource](../nstableviewdatasource.md) protocol specification for information on the messages an `NSTableView` object sends to its data source.

> **Note**

>  When using [NSView](../nsview.md)-based table views this method should be avoided. The table will query the data source for the new number of rows, and properly insert (or remove) rows at the end of the table as necessary with an animation.
>
> When using [NSCell](../nscell.md)-based table views this method tells the table that there may be more (or less) rows available and to reload state based on that information.
>
> This method does not work for [NSOutlineView](../nsoutlineview.md), and should not be called.

## See Also

### Related Documentation

- [reloadData](reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.
- [numberOfRowsInTableView:](../nstableviewdatasource/numberofrows%28in_%29.md): Returns the number of records managed for `aTableView` by the data source object.

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
- [tile](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRowsWithIndexesChanged:](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.
