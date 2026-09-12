> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteraction/dismissmenu()](https://developer.apple.com/documentation/uikit/uieditmenuinteraction/dismissmenu())

# dismissMenu() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Dismiss the edit menu if present.

## Declaration

```swift
func dismissMenu()
```

<a id="Discussion"></a>

## Discussion

You use this method to dismiss the menu, for example, from an observer callback in your app.

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenu(with:)](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu()](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPosition(animated:)](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [location(in:)](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.

# dismissMenu (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Dismiss the edit menu if present.

## Declaration

```objectivec
- (void) dismissMenu;
```

<a id="Discussion"></a>

## Discussion

You use this method to dismiss the menu, for example, from an observer callback in your app.

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenuWithConfiguration:](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPositionAnimated:](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [locationInView:](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.
