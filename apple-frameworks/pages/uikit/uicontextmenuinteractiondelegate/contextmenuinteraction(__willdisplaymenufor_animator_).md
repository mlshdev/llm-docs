> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:willdisplaymenufor:animator:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:willdisplaymenufor:animator:))

# contextMenuInteraction(\_:willDisplayMenuFor:animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Informs the delegate when a menu display begins.

## Declaration

```swift
optional func contextMenuInteraction(_ interaction: UIContextMenuInteraction, willDisplayMenuFor configuration: UIContextMenuConfiguration, animator: (any UIContextMenuInteractionAnimating)?)
```

## Parameters

- `interaction`: The interaction object that triggered the interaction.
- `configuration`: The context menu configuration.
- `animator`: The animator to configure custom animations.

## See Also

### Handling animations

- [contextMenuInteraction(\_:willEndFor:animator:)](contextmenuinteraction%28__willendfor_animator_%29.md): Informs the delegate when a menu display ends.
- [UIContextMenuInteractionAnimating](../uicontextmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with context menus.

# contextMenuInteraction:willDisplayMenuForConfiguration:animator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Informs the delegate when a menu display begins.

## Declaration

```objectivec
- (void) contextMenuInteraction:(UIContextMenuInteraction *) interaction willDisplayMenuForConfiguration:(UIContextMenuConfiguration *) configuration animator:(id<UIContextMenuInteractionAnimating>) animator;
```

## Parameters

- `interaction`: The interaction object that triggered the interaction.
- `configuration`: The context menu configuration.
- `animator`: The animator to configure custom animations.

## See Also

### Handling animations

- [contextMenuInteraction:willEndForConfiguration:animator:](contextmenuinteraction%28__willendfor_animator_%29.md): Informs the delegate when a menu display ends.
- [UIContextMenuInteractionAnimating](../uicontextmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with context menus.
