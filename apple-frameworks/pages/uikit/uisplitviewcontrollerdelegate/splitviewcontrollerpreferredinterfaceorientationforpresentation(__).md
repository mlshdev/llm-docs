> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollerpreferredinterfaceorientationforpresentation(_:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollerpreferredinterfaceorientationforpresentation(_:))

# splitViewControllerPreferredInterfaceOrientationForPresentation(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the orientation to use when presenting the split view controller.

## Declaration

```swift
optional func splitViewControllerPreferredInterfaceOrientationForPresentation(_ splitViewController: UISplitViewController) -> UIInterfaceOrientation
```

## Parameters

- `splitViewController`: The split view controller that is about to be presented onscreen.

<a id="return-value"></a>

## Return Value

The orientation to use when first displaying the split view controller.

<a id="Discussion"></a>

## Discussion

UIKit calls this method to determine which orientation your app prefers when presenting the specified split view controller. You can use this method to specify the orientation that you think is best when first displaying the split view controller. The orientation you specify can be different from the current device orientation. After presentation, the system may rotate the split view controller as appropriate to one of its other supported interface orientations.

If you do not implement this method, the system presents the view controller using the current orientation of the status bar.

## See Also

### Related Documentation

- [preferredInterfaceOrientationForPresentation](../uiviewcontroller/preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.

### Specifying the interface orientations

- [splitViewControllerSupportedInterfaceOrientations(\_:)](splitviewcontrollersupportedinterfaceorientations%28__%29.md): Asks the delegate to specify the interface orientations that the split view controller supports.

# splitViewControllerPreferredInterfaceOrientationForPresentation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the orientation to use when presenting the split view controller.

## Declaration

```objectivec
- (UIInterfaceOrientation) splitViewControllerPreferredInterfaceOrientationForPresentation:(UISplitViewController *) splitViewController;
```

## Parameters

- `splitViewController`: The split view controller that is about to be presented onscreen.

<a id="return-value"></a>

## Return Value

The orientation to use when first displaying the split view controller.

<a id="Discussion"></a>

## Discussion

UIKit calls this method to determine which orientation your app prefers when presenting the specified split view controller. You can use this method to specify the orientation that you think is best when first displaying the split view controller. The orientation you specify can be different from the current device orientation. After presentation, the system may rotate the split view controller as appropriate to one of its other supported interface orientations.

If you do not implement this method, the system presents the view controller using the current orientation of the status bar.

## See Also

### Related Documentation

- [preferredInterfaceOrientationForPresentation](../uiviewcontroller/preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.

### Specifying the interface orientations

- [splitViewControllerSupportedInterfaceOrientations:](splitviewcontrollersupportedinterfaceorientations%28__%29.md): Asks the delegate to specify the interface orientations that the split view controller supports.
