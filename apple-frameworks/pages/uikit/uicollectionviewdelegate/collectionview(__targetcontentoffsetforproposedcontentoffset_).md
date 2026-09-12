> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:targetcontentoffsetforproposedcontentoffset:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:targetcontentoffsetforproposedcontentoffset:))

# collectionView(\_:targetContentOffsetForProposedContentOffset:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Gives the delegate an opportunity to customize the content offset for layout changes and animated updates.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, targetContentOffsetForProposedContentOffset proposedContentOffset: CGPoint) -> CGPoint
```

## Parameters

- `collectionView`: The collection view making the request.
- `proposedContentOffset`: The proposed point (in the coordinate space of the collection view’s content view) for the upper-left corner of the visible content. This represents the point that the collection view has calculated as the most likely value to use for the animations or layout update.

<a id="return-value"></a>

## Return Value

The content offset that you want to use instead. If you do not implement this method, the collection view uses the value in the `proposedContentOffset` parameter.

<a id="Discussion"></a>

## Discussion

During layout updates, or when transitioning between layouts, the collection view calls this method to give you the opportunity to change the proposed content offset to use at the end of the animation. You might return a new value if the layout or animations might cause items to be positioned in a way that is not optimal for your design.

This method is called after the layout object’s [targetContentOffset(forProposedContentOffset:)](../uicollectionviewlayout/targetcontentoffset%28forproposedcontentoffset_%29.md) method. Implement this method in situations where you do not want to subclass your layout object to modify the content offset.

## See Also

### Handling layout changes

- [collectionView(\_:transitionLayoutForOldLayout:newLayout:)](collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md): Asks for the custom transition layout to use when moving between the specified layouts.
- [collectionView(\_:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath:)](collectionview%28__targetindexpathformoveofitemfromoriginalindexpath_atcurrentindexpath_toproposedindexpath_%29.md): Asks the delegate for the index path to use when moving an item.

# collectionView:targetContentOffsetForProposedContentOffset: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Gives the delegate an opportunity to customize the content offset for layout changes and animated updates.

## Declaration

```objectivec
- (CGPoint) collectionView:(UICollectionView *) collectionView targetContentOffsetForProposedContentOffset:(CGPoint) proposedContentOffset;
```

## Parameters

- `collectionView`: The collection view making the request.
- `proposedContentOffset`: The proposed point (in the coordinate space of the collection view’s content view) for the upper-left corner of the visible content. This represents the point that the collection view has calculated as the most likely value to use for the animations or layout update.

<a id="return-value"></a>

## Return Value

The content offset that you want to use instead. If you do not implement this method, the collection view uses the value in the `proposedContentOffset` parameter.

<a id="Discussion"></a>

## Discussion

During layout updates, or when transitioning between layouts, the collection view calls this method to give you the opportunity to change the proposed content offset to use at the end of the animation. You might return a new value if the layout or animations might cause items to be positioned in a way that is not optimal for your design.

This method is called after the layout object’s [targetContentOffsetForProposedContentOffset:](../uicollectionviewlayout/targetcontentoffset%28forproposedcontentoffset_%29.md) method. Implement this method in situations where you do not want to subclass your layout object to modify the content offset.

## See Also

### Handling layout changes

- [collectionView:transitionLayoutForOldLayout:newLayout:](collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md): Asks for the custom transition layout to use when moving between the specified layouts.
- [collectionView:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath:](collectionview%28__targetindexpathformoveofitemfromoriginalindexpath_atcurrentindexpath_toproposedindexpath_%29.md): Asks the delegate for the index path to use when moving an item.
