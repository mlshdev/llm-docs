> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/headerview(forsection:)](https://developer.apple.com/documentation/uikit/uitableview/headerview(forsection:))

# headerView(forSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the header view for the specified section.

## Declaration

```swift
func headerView(forSection section: Int) -> UITableViewHeaderFooterView?
```

## Parameters

- `section`: An index number that identifies a section of the table. Table views in a plain style have a section index of zero.

<a id="return-value"></a>

## Return Value

The header view associated with the section, or `nil` if the section does not have a header view.

## See Also

### Getting cells and section-based views

- [cellForRow(at:)](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [footerView(forSection:)](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPath(for:)](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRow(at:)](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRows(in:)](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.

# headerViewForSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the header view for the specified section.

## Declaration

```objectivec
- (UITableViewHeaderFooterView *) headerViewForSection:(NSInteger) section;
```

## Parameters

- `section`: An index number that identifies a section of the table. Table views in a plain style have a section index of zero.

<a id="return-value"></a>

## Return Value

The header view associated with the section, or `nil` if the section does not have a header view.

## See Also

### Getting cells and section-based views

- [cellForRowAtIndexPath:](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [footerViewForSection:](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPathForCell:](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRowAtPoint:](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRowsInRect:](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [visibleCells](visiblecells.md): The table cells that are visible in the table view.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.
