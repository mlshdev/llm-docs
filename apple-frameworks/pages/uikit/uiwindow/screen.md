> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/screen](https://developer.apple.com/documentation/uikit/uiwindow/screen)

# screen (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS

The screen to display the window on.

> Use [windowScene](windowscene.md) instead.

## Declaration

```swift
var screen: UIScreen { get set }
```

<a id="Discussion"></a>

## Discussion

By default, UIKit sets this property to the primary device screen. If additional screens are attached to the device, you can assign a different screen object to display the window on that screen. A window is always displayed on only one screen.

Moving windows from screen to screen is a relatively expensive operation and isn’t optimal in performance-sensitive code. Instead, change the screen before displaying the window the first time. Changing the screen of a window that hasn’t been ordered onto the screen has no significant additional cost.

## See Also

### Configuring the window

- [rootViewController](rootviewcontroller.md): The root view controller for the window.
- [windowLevel](windowlevel.md): The position of the window in the z-axis.
- [UIWindow.Level](level.md): The positioning of windows relative to each other.
- [canResizeToFitContent](canresizetofitcontent.md): A Boolean value that indicates whether the window’s constraint-based content determines its size.

# screen (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS

The screen to display the window on.

> Use [windowScene](windowscene.md) instead.

## Declaration

```objectivec
@property (nonatomic, strong) UIScreen * screen;
```

<a id="Discussion"></a>

## Discussion

By default, UIKit sets this property to the primary device screen. If additional screens are attached to the device, you can assign a different screen object to display the window on that screen. A window is always displayed on only one screen.

Moving windows from screen to screen is a relatively expensive operation and isn’t optimal in performance-sensitive code. Instead, change the screen before displaying the window the first time. Changing the screen of a window that hasn’t been ordered onto the screen has no significant additional cost.

## See Also

### Configuring the window

- [rootViewController](rootviewcontroller.md): The root view controller for the window.
- [windowLevel](windowlevel.md): The position of the window in the z-axis.
- [UIWindowLevel](level.md): The positioning of windows relative to each other.
- [canResizeToFitContent](canresizetofitcontent.md): A Boolean value that indicates whether the window’s constraint-based content determines its size.
