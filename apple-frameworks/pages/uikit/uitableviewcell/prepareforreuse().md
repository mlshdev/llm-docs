> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/prepareforreuse()](https://developer.apple.com/documentation/uikit/uitableviewcell/prepareforreuse())

# prepareForReuse() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Prepares a reusable cell for reuse by the table view’s delegate.

## Declaration

```swift
func prepareForReuse()
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)

<a id="Discussion"></a>

## Discussion

If a [UITableViewCell](../uitableviewcell.md) object has a reuse identifier, the table view invokes this method just before returning the object from the `UITableView` method [dequeueReusableCell(withIdentifier:)](../uitableview/dequeuereusablecell%28withidentifier_%29.md). To avoid potential performance issues, you should only reset attributes of the cell that are not related to content, for example, alpha, editing, and selection state. The table view’s delegate in [tableView(\_:cellForRowAt:)](../uitableviewdatasource/tableview%28__cellforrowat_%29.md) should *always* reset all content when reusing a cell.

The table view doesn’t call this method if the cell object doesn’t have an associated reuse identifier, or if you use [reconfigureRows(at:)](../uitableview/reconfigurerows%28at_%29.md) to update the contents of an existing cell.

If you override this method, you must be sure to invoke the superclass implementation.

## See Also

### Reusing cells

- [reuseIdentifier](reuseidentifier.md): A string for identifying a reusable cell.

# prepareForReuse (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Prepares a reusable cell for reuse by the table view’s delegate.

## Declaration

```objectivec
- (void) prepareForReuse;
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)

<a id="Discussion"></a>

## Discussion

If a [UITableViewCell](../uitableviewcell.md) object has a reuse identifier, the table view invokes this method just before returning the object from the `UITableView` method [dequeueReusableCellWithIdentifier:](../uitableview/dequeuereusablecell%28withidentifier_%29.md). To avoid potential performance issues, you should only reset attributes of the cell that are not related to content, for example, alpha, editing, and selection state. The table view’s delegate in [tableView:cellForRowAtIndexPath:](../uitableviewdatasource/tableview%28__cellforrowat_%29.md) should *always* reset all content when reusing a cell.

The table view doesn’t call this method if the cell object doesn’t have an associated reuse identifier, or if you use [reconfigureRowsAtIndexPaths:](../uitableview/reconfigurerows%28at_%29.md) to update the contents of an existing cell.

If you override this method, you must be sure to invoke the superclass implementation.

## See Also

### Related Documentation

- [initWithFrame:reuseIdentifier:](initwithframe_reuseidentifier_.md): Deprecated. Initializes and returns a table cell object.

### Reusing cells

- [reuseIdentifier](reuseidentifier.md): A string for identifying a reusable cell.
