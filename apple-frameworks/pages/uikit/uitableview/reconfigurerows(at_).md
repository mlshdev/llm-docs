> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/reconfigurerows(at:)](https://developer.apple.com/documentation/uikit/uitableview/reconfigurerows(at:))

# reconfigureRows(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.

## Declaration

```swift
func reconfigureRows(at indexPaths: [IndexPath])
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects identifying the items you want to update.

<a id="Discussion"></a>

## Discussion

To update the contents of existing (including prefetched) cells without replacing them with new cells, use this method instead of [reloadRows(at:with:)](reloadrows%28at_with_%29.md). For optimal performance, choose to reconfigure rows instead of reloading rows unless you have an explicit need to replace the existing cell with a new cell.

Your cell provider must dequeue the same type of cell for the provided index path, and must return the same existing cell for a given index path. Because this method reconfigures existing cells, the table view doesn’t call [prepareForReuse()](../uitableviewcell/prepareforreuse%28%29.md) for each cell dequeued. If you need to return a different type of cell for an index path, use [reloadRows(at:with:)](reloadrows%28at_with_%29.md) instead.

If your cells are self-sizing, the table view resizes your cells after reconfiguring them.

By default, the table view animates any size or layout changes that are a result of reconfiguration. To reconfigure cells without animation, use `UIView`’s [performWithoutAnimation(\_:)](../uiview/performwithoutanimation%28__%29.md) when you call this method. Alternatively, to avoid animations when setting specific properties, use [performWithoutAnimation(\_:)](../uiview/performwithoutanimation%28__%29.md) in your cell configuration logic.

If your table view uses a custom implementation of `UITableViewDataSource`, use this method. If your table view uses a diffable data source, use [reconfigureItems(\_:)](../nsdiffabledatasourcesnapshot-swift.struct/reconfigureitems%28__%29.md) (Swift) or [reconfigureItems(withIdentifiers:)](../nsdiffabledatasourcesnapshotreference/reconfigureitems%28withidentifiers_%29.md) (Objective-C) on `NSDiffableDataSourceSnapshot` instead.

## See Also

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reloadData()](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRows(at:with:)](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections(\_:with:)](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles()](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.

# reconfigureRowsAtIndexPaths: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.

## Declaration

```objectivec
- (void) reconfigureRowsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects identifying the items you want to update.

<a id="Discussion"></a>

## Discussion

To update the contents of existing (including prefetched) cells without replacing them with new cells, use this method instead of [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md). For optimal performance, choose to reconfigure rows instead of reloading rows unless you have an explicit need to replace the existing cell with a new cell.

Your cell provider must dequeue the same type of cell for the provided index path, and must return the same existing cell for a given index path. Because this method reconfigures existing cells, the table view doesn’t call [prepareForReuse](../uitableviewcell/prepareforreuse%28%29.md) for each cell dequeued. If you need to return a different type of cell for an index path, use [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md) instead.

If your cells are self-sizing, the table view resizes your cells after reconfiguring them.

By default, the table view animates any size or layout changes that are a result of reconfiguration. To reconfigure cells without animation, use `UIView`’s [performWithoutAnimation:](../uiview/performwithoutanimation%28__%29.md) when you call this method. Alternatively, to avoid animations when setting specific properties, use [performWithoutAnimation:](../uiview/performwithoutanimation%28__%29.md) in your cell configuration logic.

If your table view uses a custom implementation of `UITableViewDataSource`, use this method. If your table view uses a diffable data source, use [reconfigureItems(\_:)](../nsdiffabledatasourcesnapshot-swift.struct/reconfigureitems%28__%29.md) (Swift) or [reconfigureItemsWithIdentifiers:](../nsdiffabledatasourcesnapshotreference/reconfigureitems%28withidentifiers_%29.md) (Objective-C) on `NSDiffableDataSourceSnapshot` instead.

## See Also

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reloadData](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections:withRowAnimation:](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.
