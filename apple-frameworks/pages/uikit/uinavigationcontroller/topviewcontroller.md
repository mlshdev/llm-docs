> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/topviewcontroller](https://developer.apple.com/documentation/uikit/uinavigationcontroller/topviewcontroller)

# topViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller at the top of the navigation stack.

## Declaration

```swift
var topViewController: UIViewController? { get }
```

## See Also

### Accessing items on the navigation stack

- [visibleViewController](visibleviewcontroller.md): The view controller associated with the currently visible view in the navigation interface.
- [viewControllers](viewcontrollers.md): The view controllers currently on the navigation stack.
- [setViewControllers(\_:animated:)](setviewcontrollers%28__animated_%29.md): Replaces the view controllers currently managed by the navigation controller with the specified items.

# topViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller at the top of the navigation stack.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIViewController * topViewController;
```

## See Also

### Accessing items on the navigation stack

- [visibleViewController](visibleviewcontroller.md): The view controller associated with the currently visible view in the navigation interface.
- [viewControllers](viewcontrollers.md): The view controllers currently on the navigation stack.
- [setViewControllers:animated:](setviewcontrollers%28__animated_%29.md): Replaces the view controllers currently managed by the navigation controller with the specified items.
