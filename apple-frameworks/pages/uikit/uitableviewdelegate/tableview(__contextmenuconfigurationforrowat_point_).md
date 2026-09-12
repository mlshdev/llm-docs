> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:contextmenuconfigurationforrowat:point:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:contextmenuconfigurationforrowat:point:))

# tableView(\_:contextMenuConfigurationForRowAt:point:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns a context menu configuration for the row at a point.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, contextMenuConfigurationForRowAt indexPath: IndexPath, point: CGPoint) -> UIContextMenuConfiguration?
```

## Parameters

- `tableView`: The table view containing the row.
- `indexPath`: The index path of the row.
- `point`: The location of the interaction in the table view’s coordinate space.

<a id="return-value"></a>

## Return Value

A context menu configuration for the `indexPath`.

<a id="Discussion"></a>

## Discussion

Use this method to provide a [UIContextMenuConfiguration](../uicontextmenuconfiguration.md) describing the menu to present. Return `nil` to prevent the interaction from beginning. Return an empty configuration to begin the interaction and then fail with a cancellation effect. Use the empty configuration to indicate to users that it’s possible for this element to present a menu, but that there are no actions to present at this time.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [tableView(\_:previewForDismissingContextMenuWithConfiguration:)](tableview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Returns the destination view when dismissing a context menu.
- [tableView(\_:previewForHighlightingContextMenuWithConfiguration:)](tableview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Returns a view to override the default preview the table view created.
- [tableView(\_:willDisplayContextMenu:animator:)](tableview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [tableView(\_:willEndContextMenuInteraction:animator:)](tableview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [tableView(\_:willPerformPreviewActionForMenuWith:animator:)](tableview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.

# tableView:contextMenuConfigurationForRowAtIndexPath:point: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns a context menu configuration for the row at a point.

## Declaration

```objectivec
- (UIContextMenuConfiguration *) tableView:(UITableView *) tableView contextMenuConfigurationForRowAtIndexPath:(NSIndexPath *) indexPath point:(CGPoint) point;
```

## Parameters

- `tableView`: The table view containing the row.
- `indexPath`: The index path of the row.
- `point`: The location of the interaction in the table view’s coordinate space.

<a id="return-value"></a>

## Return Value

A context menu configuration for the `indexPath`.

<a id="Discussion"></a>

## Discussion

Use this method to provide a [UIContextMenuConfiguration](../uicontextmenuconfiguration.md) describing the menu to present. Return `nil` to prevent the interaction from beginning. Return an empty configuration to begin the interaction and then fail with a cancellation effect. Use the empty configuration to indicate to users that it’s possible for this element to present a menu, but that there are no actions to present at this time.

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [tableView:previewForDismissingContextMenuWithConfiguration:](tableview%28__previewfordismissingcontextmenuwithconfiguration_%29.md): Returns the destination view when dismissing a context menu.
- [tableView:previewForHighlightingContextMenuWithConfiguration:](tableview%28__previewforhighlightingcontextmenuwithconfiguration_%29.md): Returns a view to override the default preview the table view created.
- [tableView:willDisplayContextMenuWithConfiguration:animator:](tableview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [tableView:willEndContextMenuInteractionWithConfiguration:animator:](tableview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [tableView:willPerformPreviewActionForMenuWithConfiguration:animator:](tableview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
