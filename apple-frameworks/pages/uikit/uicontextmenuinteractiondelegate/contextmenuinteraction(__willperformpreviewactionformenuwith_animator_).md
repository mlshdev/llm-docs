> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:willperformpreviewactionformenuwith:animator:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:willperformpreviewactionformenuwith:animator:))

# contextMenuInteraction(\_:willPerformPreviewActionForMenuWith:animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Informs the delegate when a preview action begins.

## Declaration

```swift
optional func contextMenuInteraction(_ interaction: UIContextMenuInteraction, willPerformPreviewActionForMenuWith configuration: UIContextMenuConfiguration, animator: any UIContextMenuInteractionCommitAnimating)
```

## Parameters

- `interaction`: The interaction object that triggered the interaction.
- `configuration`: The context menu configuration.
- `animator`: The animator to configure custom animations.

## See Also

### Responding to the menu’s appearance

- [UIContextMenuInteractionCommitAnimating](../uicontextmenuinteractioncommitanimating.md): Methods adopted by system-supplied animator objects when committing preview-related animations.

# contextMenuInteraction:willPerformPreviewActionForMenuWithConfiguration:animator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Informs the delegate when a preview action begins.

## Declaration

```objectivec
- (void) contextMenuInteraction:(UIContextMenuInteraction *) interaction willPerformPreviewActionForMenuWithConfiguration:(UIContextMenuConfiguration *) configuration animator:(id<UIContextMenuInteractionCommitAnimating>) animator;
```

## Parameters

- `interaction`: The interaction object that triggered the interaction.
- `configuration`: The context menu configuration.
- `animator`: The animator to configure custom animations.

## See Also

### Responding to the menu’s appearance

- [UIContextMenuInteractionCommitAnimating](../uicontextmenuinteractioncommitanimating.md): Methods adopted by system-supplied animator objects when committing preview-related animations.
