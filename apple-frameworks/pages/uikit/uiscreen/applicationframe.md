> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/applicationframe](https://developer.apple.com/documentation/uikit/uiscreen/applicationframe)

# applicationFrame (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The frame rectangle for the app window, measured in points.

## Declaration

```swift
var applicationFrame: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the bounds rectangle used by the app window, which may be different than the screen bounds themselves. This rectangle is specified in the current coordinate space, which takes into account any interface rotations in effect for the device. Therefore, the value of this property may change when the device rotates between portrait and landscape orientations.

## See Also

### Deprecated properties

- [main](main.md): Deprecated. Returns the screen object representing the device’s screen.
- [screens](screens.md): Deprecated. Returns an array containing all of the screens attached to the device.
- [focusedItem](focuseditem.md): Deprecated. The item that is currently focused.
- [focusedView](focusedview.md): Deprecated. The view that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.

# applicationFrame (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The frame rectangle for the app window, measured in points.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect applicationFrame;
```

<a id="Discussion"></a>

## Discussion

This property contains the bounds rectangle used by the app window, which may be different than the screen bounds themselves. This rectangle is specified in the current coordinate space, which takes into account any interface rotations in effect for the device. Therefore, the value of this property may change when the device rotates between portrait and landscape orientations.

## See Also

### Deprecated properties

- [mainScreen](main.md): Deprecated. Returns the screen object representing the device’s screen.
- [screens](screens.md): Deprecated. Returns an array containing all of the screens attached to the device.
- [focusedItem](focuseditem.md): Deprecated. The item that is currently focused.
- [focusedView](focusedview.md): Deprecated. The view that is currently focused.
- [supportsFocus](supportsfocus.md): Deprecated. A Boolean value that indicates whether the screen supports focus-based inputs.
