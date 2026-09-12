> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/focusedview](https://developer.apple.com/documentation/uikit/uiscreen/focusedview)

# focusedView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 15.0) · iPadOS 9.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 15.0)

The view that is currently focused.

> Use [focusedItem](../uifocussystem/focuseditem.md) in [focusSystem](../uiwindowscene/focussystem.md) instead.

## Declaration

```swift
weak var focusedView: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

When a view has focus, this property contains that view. When the focus is on an item that is not a view, the view in this property is the one that contains the item. This property is `nil` when nothing is currently focused on the screen.

## See Also

### Deprecated properties

- [main](main.md): Deprecated. Returns the screen object representing the device’s screen.
- [screens](screens.md): Deprecated. Returns an array containing all of the screens attached to the device.
- [applicationFrame](applicationframe.md): Deprecated. The frame rectangle for the app window, measured in points.
- [focusedItem](focuseditem.md): Deprecated. The item that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.

# focusedView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 15.0) · iPadOS 9.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 15.0)

The view that is currently focused.

> Use [focusedItem](../uifocussystem/focuseditem.md) in [focusSystem](../uiwindowscene/focussystem.md) instead.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) UIView * focusedView;
```

<a id="Discussion"></a>

## Discussion

When a view has focus, this property contains that view. When the focus is on an item that is not a view, the view in this property is the one that contains the item. This property is `nil` when nothing is currently focused on the screen.

## See Also

### Deprecated properties

- [mainScreen](main.md): Deprecated. Returns the screen object representing the device’s screen.
- [screens](screens.md): Deprecated. Returns an array containing all of the screens attached to the device.
- [applicationFrame](applicationframe.md): Deprecated. The frame rectangle for the app window, measured in points.
- [focusedItem](focuseditem.md): Deprecated. The item that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.
