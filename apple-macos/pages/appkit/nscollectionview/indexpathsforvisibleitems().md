> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/indexpathsforvisibleitems()](https://developer.apple.com/documentation/appkit/nscollectionview/indexpathsforvisibleitems())

# indexPathsForVisibleItems() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the index paths of the currently active items.

## Declaration

```swift
func indexPathsForVisibleItems() -> Set<IndexPath>
```

<a id="return-value"></a>

## Return Value

The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the currently visible items.

<a id="Discussion"></a>

## Discussion

The index paths returned by this method belong to items that are active and currently being managed by the collection view. As a result, the returned set may include index paths for items that are outside of the collection view’s actual visible rectangle. For example, it may contain index paths for items that were recently visible but have since been scrolled out of view. To test whether an item is visible, check to see if its frame rectangle intersects the [visibleRect](../nsview/visiblerect.md) of the collection view.

## See Also

### Locating Items and Views

- [visibleItems()](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [item(at:)](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItems(at:scrollPosition:)](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.

# indexPathsForVisibleItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the index paths of the currently active items.

## Declaration

```objectivec
- (NSSet<NSIndexPath *> *) indexPathsForVisibleItems;
```

<a id="return-value"></a>

## Return Value

The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the currently visible items.

<a id="Discussion"></a>

## Discussion

The index paths returned by this method belong to items that are active and currently being managed by the collection view. As a result, the returned set may include index paths for items that are outside of the collection view’s actual visible rectangle. For example, it may contain index paths for items that were recently visible but have since been scrolled out of view. To test whether an item is visible, check to see if its frame rectangle intersects the [visibleRect](../nsview/visiblerect.md) of the collection view.

## See Also

### Locating Items and Views

- [visibleItems](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPathForItem:](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [itemAtIndexPath:](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItemsAtIndexPaths:scrollPosition:](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.
