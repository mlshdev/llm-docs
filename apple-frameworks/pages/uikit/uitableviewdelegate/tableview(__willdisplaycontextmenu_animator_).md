> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:willdisplaycontextmenu:animator:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:willdisplaycontextmenu:animator:))

# tableView(\_:willDisplayContextMenu:animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

Informs the delegate when a context menu will appear.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, willDisplayContextMenu configuration: UIContextMenuConfiguration, animator: (any UIContextMenuInteractionAnimating)?)
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `configuration`: The configuration of the menu to display.
- `animator`: The animations to run alongside the appearance transition.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [tableView(\_:contextMenuConfigurationForRowAt:point:)](tableview%28__contextmenuconfigurationforrowat_point_%29.md): Returns a context menu configuration for the row at a point.
- [tableView(\_:previewForDismissingContextMenuWithConfiguration:)](tableview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Returns the destination view when dismissing a context menu.
- [tableView(\_:previewForHighlightingContextMenuWithConfiguration:)](tableview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Returns a view to override the default preview the table view created.
- [tableView(\_:willEndContextMenuInteraction:animator:)](tableview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [tableView(\_:willPerformPreviewActionForMenuWith:animator:)](tableview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.

# tableView:willDisplayContextMenuWithConfiguration:animator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

Informs the delegate when a context menu will appear.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView willDisplayContextMenuWithConfiguration:(UIContextMenuConfiguration *) configuration animator:(id<UIContextMenuInteractionAnimating>) animator;
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `configuration`: The configuration of the menu to display.
- `animator`: The animations to run alongside the appearance transition.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [tableView:contextMenuConfigurationForRowAtIndexPath:point:](tableview%28__contextmenuconfigurationforrowat_point_%29.md): Returns a context menu configuration for the row at a point.
- [tableView:previewForDismissingContextMenuWithConfiguration:](tableview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Returns the destination view when dismissing a context menu.
- [tableView:previewForHighlightingContextMenuWithConfiguration:](tableview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Returns a view to override the default preview the table view created.
- [tableView:willEndContextMenuInteractionWithConfiguration:animator:](tableview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [tableView:willPerformPreviewActionForMenuWithConfiguration:animator:](tableview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
