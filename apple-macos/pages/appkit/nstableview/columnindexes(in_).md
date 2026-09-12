> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/columnindexes(in:)](https://developer.apple.com/documentation/appkit/nstableview/columnindexes(in:))

# columnIndexes(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the indexes of the table view’s columns that intersect the specified rectangle.

## Declaration

```swift
func columnIndexes(in rect: NSRect) -> IndexSet
```

## Parameters

- `rect`: The rectangle in the table view’s coordinate system to test for column enclosure.

<a id="return-value"></a>

## Return Value

New [NSIndexSet](https://developer.apple.com/documentation/foundation/nsindexset) object containing the indexes of the table view’s columns that intersect with `rect`.

<a id="Discussion"></a>

## Discussion

Columns that return [true](https://developer.apple.com/documentation/swift/true) for the `NSTableColumn` method [isHidden](../nstablecolumn/ishidden.md) are excluded from the results.

## See Also

### Layout Support

- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rect(ofColumn:)](rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rect(ofRow:)](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rows(in:)](rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [column(at:)](column%28at_%29.md): Returns the index of the column the specified point lies in.
- [row(at:)](row%28at_%29.md): Returns the index of the row the specified point lies in.
- [frameOfCell(atColumn:row:)](frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit()](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged()](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [tile()](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit()](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRows(withIndexesChanged:)](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.

# columnIndexesInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the indexes of the table view’s columns that intersect the specified rectangle.

## Declaration

```objectivec
- (NSIndexSet *) columnIndexesInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle in the table view’s coordinate system to test for column enclosure.

<a id="return-value"></a>

## Return Value

New [NSIndexSet](https://developer.apple.com/documentation/foundation/nsindexset) object containing the indexes of the table view’s columns that intersect with `rect`.

<a id="Discussion"></a>

## Discussion

Columns that return [true](https://developer.apple.com/documentation/swift/true) for the `NSTableColumn` method [hidden](../nstablecolumn/ishidden.md) are excluded from the results.

## See Also

### Layout Support

- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md): The layout direction of the user interface.
- [rectOfColumn:](rect%28ofcolumn_%29.md): Returns the rectangle containing the column at the specified index.
- [rectOfRow:](rect%28ofrow_%29.md): Returns the rectangle containing the row at the specified index.
- [rowsInRect:](rows%28in_%29.md): Returns a range of indexes for the rows that lie wholly or partially within the vertical boundaries of the specified rectangle.
- [columnAtPoint:](column%28at_%29.md): Returns the index of the column the specified point lies in.
- [rowAtPoint:](row%28at_%29.md): Returns the index of the row the specified point lies in.
- [frameOfCellAtColumn:row:](frameofcell%28atcolumn_row_%29.md): Returns a rectangle locating the cell that lies at the intersection of the specified column and row.
- [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md): The table view’s column autoresizing style.
- [sizeLastColumnToFit](sizelastcolumntofit%28%29.md): Resizes the last column so the table view fits exactly within its enclosing clip view.
- [noteNumberOfRowsChanged](notenumberofrowschanged%28%29.md): Informs the table view that the number of records in its data source has changed.
- [tile](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRowsWithIndexesChanged:](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.
