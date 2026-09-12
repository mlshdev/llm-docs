> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/layoutattributesforinteritemgap(before:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/layoutattributesforinteritemgap(before:))

# layoutAttributesForInterItemGap(before:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns layout attributes for the inter-item gap at the specified location in your layout.

## Declaration

```swift
func layoutAttributesForInterItemGap(before indexPath: IndexPath) -> NSCollectionViewLayoutAttributes?
```

## Parameters

- `indexPath`: The index path of the item that follows the inter-item gap. For a gap that follows the last item in the section, set the item property to the total number of items in the section.

<a id="return-value"></a>

## Return Value

A layout attributes object containing the layout information to apply to the inter-item gap, or `nil` if no attributes are available.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns `nil`. Subclasses can override this method to provide layout attributes for inter-item gaps. In your implementation, use the specified index path to compute the location of the gap in collection view’s content. If the gap represents a valid location, use the [init(forInterItemGapBefore:)](../nscollectionviewlayoutattributes/init%28forinteritemgapbefore_%29.md) class method of [NSCollectionViewLayoutAttributes](../nscollectionviewlayoutattributes.md) to create a new layout attributes object and set the [frame](../nscollectionviewlayoutattributes/frame.md) property to the rectangle you computed.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepare()](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForDropTarget(at:)](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.

# layoutAttributesForInterItemGapBeforeIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns layout attributes for the inter-item gap at the specified location in your layout.

## Declaration

```objectivec
- (NSCollectionViewLayoutAttributes *) layoutAttributesForInterItemGapBeforeIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path of the item that follows the inter-item gap. For a gap that follows the last item in the section, set the item property to the total number of items in the section.

<a id="return-value"></a>

## Return Value

A layout attributes object containing the layout information to apply to the inter-item gap, or `nil` if no attributes are available.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns `nil`. Subclasses can override this method to provide layout attributes for inter-item gaps. In your implementation, use the specified index path to compute the location of the gap in collection view’s content. If the gap represents a valid location, use the [layoutAttributesForInterItemGapBeforeIndexPath:](../nscollectionviewlayoutattributes/init%28forinteritemgapbefore_%29.md) class method of [NSCollectionViewLayoutAttributes](../nscollectionviewlayoutattributes.md) to create a new layout attributes object and set the [frame](../nscollectionviewlayoutattributes/frame.md) property to the rectangle you computed.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepareLayout](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForDropTargetAtPoint:](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.
