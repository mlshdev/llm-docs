> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/contextmenuinteraction(_:previewfordismissingmenuwithconfiguration:)](https://developer.apple.com/documentation/uikit/uicontrol/contextmenuinteraction(_:previewfordismissingmenuwithconfiguration:))

# contextMenuInteraction(\_:previewForDismissingMenuWithConfiguration:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
func contextMenuInteraction(_ interaction: UIContextMenuInteraction, previewForDismissingMenuWithConfiguration configuration: UIContextMenuConfiguration) -> UITargetedPreview?
```

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [contextMenuInteraction](contextmenuinteraction.md): A context menu interaction for the control.
- [isContextMenuInteractionEnabled](iscontextmenuinteractionenabled.md): A Boolean value that determines whether the control enables its context menu interaction.
- [showsMenuAsPrimaryAction](showsmenuasprimaryaction.md): A Boolean value that determines whether the context menu interaction is the control’s primary action.
- [contextMenuInteraction(\_:configurationForMenuAtLocation:)](contextmenuinteraction%28__configurationformenuatlocation_%29.md)
- [contextMenuInteraction(\_:previewForHighlightingMenuWithConfiguration:)](contextmenuinteraction%28__previewforhighlightingmenuwithconfiguration_%29.md)
- [contextMenuInteraction(\_:willDisplayMenuFor:animator:)](contextmenuinteraction%28__willdisplaymenufor_animator_%29.md)
- [contextMenuInteraction(\_:willEndFor:animator:)](contextmenuinteraction%28__willendfor_animator_%29.md)
- [menuAttachmentPoint(for:)](menuattachmentpoint%28for_%29.md): Return a point in this control’s coordinate space to which to attach the given configuration’s menu.

# contextMenuInteraction:previewForDismissingMenuWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
- (UITargetedPreview *) contextMenuInteraction:(UIContextMenuInteraction *) interaction previewForDismissingMenuWithConfiguration:(UIContextMenuConfiguration *) configuration;
```

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [contextMenuInteraction](contextmenuinteraction.md): A context menu interaction for the control.
- [contextMenuInteractionEnabled](iscontextmenuinteractionenabled.md): A Boolean value that determines whether the control enables its context menu interaction.
- [showsMenuAsPrimaryAction](showsmenuasprimaryaction.md): A Boolean value that determines whether the context menu interaction is the control’s primary action.
- [contextMenuInteraction:configurationForMenuAtLocation:](contextmenuinteraction%28__configurationformenuatlocation_%29.md)
- [contextMenuInteraction:previewForHighlightingMenuWithConfiguration:](contextmenuinteraction%28__previewforhighlightingmenuwithconfiguration_%29.md)
- [contextMenuInteraction:willDisplayMenuForConfiguration:animator:](contextmenuinteraction%28__willdisplaymenufor_animator_%29.md)
- [contextMenuInteraction:willEndForConfiguration:animator:](contextmenuinteraction%28__willendfor_animator_%29.md)
- [menuAttachmentPointForConfiguration:](menuattachmentpoint%28for_%29.md): Return a point in this control’s coordinate space to which to attach the given configuration’s menu.
