> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontrollersupportedinterfaceorientations(_:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontrollersupportedinterfaceorientations(_:))

# tabBarControllerSupportedInterfaceOrientations(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

Called to allow the delegate to provide the complete set of supported interface orientations for the tab bar controller.

## Declaration

```swift
optional func tabBarControllerSupportedInterfaceOrientations(_ tabBarController: UITabBarController) -> UIInterfaceOrientationMask
```

## Parameters

- `tabBarController`: The tab bar controller that is asking the delegate object for the supported interface orientations.

<a id="return-value"></a>

## Return Value

One of the [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md) constants that represents the set of interface orientations supported by the tab bar controller.

## See Also

### Related Documentation

- [supportedInterfaceOrientations](../uiviewcontroller/supportedinterfaceorientations.md): The interface orientations that the view controller supports.

### Overriding view rotation settings

- [tabBarControllerPreferredInterfaceOrientationForPresentation(\_:)](tabbarcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Called to allow the delegate to provide the preferred orientation for presentation of the tab bar controller.

# tabBarControllerSupportedInterfaceOrientations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

Called to allow the delegate to provide the complete set of supported interface orientations for the tab bar controller.

## Declaration

```objectivec
- (UIInterfaceOrientationMask) tabBarControllerSupportedInterfaceOrientations:(UITabBarController *) tabBarController;
```

## Parameters

- `tabBarController`: The tab bar controller that is asking the delegate object for the supported interface orientations.

<a id="return-value"></a>

## Return Value

One of the [UIInterfaceOrientationMask](../uiinterfaceorientationmask.md) constants that represents the set of interface orientations supported by the tab bar controller.

## See Also

### Related Documentation

- [supportedInterfaceOrientations](../uiviewcontroller/supportedinterfaceorientations.md): The interface orientations that the view controller supports.

### Overriding view rotation settings

- [tabBarControllerPreferredInterfaceOrientationForPresentation:](tabbarcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Called to allow the delegate to provide the preferred orientation for presentation of the tab bar controller.
