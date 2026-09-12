> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteractiondelegate/editmenuinteraction(_:menufor:suggestedactions:)](https://developer.apple.com/documentation/uikit/uieditmenuinteractiondelegate/editmenuinteraction(_:menufor:suggestedactions:))

# editMenuInteraction(\_:menuFor:suggestedActions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Provides the menu to use when the interaction begins or requires an update.

## Declaration

```swift
optional func editMenuInteraction(_ interaction: UIEditMenuInteraction, menuFor configuration: UIEditMenuConfiguration, suggestedActions: [UIMenuElement]) -> UIMenu?
```

## Parameters

- `interaction`: The interaction object triggering the menu.
- `configuration`: The object containing the configuration details for the menu.
- `suggestedActions`: The array of suggested actions UIKit gathers from the [UIResponder](../uiresponder.md) chain. You should include these actions in the menu you return.

<a id="return-value"></a>

## Return Value

Returns a menu describing the desired menu hierarchy. To present the default system menu, return `nil`. To avoid presenting a menu, return an empty menu.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the interaction begins or requires an update to the menu’s actions when calling [reloadVisibleMenu()](../uieditmenuinteraction/reloadvisiblemenu%28%29.md). The interaction displays the menu you provide. When not implemented, the default behavior is the same as returning a menu including the suggestedActions.

The following example returns a menu with an additional actions in a submenu.

```swift
func editMenuInteraction(_ interaction: UIEditMenuInteraction, menuFor configuration: UIEditMenuConfiguration, suggestedActions: [UIMenuElement]) -> UIMenu {
        let indentationMenu = UIMenu(title: "Indentation", image: UIImage(systemName: "list.bullet.indent"), children: [
            UIAction(title: "Increase", image: UIImage(systemName: "increase.indent")) { (action) in
                // Increase indentation action.
                print("increase indent")
            },
            UIAction(title: "Decrease", image: UIImage(systemName: "decrease.indent")) { (action) in
                // Decrease indentation action.
                print("decrease indent")
            }
        ])

        var actions = suggestedActions
        actions.append(indentationMenu)
        return UIMenu(children: actions)
    }
```

## See Also

### Customizing the Menu

- [editMenuInteraction(\_:targetRectFor:)](editmenuinteraction%28__targetrectfor_%29.md): Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.
- [editMenuInteraction(\_:willPresentMenuFor:animator:)](editmenuinteraction%28__willpresentmenufor_animator_%29.md): Informs the delegate when the interaction is about to present the menu.
- [editMenuInteraction(\_:willDismissMenuFor:animator:)](editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.
- [UIEditMenuInteractionAnimating](../uieditmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with menus.

# editMenuInteraction:menuForConfiguration:suggestedActions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Provides the menu to use when the interaction begins or requires an update.

## Declaration

```objectivec
- (UIMenu *) editMenuInteraction:(UIEditMenuInteraction *) interaction menuForConfiguration:(UIEditMenuConfiguration *) configuration suggestedActions:(NSArray<UIMenuElement *> *) suggestedActions;
```

## Parameters

- `interaction`: The interaction object triggering the menu.
- `configuration`: The object containing the configuration details for the menu.
- `suggestedActions`: The array of suggested actions UIKit gathers from the [UIResponder](../uiresponder.md) chain. You should include these actions in the menu you return.

<a id="return-value"></a>

## Return Value

Returns a menu describing the desired menu hierarchy. To present the default system menu, return `nil`. To avoid presenting a menu, return an empty menu.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the interaction begins or requires an update to the menu’s actions when calling [reloadVisibleMenu](../uieditmenuinteraction/reloadvisiblemenu%28%29.md). The interaction displays the menu you provide. When not implemented, the default behavior is the same as returning a menu including the suggestedActions.

The following example returns a menu with an additional actions in a submenu.

```swift
func editMenuInteraction(_ interaction: UIEditMenuInteraction, menuFor configuration: UIEditMenuConfiguration, suggestedActions: [UIMenuElement]) -> UIMenu {
        let indentationMenu = UIMenu(title: "Indentation", image: UIImage(systemName: "list.bullet.indent"), children: [
            UIAction(title: "Increase", image: UIImage(systemName: "increase.indent")) { (action) in
                // Increase indentation action.
                print("increase indent")
            },
            UIAction(title: "Decrease", image: UIImage(systemName: "decrease.indent")) { (action) in
                // Decrease indentation action.
                print("decrease indent")
            }
        ])

        var actions = suggestedActions
        actions.append(indentationMenu)
        return UIMenu(children: actions)
    }
```

## See Also

### Customizing the Menu

- [editMenuInteraction:targetRectForConfiguration:](editmenuinteraction%28__targetrectfor_%29.md): Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.
- [editMenuInteraction:willPresentMenuForConfiguration:animator:](editmenuinteraction%28__willpresentmenufor_animator_%29.md): Informs the delegate when the interaction is about to present the menu.
- [editMenuInteraction:willDismissMenuForConfiguration:animator:](editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.
- [UIEditMenuInteractionAnimating](../uieditmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with menus.
