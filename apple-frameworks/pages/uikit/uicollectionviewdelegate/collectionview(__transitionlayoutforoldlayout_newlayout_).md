> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:transitionlayoutforoldlayout:newlayout:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:transitionlayoutforoldlayout:newlayout:))

# collectionView(\_:transitionLayoutForOldLayout:newLayout:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks for the custom transition layout to use when moving between the specified layouts.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, transitionLayoutForOldLayout fromLayout: UICollectionViewLayout, newLayout toLayout: UICollectionViewLayout) -> UICollectionViewTransitionLayout
```

## Parameters

- `collectionView`: The collection view whose layout object is changing.
- `fromLayout`: The current layout of the collection view. This is the starting point for the transition.
- `toLayout`: The new layout for the collection view.

<a id="return-value"></a>

## Return Value

The collection view transition layout object to use to perform the transition.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to return a custom [UICollectionViewTransitionLayout](../uicollectionviewtransitionlayout.md) object for use during the transition. A transition layout object lets you customize the behavior of cells and decoration views when transitioning from one layout to the next. Normally, transitioning between layouts causes items to animate directly from their current locations to their new locations. With a transition layout object, you can have objects follow a non linear path, use a different timing algorithm, or move according to incoming touch events.

If your delegate does not implement this method, the collection view creates a standard [UICollectionViewTransitionLayout](../uicollectionviewtransitionlayout.md) object and uses that object to manage the transition.

## See Also

### Handling layout changes

- [collectionView(\_:targetContentOffsetForProposedContentOffset:)](collectionview%28__targetcontentoffsetforproposedcontentoffset_%29.md): Gives the delegate an opportunity to customize the content offset for layout changes and animated updates.
- [collectionView(\_:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath:)](collectionview%28__targetindexpathformoveofitemfromoriginalindexpath_atcurrentindexpath_toproposedindexpath_%29.md): Asks the delegate for the index path to use when moving an item.

# collectionView:transitionLayoutForOldLayout:newLayout: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks for the custom transition layout to use when moving between the specified layouts.

## Declaration

```objectivec
- (UICollectionViewTransitionLayout *) collectionView:(UICollectionView *) collectionView transitionLayoutForOldLayout:(UICollectionViewLayout *) fromLayout newLayout:(UICollectionViewLayout *) toLayout;
```

## Parameters

- `collectionView`: The collection view whose layout object is changing.
- `fromLayout`: The current layout of the collection view. This is the starting point for the transition.
- `toLayout`: The new layout for the collection view.

<a id="return-value"></a>

## Return Value

The collection view transition layout object to use to perform the transition.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to return a custom [UICollectionViewTransitionLayout](../uicollectionviewtransitionlayout.md) object for use during the transition. A transition layout object lets you customize the behavior of cells and decoration views when transitioning from one layout to the next. Normally, transitioning between layouts causes items to animate directly from their current locations to their new locations. With a transition layout object, you can have objects follow a non linear path, use a different timing algorithm, or move according to incoming touch events.

If your delegate does not implement this method, the collection view creates a standard [UICollectionViewTransitionLayout](../uicollectionviewtransitionlayout.md) object and uses that object to manage the transition.

## See Also

### Handling layout changes

- [collectionView:targetContentOffsetForProposedContentOffset:](collectionview%28__targetcontentoffsetforproposedcontentoffset_%29.md): Gives the delegate an opportunity to customize the content offset for layout changes and animated updates.
- [collectionView:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath:](collectionview%28__targetindexpathformoveofitemfromoriginalindexpath_atcurrentindexpath_toproposedindexpath_%29.md): Asks the delegate for the index path to use when moving an item.
