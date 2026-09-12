> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/cellforitem(at:)](https://developer.apple.com/documentation/uikit/uicollectionview/cellforitem(at:))

# cellForItem(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the cell object at the index path you specify.

## Declaration

```swift
func cellForItem(at indexPath: IndexPath) -> UICollectionViewCell?
```

## Parameters

- `indexPath`: The index path that specifies the section and item number of the cell.

<a id="return-value"></a>

## Return Value

The cell object at the corresponding index path. In versions of iOS earlier than iOS 15, this method returns `nil` if the cell isn’t visible or if `indexPath` is out of range. In iOS 15 and later, this method returns a non-`nil` cell if the collection view retains a prepared cell at the specified index path, even if the cell isn’t currently visible.

<a id="Discussion"></a>

## Discussion

In iOS 15 and later, the collection view retains a prepared cell in the following situations:

- Cells that the collection view prefetches and retains in its cache of prepared cells, but that aren’t visible because the collection view hasn’t displayed them yet.
- Cells that the collection view finishes displaying and continues to retain in its cache of prepared cells because they remain near the visible region and might scroll back into view.
- The cell that contains the first responder.
- The cell that has focus.

## See Also

### Locating items and views in the collection view

- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [indexPath(for:)](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.

# cellForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the cell object at the index path you specify.

## Declaration

```objectivec
- (UICollectionViewCell *) cellForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path that specifies the section and item number of the cell.

<a id="return-value"></a>

## Return Value

The cell object at the corresponding index path. In versions of iOS earlier than iOS 15, this method returns `nil` if the cell isn’t visible or if `indexPath` is out of range. In iOS 15 and later, this method returns a non-`nil` cell if the collection view retains a prepared cell at the specified index path, even if the cell isn’t currently visible.

<a id="Discussion"></a>

## Discussion

In iOS 15 and later, the collection view retains a prepared cell in the following situations:

- Cells that the collection view prefetches and retains in its cache of prepared cells, but that aren’t visible because the collection view hasn’t displayed them yet.
- Cells that the collection view finishes displaying and continues to retain in its cache of prepared cells because they remain near the visible region and might scroll back into view.
- The cell that contains the first responder.
- The cell that has focus.

## See Also

### Locating items and views in the collection view

- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [indexPathForCell:](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.
