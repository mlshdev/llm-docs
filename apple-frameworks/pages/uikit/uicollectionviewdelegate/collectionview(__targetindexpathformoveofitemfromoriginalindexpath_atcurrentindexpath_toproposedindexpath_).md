> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:targetindexpathformoveofitemfromoriginalindexpath:atcurrentindexpath:toproposedindexpath:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:targetindexpathformoveofitemfromoriginalindexpath:atcurrentindexpath:toproposedindexpath:))

# collectionView(\_:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate for the index path to use when moving an item.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, targetIndexPathForMoveOfItemFromOriginalIndexPath originalIndexPath: IndexPath, atCurrentIndexPath currentIndexPath: IndexPath, toProposedIndexPath proposedIndexPath: IndexPath) -> IndexPath
```

## Parameters

- `collectionView`: The collection view making the request.
- `originalIndexPath`: The item’s original index path. This value doesn’t change as the user interactively moves the item.
- `currentIndexPath`: The item’s current index path. This value changes as the user interactively moves the item, reflecting the item’s current position in the collection view.
- `proposedIndexPath`: The proposed index path of the item.

<a id="return-value"></a>

## Return Value

The index path you want to use for the item. If you don’t implement this method, the collection view uses the index path in the `proposedIndexPath` parameter.

<a id="Discussion"></a>

## Discussion

During the interactive moving of an item, the collection view calls this method to see if you want to provide a different index path than the proposed path. You might use this method to prevent the user from dropping the item in an invalid location. For example, you might prevent the user from dropping the item in a specific section.

## See Also

### Handling layout changes

- [collectionView(\_:transitionLayoutForOldLayout:newLayout:)](collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md): Asks for the custom transition layout to use when moving between the specified layouts.
- [collectionView(\_:targetContentOffsetForProposedContentOffset:)](collectionview%28__targetcontentoffsetforproposedcontentoffset_%29.md): Gives the delegate an opportunity to customize the content offset for layout changes and animated updates.

# collectionView:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate for the index path to use when moving an item.

## Declaration

```objectivec
- (NSIndexPath *) collectionView:(UICollectionView *) collectionView targetIndexPathForMoveOfItemFromOriginalIndexPath:(NSIndexPath *) originalIndexPath atCurrentIndexPath:(NSIndexPath *) currentIndexPath toProposedIndexPath:(NSIndexPath *) proposedIndexPath;
```

## Parameters

- `collectionView`: The collection view making the request.
- `originalIndexPath`: The item’s original index path. This value doesn’t change as the user interactively moves the item.
- `currentIndexPath`: The item’s current index path. This value changes as the user interactively moves the item, reflecting the item’s current position in the collection view.
- `proposedIndexPath`: The proposed index path of the item.

<a id="return-value"></a>

## Return Value

The index path you want to use for the item. If you don’t implement this method, the collection view uses the index path in the `proposedIndexPath` parameter.

<a id="Discussion"></a>

## Discussion

During the interactive moving of an item, the collection view calls this method to see if you want to provide a different index path than the proposed path. You might use this method to prevent the user from dropping the item in an invalid location. For example, you might prevent the user from dropping the item in a specific section.

## See Also

### Handling layout changes

- [collectionView:transitionLayoutForOldLayout:newLayout:](collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md): Asks for the custom transition layout to use when moving between the specified layouts.
- [collectionView:targetContentOffsetForProposedContentOffset:](collectionview%28__targetcontentoffsetforproposedcontentoffset_%29.md): Gives the delegate an opportunity to customize the content offset for layout changes and animated updates.
