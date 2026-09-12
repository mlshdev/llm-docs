> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/targetcontentoffset(forproposedcontentoffset:withscrollingvelocity:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/targetcontentoffset(forproposedcontentoffset:withscrollingvelocity:))

# targetContentOffset(forProposedContentOffset:withScrollingVelocity:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the offset value to use for the collection view’s content at the end of scrolling.

## Declaration

```swift
func targetContentOffset(forProposedContentOffset proposedContentOffset: NSPoint, withScrollingVelocity velocity: NSPoint) -> NSPoint
```

## Parameters

- `proposedContentOffset`: The proposed point (in the collection view’s coordinate space) for the lower-left corner of the visible content. The collection view calculates this value as the most likely value to use at the end of animations.
- `velocity`: The current horizontal and vertical scrolling velocities. The value is specified in points per second.

<a id="return-value"></a>

## Return Value

The offset value that you want to use for the content.

<a id="Discussion"></a>

## Discussion

Use this method to position the collection view’s content appropriately after scrolling. This method tells the scroll view where to stop scrolling so that the collection view’s content is displayed optimally. For example, you might use this method to adjust the proposed content offset so that it falls on a boundary between rows of items, as opposed to stopping in the middle of a row.

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
- [layoutAttributesForInterItemGap(before:)](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.

# targetContentOffsetForProposedContentOffset:withScrollingVelocity: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the offset value to use for the collection view’s content at the end of scrolling.

## Declaration

```objectivec
- (NSPoint) targetContentOffsetForProposedContentOffset:(NSPoint) proposedContentOffset withScrollingVelocity:(NSPoint) velocity;
```

## Parameters

- `proposedContentOffset`: The proposed point (in the collection view’s coordinate space) for the lower-left corner of the visible content. The collection view calculates this value as the most likely value to use at the end of animations.
- `velocity`: The current horizontal and vertical scrolling velocities. The value is specified in points per second.

<a id="return-value"></a>

## Return Value

The offset value that you want to use for the content.

<a id="Discussion"></a>

## Discussion

Use this method to position the collection view’s content appropriately after scrolling. This method tells the scroll view where to stop scrolling so that the collection view’s content is displayed optimally. For example, you might use this method to adjust the proposed content offset so that it falls on a boundary between rows of items, as opposed to stopping in the middle of a row.

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
- [layoutAttributesForInterItemGapBeforeIndexPath:](layoutattributesforinteritemgap%28before_%29.md): Returns layout attributes for the inter-item gap at the specified location in your layout.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Returns the offset value to use after an animated layout update or change.
