> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/userinterfacelayoutdirection](https://developer.apple.com/documentation/appkit/nstableview/userinterfacelayoutdirection)

# userInterfaceLayoutDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The layout direction of the user interface.

## Declaration

```swift
var userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSUserInterfaceLayoutDirection.leftToRight](../nsuserinterfacelayoutdirection/lefttoright.md). When the property is set to [NSUserInterfaceLayoutDirection.rightToLeft](../nsuserinterfacelayoutdirection/righttoleft.md), the table view flips the visual order of the table columns, but the logical order remains unchanged. Although this property was introduced in macOS 10.12, in earlier versions the property always returned [NSUserInterfaceLayoutDirection.leftToRight](../nsuserinterfacelayoutdirection/lefttoright.md).

## See Also

### Layout Support

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
- [tile()](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit()](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRows(withIndexesChanged:)](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.

# userInterfaceLayoutDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The layout direction of the user interface.

## Declaration

```objectivec
@property NSUserInterfaceLayoutDirection userInterfaceLayoutDirection;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSUserInterfaceLayoutDirectionLeftToRight](../nsuserinterfacelayoutdirection/lefttoright.md). When the property is set to [NSUserInterfaceLayoutDirectionRightToLeft](../nsuserinterfacelayoutdirection/righttoleft.md), the table view flips the visual order of the table columns, but the logical order remains unchanged. Although this property was introduced in macOS 10.12, in earlier versions the property always returned [NSUserInterfaceLayoutDirectionLeftToRight](../nsuserinterfacelayoutdirection/lefttoright.md).

## See Also

### Layout Support

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
- [tile](tile%28%29.md): Properly sizes the table view and its header view and marks it as needing display.
- [sizeToFit](sizetofit%28%29.md): Sizes the table view based on a uniform column autoresizing style.
- [noteHeightOfRowsWithIndexesChanged:](noteheightofrows%28withindexeschanged_%29.md): Informs the table view that the rows specified in `indexSet` have changed height.
