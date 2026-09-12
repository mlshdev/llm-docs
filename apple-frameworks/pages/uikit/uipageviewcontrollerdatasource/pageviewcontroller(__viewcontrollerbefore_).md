> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdatasource/pageviewcontroller(_:viewcontrollerbefore:)](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdatasource/pageviewcontroller(_:viewcontrollerbefore:))

# pageViewController(\_:viewControllerBefore:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the view controller before the given view controller.

## Declaration

```swift
func pageViewController(_ pageViewController: UIPageViewController, viewControllerBefore viewController: UIViewController) -> UIViewController?
```

## Parameters

- `pageViewController`: The page view controller
- `viewController`: The view controller that the user navigated away from.

<a id="return-value"></a>

## Return Value

The view controller before the given view controller, or `nil` to indicate that there is no previous view controller.

## See Also

### Providing View Controllers

- [pageViewController(\_:viewControllerAfter:)](pageviewcontroller%28__viewcontrollerafter_%29.md): Returns the view controller after the given view controller.

# pageViewController:viewControllerBeforeViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the view controller before the given view controller.

## Declaration

```objectivec
- (UIViewController *) pageViewController:(UIPageViewController *) pageViewController viewControllerBeforeViewController:(UIViewController *) viewController;
```

## Parameters

- `pageViewController`: The page view controller
- `viewController`: The view controller that the user navigated away from.

<a id="return-value"></a>

## Return Value

The view controller before the given view controller, or `nil` to indicate that there is no previous view controller.

## See Also

### Providing View Controllers

- [pageViewController:viewControllerAfterViewController:](pageviewcontroller%28__viewcontrollerafter_%29.md): Returns the view controller after the given view controller.
