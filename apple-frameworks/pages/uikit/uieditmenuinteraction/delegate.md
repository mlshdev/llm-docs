> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteraction/delegate](https://developer.apple.com/documentation/uikit/uieditmenuinteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that customizes presentation of the menu and actions to display for an edit menu interaction.

## Declaration

```swift
weak var delegate: (any UIEditMenuInteractionDelegate)? { get }
```

## See Also

### Managing edit menu interactions

- [presentEditMenu(with:)](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu()](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPosition(animated:)](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu()](dismissmenu%28%29.md): Dismiss the edit menu if present.
- [location(in:)](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that customizes presentation of the menu and actions to display for an edit menu interaction.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UIEditMenuInteractionDelegate> delegate;
```

## See Also

### Managing edit menu interactions

- [presentEditMenuWithConfiguration:](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPositionAnimated:](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu](dismissmenu%28%29.md): Dismiss the edit menu if present.
- [locationInView:](location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.
