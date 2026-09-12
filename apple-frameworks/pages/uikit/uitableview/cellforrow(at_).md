> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/cellforrow(at:)](https://developer.apple.com/documentation/uikit/uitableview/cellforrow(at:))

# cellForRow(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the table cell at the index path you specify.

## Declaration

```swift
func cellForRow(at indexPath: IndexPath) -> UITableViewCell?
```

## Parameters

- `indexPath`: The index path locating the row in the table view.

<a id="return-value"></a>

## Return Value

The cell object at the corresponding index path. In versions of iOS earlier than iOS 15, this method returns `nil` if the cell isn’t visible or if `indexPath` is out of range. In iOS 15 and later, this method returns a non-`nil` cell if the table view retains a prepared cell at the specified index path, even if the cell isn’t currently visible.

<a id="Discussion"></a>

## Discussion

In iOS 15 and later, the table view retains a prepared cell in the following situations:

- Cells that the table view prefetches and retains in its cache of prepared cells, but that aren’t visible because the table view hasn’t displayed them yet.
- Cells that the table view finishes displaying and continues to retain in its cache of prepared cells because they remain near the visible region and might scroll back into view.
- The cell that contains the first responder.
- The cell that has focus.

## See Also

### Getting cells and section-based views

- [headerView(forSection:)](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerView(forSection:)](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPath(for:)](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRow(at:)](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRows(in:)](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.

# cellForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the table cell at the index path you specify.

## Declaration

```objectivec
- (UITableViewCell *) cellForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path locating the row in the table view.

<a id="return-value"></a>

## Return Value

The cell object at the corresponding index path. In versions of iOS earlier than iOS 15, this method returns `nil` if the cell isn’t visible or if `indexPath` is out of range. In iOS 15 and later, this method returns a non-`nil` cell if the table view retains a prepared cell at the specified index path, even if the cell isn’t currently visible.

<a id="Discussion"></a>

## Discussion

In iOS 15 and later, the table view retains a prepared cell in the following situations:

- Cells that the table view prefetches and retains in its cache of prepared cells, but that aren’t visible because the table view hasn’t displayed them yet.
- Cells that the table view finishes displaying and continues to retain in its cache of prepared cells because they remain near the visible region and might scroll back into view.
- The cell that contains the first responder.
- The cell that has focus.

## See Also

### Getting cells and section-based views

- [headerViewForSection:](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerViewForSection:](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPathForCell:](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRowAtPoint:](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRowsInRect:](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.
