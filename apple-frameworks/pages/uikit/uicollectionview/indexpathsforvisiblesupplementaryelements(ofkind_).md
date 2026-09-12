> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/indexpathsforvisiblesupplementaryelements(ofkind:)](https://developer.apple.com/documentation/uikit/uicollectionview/indexpathsforvisiblesupplementaryelements(ofkind:))

# indexPathsForVisibleSupplementaryElements(ofKind:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Gets the index paths of all visible supplementary views of the specified type.

## Declaration

```swift
func indexPathsForVisibleSupplementaryElements(ofKind elementKind: String) -> [IndexPath]
```

## Parameters

- `elementKind`: The kind of supplementary view to locate. This value is defined by the layout object. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which corresponds to a visible supplementary view in the collection view. If there are no visible supplementary views, this method returns an empty array.

## See Also

### Locating items and views in the collection view

- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [indexPath(for:)](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [cellForItem(at:)](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.

# indexPathsForVisibleSupplementaryElementsOfKind: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Gets the index paths of all visible supplementary views of the specified type.

## Declaration

```objectivec
- (NSArray<NSIndexPath *> *) indexPathsForVisibleSupplementaryElementsOfKind:(NSString *) elementKind;
```

## Parameters

- `elementKind`: The kind of supplementary view to locate. This value is defined by the layout object. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which corresponds to a visible supplementary view in the collection view. If there are no visible supplementary views, this method returns an empty array.

## See Also

### Locating items and views in the collection view

- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.
- [indexPathForCell:](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [cellForItemAtIndexPath:](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.
