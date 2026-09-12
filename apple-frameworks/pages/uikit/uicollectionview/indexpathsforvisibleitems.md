> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/indexpathsforvisibleitems](https://developer.apple.com/documentation/uikit/uicollectionview/indexpathsforvisibleitems)

# indexPathsForVisibleItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of the visible items in the collection view.

## Declaration

```swift
var indexPathsForVisibleItems: [IndexPath] { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an unsorted array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which corresponds to a visible cell in the collection view. This array doesn’t include any supplementary views that are currently visible. If there are no visible items, the value of this property is an empty array.

## See Also

### Related Documentation

- [visibleCells](visiblecells.md): An array of visible cells currently displayed by the collection view.

### Locating items and views in the collection view

- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPath(for:)](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [cellForItem(at:)](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.

# indexPathsForVisibleItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of the visible items in the collection view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSIndexPath *> * indexPathsForVisibleItems;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an unsorted array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which corresponds to a visible cell in the collection view. This array doesn’t include any supplementary views that are currently visible. If there are no visible items, the value of this property is an empty array.

## See Also

### Related Documentation

- [visibleCells](visiblecells.md): An array of visible cells currently displayed by the collection view.

### Locating items and views in the collection view

- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Gets the index path of the item at the specified point in the collection view.
- [indexPathForCell:](indexpath%28for_%29.md): Gets the index path of the specified cell.
- [cellForItemAtIndexPath:](cellforitem%28at_%29.md): Gets the cell object at the index path you specify.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Gets the index paths of all visible supplementary views of the specified type.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Gets the supplementary view at the specified index path.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Gets an array of the visible supplementary views of the specified kind.
