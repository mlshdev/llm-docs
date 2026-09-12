> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdelegate/pageviewcontroller(_:willtransitionto:)](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdelegate/pageviewcontroller(_:willtransitionto:))

# pageViewController(\_:willTransitionTo:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called before a gesture-driven transition begins.

## Declaration

```swift
optional func pageViewController(_ pageViewController: UIPageViewController, willTransitionTo pendingViewControllers: [UIViewController])
```

## Parameters

- `pageViewController`: The page view controller.
- `pendingViewControllers`: The view controllers that are being transitioned to.

<a id="Discussion"></a>

## Discussion

If the user aborts the navigation gesture, the transition doesn’t complete and the view controllers stay the same.

## See Also

### Responding to Page View Controller Events

- [pageViewController(\_:didFinishAnimating:previousViewControllers:transitionCompleted:)](pageviewcontroller%28__didfinishanimating_previousviewcontrollers_transitioncompleted_%29.md): Called after a gesture-driven transition completes.
- [pageViewController(\_:spineLocationFor:)](pageviewcontroller%28__spinelocationfor_%29.md): Returns the spine location for the given orientation.

# pageViewController:willTransitionToViewControllers: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called before a gesture-driven transition begins.

## Declaration

```objectivec
- (void) pageViewController:(UIPageViewController *) pageViewController willTransitionToViewControllers:(NSArray<UIViewController *> *) pendingViewControllers;
```

## Parameters

- `pageViewController`: The page view controller.
- `pendingViewControllers`: The view controllers that are being transitioned to.

<a id="Discussion"></a>

## Discussion

If the user aborts the navigation gesture, the transition doesn’t complete and the view controllers stay the same.

## See Also

### Responding to Page View Controller Events

- [pageViewController:didFinishAnimating:previousViewControllers:transitionCompleted:](pageviewcontroller%28__didfinishanimating_previousviewcontrollers_transitioncompleted_%29.md): Called after a gesture-driven transition completes.
- [pageViewController:spineLocationForInterfaceOrientation:](pageviewcontroller%28__spinelocationfor_%29.md): Returns the spine location for the given orientation.
