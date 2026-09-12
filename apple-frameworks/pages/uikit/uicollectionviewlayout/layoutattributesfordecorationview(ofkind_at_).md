> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/layoutattributesfordecorationview(ofkind:at:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/layoutattributesfordecorationview(ofkind:at:))

# layoutAttributesForDecorationView(ofKind:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Retrieves the layout attributes for the specified decoration view.

## Declaration

```swift
func layoutAttributesForDecorationView(ofKind elementKind: String, at indexPath: IndexPath) -> UICollectionViewLayoutAttributes?
```

## Parameters

- `elementKind`: A string that identifies the type of the decoration view.
- `indexPath`: The index path of the decoration view.

<a id="return-value"></a>

## Return Value

A layout attributes object containing the information to apply to the decoration view.

<a id="Discussion"></a>

## Discussion

If your layout object defines any decoration views, you must override this method and use it to return layout information for those views.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepare()](prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItem(at:withTargetPosition:)](layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.

# layoutAttributesForDecorationViewOfKind:atIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Retrieves the layout attributes for the specified decoration view.

## Declaration

```objectivec
- (UICollectionViewLayoutAttributes *) layoutAttributesForDecorationViewOfKind:(NSString *) elementKind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `elementKind`: A string that identifies the type of the decoration view.
- `indexPath`: The index path of the decoration view.

<a id="return-value"></a>

## Return Value

A layout attributes object containing the information to apply to the decoration view.

<a id="Discussion"></a>

## Discussion

If your layout object defines any decoration views, you must override this method and use it to return layout information for those views.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepareLayout](prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItemAtIndexPath:withTargetPosition:](layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.
