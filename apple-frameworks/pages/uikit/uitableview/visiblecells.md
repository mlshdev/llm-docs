> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/visiblecells](https://developer.apple.com/documentation/uikit/uitableview/visiblecells)

# visibleCells (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The table cells that are visible in the table view.

## Declaration

```swift
var visibleCells: [UITableViewCell] { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array containing [UITableViewCell](../uitableviewcell.md) objects, each representing a visible cell in the table view.

## See Also

### Getting cells and section-based views

- [cellForRow(at:)](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerView(forSection:)](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerView(forSection:)](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPath(for:)](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRow(at:)](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRows(in:)](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.

# visibleCells (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The table cells that are visible in the table view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof UITableViewCell *> * visibleCells;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array containing [UITableViewCell](../uitableviewcell.md) objects, each representing a visible cell in the table view.

## See Also

### Getting cells and section-based views

- [cellForRowAtIndexPath:](cellforrow%28at_%29.md): Returns the table cell at the index path you specify.
- [headerViewForSection:](headerview%28forsection_%29.md): Returns the header view for the specified section.
- [footerViewForSection:](footerview%28forsection_%29.md): Returns the footer view for the specified section.
- [indexPathForCell:](indexpath%28for_%29.md): Returns an index path that represents the row and section of a specified table-view cell.
- [indexPathForRowAtPoint:](indexpathforrow%28at_%29.md): Returns an index path that identifies the row and section at the specified point.
- [indexPathsForRowsInRect:](indexpathsforrows%28in_%29.md): Returns an array of index paths, each representing a row that the specified rectangle encloses.
- [indexPathsForVisibleRows](indexpathsforvisiblerows.md): An array of index paths, each identifying a visible row in the table view.
