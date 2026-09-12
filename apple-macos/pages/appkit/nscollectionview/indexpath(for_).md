> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/indexpath(for:)](https://developer.apple.com/documentation/appkit/nscollectionview/indexpath(for:))

# indexPath(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the index path of the specified item.

## Declaration

```swift
func indexPath(for item: NSCollectionViewItem) -> IndexPath?
```

## Parameters

- `item`: The item whose index path you want to know.

<a id="return-value"></a>

## Return Value

The item’s index path or `nil` if the item is not in the collection view.

## See Also

### Locating Items and Views

- [visibleItems()](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems()](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [item(at:)](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItems(at:scrollPosition:)](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.

# indexPathForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the index path of the specified item.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForItem:(NSCollectionViewItem *) item;
```

## Parameters

- `item`: The item whose index path you want to know.

<a id="return-value"></a>

## Return Value

The item’s index path or `nil` if the item is not in the collection view.

## See Also

### Locating Items and Views

- [visibleItems](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [itemAtIndexPath:](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItemsAtIndexPaths:scrollPosition:](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.
