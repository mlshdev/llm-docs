> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/focuseditem](https://developer.apple.com/documentation/uikit/uiscreen/focuseditem)

# focusedItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 15.0)

The item that is currently focused.

> Use [focusedItem](../uifocussystem/focuseditem.md) in [focusSystem](../uiwindowscene/focussystem.md) instead.

## Declaration

```swift
weak var focusedItem: (any UIFocusItem)? { get }
```

<a id="Discussion"></a>

## Discussion

If this item is not a view, the [focusedView](focusedview.md) property is set to the view that contains the item.

## See Also

### Deprecated properties

- [main](main.md): Deprecated. Returns the screen object representing the device’s screen.
- [screens](screens.md): Deprecated. Returns an array containing all of the screens attached to the device.
- [applicationFrame](applicationframe.md): Deprecated. The frame rectangle for the app window, measured in points.
- [focusedView](focusedview.md): Deprecated. The view that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.

# focusedItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 15.0)

The item that is currently focused.

> Use [focusedItem](../uifocussystem/focuseditem.md) in [focusSystem](../uiwindowscene/focussystem.md) instead.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UIFocusItem> focusedItem;
```

<a id="Discussion"></a>

## Discussion

If this item is not a view, the [focusedView](focusedview.md) property is set to the view that contains the item.

## See Also

### Deprecated properties

- [mainScreen](main.md): Deprecated. Returns the screen object representing the device’s screen.
- [screens](screens.md): Deprecated. Returns an array containing all of the screens attached to the device.
- [applicationFrame](applicationframe.md): Deprecated. The frame rectangle for the app window, measured in points.
- [focusedView](focusedview.md): Deprecated. The view that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.
