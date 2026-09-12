> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/prepare()](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/prepare())

# prepare() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the layout object to update the current layout.

## Declaration

```swift
func prepare()
```

<a id="Discussion"></a>

## Discussion

Layout updates occur the first time the collection view presents its content and whenever the layout is invalidated explicitly or implicitly because of a change to the view. During each layout update, the collection view calls this method first to give your layout object a chance to prepare for the upcoming layout operation.

The default implementation of this method does nothing. Subclasses can override it and use it to set up data structures or perform any initial computations needed to perform the layout later.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItem(at:withTargetPosition:)](layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffset(forProposedContentOffset:)](targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.

# prepareLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Tells the layout object to update the current layout.

## Declaration

```objectivec
- (void) prepareLayout;
```

<a id="Discussion"></a>

## Discussion

Layout updates occur the first time the collection view presents its content and whenever the layout is invalidated explicitly or implicitly because of a change to the view. During each layout update, the collection view calls this method first to give your layout object a chance to prepare for the upcoming layout operation.

The default implementation of this method does nothing. Subclasses can override it and use it to set up data structures or perform any initial computations needed to perform the layout later.

## See Also

### Providing layout attributes

- [layoutAttributesClass](layoutattributesclass.md): The class to use when creating layout attributes objects.
- [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItemAtIndexPath:withTargetPosition:](layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffsetForProposedContentOffset:](targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.
