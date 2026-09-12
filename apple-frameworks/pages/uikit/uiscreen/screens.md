> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/screens](https://developer.apple.com/documentation/uikit/uiscreen/screens)

# screens (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS  (deprecated in 16.0)

Returns an array containing all of the screens attached to the device.

> Use [openSessions](../uiapplication/opensessions.md) on the shared app object to find scenes for other screens.

## Declaration

```swift
class var screens: [UIScreen] { get }
```

<a id="return-value"></a>

## Return Value

An array of `UIScreen` objects.

<a id="Discussion"></a>

## Discussion

The returned array includes the main screen plus any additional screens connected to the device. The main screen is always at index `0`.

Not all devices support external displays. iPhone and iPod touch devices with Retina displays and iPads support external displays. Older devices, such as the iPhone 3GS, don’t support external displays.

## See Also

### Deprecated properties

- [main](main.md): Deprecated. Returns the screen object representing the device’s screen.
- [applicationFrame](applicationframe.md): Deprecated. The frame rectangle for the app window, measured in points.
- [focusedItem](focuseditem.md): Deprecated. The item that is currently focused.
- [focusedView](focusedview.md): Deprecated. The view that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.

# screens (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS  (deprecated in 16.0)

Returns an array containing all of the screens attached to the device.

> Use [openSessions](../uiapplication/opensessions.md) on the shared app object to find scenes for other screens.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSArray<UIScreen *> * screens;
```

<a id="return-value"></a>

## Return Value

An array of `UIScreen` objects.

<a id="Discussion"></a>

## Discussion

The returned array includes the main screen plus any additional screens connected to the device. The main screen is always at index `0`.

Not all devices support external displays. iPhone and iPod touch devices with Retina displays and iPads support external displays. Older devices, such as the iPhone 3GS, don’t support external displays.

## See Also

### Deprecated properties

- [mainScreen](main.md): Deprecated. Returns the screen object representing the device’s screen.
- [applicationFrame](applicationframe.md): Deprecated. The frame rectangle for the app window, measured in points.
- [focusedItem](focuseditem.md): Deprecated. The item that is currently focused.
- [focusedView](focusedview.md): Deprecated. The view that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.
