> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:canperformaction:foritemat:withsender:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:canperformaction:foritemat:withsender:))

# collectionView(\_:canPerformAction:forItemAt:withSender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Asks the delegate if it can perform the specified action on an item in the collection view.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, canPerformAction action: Selector, forItemAt indexPath: IndexPath, withSender sender: Any?) -> Bool
```

## Parameters

- `collectionView`: The collection view object that is making the request.
- `action`: The selector identifying the action to be performed.
- `indexPath`: The index path of the affected item.
- `sender`: The object that wants to initiate the action.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the command corresponding to action should appear in the editing menu or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

This method is invoked after the [collectionView(\_:shouldShowMenuForItemAt:)](collectionview%28__shouldshowmenuforitemat_%29.md) method. It gives you the opportunity to exclude commands from the editing menu. For example, the user might have copied some content from one item and wants to paste it into another item that cannot accept the content. In such a case, your method could return [false](https://developer.apple.com/documentation/swift/false) to prevent the display of the relevant command.

If you do not implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [collectionView(\_:targetIndexPathForMoveFromItemAt:toProposedIndexPath:)](collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView(\_:contextMenuConfigurationForItemAt:point:)](collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView(\_:previewForDismissingContextMenuWithConfiguration:)](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView(\_:previewForHighlightingContextMenuWithConfiguration:)](collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView(\_:shouldShowMenuForItemAt:)](collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView(\_:performAction:forItemAt:withSender:)](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.

# collectionView:canPerformAction:forItemAtIndexPath:withSender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Asks the delegate if it can perform the specified action on an item in the collection view.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView canPerformAction:(SEL) action forItemAtIndexPath:(NSIndexPath *) indexPath withSender:(id) sender;
```

## Parameters

- `collectionView`: The collection view object that is making the request.
- `action`: The selector identifying the action to be performed.
- `indexPath`: The index path of the affected item.
- `sender`: The object that wants to initiate the action.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the command corresponding to action should appear in the editing menu or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

This method is invoked after the [collectionView:shouldShowMenuForItemAtIndexPath:](collectionview%28__shouldshowmenuforitemat_%29.md) method. It gives you the opportunity to exclude commands from the editing menu. For example, the user might have copied some content from one item and wants to paste it into another item that cannot accept the content. In such a case, your method could return [false](https://developer.apple.com/documentation/swift/false) to prevent the display of the relevant command.

If you do not implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [collectionView:targetIndexPathForMoveFromItemAtIndexPath:toProposedIndexPath:](collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView:contextMenuConfigurationForItemAtIndexPath:point:](collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView:previewForDismissingContextMenuWithConfiguration:](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView:previewForHighlightingContextMenuWithConfiguration:](collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView:shouldShowMenuForItemAtIndexPath:](collectionview%28__shouldshowmenuforitemat_%29.md): Deprecated. Asks the delegate if an action menu should be displayed for the specified item.
- [collectionView:performAction:forItemAtIndexPath:withSender:](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.
