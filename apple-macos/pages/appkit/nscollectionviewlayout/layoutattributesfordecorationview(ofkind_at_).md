> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/layoutattributesfordecorationview(ofkind:at:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/layoutattributesfordecorationview(ofkind:at:))

# layoutAttributesForDecorationView(ofKind:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the layout attributes of the decoration view at the specified location in your layout.

## Declaration

```swift
func layoutAttributesForDecorationView(ofKind elementKind: NSCollectionView.DecorationElementKind, at indexPath: IndexPath) -> NSCollectionViewLayoutAttributes?
```

## Parameters

- `elementKind`: A string that identifies the type of the decoration view. Use this string to differentiate the decoration views in a given section.
- `indexPath`: The index path of the decoration view. Use this parameter to determine which section contains the decoration view.

<a id="return-value"></a>

## Return Value

A layout attributes object containing the layout information to apply to the decoration view.

<a id="Discussion"></a>

## Discussion

If your layout includes decoration views, you must override this method. In your implementation, create an instance of the appropriate layout attributes class and fill the resulting object with the layout information for the corresponding decoration view. You define the supported decoration views by assigning each one a string that identifies its kind. Use the `elementKind` and `indexPath` properties to identify the specific decoration view whose attributes were requested.

You can call this method from other layout-related methods when you want to retrieve layout information for decoration views. Call this method only for decoration views. Do not call it to retrieve layout attributes for items or supplementary views.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepare()](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDropTarget(at:)](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [layoutAttributesForInterItemGap(before:)](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.

# layoutAttributesForDecorationViewOfKind:atIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the layout attributes of the decoration view at the specified location in your layout.

## Declaration

```objectivec
- (NSCollectionViewLayoutAttributes *) layoutAttributesForDecorationViewOfKind:(NSCollectionViewDecorationElementKind) elementKind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `elementKind`: A string that identifies the type of the decoration view. Use this string to differentiate the decoration views in a given section.
- `indexPath`: The index path of the decoration view. Use this parameter to determine which section contains the decoration view.

<a id="return-value"></a>

## Return Value

A layout attributes object containing the layout information to apply to the decoration view.

<a id="Discussion"></a>

## Discussion

If your layout includes decoration views, you must override this method. In your implementation, create an instance of the appropriate layout attributes class and fill the resulting object with the layout information for the corresponding decoration view. You define the supported decoration views by assigning each one a string that identifies its kind. Use the `elementKind` and `indexPath` properties to identify the specific decoration view whose attributes were requested.

You can call this method from other layout-related methods when you want to retrieve layout information for decoration views. Call this method only for decoration views. Do not call it to retrieve layout attributes for items or supplementary views.

## See Also

### Providing Layout Information

- [layoutAttributesClass](layoutattributesclass.md): Returns the class to use for layout attribute objects
- [prepareLayout](prepare%28%29.md): Prepares the layout object to begin laying out content.
- [collectionViewContentSize](collectionviewcontentsize.md): The width and height of the collection view’s contents.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Returns the layout attribute objects for all items and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Returns the layout attributes for the item at the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Returns the layout attributes of the supplementary view at the specified location in your layout.
- [layoutAttributesForDropTargetAtPoint:](layoutattributesfordroptarget%28at_%29.md): Returns layout attributes for the drop target at the specified point.
- [layoutAttributesForInterItemGapBeforeIndexPath:](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Returns the offset value to use for the collection view’s content at the end of scrolling.
