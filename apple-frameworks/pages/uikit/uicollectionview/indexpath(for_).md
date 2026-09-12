> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/indexpath(for:)](https://developer.apple.com/documentation/uikit/uicollectionview/indexpath(for:))

# indexPath(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the index path of the specified cell.

## Declaration

```swift
func indexPath(for cell: UICollectionViewCell) -> IndexPath?
```

## Parameters

- `cell`: The cell object whose index path you want.

<a id="return-value"></a>

## Return Value

The index path of the cell or `nil` if the specified cell is not in the collection view.

## See Also

### Locating items and views in the collection view

- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [cellForItem(at:)](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.

# indexPathForCell: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the index path of the specified cell.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForCell:(UICollectionViewCell *) cell;
```

## Parameters

- `cell`: The cell object whose index path you want.

<a id="return-value"></a>

## Return Value

The index path of the cell or `nil` if the specified cell is not in the collection view.

## See Also

### Locating items and views in the collection view

- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [cellForItemAtIndexPath:](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.
