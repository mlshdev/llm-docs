> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/targetcontentoffset(forproposedcontentoffset:withscrollingvelocity:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/targetcontentoffset(forproposedcontentoffset:withscrollingvelocity:))

# targetContentOffset(forProposedContentOffset:withScrollingVelocity:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Retrieves the point at which to stop scrolling.

## Declaration

```swift
func targetContentOffset(forProposedContentOffset proposedContentOffset: CGPoint, withScrollingVelocity velocity: CGPoint) -> CGPoint
```

## Parameters

- `proposedContentOffset`: The proposed point (in the collection view’s content view) at which to stop scrolling. This is the value at which scrolling would naturally stop if no adjustments were made. The point reflects the upper-left corner of the visible content.
- `velocity`: The current scrolling velocity along both the horizontal and vertical axes. This value is measured in points per second.

<a id="return-value"></a>

## Return Value

The content offset that you want to use instead. This value reflects the adjusted upper-left corner of the visible area. The default implementation of this method returns the value in the `proposedContentOffset` parameter.

<a id="Discussion"></a>

## Discussion

If you want the scrolling behavior to snap to specific boundaries, you can override this method and use it to change the point at which to stop. For example, you might use this method to always stop scrolling on a boundary between items, as opposed to stopping in the middle of an item.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepare()](prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItem(at:withTargetPosition:)](layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.

# targetContentOffsetForProposedContentOffset:withScrollingVelocity: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Retrieves the point at which to stop scrolling.

## Declaration

```objectivec
- (CGPoint) targetContentOffsetForProposedContentOffset:(CGPoint) proposedContentOffset withScrollingVelocity:(CGPoint) velocity;
```

## Parameters

- `proposedContentOffset`: The proposed point (in the collection view’s content view) at which to stop scrolling. This is the value at which scrolling would naturally stop if no adjustments were made. The point reflects the upper-left corner of the visible content.
- `velocity`: The current scrolling velocity along both the horizontal and vertical axes. This value is measured in points per second.

<a id="return-value"></a>

## Return Value

The content offset that you want to use instead. This value reflects the adjusted upper-left corner of the visible area. The default implementation of this method returns the value in the `proposedContentOffset` parameter.

<a id="Discussion"></a>

## Discussion

If you want the scrolling behavior to snap to specific boundaries, you can override this method and use it to change the point at which to stop. For example, you might use this method to always stop scrolling on a boundary between items, as opposed to stopping in the middle of an item.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepareLayout](prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItemAtIndexPath:withTargetPosition:](layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.
