> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:shouldshowmenuforitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:shouldshowmenuforitemat:))

# collectionView(\_:shouldShowMenuForItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Asks the delegate if an action menu should be displayed for the specified item.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, shouldShowMenuForItemAt indexPath: IndexPath) -> Bool
```

## Parameters

- `collectionView`: The collection view object that is making the request.
- `indexPath`: The index path of the affected item.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the editing menu should be shown positioned near the item and pointing to it or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

If the user tap-holds a certain item in the collection view, this method (if implemented) is invoked first. Return [true](https://developer.apple.com/documentation/swift/true) if you want to permit the editing menu to be displayed. Return [false](https://developer.apple.com/documentation/swift/false) if the editing menu shouldn’t be shown—for example, you might return [false](https://developer.apple.com/documentation/swift/false) if the corresponding item contains data that should not be copied or pasted over.

If you do not implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [collectionView(\_:targetIndexPathForMoveFromItemAt:toProposedIndexPath:)](collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView(\_:contextMenuConfigurationForItemAt:point:)](collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView(\_:previewForDismissingContextMenuWithConfiguration:)](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView(\_:previewForHighlightingContextMenuWithConfiguration:)](collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView(\_:canPerformAction:forItemAt:withSender:)](collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView(\_:performAction:forItemAt:withSender:)](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.

# collectionView:shouldShowMenuForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Asks the delegate if an action menu should be displayed for the specified item.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView shouldShowMenuForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object that is making the request.
- `indexPath`: The index path of the affected item.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the editing menu should be shown positioned near the item and pointing to it or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

If the user tap-holds a certain item in the collection view, this method (if implemented) is invoked first. Return [true](https://developer.apple.com/documentation/swift/true) if you want to permit the editing menu to be displayed. Return [false](https://developer.apple.com/documentation/swift/false) if the editing menu shouldn’t be shown—for example, you might return [false](https://developer.apple.com/documentation/swift/false) if the corresponding item contains data that should not be copied or pasted over.

If you do not implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [collectionView:targetIndexPathForMoveFromItemAtIndexPath:toProposedIndexPath:](collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md): Deprecated. Asks the delegate for the index path to use when moving an item.
- [collectionView:contextMenuConfigurationForItemAtIndexPath:point:](collectionview%28__contextmenuconfigurationforitemat_point_%29.md): Deprecated. Returns a context menu configuration for the item at a point.
- [collectionView:previewForDismissingContextMenuWithConfiguration:](collectionview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Deprecated. Returns the destination view when dismissing a context menu.
- [collectionView:previewForHighlightingContextMenuWithConfiguration:](collectionview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Deprecated. Returns a view to override the default preview the collection view created.
- [collectionView:canPerformAction:forItemAtIndexPath:withSender:](collectionview%28__canperformaction_foritemat_withsender_%29.md): Deprecated. Asks the delegate if it can perform the specified action on an item in the collection view.
- [collectionView:performAction:forItemAtIndexPath:withSender:](collectionview%28__performaction_foritemat_withsender_%29.md): Deprecated. Tells the delegate to perform the specified action on an item in the collection view.
