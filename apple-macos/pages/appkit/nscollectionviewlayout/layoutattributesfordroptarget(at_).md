> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/layoutattributesfordroptarget(at:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/layoutattributesfordroptarget(at:))

# layoutAttributesForDropTarget(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns layout attributes for the drop target at the specified point.

## Declaration

```swift
func layoutAttributesForDropTarget(at pointInCollectionView: NSPoint) -> NSCollectionViewLayoutAttributes?
```

## Parameters

- `pointInCollectionView`: A point in the collection view’s coordinate system. Use this point to determine whether the drop would occur on an item or between items.

<a id="return-value"></a>

## Return Value

A layout attributes object that identifies the element in which the drop would occur.

<a id="Discussion"></a>

## Discussion

The default implementation of this method tests the specified point to see if it lands inside an item, supplementary view, or decoration view of the collection view. If it does, the method returns the layout attributes for that element.

Layouts that support inter-item gaps as drop targets must override this method and use it to return the layout attributes that represent that gap. In your implementation, calculate the index path just after the gap and pass that value to the [init(forInterItemGapBefore:)](../nscollectionviewlayoutattributes/init%28forinteritemgapbefore_%29.md) class method of [NSCollectionViewLayoutAttributes](../nscollectionviewlayoutattributes.md). Set the [frame](../nscollectionviewlayoutattributes/frame.md) property of the resulting attributes object to the rectangle that best represents the gap and also contains the specified point. When overriding this method, you can call `super` at any time to get the default behavior.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepare()](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForInterItemGap(before:)](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.

# layoutAttributesForDropTargetAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns layout attributes for the drop target at the specified point.

## Declaration

```objectivec
- (NSCollectionViewLayoutAttributes *) layoutAttributesForDropTargetAtPoint:(NSPoint) pointInCollectionView;
```

## Parameters

- `pointInCollectionView`: A point in the collection view’s coordinate system. Use this point to determine whether the drop would occur on an item or between items.

<a id="return-value"></a>

## Return Value

A layout attributes object that identifies the element in which the drop would occur.

<a id="Discussion"></a>

## Discussion

The default implementation of this method tests the specified point to see if it lands inside an item, supplementary view, or decoration view of the collection view. If it does, the method returns the layout attributes for that element.

Layouts that support inter-item gaps as drop targets must override this method and use it to return the layout attributes that represent that gap. In your implementation, calculate the index path just after the gap and pass that value to the [layoutAttributesForInterItemGapBeforeIndexPath:](../nscollectionviewlayoutattributes/init%28forinteritemgapbefore_%29.md) class method of [NSCollectionViewLayoutAttributes](../nscollectionviewlayoutattributes.md). Set the [frame](../nscollectionviewlayoutattributes/frame.md) property of the resulting attributes object to the rectangle that best represents the gap and also contains the specified point. When overriding this method, you can call `super` at any time to get the default behavior.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepareLayout](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForInterItemGapBeforeIndexPath:](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.
