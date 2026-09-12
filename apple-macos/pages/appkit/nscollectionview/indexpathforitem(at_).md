> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/indexpathforitem(at:)](https://developer.apple.com/documentation/appkit/nscollectionview/indexpathforitem(at:))

# indexPathForItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the index path of the item at the specified point.

## Declaration

```swift
func indexPathForItem(at point: NSPoint) -> IndexPath?
```

## Parameters

- `point`: The point in the collection view’s bounds that you want to test.

<a id="return-value"></a>

## Return Value

The item at the specified point or `nil` if no item was found at that point.

<a id="Discussion"></a>

## Discussion

This method uses the available layout attributes to determine which item is at the specified point. If more than one item is at the point, this method returns only the top-most item. This method ignores the opacity of the item, so items that are fully transparent are still returned by this method. Hidden items are never returned.

## See Also

### Locating Items and Views

- [visibleItems()](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems()](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path of the specified item.
- [item(at:)](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItems(at:scrollPosition:)](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.

# indexPathForItemAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the index path of the item at the specified point.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForItemAtPoint:(NSPoint) point;
```

## Parameters

- `point`: The point in the collection view’s bounds that you want to test.

<a id="return-value"></a>

## Return Value

The item at the specified point or `nil` if no item was found at that point.

<a id="Discussion"></a>

## Discussion

This method uses the available layout attributes to determine which item is at the specified point. If more than one item is at the point, this method returns only the top-most item. This method ignores the opacity of the item, so items that are fully transparent are still returned by this method. Hidden items are never returned.

## See Also

### Locating Items and Views

- [visibleItems](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPathForItem:](indexpath%28for_%29.md): Returns the index path of the specified item.
- [itemAtIndexPath:](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItemsAtIndexPaths:scrollPosition:](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.
