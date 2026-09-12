> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteraction/reloadvisiblemenu()](https://developer.apple.com/documentation/uikit/uieditmenuinteraction/reloadvisiblemenu())

# reloadVisibleMenu() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the actions an edit menu displays.

## Declaration

```swift
func reloadVisibleMenu()
```

<a id="Discussion"></a>

## Discussion

You use this method to update the actions the menu displays. The method calls [editMenuInteraction(\_:menuFor:suggestedActions:)](../uieditmenuinteractiondelegate/editmenuinteraction%28__menufor_suggestedactions_%29.md) and updates the UI with the menu the delegate returns. The method has no effect if no menu is present.

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenu(with:)](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [updateVisibleMenuPosition(animated:)](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu()](dismissmenu%28%29.md): Dismiss the edit menu if present.
- [location(in:)](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.

# reloadVisibleMenu (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the actions an edit menu displays.

## Declaration

```objectivec
- (void) reloadVisibleMenu;
```

<a id="Discussion"></a>

## Discussion

You use this method to update the actions the menu displays. The method calls [editMenuInteraction:menuForConfiguration:suggestedActions:](../uieditmenuinteractiondelegate/editmenuinteraction%28__menufor_suggestedactions_%29.md) and updates the UI with the menu the delegate returns. The method has no effect if no menu is present.

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenuWithConfiguration:](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [updateVisibleMenuPositionAnimated:](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu](dismissmenu%28%29.md): Dismiss the edit menu if present.
- [locationInView:](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.
