> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:previewforhighlightingcontextmenuwithconfiguration:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:previewforhighlightingcontextmenuwithconfiguration:))

# collectionView(\_:previewForHighlightingContextMenuWithConfiguration:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a view to override the default preview the collection view created.

> Use [collectionView(\_:contextMenuConfiguration:highlightPreviewForItemAt:)](collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md) instead.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, previewForHighlightingContextMenuWithConfiguration configuration: UIContextMenuConfiguration) -> UITargetedPreview?
```

## Parameters

- `collectionView`: The collection view object requesting this information.
- `configuration`: The configuration of the menu being highlighted.

<a id="return-value"></a>

## Return Value

A targeted preview object describing the highlight preview.

## See Also

### Deprecated

- [collectionView(\_:targetIndexPathForMoveFromItemAt:toProposedIndexPath:)](collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView(\_:contextMenuConfigurationForItemAt:point:)](collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView(\_:previewForDismissingContextMenuWithConfiguration:)](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView(\_:shouldShowMenuForItemAt:)](collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView(\_:canPerformAction:forItemAt:withSender:)](collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView(\_:performAction:forItemAt:withSender:)](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.

# collectionView:previewForHighlightingContextMenuWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a view to override the default preview the collection view created.

> Use [collectionView:contextMenuConfiguration:highlightPreviewForItemAtIndexPath:](collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md) instead.

## Declaration

```objectivec
- (UITargetedPreview *) collectionView:(UICollectionView *) collectionView previewForHighlightingContextMenuWithConfiguration:(UIContextMenuConfiguration *) configuration;
```

## Parameters

- `collectionView`: The collection view object requesting this information.
- `configuration`: The configuration of the menu being highlighted.

<a id="return-value"></a>

## Return Value

A targeted preview object describing the highlight preview.

## See Also

### Deprecated

- [collectionView:targetIndexPathForMoveFromItemAtIndexPath:toProposedIndexPath:](collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView:contextMenuConfigurationForItemAtIndexPath:point:](collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView:previewForDismissingContextMenuWithConfiguration:](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView:shouldShowMenuForItemAtIndexPath:](collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView:canPerformAction:forItemAtIndexPath:withSender:](collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView:performAction:forItemAtIndexPath:withSender:](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.
