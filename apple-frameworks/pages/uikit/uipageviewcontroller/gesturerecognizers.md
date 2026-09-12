> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/gesturerecognizers](https://developer.apple.com/documentation/uikit/uipageviewcontroller/gesturerecognizers)

# gestureRecognizers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of [UIGestureRecognizer](../uigesturerecognizer.md) objects that are configured to handle user interaction.

## Declaration

```swift
var gestureRecognizers: [UIGestureRecognizer] { get }
```

<a id="Discussion"></a>

## Discussion

These gesture recognizers are initially attached to a view in the page view controller’s hierarchy. To change the region of the screen in which the user can navigate using gestures,  they can be placed on another view.

## See Also

### Providing Content

- [setViewControllers(\_:direction:animated:completion:)](setviewcontrollers%28__direction_animated_completion_%29.md): Sets the view controllers to be displayed.
- [UIPageViewController.NavigationDirection](navigationdirection.md): Directions for page-turn transitions.
- [viewControllers](viewcontrollers.md): The view controllers displayed by the page view controller.

# gestureRecognizers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of [UIGestureRecognizer](../uigesturerecognizer.md) objects that are configured to handle user interaction.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof UIGestureRecognizer *> * gestureRecognizers;
```

<a id="Discussion"></a>

## Discussion

These gesture recognizers are initially attached to a view in the page view controller’s hierarchy. To change the region of the screen in which the user can navigate using gestures,  they can be placed on another view.

## See Also

### Providing Content

- [setViewControllers:direction:animated:completion:](setviewcontrollers%28__direction_animated_completion_%29.md): Sets the view controllers to be displayed.
- [UIPageViewControllerNavigationDirection](navigationdirection.md): Directions for page-turn transitions.
- [viewControllers](viewcontrollers.md): The view controllers displayed by the page view controller.
