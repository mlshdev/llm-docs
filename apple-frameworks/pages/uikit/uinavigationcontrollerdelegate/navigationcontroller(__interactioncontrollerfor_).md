> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontrollerdelegate/navigationcontroller(_:interactioncontrollerfor:)](https://developer.apple.com/documentation/uikit/uinavigationcontrollerdelegate/navigationcontroller(_:interactioncontrollerfor:))

# navigationController(\_:interactionControllerFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Allows the delegate to return an interactive animator object for use during view controller transitions.

## Declaration

```swift
optional func navigationController(_ navigationController: UINavigationController, interactionControllerFor animationController: any UIViewControllerAnimatedTransitioning) -> (any UIViewControllerInteractiveTransitioning)?
```

## Parameters

- `navigationController`: The navigation controller whose navigation stack is changing.
- `animationController`: The noninteractive animator object provided by the delegate’s [navigationController(\_:animationControllerFor:from:to:)](navigationcontroller%28__animationcontrollerfor_from_to_%29.md) method.

<a id="return-value"></a>

## Return Value

The animator object responsible for managing the transition animations, or `nil` if you want to use the standard navigation controller transitions. The object you return must conform to the [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) protocol.

<a id="Discussion"></a>

## Discussion

Implement this delegate method when you want to provide a custom, interactive transition between view controllers as they are added to or removed from the navigation stack. The object you return should configure the interactivity aspects of the transition and should work with the object in the `animationController` parameter to start the animations.

## See Also

### Supporting custom transition animations

- [navigationController(\_:animationControllerFor:from:to:)](navigationcontroller%28__animationcontrollerfor_from_to_%29.md): Allows the delegate to return a noninteractive animator object for use during view controller transitions.
- [navigationControllerPreferredInterfaceOrientationForPresentation(\_:)](navigationcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the navigation controller, as determined by the delegate.
- [navigationControllerSupportedInterfaceOrientations(\_:)](navigationcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the navigation controller, as determined by the delegate.

# navigationController:interactionControllerForAnimationController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Allows the delegate to return an interactive animator object for use during view controller transitions.

## Declaration

```objectivec
- (id<UIViewControllerInteractiveTransitioning>) navigationController:(UINavigationController *) navigationController interactionControllerForAnimationController:(id<UIViewControllerAnimatedTransitioning>) animationController;
```

## Parameters

- `navigationController`: The navigation controller whose navigation stack is changing.
- `animationController`: The noninteractive animator object provided by the delegate’s [navigationController:animationControllerForOperation:fromViewController:toViewController:](navigationcontroller%28__animationcontrollerfor_from_to_%29.md) method.

<a id="return-value"></a>

## Return Value

The animator object responsible for managing the transition animations, or `nil` if you want to use the standard navigation controller transitions. The object you return must conform to the [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) protocol.

<a id="Discussion"></a>

## Discussion

Implement this delegate method when you want to provide a custom, interactive transition between view controllers as they are added to or removed from the navigation stack. The object you return should configure the interactivity aspects of the transition and should work with the object in the `animationController` parameter to start the animations.

## See Also

### Supporting custom transition animations

- [navigationController:animationControllerForOperation:fromViewController:toViewController:](navigationcontroller%28__animationcontrollerfor_from_to_%29.md): Allows the delegate to return a noninteractive animator object for use during view controller transitions.
- [navigationControllerPreferredInterfaceOrientationForPresentation:](navigationcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the navigation controller, as determined by the delegate.
- [navigationControllerSupportedInterfaceOrientations:](navigationcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the navigation controller, as determined by the delegate.
