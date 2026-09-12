> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/canresizetofitcontent](https://developer.apple.com/documentation/uikit/uiwindow/canresizetofitcontent)

# canResizeToFitContent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the window’s constraint-based content determines its size.

## Declaration

```swift
var canResizeToFitContent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the window to maintain a fixed size. Setting this property to [true](https://developer.apple.com/documentation/swift/true) allows the system to perform constraints-based window sizing, which updates the window’s size to match the space needed by its content. Window-size changes occur only when the app runs on macOS.

## See Also

### Configuring the window

- [rootViewController](rootviewcontroller.md): The root view controller for the window.
- [windowLevel](windowlevel.md): The position of the window in the z-axis.
- [UIWindow.Level](level.md): The positioning of windows relative to each other.
- [screen](screen.md): Deprecated. The screen to display the window on.

# canResizeToFitContent (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the window’s constraint-based content determines its size.

## Declaration

```objectivec
@property (nonatomic, setter=setCanResizeToFitContent:) BOOL canResizeToFitContent;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the window to maintain a fixed size. Setting this property to [true](https://developer.apple.com/documentation/swift/true) allows the system to perform constraints-based window sizing, which updates the window’s size to match the space needed by its content. Window-size changes occur only when the app runs on macOS.

## See Also

### Configuring the window

- [rootViewController](rootviewcontroller.md): The root view controller for the window.
- [windowLevel](windowlevel.md): The position of the window in the z-axis.
- [UIWindowLevel](level.md): The positioning of windows relative to each other.
- [screen](screen.md): Deprecated. The screen to display the window on.
