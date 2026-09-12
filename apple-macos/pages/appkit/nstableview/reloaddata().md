> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/reloaddata()](https://developer.apple.com/documentation/appkit/nstableview/reloaddata())

# reloadData() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.

## Declaration

```swift
func reloadData()
```

<a id="Discussion"></a>

## Discussion

This method forces a redraw of all the visible cells in the table view. If you want to update the value in a single cell, column, or row, it is more efficient to use [frameOfCell(atColumn:row:)](frameofcell%28atcolumn_row_%29.md), [rect(ofColumn:)](rect%28ofcolumn_%29.md), or [rect(ofRow:)](rect%28ofrow_%29.md) in conjunction with the [setNeedsDisplay(\_:)](../nsview/setneedsdisplay%28__%29.md) method of [NSView](../nsview.md). If you just want to update the scroller, use [noteNumberOfRowsChanged()](notenumberofrowschanged%28%29.md); if the height of a set of rows changes, use [noteHeightOfRows(withIndexesChanged:)](noteheightofrows%28withindexeschanged_%29.md).

> **Note**

>  For [NSView](../nsview.md)-based table views, this method drops all the visible row views and cell views, and re-acquires them all.

## See Also

### Related Documentation

- [noteHeightOfRows(withIndexesChanged:)](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.
- [frameOfCell(atColumn:row:)](frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [noteNumberOfRowsChanged()](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [rect(ofColumn:)](rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rect(ofRow:)](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.

### Managing the Table’s Data

- [dataSource](datasource.md): The object that provides the data displayed by the table view.
- [usesStaticContents](usesstaticcontents.md): A Boolean value indicating whether the table uses static data.
- [reloadData(forRowIndexes:columnIndexes:)](reloaddata%28forrowindexes_columnindexes_%29.md): Reloads the data for only the specified rows and columns.

# reloadData (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.

## Declaration

```objectivec
- (void) reloadData;
```

<a id="Discussion"></a>

## Discussion

This method forces a redraw of all the visible cells in the table view. If you want to update the value in a single cell, column, or row, it is more efficient to use [frameOfCellAtColumn:row:](frameofcell%28atcolumn_row_%29.md), [rectOfColumn:](rect%28ofcolumn_%29.md), or [rectOfRow:](rect%28ofrow_%29.md) in conjunction with the [setNeedsDisplayInRect:](../nsview/setneedsdisplay%28__%29.md) method of [NSView](../nsview.md). If you just want to update the scroller, use [noteNumberOfRowsChanged](notenumberofrowschanged%28%29.md); if the height of a set of rows changes, use [noteHeightOfRowsWithIndexesChanged:](noteheightofrows%28withindexeschanged_%29.md).

> **Note**

>  For [NSView](../nsview.md)-based table views, this method drops all the visible row views and cell views, and re-acquires them all.

## See Also

### Related Documentation

- [noteHeightOfRowsWithIndexesChanged:](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.
- [frameOfCellAtColumn:row:](frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [noteNumberOfRowsChanged](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [rectOfColumn:](rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rectOfRow:](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.

### Managing the Table’s Data

- [dataSource](datasource.md): The object that provides the data displayed by the table view.
- [usesStaticContents](usesstaticcontents.md): A Boolean value indicating whether the table uses static data.
- [reloadDataForRowIndexes:columnIndexes:](reloaddata%28forrowindexes_columnindexes_%29.md): Reloads the data for only the specified rows and columns.
