> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteractiondelegate/editmenuinteraction(_:willpresentmenufor:animator:)](https://developer.apple.com/documentation/uikit/uieditmenuinteractiondelegate/editmenuinteraction(_:willpresentmenufor:animator:))

# editMenuInteraction(\_:willPresentMenuFor:animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate when the interaction is about to present the menu.

## Declaration

```swift
optional func editMenuInteraction(_ interaction: UIEditMenuInteraction, willPresentMenuFor configuration: UIEditMenuConfiguration, animator: any UIEditMenuInteractionAnimating)
```

## Parameters

- `interaction`: The interaction object triggering the menu.
- `configuration`: The object containing the configuration details for the menu.
- `animator`: The object you use to add animations that run alongside the appearance transition.

## See Also

### Customizing the Menu

- [editMenuInteraction(\_:menuFor:suggestedActions:)](editmenuinteraction%28__menufor_suggestedactions_%29.md): Provides the menu to use when the interaction begins or requires an update.
- [editMenuInteraction(\_:targetRectFor:)](editmenuinteraction%28__targetrectfor_%29.md): Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.
- [editMenuInteraction(\_:willDismissMenuFor:animator:)](editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.
- [UIEditMenuInteractionAnimating](../uieditmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with menus.

# editMenuInteraction:willPresentMenuForConfiguration:animator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate when the interaction is about to present the menu.

## Declaration

```objectivec
- (void) editMenuInteraction:(UIEditMenuInteraction *) interaction willPresentMenuForConfiguration:(UIEditMenuConfiguration *) configuration animator:(id<UIEditMenuInteractionAnimating>) animator;
```

## Parameters

- `interaction`: The interaction object triggering the menu.
- `configuration`: The object containing the configuration details for the menu.
- `animator`: The object you use to add animations that run alongside the appearance transition.

## See Also

### Customizing the Menu

- [editMenuInteraction:menuForConfiguration:suggestedActions:](editmenuinteraction%28__menufor_suggestedactions_%29.md): Provides the menu to use when the interaction begins or requires an update.
- [editMenuInteraction:targetRectForConfiguration:](editmenuinteraction%28__targetrectfor_%29.md): Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.
- [editMenuInteraction:willDismissMenuForConfiguration:animator:](editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.
- [UIEditMenuInteractionAnimating](../uieditmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with menus.
