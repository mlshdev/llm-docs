> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteraction/location(in:)](https://developer.apple.com/documentation/uikit/uieditmenuinteraction/location(in:))

# location(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns the location of the user interaction in the specified view’s coordinate system.

## Declaration

```swift
func location(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: The view containing the target coordinate system. To return a point in the window’s coordinate system, specify `nil`.

<a id="return-value"></a>

## Return Value

The location of the interaction in the coordinate system of view.

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenu(with:)](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu()](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPosition(animated:)](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu()](dismissmenu%28%29.md): Dismiss the edit menu if present.

# locationInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns the location of the user interaction in the specified view’s coordinate system.

## Declaration

```objectivec
- (CGPoint) locationInView:(UIView *) view;
```

## Parameters

- `view`: The view containing the target coordinate system. To return a point in the window’s coordinate system, specify `nil`.

<a id="return-value"></a>

## Return Value

The location of the interaction in the coordinate system of view.

## See Also

### Managing edit menu interactions

- [delegate](delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenuWithConfiguration:](presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu](reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPositionAnimated:](updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu](dismissmenu%28%29.md): Dismiss the edit menu if present.
