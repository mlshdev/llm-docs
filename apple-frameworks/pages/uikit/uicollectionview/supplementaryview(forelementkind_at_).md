> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/supplementaryview(forelementkind:at:)](https://developer.apple.com/documentation/uikit/uicollectionview/supplementaryview(forelementkind:at:))

# supplementaryView(forElementKind:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Gets the supplementary view at the specified index path.

## Declaration

```swift
func supplementaryView(forElementKind elementKind: String, at indexPath: IndexPath) -> UICollectionReusableView?
```

## Parameters

- `elementKind`: The kind of supplementary view to locate. This value is defined by the layout object. This parameter must not be `nil`.
- `indexPath`: The index path of the supplementary view. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

The specified supplementary view, or `nil` if the view could not be found.

## See Also

### Locating items and views in the collection view

- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [indexPath(for:)](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [cellForItem(at:)](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.

# supplementaryViewForElementKind:atIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Gets the supplementary view at the specified index path.

## Declaration

```objectivec
- (UICollectionReusableView *) supplementaryViewForElementKind:(NSString *) elementKind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `elementKind`: The kind of supplementary view to locate. This value is defined by the layout object. This parameter must not be `nil`.
- `indexPath`: The index path of the supplementary view. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

The specified supplementary view, or `nil` if the view could not be found.

## See Also

### Locating items and views in the collection view

- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [indexPathForCell:](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [cellForItemAtIndexPath:](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.
