> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/rootviewcontroller](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller)

# rootViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The root view controller for the window.

## Declaration

```swift
var rootViewController: UIViewController? { get set }
```

## Mentioned In

- [Managing content in your app’s windows](../managing-content-in-your-app-s-windows.md)

<a id="Discussion"></a>

## Discussion

The root view controller provides the content view of the window. Assigning a view controller to this property (either programmatically or using Interface Builder) installs the view controller’s view as the content view of the window. The new content view is configured to track the window size, changing as the window size changes. If the window has an existing view hierarchy, the old views are removed before the new ones are installed.

The default value of this property is `nil`.

## See Also

### Configuring the window

- [windowLevel](windowlevel.md): The position of the window in the z-axis.
- [UIWindow.Level](level.md): The positioning of windows relative to each other.
- [canResizeToFitContent](canresizetofitcontent.md): A Boolean value that indicates whether the window’s constraint-based content determines its size.
- [screen](screen.md): Deprecated. The screen to display the window on.

# rootViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The root view controller for the window.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIViewController * rootViewController;
```

## Mentioned In

- [Managing content in your app’s windows](../managing-content-in-your-app-s-windows.md)

<a id="Discussion"></a>

## Discussion

The root view controller provides the content view of the window. Assigning a view controller to this property (either programmatically or using Interface Builder) installs the view controller’s view as the content view of the window. The new content view is configured to track the window size, changing as the window size changes. If the window has an existing view hierarchy, the old views are removed before the new ones are installed.

The default value of this property is `nil`.

## See Also

### Configuring the window

- [windowLevel](windowlevel.md): The position of the window in the z-axis.
- [UIWindowLevel](level.md): The positioning of windows relative to each other.
- [canResizeToFitContent](canresizetofitcontent.md): A Boolean value that indicates whether the window’s constraint-based content determines its size.
- [screen](screen.md): Deprecated. The screen to display the window on.
