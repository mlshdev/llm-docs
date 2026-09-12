> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/layoutattributesforitem(at:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/layoutattributesforitem(at:))

# layoutAttributesForItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the layout attributes for the item at the specified index path.

## Declaration

```swift
func layoutAttributesForItem(at indexPath: IndexPath) -> NSCollectionViewLayoutAttributes?
```

## Parameters

- `indexPath`: The index path of the item whose attributes are requested.

<a id="return-value"></a>

## Return Value

A layout attributes object containing the layout information to apply to the item.

<a id="Discussion"></a>

## Discussion

Subclasses must override this method. In your implementation, create an instance of the appropriate layout attributes class and fill the resulting object with the layout information for the specified item. The default implementation of this method does nothing and returns `nil`.

You can also call this method from other layout-related methods when you want to retrieve layout information for items. Call this method only for items. Do not call it to retrieve layout attributes for supplementary views or decoration views.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepare()](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForDropTarget(at:)](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [layoutAttributesForInterItemGap(before:)](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.

# layoutAttributesForItemAtIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the layout attributes for the item at the specified index path.

## Declaration

```objectivec
- (NSCollectionViewLayoutAttributes *) layoutAttributesForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path of the item whose attributes are requested.

<a id="return-value"></a>

## Return Value

A layout attributes object containing the layout information to apply to the item.

<a id="Discussion"></a>

## Discussion

Subclasses must override this method. In your implementation, create an instance of the appropriate layout attributes class and fill the resulting object with the layout information for the specified item. The default implementation of this method does nothing and returns `nil`.

You can also call this method from other layout-related methods when you want to retrieve layout information for items. Call this method only for items. Do not call it to retrieve layout attributes for supplementary views or decoration views.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepareLayout](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForDropTargetAtPoint:](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [layoutAttributesForInterItemGapBeforeIndexPath:](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.
