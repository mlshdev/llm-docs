> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/setviewcontrollers(_:direction:animated:completion:)](https://developer.apple.com/documentation/uikit/uipageviewcontroller/setviewcontrollers(_:direction:animated:completion:))

# setViewControllers(\_:direction:animated:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the view controllers to be displayed.

## Declaration

```swift
func setViewControllers(_ viewControllers: [UIViewController]?, direction: UIPageViewController.NavigationDirection, animated: Bool, completion: ((Bool) -> Void)? = nil)
```

## Parameters

- `viewControllers`: The view controller or view controllers to be displayed.
- `direction`: The navigation direction.
- `animated`: A Boolean value that indicates whether the transition is to be animated.
- `completion`: A block to be called when the page-turn animation completes.

  The block takes the following parameters:

  - ***finished***: [true](https://developer.apple.com/documentation/swift/true) if the animation finished; [false](https://developer.apple.com/documentation/swift/false) if it was skipped.

<a id="Discussion"></a>

## Discussion

The view controllers passed to this method are those that will be visible after the animation has completed. Use a data source to provide additional view controllers to which users navigate.

If the transition style is [UIPageViewController.TransitionStyle.pageCurl](transitionstyle-swift.enum/pagecurl.md), the view controllers to pass in the `viewControllers` parameter depends on the spine location and the value of the [isDoubleSided](isdoublesided.md) property:

| Spine location | Double sided | What to pass |
| --- | --- | --- |
| [UIPageViewController.SpineLocation.mid](spinelocation-swift.enum/mid.md) | [true](https://developer.apple.com/documentation/swift/true) | Pass the page to be displayed on the left and the page to be displayed on the right. |
| [UIPageViewController.SpineLocation.min](spinelocation-swift.enum/min.md) or [UIPageViewController.SpineLocation.max](spinelocation-swift.enum/max.md) | [true](https://developer.apple.com/documentation/swift/true) | Pass the front of the page to be displayed and the back of the previously-displayed page. The back is used for the page turning animation. |
| [UIPageViewController.SpineLocation.min](spinelocation-swift.enum/min.md) or [UIPageViewController.SpineLocation.max](spinelocation-swift.enum/max.md) | [false](https://developer.apple.com/documentation/swift/false) | Pass the front of the page to be displayed. |

## See Also

### Providing Content

- [UIPageViewController.NavigationDirection](navigationdirection.md): Directions for page-turn transitions.
- [viewControllers](viewcontrollers.md): The view controllers displayed by the page view controller.
- [gestureRecognizers](gesturerecognizers.md): An array of [UIGestureRecognizer](../uigesturerecognizer.md) objects that are configured to handle user interaction.

# setViewControllers:direction:animated:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the view controllers to be displayed.

## Declaration

```objectivec
- (void) setViewControllers:(NSArray<UIViewController *> *) viewControllers direction:(UIPageViewControllerNavigationDirection) direction animated:(BOOL) animated completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `viewControllers`: The view controller or view controllers to be displayed.
- `direction`: The navigation direction.
- `animated`: A Boolean value that indicates whether the transition is to be animated.
- `completion`: A block to be called when the page-turn animation completes.

  The block takes the following parameters:

  - ***finished***: [true](https://developer.apple.com/documentation/swift/true) if the animation finished; [false](https://developer.apple.com/documentation/swift/false) if it was skipped.

<a id="Discussion"></a>

## Discussion

The view controllers passed to this method are those that will be visible after the animation has completed. Use a data source to provide additional view controllers to which users navigate.

If the transition style is [UIPageViewControllerTransitionStylePageCurl](transitionstyle-swift.enum/pagecurl.md), the view controllers to pass in the `viewControllers` parameter depends on the spine location and the value of the [doubleSided](isdoublesided.md) property:

| Spine location | Double sided | What to pass |
| --- | --- | --- |
| [UIPageViewControllerSpineLocationMid](spinelocation-swift.enum/mid.md) | [true](https://developer.apple.com/documentation/swift/true) | Pass the page to be displayed on the left and the page to be displayed on the right. |
| [UIPageViewControllerSpineLocationMin](spinelocation-swift.enum/min.md) or [UIPageViewControllerSpineLocationMax](spinelocation-swift.enum/max.md) | [true](https://developer.apple.com/documentation/swift/true) | Pass the front of the page to be displayed and the back of the previously-displayed page. The back is used for the page turning animation. |
| [UIPageViewControllerSpineLocationMin](spinelocation-swift.enum/min.md) or [UIPageViewControllerSpineLocationMax](spinelocation-swift.enum/max.md) | [false](https://developer.apple.com/documentation/swift/false) | Pass the front of the page to be displayed. |

## See Also

### Providing Content

- [UIPageViewControllerNavigationDirection](navigationdirection.md): Directions for page-turn transitions.
- [viewControllers](viewcontrollers.md): The view controllers displayed by the page view controller.
- [gestureRecognizers](gesturerecognizers.md): An array of [UIGestureRecognizer](../uigesturerecognizer.md) objects that are configured to handle user interaction.
