> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:configuration:dismissalpreviewforitemwithidentifier:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:configuration:dismissalpreviewforitemwithidentifier:))

# contextMenuInteraction(\_:configuration:dismissalPreviewForItemWithIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+ · visionOS 1.0+

Asks the delegate for a preview of the item with the specified identifier when a context-menu interaction ends.

## Declaration

```swift
optional func contextMenuInteraction(_ interaction: UIContextMenuInteraction, configuration: UIContextMenuConfiguration, dismissalPreviewForItemWithIdentifier identifier: any NSCopying) -> UITargetedPreview?
```

## Parameters

- `interaction`: The context-menu interaction object.
- `configuration`: The configuration of the menu to dismiss.
- `identifier`: The identifier for the item to generate a preview for.

<a id="return-value"></a>

## Return Value

A targeted preview object corresponding to the item with the identifier to use during the menu’s dismissal animation.

<a id="Discussion"></a>

## Discussion

The system calls this method when a context-menu dismissal occurs. Implement this method to override the default dismissal preview that the system generates for the item.

## See Also

### Customizing the preview animations

- [contextMenuInteraction(\_:configuration:highlightPreviewForItemWithIdentifier:)](contextmenuinteraction%28__configuration_highlightpreviewforitemwithidentifier_%29.md): Asks the delegate for a preview of the item with the specified identifier when a context-menu interaction begins.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.

# contextMenuInteraction:configuration:dismissalPreviewForItemWithIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+ · visionOS 1.0+

Asks the delegate for a preview of the item with the specified identifier when a context-menu interaction ends.

## Declaration

```objectivec
- (UITargetedPreview *) contextMenuInteraction:(UIContextMenuInteraction *) interaction configuration:(UIContextMenuConfiguration *) configuration dismissalPreviewForItemWithIdentifier:(id<NSCopying>) identifier;
```

## Parameters

- `interaction`: The context-menu interaction object.
- `configuration`: The configuration of the menu to dismiss.
- `identifier`: The identifier for the item to generate a preview for.

<a id="return-value"></a>

## Return Value

A targeted preview object corresponding to the item with the identifier to use during the menu’s dismissal animation.

<a id="Discussion"></a>

## Discussion

The system calls this method when a context-menu dismissal occurs. Implement this method to override the default dismissal preview that the system generates for the item.

## See Also

### Customizing the preview animations

- [contextMenuInteraction:configuration:highlightPreviewForItemWithIdentifier:](contextmenuinteraction%28__configuration_highlightpreviewforitemwithidentifier_%29.md): Asks the delegate for a preview of the item with the specified identifier when a context-menu interaction begins.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
