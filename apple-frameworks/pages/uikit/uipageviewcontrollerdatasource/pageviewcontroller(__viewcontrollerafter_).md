> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdatasource/pageviewcontroller(_:viewcontrollerafter:)](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdatasource/pageviewcontroller(_:viewcontrollerafter:))

# pageViewController(\_:viewControllerAfter:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the view controller after the given view controller.

## Declaration

```swift
func pageViewController(_ pageViewController: UIPageViewController, viewControllerAfter viewController: UIViewController) -> UIViewController?
```

## Parameters

- `pageViewController`: The page view controller
- `viewController`: The view controller that the user navigated away from.

<a id="return-value"></a>

## Return Value

The view controller after the given view controller, or `nil` to indicate that there is no next view controller.

## See Also

### Providing View Controllers

- [pageViewController(\_:viewControllerBefore:)](pageviewcontroller%28__viewcontrollerbefore_%29.md): Returns the view controller before the given view controller.

# pageViewController:viewControllerAfterViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the view controller after the given view controller.

## Declaration

```objectivec
- (UIViewController *) pageViewController:(UIPageViewController *) pageViewController viewControllerAfterViewController:(UIViewController *) viewController;
```

## Parameters

- `pageViewController`: The page view controller
- `viewController`: The view controller that the user navigated away from.

<a id="return-value"></a>

## Return Value

The view controller after the given view controller, or `nil` to indicate that there is no next view controller.

## See Also

### Providing View Controllers

- [pageViewController:viewControllerBeforeViewController:](pageviewcontroller%28__viewcontrollerbefore_%29.md): Returns the view controller before the given view controller.
