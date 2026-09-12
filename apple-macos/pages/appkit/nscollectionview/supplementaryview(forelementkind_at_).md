> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/supplementaryview(forelementkind:at:)](https://developer.apple.com/documentation/appkit/nscollectionview/supplementaryview(forelementkind:at:))

# supplementaryView(forElementKind:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the supplementary view associated with the specified index path.

## Declaration

```swift
func supplementaryView(forElementKind elementKind: NSCollectionView.SupplementaryElementKind, at indexPath: IndexPath) -> (any NSView & NSCollectionViewElement)?
```

## Parameters

- `elementKind`: The kind of the supplementary views you want returned. The layout object defines the kinds of supplementary views it supports. This parameter must not be `nil`.
- `indexPath`: The index path whose supplementary view you want.

<a id="return-value"></a>

## Return Value

The view for the specified index path or `nil` if no view is available.

<a id="Discussion"></a>

## Discussion

For efficiency, the collection view does not create supplementary views until they are needed. Typically, views are created only when they need to be displayed onscreen. If the collection view does not currently have a supplementary view for the specified index path, because that view would be positioned offscreen, this method returns `nil`.

## See Also

### Locating Items and Views

- [visibleItems()](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems()](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViews(ofKind:)](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItem(at:)](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [item(at:)](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [scrollToItems(at:scrollPosition:)](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.

# supplementaryViewForElementKind:atIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the supplementary view associated with the specified index path.

## Declaration

```objectivec
- (NSView<NSCollectionViewElement> *) supplementaryViewForElementKind:(NSCollectionViewSupplementaryElementKind) elementKind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `elementKind`: The kind of the supplementary views you want returned. The layout object defines the kinds of supplementary views it supports. This parameter must not be `nil`.
- `indexPath`: The index path whose supplementary view you want.

<a id="return-value"></a>

## Return Value

The view for the specified index path or `nil` if no view is available.

<a id="Discussion"></a>

## Discussion

For efficiency, the collection view does not create supplementary views until they are needed. Typically, views are created only when they need to be displayed onscreen. If the collection view does not currently have a supplementary view for the specified index path, because that view would be positioned offscreen, this method returns `nil`.

## See Also

### Locating Items and Views

- [visibleItems](visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems](indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViewsOfKind:](visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElementsOfKind:](indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPathForItem:](indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItemAtPoint:](indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [itemAtIndexPath:](item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [scrollToItemsAtIndexPaths:scrollPosition:](scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.
