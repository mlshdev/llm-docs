> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontrollerdelegate/navigationcontroller(_:animationcontrollerfor:from:to:)](https://developer.apple.com/documentation/uikit/uinavigationcontrollerdelegate/navigationcontroller(_:animationcontrollerfor:from:to:))

# navigationController(\_:animationControllerFor:from:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Allows the delegate to return a noninteractive animator object for use during view controller transitions.

## Declaration

```swift
optional func navigationController(_ navigationController: UINavigationController, animationControllerFor operation: UINavigationController.Operation, from fromVC: UIViewController, to toVC: UIViewController) -> (any UIViewControllerAnimatedTransitioning)?
```

## Parameters

- `navigationController`: The navigation controller whose navigation stack is changing.
- `operation`: The type of transition operation that is occurring. For a list of possible values, see the [UINavigationController.Operation](../uinavigationcontroller/operation.md) constants.
- `fromVC`: The currently visible view controller.
- `toVC`: The view controller that should be visible at the end of the transition.

<a id="return-value"></a>

## Return Value

The animator object responsible for managing the transition animations, or `nil` if you want to use the standard navigation controller transitions. The object you return must conform to the [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) protocol.

<a id="Discussion"></a>

## Discussion

Implement this delegate method when you want to provide a custom animated transition between view controllers as they are added to or removed from the navigation stack. The object you return should be capable of configuring and performing noninteractive animations for the specified view controllers for the specified type of operation over a fixed period of time.

If you want to allow the user to perform interactive transitions, you must *also* implement the [navigationController(\_:interactionControllerFor:)](navigationcontroller%28__interactioncontrollerfor_%29.md) method.

## See Also

### Supporting custom transition animations

- [navigationController(\_:interactionControllerFor:)](navigationcontroller%28__interactioncontrollerfor_%29.md): Allows the delegate to return an interactive animator object for use during view controller transitions.
- [navigationControllerPreferredInterfaceOrientationForPresentation(\_:)](navigationcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the navigation controller, as determined by the delegate.
- [navigationControllerSupportedInterfaceOrientations(\_:)](navigationcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the navigation controller, as determined by the delegate.

# navigationController:animationControllerForOperation:fromViewController:toViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Allows the delegate to return a noninteractive animator object for use during view controller transitions.

## Declaration

```objectivec
- (id<UIViewControllerAnimatedTransitioning>) navigationController:(UINavigationController *) navigationController animationControllerForOperation:(UINavigationControllerOperation) operation fromViewController:(UIViewController *) fromVC toViewController:(UIViewController *) toVC;
```

## Parameters

- `navigationController`: The navigation controller whose navigation stack is changing.
- `operation`: The type of transition operation that is occurring. For a list of possible values, see the [UINavigationControllerOperation](../uinavigationcontroller/operation.md) constants.
- `fromVC`: The currently visible view controller.
- `toVC`: The view controller that should be visible at the end of the transition.

<a id="return-value"></a>

## Return Value

The animator object responsible for managing the transition animations, or `nil` if you want to use the standard navigation controller transitions. The object you return must conform to the [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) protocol.

<a id="Discussion"></a>

## Discussion

Implement this delegate method when you want to provide a custom animated transition between view controllers as they are added to or removed from the navigation stack. The object you return should be capable of configuring and performing noninteractive animations for the specified view controllers for the specified type of operation over a fixed period of time.

If you want to allow the user to perform interactive transitions, you must *also* implement the [navigationController:interactionControllerForAnimationController:](navigationcontroller%28__interactioncontrollerfor_%29.md) method.

## See Also

### Supporting custom transition animations

- [navigationController:interactionControllerForAnimationController:](navigationcontroller%28__interactioncontrollerfor_%29.md): Allows the delegate to return an interactive animator object for use during view controller transitions.
- [navigationControllerPreferredInterfaceOrientationForPresentation:](navigationcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the navigation controller, as determined by the delegate.
- [navigationControllerSupportedInterfaceOrientations:](navigationcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the navigation controller, as determined by the delegate.
