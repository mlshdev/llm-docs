> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:contextmenuconfigurationforitemat:point:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:contextmenuconfigurationforitemat:point:))

# collectionView(\_:contextMenuConfigurationForItemAt:point:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a context menu configuration for the item at a point.

> Use [collectionView(\_:contextMenuConfigurationForItemsAt:point:)](collectionview%28__contextmenuconfigurationforitemsat_point_%29.md) instead.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, contextMenuConfigurationForItemAt indexPath: IndexPath, point: CGPoint) -> UIContextMenuConfiguration?
```

## Parameters

- `collectionView`: The collection view containing the item.
- `indexPath`: The index path of the item for which a configuration is being requested.
- `point`: The location of the interaction in the collection view’s coordinate space.

<a id="return-value"></a>

## Return Value

A contextual menu configuration object describing the menu to be presented. Returning `nil` prevents the interaction from beginning. Returning an empty configuration object causes the interaction to begin, and then end with a cancellation effect.

<a id="Discussion"></a>

## Discussion

You can use the cancellation effect from returning an empty configuration to indicate to users that it’s possible for a menu to be presented from this item, but that there are no actions to present at this particular time.

## See Also

### Deprecated

- [collectionView(\_:targetIndexPathForMoveFromItemAt:toProposedIndexPath:)](collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView(\_:previewForDismissingContextMenuWithConfiguration:)](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView(\_:previewForHighlightingContextMenuWithConfiguration:)](collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView(\_:shouldShowMenuForItemAt:)](collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView(\_:canPerformAction:forItemAt:withSender:)](collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView(\_:performAction:forItemAt:withSender:)](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.

# collectionView:contextMenuConfigurationForItemAtIndexPath:point: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a context menu configuration for the item at a point.

> Use [collectionView:contextMenuConfigurationForItemsAtIndexPaths:point:](collectionview%28__contextmenuconfigurationforitemsat_point_%29.md) instead.

## Declaration

```objectivec
- (UIContextMenuConfiguration *) collectionView:(UICollectionView *) collectionView contextMenuConfigurationForItemAtIndexPath:(NSIndexPath *) indexPath point:(CGPoint) point;
```

## Parameters

- `collectionView`: The collection view containing the item.
- `indexPath`: The index path of the item for which a configuration is being requested.
- `point`: The location of the interaction in the collection view’s coordinate space.

<a id="return-value"></a>

## Return Value

A contextual menu configuration object describing the menu to be presented. Returning `nil` prevents the interaction from beginning. Returning an empty configuration object causes the interaction to begin, and then end with a cancellation effect.

<a id="Discussion"></a>

## Discussion

You can use the cancellation effect from returning an empty configuration to indicate to users that it’s possible for a menu to be presented from this item, but that there are no actions to present at this particular time.

## See Also

### Deprecated

- [collectionView:targetIndexPathForMoveFromItemAtIndexPath:toProposedIndexPath:](collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView:previewForDismissingContextMenuWithConfiguration:](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView:previewForHighlightingContextMenuWithConfiguration:](collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView:shouldShowMenuForItemAtIndexPath:](collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView:canPerformAction:forItemAtIndexPath:withSender:](collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView:performAction:forItemAtIndexPath:withSender:](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.
