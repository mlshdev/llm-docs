> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/layoutattributesforinteractivelymovingitem(at:withtargetposition:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/layoutattributesforinteractivelymovingitem(at:withtargetposition:))

# layoutAttributesForInteractivelyMovingItem(at:withTargetPosition:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Retrieves the layout attributes of an item when it is being moved interactively by the user.

## Declaration

```swift
func layoutAttributesForInteractivelyMovingItem(at indexPath: IndexPath, withTargetPosition position: CGPoint) -> UICollectionViewLayoutAttributes
```

## Parameters

- `indexPath`: The index path of the item being moved.
- `position`: The current position of the item in the collection view’s coordinate system.

<a id="return-value"></a>

## Return Value

The layout attributes of the item while it is at the specified position.

<a id="Discussion"></a>

## Discussion

When an item is moving because of user interactivity, the layout object uses this method to retrieve layout attributes to use for the item while it is at the specified position. The default implementation of this method returns a copy of the item’s existing attributes with two changes: the [center](../uicollectionviewlayoutattributes/center.md) point is set to the value in `position` and the [zIndex](../uicollectionviewlayoutattributes/zindex.md) value is set to [NSIntegerMax](../../objectivec/nsintegermax.md) so that the item floats above other items in the collection view.

Subclasses can override this method and modify additional layout attributes as needed. If you override this method, call `super` first to retrieve the item’s existing attributes and then make your changes to the returned structure.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepare()](prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.

# layoutAttributesForInteractivelyMovingItemAtIndexPath:withTargetPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the layout attributes of an item when it is being moved interactively by the user.

## Declaration

```objectivec
- (UICollectionViewLayoutAttributes *) layoutAttributesForInteractivelyMovingItemAtIndexPath:(NSIndexPath *) indexPath withTargetPosition:(CGPoint) position;
```

## Parameters

- `indexPath`: The index path of the item being moved.
- `position`: The current position of the item in the collection view’s coordinate system.

<a id="return-value"></a>

## Return Value

The layout attributes of the item while it is at the specified position.

<a id="Discussion"></a>

## Discussion

When an item is moving because of user interactivity, the layout object uses this method to retrieve layout attributes to use for the item while it is at the specified position. The default implementation of this method returns a copy of the item’s existing attributes with two changes: the [center](../uicollectionviewlayoutattributes/center.md) point is set to the value in `position` and the [zIndex](../uicollectionviewlayoutattributes/zindex.md) value is set to [NSIntegerMax](../../objectivec/nsintegermax.md) so that the item floats above other items in the collection view.

Subclasses can override this method and modify additional layout attributes as needed. If you override this method, call `super` first to retrieve the item’s existing attributes and then make your changes to the returned structure.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepareLayout](prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.
