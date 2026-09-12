> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdelegate/pageviewcontrollerpreferredinterfaceorientationforpresentation(_:)](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdelegate/pageviewcontrollerpreferredinterfaceorientationforpresentation(_:))

# pageViewControllerPreferredInterfaceOrientationForPresentation(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the preferred orientation for presentation of the page view controller, as determined by the delegate.

## Declaration

```swift
optional func pageViewControllerPreferredInterfaceOrientationForPresentation(_ pageViewController: UIPageViewController) -> UIInterfaceOrientation
```

## Parameters

- `pageViewController`: The page view controller.

<a id="return-value"></a>

## Return Value

The preferred orientation for presenting the page view controller.

## See Also

### Related Documentation

- [preferredInterfaceOrientationForPresentation](../uiviewcontroller/preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.

### Overriding View Rotation Settings

- [pageViewControllerSupportedInterfaceOrientations(\_:)](pageviewcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the page view controller, as determined by the delegate.

# pageViewControllerPreferredInterfaceOrientationForPresentation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the preferred orientation for presentation of the page view controller, as determined by the delegate.

## Declaration

```objectivec
- (UIInterfaceOrientation) pageViewControllerPreferredInterfaceOrientationForPresentation:(UIPageViewController *) pageViewController;
```

## Parameters

- `pageViewController`: The page view controller.

<a id="return-value"></a>

## Return Value

The preferred orientation for presenting the page view controller.

## See Also

### Related Documentation

- [preferredInterfaceOrientationForPresentation](../uiviewcontroller/preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.

### Overriding View Rotation Settings

- [pageViewControllerSupportedInterfaceOrientations:](pageviewcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the page view controller, as determined by the delegate.
