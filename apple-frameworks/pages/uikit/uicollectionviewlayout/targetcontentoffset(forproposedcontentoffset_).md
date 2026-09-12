> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/targetcontentoffset(forproposedcontentoffset:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/targetcontentoffset(forproposedcontentoffset:))

# targetContentOffset(forProposedContentOffset:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Retrieves the content offset to use after an animated layout update or change.

## Declaration

```swift
func targetContentOffset(forProposedContentOffset proposedContentOffset: CGPoint) -> CGPoint
```

## Parameters

- `proposedContentOffset`: The proposed point (in the coordinate space of the collection view’s content view) for the upper-left corner of the visible content. This represents the point that the collection view has calculated as the most likely value to use at the end of the animation.

<a id="return-value"></a>

## Return Value

The content offset that you want to use instead. The default implementation of this method returns the value in the `proposedContentOffset` parameter.

<a id="Discussion"></a>

## Discussion

During layout updates, or when transitioning between layouts, the collection view calls this method to give you the opportunity to change the proposed content offset to use at the end of the animation. You might override this method if the animations or transition might cause items to be positioned in a way that is not optimal for your design.

The collection view calls this method after calling the [prepare()](prepare%28%29.md) and [collectionViewContentSize](collectionviewcontentsize.md) methods.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepare()](prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItem(at:withTargetPosition:)](layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.

# targetContentOffsetForProposedContentOffset: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Retrieves the content offset to use after an animated layout update or change.

## Declaration

```objectivec
- (CGPoint) targetContentOffsetForProposedContentOffset:(CGPoint) proposedContentOffset;
```

## Parameters

- `proposedContentOffset`: The proposed point (in the coordinate space of the collection view’s content view) for the upper-left corner of the visible content. This represents the point that the collection view has calculated as the most likely value to use at the end of the animation.

<a id="return-value"></a>

## Return Value

The content offset that you want to use instead. The default implementation of this method returns the value in the `proposedContentOffset` parameter.

<a id="Discussion"></a>

## Discussion

During layout updates, or when transitioning between layouts, the collection view calls this method to give you the opportunity to change the proposed content offset to use at the end of the animation. You might override this method if the animations or transition might cause items to be positioned in a way that is not optimal for your design.

The collection view calls this method after calling the [prepareLayout](prepare%28%29.md) and [collectionViewContentSize](collectionviewcontentsize.md) methods.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepareLayout](prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItemAtIndexPath:withTargetPosition:](layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.
