> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/visibleviewcontroller](https://developer.apple.com/documentation/uikit/uinavigationcontroller/visibleviewcontroller)

# visibleViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller associated with the currently visible view in the navigation interface.

## Declaration

```swift
var visibleViewController: UIViewController? { get }
```

<a id="Discussion"></a>

## Discussion

The currently visible view can belong either to the view controller at the top of the navigation stack or to a view controller that was presented modally on top of the navigation controller itself.

## See Also

### Accessing items on the navigation stack

- [topViewController](topviewcontroller.md): The view controller at the top of the navigation stack.
- [viewControllers](viewcontrollers.md): The view controllers currently on the navigation stack.
- [setViewControllers(\_:animated:)](setviewcontrollers%28__animated_%29.md): Replaces the view controllers currently managed by the navigation controller with the specified items.

# visibleViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller associated with the currently visible view in the navigation interface.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIViewController * visibleViewController;
```

<a id="Discussion"></a>

## Discussion

The currently visible view can belong either to the view controller at the top of the navigation stack or to a view controller that was presented modally on top of the navigation controller itself.

## See Also

### Accessing items on the navigation stack

- [topViewController](topviewcontroller.md): The view controller at the top of the navigation stack.
- [viewControllers](viewcontrollers.md): The view controllers currently on the navigation stack.
- [setViewControllers:animated:](setviewcontrollers%28__animated_%29.md): Replaces the view controllers currently managed by the navigation controller with the specified items.
