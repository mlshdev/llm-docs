> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:previewforhighlightingcontextmenuwithconfiguration:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:previewforhighlightingcontextmenuwithconfiguration:))

# tableView(\_:previewForHighlightingContextMenuWithConfiguration:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns a view to override the default preview the table view created.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, previewForHighlightingContextMenuWithConfiguration configuration: UIContextMenuConfiguration) -> UITargetedPreview?
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `configuration`: The configuration of the menu being highlighted.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [tableView(\_:contextMenuConfigurationForRowAt:point:)](tableview%28__contextmenuconfigurationforrowat_point_%29.md): Returns a context menu configuration for the row at a point.
- [tableView(\_:previewForDismissingContextMenuWithConfiguration:)](tableview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Returns the destination view when dismissing a context menu.
- [tableView(\_:willDisplayContextMenu:animator:)](tableview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [tableView(\_:willEndContextMenuInteraction:animator:)](tableview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [tableView(\_:willPerformPreviewActionForMenuWith:animator:)](tableview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.

# tableView:previewForHighlightingContextMenuWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns a view to override the default preview the table view created.

## Declaration

```objectivec
- (UITargetedPreview *) tableView:(UITableView *) tableView previewForHighlightingContextMenuWithConfiguration:(UIContextMenuConfiguration *) configuration;
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `configuration`: The configuration of the menu being highlighted.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [tableView:contextMenuConfigurationForRowAtIndexPath:point:](tableview%28__contextmenuconfigurationforrowat_point_%29.md): Returns a context menu configuration for the row at a point.
- [tableView:previewForDismissingContextMenuWithConfiguration:](tableview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Returns the destination view when dismissing a context menu.
- [tableView:willDisplayContextMenuWithConfiguration:animator:](tableview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [tableView:willEndContextMenuInteractionWithConfiguration:animator:](tableview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [tableView:willPerformPreviewActionForMenuWithConfiguration:animator:](tableview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
