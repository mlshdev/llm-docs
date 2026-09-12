> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:willdisplaycontextmenu:animator:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:willdisplaycontextmenu:animator:))

# collectionView(\_:willDisplayContextMenu:animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · tvOS 17.0+ · visionOS 1.0+

Informs the delegate when a context menu will appear.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, willDisplayContextMenu configuration: UIContextMenuConfiguration, animator: (any UIContextMenuInteractionAnimating)?)
```

## Parameters

- `collectionView`: The collection view that informs the delegate of this event.
- `configuration`: The configuration of the menu to display.
- `animator`: The animations to run alongside the appearance transition.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [collectionView(\_:willEndContextMenuInteraction:animator:)](collectionview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [collectionView(\_:willPerformPreviewActionForMenuWith:animator:)](collectionview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
- [collectionView(\_:contextMenuConfigurationForItemsAt:point:)](collectionview%28__contextmenuconfigurationforitemsat_point_%29.md): Asks the delegate for a context-menu configuration for the items at the specified index paths.
- [collectionView(\_:contextMenuConfiguration:highlightPreviewForItemAt:)](collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction begins.
- [collectionView(\_:contextMenuConfiguration:dismissalPreviewForItemAt:)](collectionview%28__contextmenuconfiguration_dismissalpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction ends.

# collectionView:willDisplayContextMenuWithConfiguration:animator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · tvOS 17.0+ · visionOS 1.0+

Informs the delegate when a context menu will appear.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView willDisplayContextMenuWithConfiguration:(UIContextMenuConfiguration *) configuration animator:(id<UIContextMenuInteractionAnimating>) animator;
```

## Parameters

- `collectionView`: The collection view that informs the delegate of this event.
- `configuration`: The configuration of the menu to display.
- `animator`: The animations to run alongside the appearance transition.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [collectionView:willEndContextMenuInteractionWithConfiguration:animator:](collectionview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [collectionView:willPerformPreviewActionForMenuWithConfiguration:animator:](collectionview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
- [collectionView:contextMenuConfigurationForItemsAtIndexPaths:point:](collectionview%28__contextmenuconfigurationforitemsat_point_%29.md): Asks the delegate for a context-menu configuration for the items at the specified index paths.
- [collectionView:contextMenuConfiguration:highlightPreviewForItemAtIndexPath:](collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction begins.
- [collectionView:contextMenuConfiguration:dismissalPreviewForItemAtIndexPath:](collectionview%28__contextmenuconfiguration_dismissalpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction ends.
