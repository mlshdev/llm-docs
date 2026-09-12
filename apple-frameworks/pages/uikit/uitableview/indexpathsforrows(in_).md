> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/indexpathsforrows(in:)](https://developer.apple.com/documentation/uikit/uitableview/indexpathsforrows(in:))

# indexPathsForRows(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an array of index paths, each representing a row that the specified rectangle encloses.

## Declaration

```swift
func indexPathsForRows(in rect: CGRect) -> [IndexPath]?
```

## Parameters

- `rect`: A rectangle defining an area of the table view in local coordinates.

<a id="return-value"></a>

## Return Value

An array of [NSIndexPath](../../foundation/nsindexpath.md) objects each representing a row and section index identifying a row within `rect`. Returns an empty array if there aren’t any rows to return.

## See Also

### Getting cells and section-based views

- [cellForRow(at:)](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerView(forSection:)](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerView(forSection:)](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPath(for:)](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRow(at:)](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.

# indexPathsForRowsInRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an array of index paths, each representing a row that the specified rectangle encloses.

## Declaration

```objectivec
- (NSArray<NSIndexPath *> *) indexPathsForRowsInRect:(CGRect) rect;
```

## Parameters

- `rect`: A rectangle defining an area of the table view in local coordinates.

<a id="return-value"></a>

## Return Value

An array of [NSIndexPath](../../foundation/nsindexpath.md) objects each representing a row and section index identifying a row within `rect`. Returns an empty array if there aren’t any rows to return.

## See Also

### Getting cells and section-based views

- [cellForRowAtIndexPath:](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerViewForSection:](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerViewForSection:](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPathForCell:](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRowAtPoint:](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.
