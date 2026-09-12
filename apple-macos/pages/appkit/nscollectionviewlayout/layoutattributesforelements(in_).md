> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/layoutattributesforelements(in:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/layoutattributesforelements(in:))

# layoutAttributesForElements(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the layout attribute objects for all items and views in the specified rectangle.

## Declaration

```swift
func layoutAttributesForElements(in rect: NSRect) -> [NSCollectionViewLayoutAttributes]
```

## Parameters

- `rect`: The rectangle (specified in the collection view’s coordinate system) containing the target views.

<a id="return-value"></a>

## Return Value

An array of layout attribute objects containing the layout information for the enclosed items and views.

<a id="Discussion"></a>

## Discussion

Subclasses must override this method. In your implementation, return layout attributes for all items, supplementary views, and decoration views that intersect the specified rectangle.

For each element, always return a layout object of the appropriate type (item, supplementary, or decoration). The collection view differentiates between attributes for items, supplementary views, and decoration views and uses the differences to decide how to create and manage the corresponding views. Use the [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md), [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md), and [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md) methods to create new layout attribute objects.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepare()](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForDropTarget(at:)](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [layoutAttributesForInterItemGap(before:)](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.

# layoutAttributesForElementsInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the layout attribute objects for all items and views in the specified rectangle.

## Declaration

```objectivec
- (NSArray<__kindof NSCollectionViewLayoutAttributes *> *) layoutAttributesForElementsInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle (specified in the collection view’s coordinate system) containing the target views.

<a id="return-value"></a>

## Return Value

An array of layout attribute objects containing the layout information for the enclosed items and views.

<a id="Discussion"></a>

## Discussion

Subclasses must override this method. In your implementation, return layout attributes for all items, supplementary views, and decoration views that intersect the specified rectangle.

For each element, always return a layout object of the appropriate type (item, supplementary, or decoration). The collection view differentiates between attributes for items, supplementary views, and decoration views and uses the differences to decide how to create and manage the corresponding views. Use the [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md), [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md), and [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md) methods to create new layout attribute objects.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepareLayout](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): Returns the layout attributes of the decoration view at the specified location in your layout.
- [layoutAttributesForDropTargetAtPoint:](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [layoutAttributesForInterItemGapBeforeIndexPath:](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.
