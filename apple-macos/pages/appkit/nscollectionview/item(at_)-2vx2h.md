> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/item(at:)-2vx2h](https://developer.apple.com/documentation/appkit/nscollectionview/item(at:)-2vx2h)

# item(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the item associated with the specified index path.

## Declaration

```swift
func item(at indexPath: IndexPath) -> NSCollectionViewItem?
```

## Parameters

- `indexPath`: The index path whose item you want.

<a id="return-value"></a>

## Return Value

The item for the specified index path or `nil` if no item is available.

<a id="Discussion"></a>

## Discussion

For efficiency, the collection view does not create items until they are needed, and usually it creates them only when they need to be displayed onscreen. If the collection view does not currently have an item for the specified index path, because that item would be positioned offscreen, this method returns `nil`.

## See Also

### Locating Items and Views

- [visibleItems()](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems()](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [supplementaryView(forElementKind:at:)](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItems(at:scrollPosition:)](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.

# itemAtIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the item associated with the specified index path.

## Declaration

```objectivec
- (NSCollectionViewItem *) itemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path whose item you want.

<a id="return-value"></a>

## Return Value

The item for the specified index path or `nil` if no item is available.

<a id="Discussion"></a>

## Discussion

For efficiency, the collection view does not create items until they are needed, and usually it creates them only when they need to be displayed onscreen. If the collection view does not currently have an item for the specified index path, because that item would be positioned offscreen, this method returns `nil`.

## See Also

### Locating Items and Views

- [visibleItems](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPathForItem:](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [supplementaryViewForElementKind:atIndexPath:](supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItemsAtIndexPaths:scrollPosition:](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.
