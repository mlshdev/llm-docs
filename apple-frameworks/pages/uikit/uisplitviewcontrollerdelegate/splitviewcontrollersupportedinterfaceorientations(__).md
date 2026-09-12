> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollersupportedinterfaceorientations(_:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollersupportedinterfaceorientations(_:))

# splitViewControllerSupportedInterfaceOrientations(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate to specify the interface orientations that the split view controller supports.

## Declaration

```swift
optional func splitViewControllerSupportedInterfaceOrientations(_ splitViewController: UISplitViewController) -> UIInterfaceOrientationMask
```

## Parameters

- `splitViewController`: The split view controller.

<a id="return-value"></a>

## Return Value

The orientations that you want the specified split view controller to support. The value you return can be one or more of the [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md) constants.

<a id="Discussion"></a>

## Discussion

The split view controller calls this method to obtain the orientations that it supports. You can use this method to alter the set of orientations typically supported by a split view controller. If you don’t implement this method, the split view controller supports all orientations on iPad and all but the [allButUpsideDown](../uiinterfaceorientationmask/allbutupsidedown.md) orientation on iPhone devices.

## See Also

### Related Documentation

- [supportedInterfaceOrientations](../uiviewcontroller/supportedinterfaceorientations.md): The interface orientations that the view controller supports.

### Specifying the interface orientations

- [splitViewControllerPreferredInterfaceOrientationForPresentation(\_:)](splitviewcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Asks the delegate for the orientation to use when presenting the split view controller.

# splitViewControllerSupportedInterfaceOrientations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate to specify the interface orientations that the split view controller supports.

## Declaration

```objectivec
- (UIInterfaceOrientationMask) splitViewControllerSupportedInterfaceOrientations:(UISplitViewController *) splitViewController;
```

## Parameters

- `splitViewController`: The split view controller.

<a id="return-value"></a>

## Return Value

The orientations that you want the specified split view controller to support. The value you return can be one or more of the [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md) constants.

<a id="Discussion"></a>

## Discussion

The split view controller calls this method to obtain the orientations that it supports. You can use this method to alter the set of orientations typically supported by a split view controller. If you don’t implement this method, the split view controller supports all orientations on iPad and all but the [UIInterfaceOrientationMaskAllButUpsideDown](../uiinterfaceorientationmask/allbutupsidedown.md) orientation on iPhone devices.

## See Also

### Related Documentation

- [supportedInterfaceOrientations](../uiviewcontroller/supportedinterfaceorientations.md): The interface orientations that the view controller supports.

### Specifying the interface orientations

- [splitViewControllerPreferredInterfaceOrientationForPresentation:](splitviewcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Asks the delegate for the orientation to use when presenting the split view controller.
