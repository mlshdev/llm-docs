> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/scrolltoitems(at:scrollposition:)](https://developer.apple.com/documentation/appkit/nscollectionview/scrolltoitems(at:scrollposition:))

# scrollToItems(at:scrollPosition:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Scrolls the collection view contents until the specified items are visible.

## Declaration

```swift
func scrollToItems(at indexPaths: Set<IndexPath>, scrollPosition: NSCollectionView.ScrollPosition)
```

## Parameters

- `indexPaths`: The index paths of the items. The layout attributes of these items define the bounding box that needs to be scrolled onscreen.
- `scrollPosition`: The options for scrolling the bounding box of the specified items into view. You may combine one vertical and one horizontal scrolling option when calling this method. Specifying more than one option for either the vertical or horizontal directions raises an exception.

<a id="Discussion"></a>

## Discussion

To animate the scrolling operation, call this method on the collection view’s [animator()](../nsanimatablepropertycontainer/animator%28%29.md) proxy object instead.

## See Also

### Locating Items and Views

- [visibleItems()](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems()](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [item(at:)](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.

# scrollToItemsAtIndexPaths:scrollPosition: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Scrolls the collection view contents until the specified items are visible.

## Declaration

```objectivec
- (void) scrollToItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths scrollPosition:(NSCollectionViewScrollPosition) scrollPosition;
```

## Parameters

- `indexPaths`: The index paths of the items. The layout attributes of these items define the bounding box that needs to be scrolled onscreen.
- `scrollPosition`: The options for scrolling the bounding box of the specified items into view. You may combine one vertical and one horizontal scrolling option when calling this method. Specifying more than one option for either the vertical or horizontal directions raises an exception.

<a id="Discussion"></a>

## Discussion

To animate the scrolling operation, call this method on the collection view’s [animator](../nsanimatablepropertycontainer/animator%28%29.md) proxy object instead.

## See Also

### Locating Items and Views

- [visibleItems](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPathForItem:](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [itemAtIndexPath:](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
