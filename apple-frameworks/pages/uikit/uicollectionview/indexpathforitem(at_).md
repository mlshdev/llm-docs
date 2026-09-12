> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/indexpathforitem(at:)](https://developer.apple.com/documentation/uikit/uicollectionview/indexpathforitem(at:))

# indexPathForItem(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the index path of the item at the specified point in the collection view.

## Declaration

```swift
func indexPathForItem(at point: CGPoint) -> IndexPath?
```

## Parameters

- `point`: A point in the collection view’s coordinate system.

<a id="return-value"></a>

## Return Value

The index path of the item at the specified point or `nil` if no item was found at the specified point.

<a id="Discussion"></a>

## Discussion

This method relies on the layout information provided by the associated layout object to determine which item contains the point.

## See Also

### Locating items and views in the collection view

- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [indexPath(for:)](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [cellForItem(at:)](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.

# indexPathForItemAtPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the index path of the item at the specified point in the collection view.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForItemAtPoint:(CGPoint) point;
```

## Parameters

- `point`: A point in the collection view’s coordinate system.

<a id="return-value"></a>

## Return Value

The index path of the item at the specified point or `nil` if no item was found at the specified point.

<a id="Discussion"></a>

## Discussion

This method relies on the layout information provided by the associated layout object to determine which item contains the point.

## See Also

### Locating items and views in the collection view

- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [indexPathForCell:](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [cellForItemAtIndexPath:](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.
