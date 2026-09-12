> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/main](https://developer.apple.com/documentation/uikit/uiscreen/main)

# main (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 26.0) · iPadOS 2.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0)

Returns the screen object representing the device’s screen.

> Use [screen](../uiwindowscene/screen.md) instead.

## Declaration

```swift
class var main: UIScreen { get }
```

<a id="return-value"></a>

## Return Value

The screen object for the device.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol. Use a [UIScreen](../uiscreen.md) instance found through context instead. For example, reference the screen that displays a view through the [screen](../uiwindowscene/screen.md) property on the window scene managing the window containing the view.

## See Also

### Deprecated properties

- [screens](screens.md): Deprecated. Returns an array containing all of the screens attached to the device.
- [applicationFrame](applicationframe.md): Deprecated. The frame rectangle for the app window, measured in points.
- [focusedItem](focuseditem.md): Deprecated. The item that is currently focused.
- [focusedView](focusedview.md): Deprecated. The view that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.

# mainScreen (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 26.0) · iPadOS 2.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0)

Returns the screen object representing the device’s screen.

> Use [screen](../uiwindowscene/screen.md) instead.

## Declaration

```objectivec
@property (class, nonatomic, readonly) UIScreen * mainScreen;
```

<a id="return-value"></a>

## Return Value

The screen object for the device.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol. Use a [UIScreen](../uiscreen.md) instance found through context instead. For example, reference the screen that displays a view through the [screen](../uiwindowscene/screen.md) property on the window scene managing the window containing the view.

## See Also

### Deprecated properties

- [screens](screens.md): Deprecated. Returns an array containing all of the screens attached to the device.
- [applicationFrame](applicationframe.md): Deprecated. The frame rectangle for the app window, measured in points.
- [focusedItem](focuseditem.md): Deprecated. The item that is currently focused.
- [focusedView](focusedview.md): Deprecated. The view that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.
