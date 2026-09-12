> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteractiondelegate/editmenuinteraction(_:targetrectfor:)](https://developer.apple.com/documentation/uikit/uieditmenuinteractiondelegate/editmenuinteraction(_:targetrectfor:))

# editMenuInteraction(\_:targetRectFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.

## Declaration

```swift
optional func editMenuInteraction(_ interaction: UIEditMenuInteraction, targetRectFor configuration: UIEditMenuConfiguration) -> CGRect
```

## Parameters

- `interaction`: The interaction object triggering the menu.
- `configuration`: The object containing the configuration details for the menu.

<a id="return-value"></a>

## Return Value

Returns a rectangle relative to the edit menu interaction’s view. Return [CGRectNull](../../coregraphics/cgrectnull.md) to use the default rectangle.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the interaction begins or requires an update for the position of the menu when calling [updateVisibleMenuPosition(animated:)](../uieditmenuinteraction/updatevisiblemenuposition%28animated_%29.md). The menu displays around the target rectangle you provide, space permitting, with the menu pointing in the direction the configuration specifies. When not implemented, the default is an empty rectangle centered at configuration.sourcePoint. Return [CGRectNull](../../coregraphics/cgrectnull.md) to use the default rect.

The following example provides the frame of the subview as the target rectangle for the interaction.

```swift
func editMenuInteraction(_ interaction: UIEditMenuInteraction, targetRectFor configuration: UIEditMenuConfiguration) -> CGRect {
    guard let selectedShapeView = shapeView(at: configuration.sourcePoint) else {
        return .null // Uses the default implementation.
    }

    return selectedShapeView.frame
}
```

## See Also

### Customizing the Menu

- [editMenuInteraction(\_:menuFor:suggestedActions:)](editmenuinteraction%28__menufor_suggestedactions_%29.md): Provides the menu to use when the interaction begins or requires an update.
- [editMenuInteraction(\_:willPresentMenuFor:animator:)](editmenuinteraction%28__willpresentmenufor_animator_%29.md): Informs the delegate when the interaction is about to present the menu.
- [editMenuInteraction(\_:willDismissMenuFor:animator:)](editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.
- [UIEditMenuInteractionAnimating](../uieditmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with menus.

# editMenuInteraction:targetRectForConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.

## Declaration

```objectivec
- (CGRect) editMenuInteraction:(UIEditMenuInteraction *) interaction targetRectForConfiguration:(UIEditMenuConfiguration *) configuration;
```

## Parameters

- `interaction`: The interaction object triggering the menu.
- `configuration`: The object containing the configuration details for the menu.

<a id="return-value"></a>

## Return Value

Returns a rectangle relative to the edit menu interaction’s view. Return [CGRectNull](../../coregraphics/cgrectnull.md) to use the default rectangle.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the interaction begins or requires an update for the position of the menu when calling [updateVisibleMenuPositionAnimated:](../uieditmenuinteraction/updatevisiblemenuposition%28animated_%29.md). The menu displays around the target rectangle you provide, space permitting, with the menu pointing in the direction the configuration specifies. When not implemented, the default is an empty rectangle centered at configuration.sourcePoint. Return [CGRectNull](../../coregraphics/cgrectnull.md) to use the default rect.

The following example provides the frame of the subview as the target rectangle for the interaction.

```swift
func editMenuInteraction(_ interaction: UIEditMenuInteraction, targetRectFor configuration: UIEditMenuConfiguration) -> CGRect {
    guard let selectedShapeView = shapeView(at: configuration.sourcePoint) else {
        return .null // Uses the default implementation.
    }

    return selectedShapeView.frame
}
```

## See Also

### Customizing the Menu

- [editMenuInteraction:menuForConfiguration:suggestedActions:](editmenuinteraction%28__menufor_suggestedactions_%29.md): Provides the menu to use when the interaction begins or requires an update.
- [editMenuInteraction:willPresentMenuForConfiguration:animator:](editmenuinteraction%28__willpresentmenufor_animator_%29.md): Informs the delegate when the interaction is about to present the menu.
- [editMenuInteraction:willDismissMenuForConfiguration:animator:](editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.
- [UIEditMenuInteractionAnimating](../uieditmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with menus.
