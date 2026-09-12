> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/indexpathforrow(at:)](https://developer.apple.com/documentation/uikit/uitableview/indexpathforrow(at:))

# indexPathForRow(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an index path that identifies the row and section at the specified point.

## Declaration

```swift
func indexPathForRow(at point: CGPoint) -> IndexPath?
```

## Parameters

- `point`: A point in the local coordinate system of the table view (the table view’s bounds).

<a id="return-value"></a>

## Return Value

An index path representing the row and section associated with `point`, or `nil` if the point is out of the bounds of any row.

## See Also

### Getting cells and section-based views

- [cellForRow(at:)](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerView(forSection:)](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerView(forSection:)](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPath(for:)](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathsForRows(in:)](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.

# indexPathForRowAtPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an index path that identifies the row and section at the specified point.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForRowAtPoint:(CGPoint) point;
```

## Parameters

- `point`: A point in the local coordinate system of the table view (the table view’s bounds).

<a id="return-value"></a>

## Return Value

An index path representing the row and section associated with `point`, or `nil` if the point is out of the bounds of any row.

## See Also

### Getting cells and section-based views

- [cellForRowAtIndexPath:](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerViewForSection:](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerViewForSection:](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPathForCell:](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathsForRowsInRect:](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.
