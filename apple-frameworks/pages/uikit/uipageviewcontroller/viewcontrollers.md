> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/viewcontrollers](https://developer.apple.com/documentation/uikit/uipageviewcontroller/viewcontrollers)

# viewControllers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controllers displayed by the page view controller.

## Declaration

```swift
var viewControllers: [UIViewController]? { get }
```

## See Also

### Providing Content

- [setViewControllers(\_:direction:animated:completion:)](setviewcontrollers%28__direction_animated_completion_%29.md): Sets the view controllers to be displayed.
- [UIPageViewController.NavigationDirection](navigationdirection.md): Directions for page-turn transitions.
- [gestureRecognizers](gesturerecognizers.md): An array of [UIGestureRecognizer](../uigesturerecognizer.md) objects that are configured to handle user interaction.

# viewControllers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controllers displayed by the page view controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<__kindof UIViewController *> * viewControllers;
```

## See Also

### Providing Content

- [setViewControllers:direction:animated:completion:](setviewcontrollers%28__direction_animated_completion_%29.md): Sets the view controllers to be displayed.
- [UIPageViewControllerNavigationDirection](navigationdirection.md): Directions for page-turn transitions.
- [gestureRecognizers](gesturerecognizers.md): An array of [UIGestureRecognizer](../uigesturerecognizer.md) objects that are configured to handle user interaction.
