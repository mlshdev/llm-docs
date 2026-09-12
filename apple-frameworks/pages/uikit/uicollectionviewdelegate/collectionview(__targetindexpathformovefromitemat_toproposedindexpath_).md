> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:targetindexpathformovefromitemat:toproposedindexpath:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:targetindexpathformovefromitemat:toproposedindexpath:))

# collectionView(\_:targetIndexPathForMoveFromItemAt:toProposedIndexPath:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 15.0) · iPadOS 9.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate for the index path to use when moving an item.

> Use [collectionView(\_:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath:)](collectionview%28__targetindexpathformoveofitemfromoriginalindexpath_atcurrentindexpath_toproposedindexpath_%29.md) instead.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, targetIndexPathForMoveFromItemAt currentIndexPath: IndexPath, toProposedIndexPath proposedIndexPath: IndexPath) -> IndexPath
```

## Parameters

- `collectionView`: The collection view making the request.
- `currentIndexPath`: The item’s original index path.
- `proposedIndexPath`: The proposed index path of the item.

<a id="return-value"></a>

## Return Value

The index path you want to use for the item. If you do not implement this method, the collection view uses the index path in the `proposedIndexPath` parameter.

<a id="Discussion"></a>

## Discussion

During the interactive moving of an item, the collection view calls this method to see if you want to provide a different index path than the proposed path. You might use this method to prevent the user from dropping the item in an invalid location. For example, you might prevent the user from dropping the item in a specific section.

## See Also

### Deprecated

- [collectionView(\_:contextMenuConfigurationForItemAt:point:)](collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView(\_:previewForDismissingContextMenuWithConfiguration:)](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView(\_:previewForHighlightingContextMenuWithConfiguration:)](collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView(\_:shouldShowMenuForItemAt:)](collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView(\_:canPerformAction:forItemAt:withSender:)](collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView(\_:performAction:forItemAt:withSender:)](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.

# collectionView:targetIndexPathForMoveFromItemAtIndexPath:toProposedIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 15.0) · iPadOS 9.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate for the index path to use when moving an item.

> Use [collectionView:targetIndexPathForMoveOfItemFromOriginalIndexPath:atCurrentIndexPath:toProposedIndexPath:](collectionview%28__targetindexpathformoveofitemfromoriginalindexpath_atcurrentindexpath_toproposedindexpath_%29.md) instead.

## Declaration

```objectivec
- (NSIndexPath *) collectionView:(UICollectionView *) collectionView targetIndexPathForMoveFromItemAtIndexPath:(NSIndexPath *) currentIndexPath toProposedIndexPath:(NSIndexPath *) proposedIndexPath;
```

## Parameters

- `collectionView`: The collection view making the request.
- `currentIndexPath`: The item’s original index path.
- `proposedIndexPath`: The proposed index path of the item.

<a id="return-value"></a>

## Return Value

The index path you want to use for the item. If you do not implement this method, the collection view uses the index path in the `proposedIndexPath` parameter.

<a id="Discussion"></a>

## Discussion

During the interactive moving of an item, the collection view calls this method to see if you want to provide a different index path than the proposed path. You might use this method to prevent the user from dropping the item in an invalid location. For example, you might prevent the user from dropping the item in a specific section.

## See Also

### Deprecated

- [collectionView:contextMenuConfigurationForItemAtIndexPath:point:](collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView:previewForDismissingContextMenuWithConfiguration:](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView:previewForHighlightingContextMenuWithConfiguration:](collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView:shouldShowMenuForItemAtIndexPath:](collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView:canPerformAction:forItemAtIndexPath:withSender:](collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView:performAction:forItemAtIndexPath:withSender:](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.
