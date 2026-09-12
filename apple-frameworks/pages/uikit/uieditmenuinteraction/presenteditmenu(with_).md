> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteraction/presenteditmenu(with:)](https://developer.apple.com/documentation/uikit/uieditmenuinteraction/presenteditmenu(with:))

# presentEditMenu(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Presents an edit menu using the object you provide for configuration.

## Declaration

```swift
func presentEditMenu(with configuration: UIEditMenuConfiguration)
```

## Parameters

- `configuration`: The object containing the configuration details for the menu.

<a id="Discussion"></a>

## Discussion

You use this method to display the edit menu. The method calls [editMenuInteraction(\_:menuFor:suggestedActions:)](../uieditmenuinteractiondelegate/editmenuinteraction%28__menufor_suggestedactions_%29.md) on the interaction object’s delegate and updates the UI with the menu the delegate returns. This method dismisses any active menus before presenting the new menu.

The following example presents the menu from a gesture recognizer and provides the location of the gesture as the location for this interaction.

```swift
    @objc func didLongPress(_ recognizer: UIGestureRecognizer) {
        let location = recognizer.location(in: self.view)
        let configuration = UIEditMenuConfiguration(identifier: nil, sourcePoint: location)

        if let interaction = editMenuInteraction {
            // Presenting the edit menu interaction
            interaction.presentEditMenu(with: configuration)
        }
    }
```

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [reloadVisibleMenu()](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPosition(animated:)](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu()](dismissmenu%28%29.md): Dismiss the edit menu if present.
- [location(in:)](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.

# presentEditMenuWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Presents an edit menu using the object you provide for configuration.

## Declaration

```objectivec
- (void) presentEditMenuWithConfiguration:(UIEditMenuConfiguration *) configuration;
```

## Parameters

- `configuration`: The object containing the configuration details for the menu.

<a id="Discussion"></a>

## Discussion

You use this method to display the edit menu. The method calls [editMenuInteraction:menuForConfiguration:suggestedActions:](../uieditmenuinteractiondelegate/editmenuinteraction%28__menufor_suggestedactions_%29.md) on the interaction object’s delegate and updates the UI with the menu the delegate returns. This method dismisses any active menus before presenting the new menu.

The following example presents the menu from a gesture recognizer and provides the location of the gesture as the location for this interaction.

```swift
    @objc func didLongPress(_ recognizer: UIGestureRecognizer) {
        let location = recognizer.location(in: self.view)
        let configuration = UIEditMenuConfiguration(identifier: nil, sourcePoint: location)

        if let interaction = editMenuInteraction {
            // Presenting the edit menu interaction
            interaction.presentEditMenu(with: configuration)
        }
    }
```

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [reloadVisibleMenu](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPositionAnimated:](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu](dismissmenu%28%29.md): Dismiss the edit menu if present.
- [locationInView:](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.
