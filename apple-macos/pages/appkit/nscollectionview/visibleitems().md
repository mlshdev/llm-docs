> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/visibleitems()](https://developer.apple.com/documentation/appkit/nscollectionview/visibleitems())

# visibleItems() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns an array of the actively managed items in the collection view.

## Declaration

```swift
func visibleItems() -> [NSCollectionViewItem]
```

<a id="return-value"></a>

## Return Value

An array of [NSCollectionViewItem](../nscollectionviewitem.md) objects. The returned array may be empty.

<a id="Discussion"></a>

## Discussion

The items returned by this method represent the ones that are active and currently being managed by the collection view. This array may contain items that are outside of the collection view’s actual visible rectangle. For example, it may contain items that were recently visible but have since been scrolled out of view. To test whether an item is actually visible, check to see if its frame rectangle intersects the [visibleRect](../nsview/visiblerect.md) of the collection view.

## See Also

### Locating Items and Views

- [indexPathsForVisibleItems()](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [item(at:)](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItems(at:scrollPosition:)](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.

# visibleItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns an array of the actively managed items in the collection view.

## Declaration

```objectivec
- (NSArray<NSCollectionViewItem *> *) visibleItems;
```

<a id="return-value"></a>

## Return Value

An array of [NSCollectionViewItem](../nscollectionviewitem.md) objects. The returned array may be empty.

<a id="Discussion"></a>

## Discussion

The items returned by this method represent the ones that are active and currently being managed by the collection view. This array may contain items that are outside of the collection view’s actual visible rectangle. For example, it may contain items that were recently visible but have since been scrolled out of view. To test whether an item is actually visible, check to see if its frame rectangle intersects the [visibleRect](../nsview/visiblerect.md) of the collection view.

## See Also

### Locating Items and Views

- [indexPathsForVisibleItems](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPathForItem:](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [itemAtIndexPath:](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItemsAtIndexPaths:scrollPosition:](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.
