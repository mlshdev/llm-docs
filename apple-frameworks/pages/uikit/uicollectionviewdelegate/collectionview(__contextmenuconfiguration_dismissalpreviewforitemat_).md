> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:contextmenuconfiguration:dismissalpreviewforitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:contextmenuconfiguration:dismissalpreviewforitemat:))

# collectionView(\_:contextMenuConfiguration:dismissalPreviewForItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+ · visionOS 1.0+

Asks the delegate for a preview of the item at the specified index path when a context-menu interaction ends.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, contextMenuConfiguration configuration: UIContextMenuConfiguration, dismissalPreviewForItemAt indexPath: IndexPath) -> UITargetedPreview?
```

## Parameters

- `collectionView`: The collection view containing the item.
- `configuration`: The configuration of the menu to dismiss.
- `indexPath`: The index path of the item where the menu dismissal occurs.

<a id="return-value"></a>

## Return Value

A targeted preview object corresponding to the item at the index path to use during the menu’s dismissal animation.

<a id="Discussion"></a>

## Discussion

The system calls this method when a context menu dismisses from the collection view. Implement this method to override the default dismissal preview that the collection view generates for the item at `indexPath`.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [collectionView(\_:willDisplayContextMenu:animator:)](collectionview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [collectionView(\_:willEndContextMenuInteraction:animator:)](collectionview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [collectionView(\_:willPerformPreviewActionForMenuWith:animator:)](collectionview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
- [collectionView(\_:contextMenuConfigurationForItemsAt:point:)](collectionview%28__contextmenuconfigurationforitemsat_point_%29.md): Asks the delegate for a context-menu configuration for the items at the specified index paths.
- [collectionView(\_:contextMenuConfiguration:highlightPreviewForItemAt:)](collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction begins.

# collectionView:contextMenuConfiguration:dismissalPreviewForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+ · visionOS 1.0+

Asks the delegate for a preview of the item at the specified index path when a context-menu interaction ends.

## Declaration

```objectivec
- (UITargetedPreview *) collectionView:(UICollectionView *) collectionView contextMenuConfiguration:(UIContextMenuConfiguration *) configuration dismissalPreviewForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view containing the item.
- `configuration`: The configuration of the menu to dismiss.
- `indexPath`: The index path of the item where the menu dismissal occurs.

<a id="return-value"></a>

## Return Value

A targeted preview object corresponding to the item at the index path to use during the menu’s dismissal animation.

<a id="Discussion"></a>

## Discussion

The system calls this method when a context menu dismisses from the collection view. Implement this method to override the default dismissal preview that the collection view generates for the item at `indexPath`.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [collectionView:willDisplayContextMenuWithConfiguration:animator:](collectionview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [collectionView:willEndContextMenuInteractionWithConfiguration:animator:](collectionview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [collectionView:willPerformPreviewActionForMenuWithConfiguration:animator:](collectionview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
- [collectionView:contextMenuConfigurationForItemsAtIndexPaths:point:](collectionview%28__contextmenuconfigurationforitemsat_point_%29.md): Asks the delegate for a context-menu configuration for the items at the specified index paths.
- [collectionView:contextMenuConfiguration:highlightPreviewForItemAtIndexPath:](collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction begins.
