> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdelegate/pageviewcontrollersupportedinterfaceorientations(_:)](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdelegate/pageviewcontrollersupportedinterfaceorientations(_:))

# pageViewControllerSupportedInterfaceOrientations(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the complete set of supported interface orientations for the page view controller, as determined by the delegate.

## Declaration

```swift
optional func pageViewControllerSupportedInterfaceOrientations(_ pageViewController: UIPageViewController) -> UIInterfaceOrientationMask
```

## Parameters

- `pageViewController`: The page view controller.

<a id="return-value"></a>

## Return Value

One of the [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md) constants that represents the set of   interface orientations supported by the page view controller.

## See Also

### Related Documentation

- [supportedInterfaceOrientations](../uiviewcontroller/supportedinterfaceorientations.md): The interface orientations that the view controller supports.

### Overriding View Rotation Settings

- [pageViewControllerPreferredInterfaceOrientationForPresentation(\_:)](pageviewcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the page view controller, as determined by the delegate.

# pageViewControllerSupportedInterfaceOrientations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the complete set of supported interface orientations for the page view controller, as determined by the delegate.

## Declaration

```objectivec
- (UIInterfaceOrientationMask) pageViewControllerSupportedInterfaceOrientations:(UIPageViewController *) pageViewController;
```

## Parameters

- `pageViewController`: The page view controller.

<a id="return-value"></a>

## Return Value

One of the [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md) constants that represents the set of   interface orientations supported by the page view controller.

## See Also

### Related Documentation

- [supportedInterfaceOrientations](../uiviewcontroller/supportedinterfaceorientations.md): The interface orientations that the view controller supports.

### Overriding View Rotation Settings

- [pageViewControllerPreferredInterfaceOrientationForPresentation:](pageviewcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the page view controller, as determined by the delegate.
