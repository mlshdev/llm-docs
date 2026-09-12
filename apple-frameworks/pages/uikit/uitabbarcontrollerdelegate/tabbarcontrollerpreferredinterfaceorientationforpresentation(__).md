> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontrollerpreferredinterfaceorientationforpresentation(_:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontrollerpreferredinterfaceorientationforpresentation(_:))

# tabBarControllerPreferredInterfaceOrientationForPresentation(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

Called to allow the delegate to provide the preferred orientation for presentation of the tab bar controller.

## Declaration

```swift
optional func tabBarControllerPreferredInterfaceOrientationForPresentation(_ tabBarController: UITabBarController) -> UIInterfaceOrientation
```

## Parameters

- `tabBarController`: The tab bar controller that is asking the delegate object for the preferred presentation orientation.

<a id="return-value"></a>

## Return Value

The preferred orientation for presenting the tab bar controller.

## See Also

### Related Documentation

- [preferredInterfaceOrientationForPresentation](../uiviewcontroller/preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.

### Overriding view rotation settings

- [tabBarControllerSupportedInterfaceOrientations(\_:)](tabbarcontrollersupportedinterfaceorientations%28__%29.md): Called to allow the delegate to provide the complete set of supported interface orientations for the tab bar controller.

# tabBarControllerPreferredInterfaceOrientationForPresentation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

Called to allow the delegate to provide the preferred orientation for presentation of the tab bar controller.

## Declaration

```objectivec
- (UIInterfaceOrientation) tabBarControllerPreferredInterfaceOrientationForPresentation:(UITabBarController *) tabBarController;
```

## Parameters

- `tabBarController`: The tab bar controller that is asking the delegate object for the preferred presentation orientation.

<a id="return-value"></a>

## Return Value

The preferred orientation for presenting the tab bar controller.

## See Also

### Related Documentation

- [preferredInterfaceOrientationForPresentation](../uiviewcontroller/preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.

### Overriding view rotation settings

- [tabBarControllerSupportedInterfaceOrientations:](tabbarcontrollersupportedinterfaceorientations%28__%29.md): Called to allow the delegate to provide the complete set of supported interface orientations for the tab bar controller.
