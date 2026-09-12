> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdelegate/pageviewcontroller(_:spinelocationfor:)](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdelegate/pageviewcontroller(_:spinelocationfor:))

# pageViewController(\_:spineLocationFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the spine location for the given orientation.

## Declaration

```swift
optional func pageViewController(_ pageViewController: UIPageViewController, spineLocationFor orientation: UIInterfaceOrientation) -> UIPageViewController.SpineLocation
```

## Parameters

- `pageViewController`: The page view controller
- `orientation`: The new orientation.

<a id="return-value"></a>

## Return Value

The spine location.

<a id="Discussion"></a>

## Discussion

Use this method to change the spine location when the device orientation changes, as well as setting new view controllers and changing the double-sided state.

This method is called only if the transition style is [UIPageViewController.TransitionStyle.pageCurl](../uipageviewcontroller/transitionstyle-swift.enum/pagecurl.md).

## See Also

### Responding to Page View Controller Events

- [pageViewController(\_:willTransitionTo:)](pageviewcontroller%28__willtransitionto_%29.md): Called before a gesture-driven transition begins.
- [pageViewController(\_:didFinishAnimating:previousViewControllers:transitionCompleted:)](pageviewcontroller%28__didfinishanimating_previousviewcontrollers_transitioncompleted_%29.md): Called after a gesture-driven transition completes.

# pageViewController:spineLocationForInterfaceOrientation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Returns the spine location for the given orientation.

## Declaration

```objectivec
- (UIPageViewControllerSpineLocation) pageViewController:(UIPageViewController *) pageViewController spineLocationForInterfaceOrientation:(UIInterfaceOrientation) orientation;
```

## Parameters

- `pageViewController`: The page view controller
- `orientation`: The new orientation.

<a id="return-value"></a>

## Return Value

The spine location.

<a id="Discussion"></a>

## Discussion

Use this method to change the spine location when the device orientation changes, as well as setting new view controllers and changing the double-sided state.

This method is called only if the transition style is [UIPageViewControllerTransitionStylePageCurl](../uipageviewcontroller/transitionstyle-swift.enum/pagecurl.md).

## See Also

### Responding to Page View Controller Events

- [pageViewController:willTransitionToViewControllers:](pageviewcontroller%28__willtransitionto_%29.md): Called before a gesture-driven transition begins.
- [pageViewController:didFinishAnimating:previousViewControllers:transitionCompleted:](pageviewcontroller%28__didfinishanimating_previousviewcontrollers_transitioncompleted_%29.md): Called after a gesture-driven transition completes.
