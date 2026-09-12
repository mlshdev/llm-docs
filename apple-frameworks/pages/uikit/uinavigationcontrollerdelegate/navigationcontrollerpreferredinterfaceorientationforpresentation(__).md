> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontrollerdelegate/navigationcontrollerpreferredinterfaceorientationforpresentation(_:)](https://developer.apple.com/documentation/uikit/uinavigationcontrollerdelegate/navigationcontrollerpreferredinterfaceorientationforpresentation(_:))

# navigationControllerPreferredInterfaceOrientationForPresentation(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the preferred orientation for presentation of the navigation controller, as determined by the delegate.

## Declaration

```swift
optional func navigationControllerPreferredInterfaceOrientationForPresentation(_ navigationController: UINavigationController) -> UIInterfaceOrientation
```

## Parameters

- `navigationController`: The navigation controller

<a id="return-value"></a>

## Return Value

The preferred orientation for presenting the navigation controller.

## See Also

### Supporting custom transition animations

- [navigationController(\_:animationControllerFor:from:to:)](navigationcontroller%28__animationcontrollerfor_from_to_%29.md): Allows the delegate to return a noninteractive animator object for use during view controller transitions.
- [navigationController(\_:interactionControllerFor:)](navigationcontroller%28__interactioncontrollerfor_%29.md): Allows the delegate to return an interactive animator object for use during view controller transitions.
- [navigationControllerSupportedInterfaceOrientations(\_:)](navigationcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the navigation controller, as determined by the delegate.

# navigationControllerPreferredInterfaceOrientationForPresentation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the preferred orientation for presentation of the navigation controller, as determined by the delegate.

## Declaration

```objectivec
- (UIInterfaceOrientation) navigationControllerPreferredInterfaceOrientationForPresentation:(UINavigationController *) navigationController;
```

## Parameters

- `navigationController`: The navigation controller

<a id="return-value"></a>

## Return Value

The preferred orientation for presenting the navigation controller.

## See Also

### Supporting custom transition animations

- [navigationController:animationControllerForOperation:fromViewController:toViewController:](navigationcontroller%28__animationcontrollerfor_from_to_%29.md): Allows the delegate to return a noninteractive animator object for use during view controller transitions.
- [navigationController:interactionControllerForAnimationController:](navigationcontroller%28__interactioncontrollerfor_%29.md): Allows the delegate to return an interactive animator object for use during view controller transitions.
- [navigationControllerSupportedInterfaceOrientations:](navigationcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the navigation controller, as determined by the delegate.
