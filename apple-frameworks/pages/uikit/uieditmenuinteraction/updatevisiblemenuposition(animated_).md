> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteraction/updatevisiblemenuposition(animated:)](https://developer.apple.com/documentation/uikit/uieditmenuinteraction/updatevisiblemenuposition(animated:))

# updateVisibleMenuPosition(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the position of the currently visible menu with an option to animate the action.

## Declaration

```swift
func updateVisibleMenuPosition(animated: Bool)
```

## Parameters

- `animated`: `YES` to animate the transition to the new position; `NO` to make the transition immediate.

<a id="Discussion"></a>

## Discussion

You use this method to update the location of the menu. This method calls [editMenuInteraction(\_:targetRectFor:)](../uieditmenuinteractiondelegate/editmenuinteraction%28__targetrectfor_%29.md) and updates the position of the menu using the position the delegate returns. The method has no effect if no menu is present.

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenu(with:)](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu()](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [dismissMenu()](dismissmenu%28%29.md): Dismiss the edit menu if present.
- [location(in:)](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.

# updateVisibleMenuPositionAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the position of the currently visible menu with an option to animate the action.

## Declaration

```objectivec
- (void) updateVisibleMenuPositionAnimated:(BOOL) animated;
```

## Parameters

- `animated`: `YES` to animate the transition to the new position; `NO` to make the transition immediate.

<a id="Discussion"></a>

## Discussion

You use this method to update the location of the menu. This method calls [editMenuInteraction:targetRectForConfiguration:](../uieditmenuinteractiondelegate/editmenuinteraction%28__targetrectfor_%29.md) and updates the position of the menu using the position the delegate returns. The method has no effect if no menu is present.

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenuWithConfiguration:](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [dismissMenu](dismissmenu%28%29.md): Dismiss the edit menu if present.
- [locationInView:](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.
