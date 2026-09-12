> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/indexpath(for:)](https://developer.apple.com/documentation/uikit/uitableview/indexpath(for:))

# indexPath(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an index path that represents the row and section of a specified table-view cell.

## Declaration

```swift
func indexPath(for cell: UITableViewCell) -> IndexPath?
```

## Parameters

- `cell`: A cell object of the table view.

<a id="return-value"></a>

## Return Value

An index path representing the row and section of the cell, or `nil` if the index path is invalid.

## See Also

### Getting cells and section-based views

- [cellForRow(at:)](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerView(forSection:)](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerView(forSection:)](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPathForRow(at:)](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRows(in:)](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.

# indexPathForCell: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an index path that represents the row and section of a specified table-view cell.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForCell:(UITableViewCell *) cell;
```

## Parameters

- `cell`: A cell object of the table view.

<a id="return-value"></a>

## Return Value

An index path representing the row and section of the cell, or `nil` if the index path is invalid.

## See Also

### Getting cells and section-based views

- [cellForRowAtIndexPath:](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerViewForSection:](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerViewForSection:](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPathForRowAtPoint:](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRowsInRect:](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.
