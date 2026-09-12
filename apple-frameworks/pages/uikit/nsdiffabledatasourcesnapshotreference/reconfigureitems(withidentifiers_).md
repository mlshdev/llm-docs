> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference/reconfigureitems(withidentifiers:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/reconfigureitems(withidentifiers:))

# reconfigureItems(withIdentifiers:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.

## Declaration

```swift
func reconfigureItems(withIdentifiers identifiers: [Any])
```

## Parameters

- `identifiers`: An array of identifiers corresponding to the items to update data for in the snapshot.

<a id="Discussion"></a>

## Discussion

To update the contents of existing (including prefetched) cells without replacing them with new cells, use this method instead of [reloadItems(withIdentifiers:)](reloaditems%28withidentifiers_%29.md). For optimal performance, choose to reconfigure items instead of reloading items unless you have an explicit need to replace the existing cell with a new cell.

Your cell provider must dequeue the same type of cell for the provided index path, and must return the same existing cell for a given index path. Because this method reconfigures existing cells, the collection view or table view doesn’t call `prepareForReuse` for each cell dequeued. If you need to return a different type of cell for an index path, use [reloadItems(withIdentifiers:)](reloaditems%28withidentifiers_%29.md) instead.

If your cells are self-sizing, the collection view or table view resizes your cells after reconfiguring them.

Set the `animatingDifferences` parameter to tell the collection view or table view whether to animate any size or layout changes that are a result of reconfiguration when you apply the snapshot to your data source. To avoid animations when setting specific properties, use [performWithoutAnimation(\_:)](../uiview/performwithoutanimation%28__%29.md) in your cell configuration logic.

If your collection view or table view uses a diffable data source, use this method. If your collection view uses a custom implementation of `UICollectionViewDataSource`, use [reconfigureItems(at:)](../uicollectionview/reconfigureitems%28at_%29.md) instead. If your table view uses a custom implementation of `UITableViewDataSource`, use [reconfigureRows(at:)](../uitableview/reconfigurerows%28at_%29.md) instead.

## See Also

### Reloading data

- [reconfiguredItemIdentifiers](reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadItems(withIdentifiers:)](reloaditems%28withidentifiers_%29.md): Reloads the data within the specified items in the snapshot.
- [reloadedItemIdentifiers](reloadeditemidentifiers.md): Identifies the items reloaded by the changes to the snapshot.
- [reloadSections(withIdentifiers:)](reloadsections%28withidentifiers_%29.md): Reloads the data within the specified sections of the snapshot.
- [reloadedSectionIdentifiers](reloadedsectionidentifiers.md): Identifies the sections reloaded by the changes to the snapshot.

# reconfigureItemsWithIdentifiers: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.

## Declaration

```objectivec
- (void) reconfigureItemsWithIdentifiers:(NSArray<id> *) identifiers;
```

## Parameters

- `identifiers`: An array of identifiers corresponding to the items to update data for in the snapshot.

<a id="Discussion"></a>

## Discussion

To update the contents of existing (including prefetched) cells without replacing them with new cells, use this method instead of [reloadItemsWithIdentifiers:](reloaditems%28withidentifiers_%29.md). For optimal performance, choose to reconfigure items instead of reloading items unless you have an explicit need to replace the existing cell with a new cell.

Your cell provider must dequeue the same type of cell for the provided index path, and must return the same existing cell for a given index path. Because this method reconfigures existing cells, the collection view or table view doesn’t call `prepareForReuse` for each cell dequeued. If you need to return a different type of cell for an index path, use [reloadItemsWithIdentifiers:](reloaditems%28withidentifiers_%29.md) instead.

If your cells are self-sizing, the collection view or table view resizes your cells after reconfiguring them.

Set the `animatingDifferences` parameter to tell the collection view or table view whether to animate any size or layout changes that are a result of reconfiguration when you apply the snapshot to your data source. To avoid animations when setting specific properties, use [performWithoutAnimation:](../uiview/performwithoutanimation%28__%29.md) in your cell configuration logic.

If your collection view or table view uses a diffable data source, use this method. If your collection view uses a custom implementation of `UICollectionViewDataSource`, use [reconfigureItemsAtIndexPaths:](../uicollectionview/reconfigureitems%28at_%29.md) instead. If your table view uses a custom implementation of `UITableViewDataSource`, use [reconfigureRowsAtIndexPaths:](../uitableview/reconfigurerows%28at_%29.md) instead.

## See Also

### Reloading data

- [reconfiguredItemIdentifiers](reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadItemsWithIdentifiers:](reloaditems%28withidentifiers_%29.md): Reloads the data within the specified items in the snapshot.
- [reloadedItemIdentifiers](reloadeditemidentifiers.md): Identifies the items reloaded by the changes to the snapshot.
- [reloadSectionsWithIdentifiers:](reloadsections%28withidentifiers_%29.md): Reloads the data within the specified sections of the snapshot.
- [reloadedSectionIdentifiers](reloadedsectionidentifiers.md): Identifies the sections reloaded by the changes to the snapshot.
